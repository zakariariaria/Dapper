import mysql.connector
from typing import List

class Bill:
    def __init__(self, billId, orderId, issueDate, dueDate, amount):
        self.billId = billId
        self.orderId = orderId
        self.issueDate = issueDate
        self.dueDate = dueDate
        self.amount = amount

class BillSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_id(self, billId: int) -> Bill:
        self.cursor.execute("SELECT * FROM bill WHERE billId = %s", (billId,))
        result = self.cursor.fetchone()
        if result:
            return Bill(**result)
        else:
            raise ValueError(f"Bill with id {billId} not found")

    def add(self, orderId: int, issueDate: str, dueDate: str, amount: float) -> None:
        self.cursor.execute("INSERT INTO bill (orderId, issueDate, dueDate, amount) VALUES (%s, %s, %s, %s)", 
                            (orderId, issueDate, dueDate, amount))
        self.conn.commit()

    def get_all(self) -> List[Bill]:
        self.cursor.execute("SELECT * FROM bill")
        results = self.cursor.fetchall()
        return [Bill(**result) for result in results]

    def update(self, billId: int, **kwargs) -> None:
        columns = ', '.join(f"{k} = %s" for k in kwargs)
        values = list(kwargs.values())
        values.append(billId)
        self.cursor.execute(f"UPDATE bill SET {columns} WHERE billId = %s", values)
        self.conn.commit()

    def delete(self, billId: int) -> None:
        self.cursor.execute("DELETE FROM bill WHERE billId = %s", (billId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
