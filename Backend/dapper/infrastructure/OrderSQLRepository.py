import mysql.connector
from typing import List

class Order:
    def __init__(self, orderId: int, customerId: int, orderDate: str, deliveryDate: str, status: str):
        self.orderId = orderId
        self.customerId = customerId
        self.orderDate = orderDate
        self.deliveryDate = deliveryDate
        self.status = status

class OrderSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_id(self, orderId: int) -> Order:
        self.cursor.execute("SELECT * FROM `order` WHERE orderId = %s", (orderId,))
        result = self.cursor.fetchone()
        if result:
            return Order(**result)
        else:
            raise ValueError(f"Order with id {orderId} not found")

    def add(self, customerId: int, orderDate: str, deliveryDate: str, status: str) -> None:
        self.cursor.execute("INSERT INTO `order` (customerId, orderDate, deliveryDate, status) VALUES (%s, %s, %s, %s)", 
                            (customerId, orderDate, deliveryDate, status))
        self.conn.commit()

    def get_all(self) -> List[Order]:
        self.cursor.execute("SELECT * FROM `order`")
        results = self.cursor.fetchall()
        return [Order(**result) for result in results]

    def update(self, orderId: int, **kwargs) -> None:
        columns = ', '.join(f"{k} = %s" for k in kwargs)
        values = list(kwargs.values())
        values.append(orderId)
        self.cursor.execute(f"UPDATE `order` SET {columns} WHERE orderId = %s", values)
        self.conn.commit()

    def delete(self, orderId: int) -> None:
        self.cursor.execute("DELETE FROM `order` WHERE orderId = %s", (orderId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
