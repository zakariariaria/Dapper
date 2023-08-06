import os

class PaymentInformation():
    def __init__(self, aCreditCardNumber, aName, aExpirationDate, aBillingAddress):
        self._customers = None
        self._billingAddress = None
        self._expirationDate = None
        self._name = None
        self._creditCardNumber = None
        self._creditCardNumber = aCreditCardNumber
        self._name = aName
        self._expirationDate = aExpirationDate
        didAddBillingAddress = self.setBillingAddress(aBillingAddress)
        if not didAddBillingAddress :
            raise RuntimeError ("Unable to create paymentInformation due to billingAddress. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._customers = []

    def setCreditCardNumber(self, aCreditCardNumber):
        wasSet = False
        self._creditCardNumber = aCreditCardNumber
        wasSet = True
        return wasSet

    def setName(self, aName):
        wasSet = False
        self._name = aName
        wasSet = True
        return wasSet

    def setExpirationDate(self, aExpirationDate):
        wasSet = False
        self._expirationDate = aExpirationDate
        wasSet = True
        return wasSet

    def getCreditCardNumber(self):
        return self._creditCardNumber

    def getName(self):
        return self._name

    def getExpirationDate(self):
        return self._expirationDate

    def getBillingAddress(self):
        return self._billingAddress

    def getCustomer(self, index):
        aCustomer = self._customers[index]
        return aCustomer

    def getCustomers(self):
        newCustomers = tuple(self._customers)
        return newCustomers

    def numberOfCustomers(self):
        number = len(self._customers)
        return number

    def hasCustomers(self):
        has = len(self._customers) > 0
        return has

    def indexOfCustomer(self, aCustomer):
        index = (-1 if not aCustomer in self._customers else self._customers.index(aCustomer))
        return index

    def setBillingAddress(self, aBillingAddress):
        wasSet = False
        if aBillingAddress is None :
            return wasSet
        existingBillingAddress = self._billingAddress
        self._billingAddress = aBillingAddress
        if not (existingBillingAddress is None) and not existingBillingAddress == aBillingAddress :
            existingBillingAddress.removePaymentInformation(self)
        self._billingAddress.addPaymentInformation(self)
        wasSet = True
        return wasSet

    @staticmethod
    def minimumNumberOfCustomers():
        return 0

    def addCustomer(self, aCustomer):
        wasAdded = False
        if (aCustomer) in self._customers :
            return False
        self._customers.append(aCustomer)
        if aCustomer.indexOfPaymentInformation(self) != -1 :
            wasAdded = True
        else :
            wasAdded = aCustomer.addPaymentInformation(self)
            if not wasAdded :
                self._customers.remove(aCustomer)
        return wasAdded

    def removeCustomer(self, aCustomer):
        wasRemoved = False
        if not (aCustomer) in self._customers :
            return wasRemoved
        oldIndex = (-1 if not aCustomer in self._customers else self._customers.index(aCustomer))
        self._customers.remove(oldIndex)
        if aCustomer.indexOfPaymentInformation(self) == -1 :
            wasRemoved = True
        else :
            wasRemoved = aCustomer.removePaymentInformation(self)
            if not wasRemoved :
                self._customers.insert(oldIndex, aCustomer)
        return wasRemoved

    def addCustomerAt(self, aCustomer, index):
        wasAdded = False
        if self.addCustomer(aCustomer) :
            if index < 0 :
                index = 0
            if index > self.numberOfCustomers() :
                index = self.numberOfCustomers() - 1
            self._customers.remove(aCustomer)
            self._customers.insert(index, aCustomer)
            wasAdded = True
        return wasAdded

    def addOrMoveCustomerAt(self, aCustomer, index):
        wasAdded = False
        if (aCustomer) in self._customers :
            if index < 0 :
                index = 0
            if index > self.numberOfCustomers() :
                index = self.numberOfCustomers() - 1
            self._customers.remove(aCustomer)
            self._customers.insert(index, aCustomer)
            wasAdded = True
        else :
            wasAdded = self.addCustomerAt(aCustomer, index)
        return wasAdded

    def delete(self):
        placeholderBillingAddress = self._billingAddress
        self._billingAddress = None
        if not (placeholderBillingAddress is None) :
            placeholderBillingAddress.removePaymentInformation(self)
        copyOfCustomers = self._customers.copy()
        self._customers.clear()
        for aCustomer in copyOfCustomers:
            aCustomer.removePaymentInformation(self)

    def __str__(self):
        return str(super().__str__()) + "[" + "creditCardNumber" + ":" + str(self.getCreditCardNumber()) + "," + "name" + ":" + str(self.getName()) + "," + "expirationDate" + ":" + str(self.getExpirationDate()) + "]" + str(os.linesep) + "  " + "billingAddress = " + ((format(id(self.getBillingAddress()), "x")) if not (self.getBillingAddress() is None) else "null")

