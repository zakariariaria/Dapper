import mysql.connector
from typing import List

class Item:
    def __init__(self, itemId: int, name: str, price: float, seasons: str, brand: str, imageURL: str, colorScheme: str):
        self.itemId = itemId
        self.name = name
        self.price = price
        self.seasons = seasons
        self.brand = brand
        self.imageURL = imageURL
        self.colorScheme = colorScheme

class ItemSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_id(self, itemId: int) -> Item:
        self.cursor.execute("SELECT * FROM item WHERE itemId = %s", (itemId,))
        result = self.cursor.fetchone()
        if result:
            return Item(**result)
        else:
            raise ValueError(f"Item with id {itemId} not found")

    def add(self, name: str, price: float, seasons: str, brand: str, imageURL: str, colorScheme: str) -> None:
        self.cursor.execute("INSERT INTO item (name, price, seasons, brand, imageURL, colorScheme) VALUES (%s, %s, %s, %s, %s, %s)", 
                            (name, price, seasons, brand, imageURL, colorScheme))
        self.conn.commit()

    def get_all(self) -> List[Item]:
        self.cursor.execute("SELECT * FROM item")
        results = self.cursor.fetchall()
        return [Item(**result) for result in results]

    def update(self, itemId: int, **kwargs) -> None:
        columns = ', '.join(f"{k} = %s" for k in kwargs)
        values = list(kwargs.values())
        values.append(itemId)
        self.cursor.execute(f"UPDATE item SET {columns} WHERE itemId = %s", values)
        self.conn.commit()

    def delete(self, itemId: int) -> None:
        self.cursor.execute("DELETE FROM item WHERE itemId = %s", (itemId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
