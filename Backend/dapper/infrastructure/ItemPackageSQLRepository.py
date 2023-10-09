import mysql.connector
from typing import Optional, List
from domain.ItemPackage import ItemPackage
from domain.repository.ItemPackageRepository import ItemPackageRepository

class ItemPackageNotFound(Exception):
    pass

class ItemPackageSQLRepository(ItemPackageRepository):
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor()

    def get(self, package_id: int) -> ItemPackage:
        self.cursor.execute("SELECT * FROM item_package WHERE item_package_id = %s", (package_id,))
        result = self.cursor.fetchone()
        if result:
            return ItemPackage(*result)
        else:
            raise ItemPackageNotFound()

    def add(self, entry: ItemPackage) -> None:
        self.cursor.execute("INSERT INTO item_package VALUES (%s, %s, %s)", 
                            (entry.order_order_id, entry.stylist_bio, entry.item_package_id))
        self.conn.commit()

    def get_all(self, search: Optional[str] = None) -> List[ItemPackage]:
        query = "SELECT * FROM item_package"
        if search:
            query += " WHERE item_package_id LIKE %s"
            self.cursor.execute(query, ('%' + search + '%',))
        else:
            self.cursor.execute(query)
        results = self.cursor.fetchall()
        return [ItemPackage(*result) for result in results]

    def __del__(self):
        self.cursor.close()
        self.conn.close()
