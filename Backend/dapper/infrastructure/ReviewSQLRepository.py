import mysql.connector
from typing import List

class Review:
    def __init__(self, reviewId: int, customerId: int, stylistId: int, rating: int, comment: str, reviewDate: str):
        self.reviewId = reviewId
        self.customerId = customerId
        self.stylistId = stylistId
        self.rating = rating
        self.comment = comment
        self.reviewDate = reviewDate

class ReviewSQLRepository:
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor(dictionary=True)

    def get_by_id(self, reviewId: int) -> Review:
        self.cursor.execute("SELECT * FROM review WHERE reviewId = %s", (reviewId,))
        result = self.cursor.fetchone()
        if result:
            return Review(**result)
        else:
            raise ValueError(f"Review with id {reviewId} not found")

    def add(self, customerId: int, stylistId: int, rating: int, comment: str, reviewDate: str) -> None:
        self.cursor.execute("INSERT INTO review (customerId, stylistId, rating, comment, reviewDate) VALUES (%s, %s, %s, %s, %s)", 
                            (customerId, stylistId, rating, comment, reviewDate))
        self.conn.commit()

    def get_all(self) -> List[Review]:
        self.cursor.execute("SELECT * FROM review")
        results = self.cursor.fetchall()
        return [Review(**result) for result in results]

    def update(self, reviewId: int, **kwargs) -> None:
        columns = ', '.join(f"{k} = %s" for k in kwargs)
        values = list(kwargs.values())
        values.append(reviewId)
        self.cursor.execute(f"UPDATE review SET {columns} WHERE reviewId = %s", values)
        self.conn.commit()

    def delete(self, reviewId: int) -> None:
        self.cursor.execute("DELETE FROM review WHERE reviewId = %s", (reviewId,))
        self.conn.commit()

    def __del__(self):
        self.cursor.close()
        self.conn.close()
