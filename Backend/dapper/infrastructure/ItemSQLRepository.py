import mysql.connector
from typing import Optional, List
from domain.Item import Item
from domain.repository.ItemRepository import ItemRepository

class ItemNotFound(Exception):
    pass

class ItemSQLRepository(ItemRepository):
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor()

    def get(self, item_id: int) -> Item:
        self.cursor.execute("SELECT * FROM item WHERE item_id = %s", (item_id,))
        result = self.cursor.fetchone()
        if result:
            return Item(*result)
        else:
            raise ItemNotFound()

    def add(self, entry: Item) -> None:
        self.cursor.execute("INSERT INTO item (size, price, color_scheme, brand, item_id, image_url) VALUES (%s, %s, %s, %s, %s, %s)", 
                            (entry.size, entry.price, entry.color_scheme, entry.brand, entry.item_id, entry.image_url))
        self.conn.commit()

    def get_all(self, search: Optional[str] = None) -> List[Item]:
        query = "SELECT * FROM item"
        if search:
            query += " WHERE item_id LIKE %s OR size LIKE %s OR brand LIKE %s"
            self.cursor.execute(query, ('%' + search + '%', '%' + search + '%', '%' + search + '%'))
        else:
            self.cursor.execute(query)
        results = self.cursor.fetchall()
        return [Item(*result) for result in results]

    def __del__(self):
        self.cursor.close()
        self.conn.close()
