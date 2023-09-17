import os
from dataclasses import dataclass

@dataclass
class Subscription():
    @classmethod
    def alternateConstructor(cls, aPrice, aType, aStartDate, aEndDate, aOutfitsPerMonth, aCustomer):
        self = cls.__new__(cls)
        self._customer = None
        self._outfitsPerMonth = None
        self._endDate = None
        self._startDate = None
        self._type = None
        self._price = None
        self._price = aPrice
        self._type = aType
        self._startDate = aStartDate
        self._endDate = aEndDate
        self._outfitsPerMonth = aOutfitsPerMonth
        if aCustomer is None or not (aCustomer.getSubscription() is None) :
            raise RuntimeError ("Unable to create Subscription due to aCustomer. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._customer = aCustomer
        return self

    def __init__(self, aPrice, aType, aStartDate, aEndDate, aOutfitsPerMonth, aNameForCustomer, aEmailAddressForCustomer, aPasswordForCustomer, aUserIdForCustomer, aPreferenceForCustomer):
        from Customer import Customer
        self._customer = None
        self._outfitsPerMonth = None
        self._endDate = None
        self._startDate = None
        self._type = None
        self._price = None
        self._price = aPrice
        self._type = aType
        self._startDate = aStartDate
        self._endDate = aEndDate
        self._outfitsPerMonth = aOutfitsPerMonth
        self._customer = Customer.alternateConstructor(aNameForCustomer, aEmailAddressForCustomer, aPasswordForCustomer, aUserIdForCustomer, self, aPreferenceForCustomer)

    def setPrice(self, aPrice):
        wasSet = False
        self._price = aPrice
        wasSet = True
        return wasSet

    def setType(self, aType):
        wasSet = False
        self._type = aType
        wasSet = True
        return wasSet

    def setStartDate(self, aStartDate):
        wasSet = False
        self._startDate = aStartDate
        wasSet = True
        return wasSet

    def setEndDate(self, aEndDate):
        wasSet = False
        self._endDate = aEndDate
        wasSet = True
        return wasSet

    def setOutfitsPerMonth(self, aOutfitsPerMonth):
        wasSet = False
        self._outfitsPerMonth = aOutfitsPerMonth
        wasSet = True
        return wasSet

    def getPrice(self):
        return self._price

    def getType(self):
        return self._type

    def getStartDate(self):
        return self._startDate

    def getEndDate(self):
        return self._endDate

    def getOutfitsPerMonth(self):
        return self._outfitsPerMonth

    def getCustomer(self):
        return self._customer

    def delete(self):
        existingCustomer = self._customer
        self._customer = None
        if not (existingCustomer is None) :
            existingCustomer.delete()

    def __str__(self):
        return str(super().__str__()) + "[" + "price" + ":" + str(self.getPrice()) + "," + "type" + ":" + str(self.getType()) + "," + "outfitsPerMonth" + ":" + str(self.getOutfitsPerMonth()) + "]" + str(os.linesep) + "  " + "startDate" + "=" + str((((self.getStartDate().__str__().replaceAll("  ", "    ")) if not self.getStartDate() == self else "this") if not (self.getStartDate() is None) else "null")) + str(os.linesep) + "  " + "endDate" + "=" + str((((self.getEndDate().__str__().replaceAll("  ", "    ")) if not self.getEndDate() == self else "this") if not (self.getEndDate() is None) else "null")) + str(os.linesep) + "  " + "customer = " + ((format(id(self.getCustomer()), "x")) if not (self.getCustomer() is None) else "null")

