from abc import ABC
from typing import Optional

from domain.Review import Review


class ReviewRepository(ABC):
    def get(self, rating_id: int) -> Review:
        ...

    def add(self, entry: Review) -> None:
        ...
 
    def get_all(self, search: Optional[str]) -> list[Review]:
        ...