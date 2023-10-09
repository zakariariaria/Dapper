from abc import ABC
from typing import Optional

from domain.Customer import Customer


class CustomerRepository(ABC):
    def get(self, item_id: int) -> Customer:
        ...

    def add(self, entry: Customer) -> None:
        ...
 
    def get_all(self, search: Optional[str]) -> list[Customer]:
        ...
