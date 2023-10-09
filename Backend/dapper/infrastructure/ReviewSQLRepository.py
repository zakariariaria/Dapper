import mysql.connector
from typing import Optional, List
from domain.Review import Review
from domain.repository.ReviewRepository import ReviewRepository

class ReviewNotFound(Exception):
    pass

class ReviewSQLRepository(ReviewRepository):
    def __init__(self, host: str, user: str, password: str, database: str):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.conn.cursor()

    def get(self, rating_id: int) -> Review:
        self.cursor.execute("SELECT * FROM review WHERE rating_id = %s", (rating_id,))
        result = self.cursor.fetchone()
        if result:
            return Review(*result)
        else:
            raise ReviewNotFound()

    def add(self, entry: Review) -> None:
        self.cursor.execute("INSERT INTO review (stylist_bio, rating, comment, rating_id) VALUES (%s, %s, %s, %s)", 
                            (entry.stylist_bio, entry.rating, entry.comment, entry.rating_id))
        self.conn.commit()

    def get_all(self, search: Optional[str] = None) -> List[Review]:
        query = "SELECT * FROM review"
        if search:
            query += " WHERE rating_id LIKE %s OR comment LIKE %s"
            self.cursor.execute(query, ('%' + search + '%', '%' + search + '%'))
        else:
            self.cursor.execute(query)
        results = self.cursor.fetchall()
        return [Review(*result) for result in results]

    def __del__(self):
        self.cursor.close()
        self.conn.close()
