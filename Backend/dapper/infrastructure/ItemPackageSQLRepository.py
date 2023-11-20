import mysql.connector
from typing import List

class ItemPackage:
    def __init__(self, itemPackageId: int, orderId: int, quantity: int, itemDescription: str, stylistId: int, itemId: int):
        self.itemPackageId = itemPackageId
        self.orderId = orderId
        self.quantity = quantity
        self.itemDescription = itemDescription
        self.stylistId = stylistId
        self.itemId = itemId

class ItemPackageSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_id(self, itemPackageId: int) -> ItemPackage:
        self.cursor.execute("SELECT * FROM itempackage WHERE itemPackageId = %s", (itemPackageId,))
        result = self.cursor.fetchone()
        if result:
            return ItemPackage(**result)
        else:
            raise ValueError(f"ItemPackage with id {itemPackageId} not found")

    def add(self, orderId: int, quantity: int, itemDescription: str, stylistId: int, itemId: int) -> None:
        self.cursor.execute("INSERT INTO itempackage (orderId, quantity, itemDescription, stylistId, itemId) VALUES (%s, %s, %s, %s, %s)", 
                            (orderId, quantity, itemDescription, stylistId, itemId))
        self.conn.commit()

    def get_all(self) -> List[ItemPackage]:
        self.cursor.execute("SELECT * FROM itempackage")
        results = self.cursor.fetchall()
        return [ItemPackage(**result) for result in results]

    def update(self, itemPackageId: int, **kwargs) -> None:
        columns = ', '.join(f"{k} = %s" for k in kwargs)
        values = list(kwargs.values())
        values.append(itemPackageId)
        self.cursor.execute(f"UPDATE itempackage SET {columns} WHERE itemPackageId = %s", values)
        self.conn.commit()

    def delete(self, itemPackageId: int) -> None:
        self.cursor.execute("DELETE FROM itempackage WHERE itemPackageId = %s", (itemPackageId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
