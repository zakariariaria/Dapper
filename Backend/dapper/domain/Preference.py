import os

class Preference():
    @classmethod
    def alternateConstructor(cls, aSize, aColor, aStyle, aCustomer):
        self = cls.__new__(cls)
        self._customer = None
        self._style = None
        self._color = None
        self._size = None
        self._size = aSize
        self._color = aColor
        self._style = aStyle
        if aCustomer is None or not (aCustomer.getPreference() is None) :
            raise RuntimeError ("Unable to create Preference due to aCustomer. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._customer = aCustomer
        return self

    def __init__(self, aSize, aColor, aStyle, aNameForCustomer, aEmailAddressForCustomer, aPasswordForCustomer, aUserIdForCustomer, aSubscriptionForCustomer):
        from Customer import Customer
        self._customer = None
        self._style = None
        self._color = None
        self._size = None
        self._size = aSize
        self._color = aColor
        self._style = aStyle
        self._customer = Customer.alternateConstructor(aNameForCustomer, aEmailAddressForCustomer, aPasswordForCustomer, aUserIdForCustomer, aSubscriptionForCustomer, self)

    def setSize(self, aSize):
        wasSet = False
        self._size = aSize
        wasSet = True
        return wasSet

    def setColor(self, aColor):
        wasSet = False
        self._color = aColor
        wasSet = True
        return wasSet

    def setStyle(self, aStyle):
        wasSet = False
        self._style = aStyle
        wasSet = True
        return wasSet

    def getSize(self):
        return self._size

    def getColor(self):
        return self._color

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
        return str(super().__str__()) + "[" + "size" + ":" + str(self.getSize()) + "," + "color" + ":" + str(self.getColor()) + "," + "style" + ":" + str(self.getStyle()) + "]" + str(os.linesep) + "  " + "customer = " + ((format(id(self.getCustomer()), "x")) if not (self.getCustomer() is None) else "null")

