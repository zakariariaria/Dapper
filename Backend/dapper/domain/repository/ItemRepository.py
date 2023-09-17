from abc import ABC
from typing import Optional

from domain.Item import Item


class ItemRepository(ABC):
    def get(self, item_id: int) -> Item:
        ...

    def add(self, entry: Item) -> None:
        ...
 
    def get_all(self, search: Optional[str]) -> list[Item]:
        ...