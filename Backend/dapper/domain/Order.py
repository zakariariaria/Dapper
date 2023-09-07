import os
from dataclasses import dataclass

@dataclass
class Order():
    @classmethod
    def alternateConstructor(cls, aOrderId, aOrderDate, aDeliveryDate, aStatus, aCustomer, aItemPackage, aBill):
        self = cls.__new__(cls)
        self._bill = None
        self._itemPackage = None
        self._customer = None
        self._status = None
        self._deliveryDate = None
        self._orderDate = None
        self._orderId = None
        self._orderId = aOrderId
        self._orderDate = aOrderDate
        self._deliveryDate = aDeliveryDate
        self._status = aStatus
        didAddCustomer = self.setCustomer(aCustomer)
        if not didAddCustomer :
            raise RuntimeError ("Unable to create order due to customer. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        if aItemPackage is None or not (aItemPackage.getOrder() is None) :
            raise RuntimeError ("Unable to create Order due to aItemPackage. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._itemPackage = aItemPackage
        if aBill is None or not (aBill.getOrder() is None) :
            raise RuntimeError ("Unable to create Order due to aBill. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._bill = aBill
        return self

    def __init__(self, aOrderId, aOrderDate, aDeliveryDate, aStatus, aCustomer, aItemPackageIdForItemPackage, aStylistForItemPackage, aIssueDateForBill, aDueDateForBill, aSumForBill):
        from Bill import Bill
        from ItemPackage import ItemPackage
        self._bill = None
        self._itemPackage = None
        self._customer = None
        self._status = None
        self._deliveryDate = None
        self._orderDate = None
        self._orderId = None
        self._orderId = aOrderId
        self._orderDate = aOrderDate
        self._deliveryDate = aDeliveryDate
        self._status = aStatus
        didAddCustomer = self.setCustomer(aCustomer)
        if not didAddCustomer :
            raise RuntimeError ("Unable to create order due to customer. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._itemPackage = ItemPackage.alternateConstructor(aItemPackageIdForItemPackage, self, aStylistForItemPackage)
        self._bill = Bill.alternateConstructor(aIssueDateForBill, aDueDateForBill, aSumForBill, self)

    def setOrderId(self, aOrderId):
        wasSet = False
        self._orderId = aOrderId
        wasSet = True
        return wasSet

    def setOrderDate(self, aOrderDate):
        wasSet = False
        self._orderDate = aOrderDate
        wasSet = True
        return wasSet

    def setDeliveryDate(self, aDeliveryDate):
        wasSet = False
        self._deliveryDate = aDeliveryDate
        wasSet = True
        return wasSet

    def setStatus(self, aStatus):
        wasSet = False
        self._status = aStatus
        wasSet = True
        return wasSet

    def getOrderId(self):
        return self._orderId

    def getOrderDate(self):
        return self._orderDate

    def getDeliveryDate(self):
        return self._deliveryDate

    def getStatus(self):
        return self._status

    def getCustomer(self):
        return self._customer

    def getItemPackage(self):
        return self._itemPackage

    def getBill(self):
        return self._bill

    def setCustomer(self, aCustomer):
        wasSet = False
        if aCustomer is None :
            return wasSet
        existingCustomer = self._customer
        self._customer = aCustomer
        if not (existingCustomer is None) and not existingCustomer == aCustomer :
            existingCustomer.removeOrder(self)
        self._customer.addOrder(self)
        wasSet = True
        return wasSet

    def delete(self):
        placeholderCustomer = self._customer
        self._customer = None
        if not (placeholderCustomer is None) :
            placeholderCustomer.removeOrder(self)
        existingItemPackage = self._itemPackage
        self._itemPackage = None
        if not (existingItemPackage is None) :
            existingItemPackage.delete()
        existingBill = self._bill
        self._bill = None
        if not (existingBill is None) :
            existingBill.delete()

    def __str__(self):
        return str(super().__str__()) + "[" + "orderId" + ":" + str(self.getOrderId()) + "," + "status" + ":" + str(self.getStatus()) + "]" + str(os.linesep) + "  " + "orderDate" + "=" + str((((self.getOrderDate().__str__().replaceAll("  ", "    ")) if not self.getOrderDate() == self else "this") if not (self.getOrderDate() is None) else "null")) + str(os.linesep) + "  " + "deliveryDate" + "=" + str((((self.getDeliveryDate().__str__().replaceAll("  ", "    ")) if not self.getDeliveryDate() == self else "this") if not (self.getDeliveryDate() is None) else "null")) + str(os.linesep) + "  " + "customer = " + str(((format(id(self.getCustomer()), "x")) if not (self.getCustomer() is None) else "null")) + str(os.linesep) + "  " + "itemPackage = " + str(((format(id(self.getItemPackage()), "x")) if not (self.getItemPackage() is None) else "null")) + str(os.linesep) + "  " + "bill = " + ((format(id(self.getBill()), "x")) if not (self.getBill() is None) else "null")

