import mysql.connector
from typing import List

class Address:
    def __init__(self, addressId, street, city, province, postalCode, country):
        self.addressId = addressId
        self.street = street
        self.city = city
        self.province = province
        self.postalCode = postalCode
        self.country = country

class AddressNotFound(Exception):
    pass

class AddressSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor()

    def get_by_id(self, addressId: int) -> Address:
        self.cursor.execute("SELECT * FROM address WHERE addressId = %s", (addressId,))
        result = self.cursor.fetchone()
        if result:
            return Address(*result)
        else:
            raise AddressNotFound(f"Address with id {addressId} not found")

    def add(self, street: str, city: str, province: str, postalCode: str, country: str) -> None:
        self.cursor.execute("INSERT INTO address (street, city, province, postalCode, country) VALUES (%s, %s, %s, %s, %s)", 
                            (street, city, province, postalCode, country))
        self.conn.commit()

    def get_all(self) -> List[Address]:
        self.cursor.execute("SELECT * FROM address")
        results = self.cursor.fetchall()
        return [Address(*result) for result in results]

    def __del__(self):
        self.cursor.close()
        self.conn.close()
