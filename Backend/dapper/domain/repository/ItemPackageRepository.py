from abc import ABC
from typing import Optional

from domain.ItemPackage import ItemPackage


class ItemPackageRepository(ABC):
    def get(self, item_id: int) -> ItemPackage:
        ...

    def add(self, entry: ItemPackage) -> None:
        ...
 
    def get_all(self, search: Optional[str]) -> list[ItemPackage]:
        ...