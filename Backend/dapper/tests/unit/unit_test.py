import unittest
from unittest.mock import MagicMock
from ..service.AccountService import AccountService
from ..domain.User import User

class TestAccountService(unittest.TestCase):
    def setUp(self):
        self.user_repository_mock = MagicMock()
        self.customer_repository_mock = MagicMock()
        self.preference_repository_mock = MagicMock()
        self.account_service = AccountService(
            user_repository=self.user_repository_mock,
            customer_repository=self.customer_repository_mock,
            preference_repository=self.preference_repository_mock
        )

    def test_create_account(self):
        # Setup
        self.user_repository_mock.get_by_email.return_value = User(userId=1, name="John Doe", emailAddress="john@example.com", password="password123")

        # Action
        user_id = self.account_service.create_account("John Doe", "john@example.com", "password123")

        # Assert
        self.user_repository_mock.add.assert_called_once()
        self.customer_repository_mock.add.assert_called_once_with(customer_id=1)
        self.assertEqual(user_id, 1)


if __name__ == '__main__':
    unittest.main()
