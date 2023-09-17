import os
from dataclasses import dataclass

@dataclass
class Bill():
    @classmethod
    def alternateConstructor(cls, aIssueDate, aDueDate, aSum, aBillId, aOrder):
        self = cls.__new__(cls)
        self._order = None
        self._billId = None
        self._sum = None
        self._dueDate = None
        self._issueDate = None
        self._issueDate = aIssueDate
        self._dueDate = aDueDate
        self._sum = aSum
        self._billId = aBillId
        if aOrder is None or not (aOrder.getBill() is None) :
            raise RuntimeError ("Unable to create Bill due to aOrder. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._order = aOrder
        return self

    def __init__(self, aIssueDate, aDueDate, aSum, aBillId, aOrderIdForOrder, aOrderDateForOrder, aDeliveryDateForOrder, aStatusForOrder, aCustomerForOrder, aItemPackageForOrder):
        from Order import Order
        self._order = None
        self._billId = None
        self._sum = None
        self._dueDate = None
        self._issueDate = None
        self._issueDate = aIssueDate
        self._dueDate = aDueDate
        self._sum = aSum
        self._billId = aBillId
        self._order = Order.alternateConstructor(aOrderIdForOrder, aOrderDateForOrder, aDeliveryDateForOrder, aStatusForOrder, aCustomerForOrder, aItemPackageForOrder, self)

    def setIssueDate(self, aIssueDate):
        wasSet = False
        self._issueDate = aIssueDate
        wasSet = True
        return wasSet

    def setDueDate(self, aDueDate):
        wasSet = False
        self._dueDate = aDueDate
        wasSet = True
        return wasSet

    def setSum(self, aSum):
        wasSet = False
        self._sum = aSum
        wasSet = True
        return wasSet

    def setBillId(self, aBillId):
        wasSet = False
        self._billId = aBillId
        wasSet = True
        return wasSet

    def getIssueDate(self):
        return self._issueDate

    def getDueDate(self):
        return self._dueDate

    def getSum(self):
        return self._sum

    def getBillId(self):
        return self._billId

    def getOrder(self):
        return self._order

    def delete(self):
        existingOrder = self._order
        self._order = None
        if not (existingOrder is None) :
            existingOrder.delete()

    def __str__(self):
        return str(super().__str__()) + "[" + "sum" + ":" + str(self.getSum()) + "," + "billId" + ":" + str(self.getBillId()) + "]" + str(os.linesep) + "  " + "issueDate" + "=" + str((((self.getIssueDate().__str__().replaceAll("  ", "    ")) if not self.getIssueDate() == self else "this") if not (self.getIssueDate() is None) else "null")) + str(os.linesep) + "  " + "dueDate" + "=" + str((((self.getDueDate().__str__().replaceAll("  ", "    ")) if not self.getDueDate() == self else "this") if not (self.getDueDate() is None) else "null")) + str(os.linesep) + "  " + "order = " + ((format(id(self.getOrder()), "x")) if not (self.getOrder() is None) else "null")





