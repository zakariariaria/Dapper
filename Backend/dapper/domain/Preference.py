import os
from dataclasses import dataclass

@dataclass
class Preference():
    @classmethod
    def alternateConstructor(cls, aSize, aStyle, aCustomer):
        self = cls.__new__(cls)
        self._customer = None
        self._style = None
        self._color = None
        self._size = None
        self._size = aSize
        self._color = []
        self._style = aStyle
        if aCustomer is None or not (aCustomer.getPreference() is None) :
            raise RuntimeError ("Unable to create Preference due to aCustomer. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._customer = aCustomer
        return self

    def __init__(self, aSize, aStyle, aNameForCustomer, aEmailAddressForCustomer, aPasswordForCustomer, aSubscriptionForCustomer):
        from Customer import Customer
        self._customer = None
        self._style = None
        self._color = None
        self._size = None
        self._size = aSize
        self._color = []
        self._style = aStyle
        self._customer = Customer.alternateConstructor(aNameForCustomer, aEmailAddressForCustomer, aPasswordForCustomer, aSubscriptionForCustomer, self)

    def setSize(self, aSize):
        wasSet = False
        self._size = aSize
        wasSet = True
        return wasSet

    def addColor(self, aColor):
        wasAdded = False
        wasAdded = self._color.append(aColor)
        return wasAdded

    def removeColor(self, aColor):
        wasRemoved = False
        wasRemoved = self._color.remove(aColor)
        return wasRemoved

    def setStyle(self, aStyle):
        wasSet = False
        self._style = aStyle
        wasSet = True
        return wasSet

    def getSize(self):
        return self._size

    def getColor1(self, index):
        aColor = self._color[index]
        return aColor

    def getColor2(self):
        newColor = self._color.copy()
        return newColor

    def numberOfColor(self):
        number = len(self._color)
        return number

    def hasColor(self):
        has = len(self._color) > 0
        return has

    def indexOfColor(self, aColor):
        index = (-1 if not aColor in self._color else self._color.index(aColor))
        return index

    def getStyle(self):
        return self._style

    def getCustomer(self):
        return self._customer

    def delete(self):
        existingCustomer = self._customer
        self._customer = None
        if not (existingCustomer is None) :
            existingCustomer.delete()

    def __str__(self):
        return str(super().__str__()) + "[" + "size" + ":" + str(self.getSize()) + "," + "style" + ":" + str(self.getStyle()) + "]" + str(os.linesep) + "  " + "customer = " + ((format(id(self.getCustomer()), "x")) if not (self.getCustomer() is None) else "null")

    def getColor(self, *argv):
        if len(argv) == 1 and isinstance(argv[0], int) :
            return self.getColor1(argv[0])
        if len(argv) == 0 :
            return self.getColor2()
        raise TypeError("No method matches provided parameters")





