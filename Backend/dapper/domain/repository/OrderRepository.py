from abc import ABC
from typing import Optional

from domain.Order import Order


class OrderRepository(ABC):
    def get(self, order_id: int) -> Order:
        ...

    def add(self, entry: Order) -> None:
        ...
 
    def get_all(self, search: Optional[str]) -> list[Order]:
        ...