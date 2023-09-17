import os
from dataclasses import dataclass

@dataclass
class Address():
    def __init__(self, aAddress, aPostalCode, aCity, aProvince, aCountry, aCustomer):
        self._paymentInformations = None
        self._customer = None
        self._country = None
        self._province = None
        self._city = None
        self._postalCode = None
        self._address = None
        self._address = aAddress
        self._postalCode = aPostalCode
        self._city = aCity
        self._province = aProvince
        self._country = aCountry
        didAddCustomer = self.setCustomer(aCustomer)
        if not didAddCustomer :
            raise RuntimeError ("Unable to create address due to customer. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._paymentInformations = []

    def setAddress(self, aAddress):
        wasSet = False
        self._address = aAddress
        wasSet = True
        return wasSet

    def setPostalCode(self, aPostalCode):
        wasSet = False
        self._postalCode = aPostalCode
        wasSet = True
        return wasSet

    def setCity(self, aCity):
        wasSet = False
        self._city = aCity
        wasSet = True
        return wasSet

    def setProvince(self, aProvince):
        wasSet = False
        self._province = aProvince
        wasSet = True
        return wasSet

    def setCountry(self, aCountry):
        wasSet = False
        self._country = aCountry
        wasSet = True
        return wasSet

    def getAddress(self):
        return self._address

    def getPostalCode(self):
        return self._postalCode

    def getCity(self):
        return self._city

    def getProvince(self):
        return self._province

    def getCountry(self):
        return self._country

    def getCustomer(self):
        return self._customer

    def getPaymentInformation(self, index):
        aPaymentInformation = self._paymentInformations[index]
        return aPaymentInformation

    def getPaymentInformations(self):
        newPaymentInformations = tuple(self._paymentInformations)
        return newPaymentInformations

    def numberOfPaymentInformations(self):
        number = len(self._paymentInformations)
        return number

    def hasPaymentInformations(self):
        has = len(self._paymentInformations) > 0
        return has

    def indexOfPaymentInformation(self, aPaymentInformation):
        index = (-1 if not aPaymentInformation in self._paymentInformations else self._paymentInformations.index(aPaymentInformation))
        return index

    def setCustomer(self, aCustomer):
        wasSet = False
        if aCustomer is None :
            return wasSet
        existingCustomer = self._customer
        self._customer = aCustomer
        if not (existingCustomer is None) and not existingCustomer == aCustomer :
            existingCustomer.removeAddress(self)
        self._customer.addAddress(self)
        wasSet = True
        return wasSet

    @staticmethod
    def minimumNumberOfPaymentInformations():
        return 0

    def addPaymentInformation1(self, aCreditCardNumber, aName, aExpirationDate):
        from PaymentInformation import PaymentInformation
        return PaymentInformation(aCreditCardNumber, aName, aExpirationDate, self)

    def addPaymentInformation2(self, aPaymentInformation):
        wasAdded = False
        if (aPaymentInformation) in self._paymentInformations :
            return False
        existingBillingAddress = aPaymentInformation.getBillingAddress()
        isNewBillingAddress = not (existingBillingAddress is None) and not self == existingBillingAddress
        if isNewBillingAddress :
            aPaymentInformation.setBillingAddress(self)
        else :
            self._paymentInformations.append(aPaymentInformation)
        wasAdded = True
        return wasAdded

    def removePaymentInformation(self, aPaymentInformation):
        wasRemoved = False
        if not self == aPaymentInformation.getBillingAddress() :
            self._paymentInformations.remove(aPaymentInformation)
            wasRemoved = True
        return wasRemoved

    def addPaymentInformationAt(self, aPaymentInformation, index):
        wasAdded = False
        if self.addPaymentInformation(aPaymentInformation) :
            if index < 0 :
                index = 0
            if index > self.numberOfPaymentInformations() :
                index = self.numberOfPaymentInformations() - 1
            self._paymentInformations.remove(aPaymentInformation)
            self._paymentInformations.insert(index, aPaymentInformation)
            wasAdded = True
        return wasAdded

    def addOrMovePaymentInformationAt(self, aPaymentInformation, index):
        wasAdded = False
        if (aPaymentInformation) in self._paymentInformations :
            if index < 0 :
                index = 0
            if index > self.numberOfPaymentInformations() :
                index = self.numberOfPaymentInformations() - 1
            self._paymentInformations.remove(aPaymentInformation)
            self._paymentInformations.insert(index, aPaymentInformation)
            wasAdded = True
        else :
            wasAdded = self.addPaymentInformationAt(aPaymentInformation, index)
        return wasAdded

    def delete(self):
        placeholderCustomer = self._customer
        self._customer = None
        if not (placeholderCustomer is None) :
            placeholderCustomer.removeAddress(self)
        i = len(self._paymentInformations)
        while i > 0 :
            aPaymentInformation = self._paymentInformations[i - 1]
            aPaymentInformation.delete()
            i -= 1

    def __str__(self):
        return str(super().__str__()) + "[" + "address" + ":" + str(self.getAddress()) + "," + "postalCode" + ":" + str(self.getPostalCode()) + "," + "city" + ":" + str(self.getCity()) + "," + "province" + ":" + str(self.getProvince()) + "," + "country" + ":" + str(self.getCountry()) + "]" + str(os.linesep) + "  " + "customer = " + ((format(id(self.getCustomer()), "x")) if not (self.getCustomer() is None) else "null")

    def addPaymentInformation(self, *argv):
        from PaymentInformation import PaymentInformation
        if len(argv) == 3 and isinstance(argv[0], str) and isinstance(argv[1], str) and isinstance(argv[2], str) :
            return self.addPaymentInformation1(argv[0], argv[1], argv[2])
        if len(argv) == 1 and isinstance(argv[0], PaymentInformation) :
            return self.addPaymentInformation2(argv[0])
        raise TypeError("No method matches provided parameters")

