import mysql.connector
from typing import Optional, List
from domain.Order import Order
from domain.repository.OrderRepository import OrderRepository

class OrderNotFound(Exception):
    pass

class OrderSQLRepository(OrderRepository):
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor()

    def get(self, order_id: int) -> Order:
        self.cursor.execute("SELECT * FROM `order` WHERE order_id = %s", (order_id,))
        result = self.cursor.fetchone()
        if result:
            return Order(*result)
        else:
            raise OrderNotFound()

    def add(self, entry: Order) -> None:
        self.cursor.execute("INSERT INTO `order` (customer_subscription_price, item_package_item_package_id, bill_issue_date, order_id, order_date, delivery_date, status) VALUES (%s, %s, %s, %s, %s, %s, %s)", 
                            (entry.customer_subscription_price, entry.item_package_item_package_id, entry.bill_issue_date, entry.order_id, entry.order_date, entry.delivery_date, entry.status))
        self.conn.commit()

    def get_all(self, search: Optional[str] = None) -> List[Order]:
        query = "SELECT * FROM `order`"
        if search:
            query += " WHERE order_id LIKE %s OR status LIKE %s"
            self.cursor.execute(query, ('%' + search + '%', '%' + search + '%'))
        else:
            self.cursor.execute(query)
        results = self.cursor.fetchall()
        return [Order(*result) for result in results]

    def __del__(self):
        self.cursor.close()
        self.conn.close()
