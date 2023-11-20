import mysql.connector
from typing import List

class User:
    def __init__(self, userId: int, name: str, emailAddress: str, password: str):
        self.userId = userId
        self.name = name
        self.emailAddress = emailAddress
        self.password = password

class UserSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_id(self, userId: int) -> User:
        self.cursor.execute("SELECT * FROM user WHERE userId = %s", (userId,))
        result = self.cursor.fetchone()
        if result:
            return User(**result)
        else:
            raise ValueError(f"User with id {userId} not found")

    def add(self, name: str, emailAddress: str, password: str) -> None:
        self.cursor.execute("INSERT INTO user (name, emailAddress, password) VALUES (%s, %s, %s)", 
                            (name, emailAddress, password))
        self.conn.commit()

    def get_all(self) -> List[User]:
        self.cursor.execute("SELECT * FROM user")
        results = self.cursor.fetchall()
        return [User(**result) for result in results]

    def update(self, userId: int, **kwargs) -> None:
        columns = ', '.join(f"{k} = %s" for k in kwargs)
        values = list(kwargs.values())
        values.append(userId)
        self.cursor.execute(f"UPDATE user SET {columns} WHERE userId = %s", values)
        self.conn.commit()

    def delete(self, userId: int) -> None:
        self.cursor.execute("DELETE FROM user WHERE userId = %s", (userId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
