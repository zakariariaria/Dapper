from dataclasses import dataclass

@dataclass
class User:
    userId: int
    name: str
    emailAddress: str
    password: str

    def set_user_id(self, aUserId: int):
        self.userId = aUserId

    def set_name(self, aName: str):
        self.name = aName

    def set_email_address(self, aEmailAddress: str):
        self.emailAddress = aEmailAddress

    def set_password(self, aPassword: str):
        self.password = aPassword

    def delete(self):
        pass  # Add logic for delete if necessary

    def __str__(self):
        return f"User(userId={self.userId}, name={self.name}, emailAddress={self.emailAddress}, password={self.password})"
