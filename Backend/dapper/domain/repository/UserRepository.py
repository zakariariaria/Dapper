from abc import ABC
from typing import Optional

from domain.User import User


class UserRepository(ABC):
    def get(self, user_emailAddress: str) -> User:
        ...

    def add(self, user: User) -> None:
        ...

    def get_all(self, search: Optional[str]) -> list[User]:
        ...