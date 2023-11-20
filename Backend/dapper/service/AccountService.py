from ..infrastructure.UserSQLRepository import UserSQLRepository

class AccountService:
    def __init__(self, user_repository, customer_repository, preference_repository):
        self.user_repository = user_repository
        self.customer_repository = customer_repository
        self.preference_repository = preference_repository

    def create_account(self, name, email, password, preferences=None):
        # Create User
        self.user_repository.add(name, email, password)
        
        # Assuming the user ID is automatically generated and can be retrieved
        user_id = self.user_repository.get_by_email(email).userId
        
        # Create Customer (if separate from User)
        self.customer_repository.add(customer_id=user_id)
        
        # Set Preferences (if any)
        if preferences:
            self.preference_repository.add_or_update(customer_id=user_id, **preferences)

        return user_id  # or a more complex object representing the account