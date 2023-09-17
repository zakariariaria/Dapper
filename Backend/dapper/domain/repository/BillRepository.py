from abc import ABC
from typing import Optional

from domain.Bill import Bill


class BillRepository(ABC):
    def get(self, bill_id: int) -> Bill:
        ...

    def add(self, entry: Bill) -> None:
        ...
 
    def get_all(self, search: Optional[str]) -> list[Bill]:
        ...