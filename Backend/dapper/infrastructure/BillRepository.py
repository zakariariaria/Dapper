import pickle
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

from domain.Bill import Bill
from domain.repository.BillRepository import BillRepository


class BillNotFound(Exception):
    pass


@dataclass
class BillPickleRepository(BillRepository):
    storage_dir: str

    def get(self, bill_id: str) -> Bill:
        try:
            bill: Bill
            with open(Path(self.storage_dir) / bill_id, mode="rb") as entry_file:
                bill = pickle.load(entry_file)
            return bill
        except Exception:
            raise BillNotFound()

    def add(self, entry: Bill) -> None:
        with open(Path(self.storage_dir) / entry.id, mode="wb") as entry_file:
            pickle.dump(entry, entry_file)

    def get_all(self, search: Optional[str]) -> list[TodoEntry]:
        entries: list[TodoEntry] = []
        for entry_file_path in Path(self.storage_dir).iterdir():
            with open(entry_file_path, mode="rb") as entry_file:
                entry: TodoEntry = pickle.load(entry_file)
                if search:
                    if search in entry.content or search in entry.tags:
                        entries.append(entry)
                else:
                    entries.append(entry)
        return entries