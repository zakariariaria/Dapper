import mysql.connector
from typing import List

class PaymentInformation:
    def __init__(self, paymentId: int, creditCardNumber: str, nameOnCard: str, expirationDate: str, addressId: int):
        self.paymentId = paymentId
        self.creditCardNumber = creditCardNumber
        self.nameOnCard = nameOnCard
        self.expirationDate = expirationDate
        self.addressId = addressId

class PaymentInformationSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_id(self, paymentId: int) -> PaymentInformation:
        self.cursor.execute("SELECT * FROM paymentinformation WHERE paymentId = %s", (paymentId,))
        result = self.cursor.fetchone()
        if result:
            return PaymentInformation(**result)
        else:
            raise ValueError(f"PaymentInformation with id {paymentId} not found")

    def add(self, creditCardNumber: str, nameOnCard: str, expirationDate: str, addressId: int) -> None:
        self.cursor.execute("INSERT INTO paymentinformation (creditCardNumber, nameOnCard, expirationDate, addressId) VALUES (%s, %s, %s, %s)", 
                            (creditCardNumber, nameOnCard, expirationDate, addressId))
        self.conn.commit()

    def get_all(self) -> List[PaymentInformation]:
        self.cursor.execute("SELECT * FROM paymentinformation")
        results = self.cursor.fetchall()
        return [PaymentInformation(**result) for result in results]

    def update(self, paymentId: int, **kwargs) -> None:
        columns = ', '.join(f"{k} = %s" for k in kwargs)
        values = list(kwargs.values())
        values.append(paymentId)
        self.cursor.execute(f"UPDATE paymentinformation SET {columns} WHERE paymentId = %s", values)
        self.conn.commit()

    def delete(self, paymentId: int) -> None:
        self.cursor.execute("DELETE FROM paymentinformation WHERE paymentId = %s", (paymentId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
