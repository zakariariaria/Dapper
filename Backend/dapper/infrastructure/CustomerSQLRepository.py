import mysql.connector
from typing import List, Optional

class Customer:
    def __init__(self, customerId: int, addressId: Optional[int] = None):
        self.customerId = customerId
        self.addressId = addressId

class CustomerSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_id(self, customerId: int) -> Customer:
        self.cursor.execute("SELECT * FROM customer WHERE customerId = %s", (customerId,))
        result = self.cursor.fetchone()
        if result:
            return Customer(**result)
        else:
            raise ValueError(f"Customer with id {customerId} not found")

    def add(self, customerId: int, addressId: Optional[int] = None) -> None:
        self.cursor.execute("INSERT INTO customer (customerId, addressId) VALUES (%s, %s)", 
                            (customerId, addressId))
        self.conn.commit()

    def get_all(self) -> List[Customer]:
        self.cursor.execute("SELECT * FROM customer")
        results = self.cursor.fetchall()
        return [Customer(**result) for result in results]

    def update(self, customerId: int, addressId: Optional[int] = None) -> None:
        self.cursor.execute("UPDATE customer SET addressId = %s WHERE customerId = %s", 
                            (addressId, customerId))
        self.conn.commit()

    def delete(self, customerId: int) -> None:
        self.cursor.execute("DELETE FROM customer WHERE customerId = %s", (customerId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
