import mysql.connector
from typing import List

class Subscription:
    def __init__(self, customerId: int, price: float, type: str, startDate: str, endDate: str):
        self.customerId = customerId
        self.price = price
        self.type = type
        self.startDate = startDate
        self.endDate = endDate

class SubscriptionSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_customer_id(self, customerId: int) -> Subscription:
        self.cursor.execute("SELECT * FROM subscription WHERE customerId = %s", (customerId,))
        result = self.cursor.fetchone()
        if result:
            return Subscription(**result)
        else:
            raise ValueError(f"Subscription for customer id {customerId} not found")

    def add_or_update(self, customerId: int, price: float, type: str, startDate: str, endDate: str) -> None:
        self.cursor.execute("REPLACE INTO subscription (customerId, price, type, startDate, endDate) VALUES (%s, %s, %s, %s, %s)", 
                            (customerId, price, type, startDate, endDate))
        self.conn.commit()

    def delete(self, customerId: int) -> None:
        self.cursor.execute("DELETE FROM subscription WHERE customerId = %s", (customerId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
