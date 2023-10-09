import mysql.connector
from typing import Optional, List
from domain.Bill import Bill
from domain.repository.BillRepository import BillRepository

class BillNotFound(Exception):
    pass

class BillSQLRepository(BillRepository):
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor()

    def get(self, bill_id: int) -> Bill:
        self.cursor.execute("SELECT * FROM bill WHERE issue_date = %s", (bill_id,))
        result = self.cursor.fetchone()
        if result:
            return Bill(*result)
        else:
            raise BillNotFound()

    def add(self, entry: Bill) -> None:
        self.cursor.execute("INSERT INTO bill VALUES (%s, %s, %s, %s)", 
                            (entry.issue_date, entry.order_order_id, entry.due_date, entry.sum))
        self.conn.commit()

    def get_all(self, search: Optional[str] = None) -> List[Bill]:
        query = "SELECT * FROM bill"
        if search:
            query += " WHERE issue_date LIKE %s"
            self.cursor.execute(query, ('%' + search + '%',))
        else:
            self.cursor.execute(query)
        results = self.cursor.fetchall()
        return [Bill(*result) for result in results]

    def __del__(self):
        self.cursor.close()
        self.conn.close()
