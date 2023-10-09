import mysql.connector
from typing import Optional, List
from domain.User import User
from domain.repository.UserRepository import UserRepository

class UserNotFound(Exception):
    pass

class UserSQLRepository(UserRepository):
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor()

    def get(self, user_emailAddress: str) -> User:
        self.cursor.execute("SELECT * FROM user WHERE email_address = %s", (user_emailAddress,))
        result = self.cursor.fetchone()
        if result:
            return User(*result)
        else:
            raise UserNotFound()

    def add(self, user: User) -> None:
        self.cursor.execute("INSERT INTO user (name, email_address, password, user_id) VALUES (%s, %s, %s, %s)", 
                            (user.name, user.email_address, user.password, user.user_id))
        self.conn.commit()

    def get_all(self, search: Optional[str] = None) -> List[User]:
        query = "SELECT * FROM user"
        if search:
            query += " WHERE email_address LIKE %s OR name LIKE %s"
            self.cursor.execute(query, ('%' + search + '%', '%' + search + '%'))
        else:
            self.cursor.execute(query)
        results = self.cursor.fetchall()
        return [User(*result) for result in results]

    def __del__(self):
        self.cursor.close()
        self.conn.close()
