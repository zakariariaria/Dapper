from dataclasses import dataclass

@dataclass
class User():
    def __init__(self, aName, aEmailAddress, aPassword):
        self._password = None
        self._emailAddress = None
        self._name = None
        self._name = aName
        self._emailAddress = aEmailAddress
        self._password = aPassword

    def setName(self, aName):
        wasSet = False
        self._name = aName
        wasSet = True
        return wasSet

    def setEmailAddress(self, aEmailAddress):
        wasSet = False
        self._emailAddress = aEmailAddress
        wasSet = True
        return wasSet

    def setPassword(self, aPassword):
        wasSet = False
        self._password = aPassword
        wasSet = True
        return wasSet

    def getName(self):
        return self._name

    def getEmailAddress(self):
        return self._emailAddress

    def getPassword(self):
        return self._password

    def delete(self):
        pass

    def __str__(self):
        return str(super().__str__()) + "[" + "name" + ":" + str(self.getName()) + "," + "emailAddress" + ":" + str(self.getEmailAddress()) + "," + "password" + ":" + str(self.getPassword()) + "]"





