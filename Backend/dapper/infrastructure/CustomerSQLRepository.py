import mysql.connector
from typing import Optional, List
from domain.Customer import Customer
from domain.repository.CustomerRepository import CustomerRepository

class CustomerNotFound(Exception):
    pass

class CustomerSQLRepository(CustomerRepository):
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor()

    def get(self, customer_id: int) -> Customer:
        self.cursor.execute("SELECT * FROM customer WHERE subscription_price = %s", (customer_id,))
        result = self.cursor.fetchone()
        if result:
            return Customer(*result)
        else:
            raise CustomerNotFound()

    def add(self, entry: Customer) -> None:
        self.cursor.execute("INSERT INTO customer VALUES (%s, %s, %s)", 
                            (entry.subscription_price, entry.preference_size, entry.user_name))
        self.conn.commit()

    def get_all(self, search: Optional[str] = None) -> List[Customer]:
        query = "SELECT * FROM customer"
        if search:
            query += " WHERE subscription_price LIKE %s"
            self.cursor.execute(query, ('%' + search + '%',))
        else:
            self.cursor.execute(query)
        results = self.cursor.fetchall()
        return [Customer(*result) for result in results]

    def __del__(self):
        self.cursor.close()
        self.conn.close()
