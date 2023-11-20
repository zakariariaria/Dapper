import mysql.connector
from typing import List

class Preference:
    def __init__(self, customerId: int, color: str, size: str, style: str):
        self.customerId = customerId
        self.color = color
        self.size = size
        self.style = style

class PreferenceSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_customer_id(self, customerId: int) -> Preference:
        self.cursor.execute("SELECT * FROM preference WHERE customerId = %s", (customerId,))
        result = self.cursor.fetchone()
        if result:
            return Preference(**result)
        else:
            raise ValueError(f"Preference for customer id {customerId} not found")

    def add_or_update(self, customerId: int, color: str, size: str, style: str) -> None:
        self.cursor.execute("REPLACE INTO preference (customerId, color, size, style) VALUES (%s, %s, %s, %s)", 
                            (customerId, color, size, style))
        self.conn.commit()

    def delete(self, customerId: int) -> None:
        self.cursor.execute("DELETE FROM preference WHERE customerId = %s", (customerId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
