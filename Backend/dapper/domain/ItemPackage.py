import os
from dataclasses import dataclass

@dataclass
class ItemPackage():
    @classmethod
    def alternateConstructor(cls, aItemPackageId, aOrder, aStylist):
        self = cls.__new__(cls)
        self._items = None
        self._stylist = None
        self._order = None
        self._itemPackageId = None
        self._itemPackageId = aItemPackageId
        if aOrder is None or not (aOrder.getItemPackage() is None) :
            raise RuntimeError ("Unable to create ItemPackage due to aOrder. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._order = aOrder
        didAddStylist = self.setStylist(aStylist)
        if not didAddStylist :
            raise RuntimeError ("Unable to create itemPackage due to stylist. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._items = []
        return self

    def __init__(self, aItemPackageId, aOrderIdForOrder, aOrderDateForOrder, aDeliveryDateForOrder, aStatusForOrder, aCustomerForOrder, aBillForOrder, aStylist):
        from Order import Order
        self._items = None
        self._stylist = None
        self._order = None
        self._itemPackageId = None
        self._itemPackageId = aItemPackageId
        self._order = Order.alternateConstructor(aOrderIdForOrder, aOrderDateForOrder, aDeliveryDateForOrder, aStatusForOrder, aCustomerForOrder, self, aBillForOrder)
        didAddStylist = self.setStylist(aStylist)
        if not didAddStylist :
            raise RuntimeError ("Unable to create itemPackage due to stylist. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._items = []

    def setItemPackageId(self, aItemPackageId):
        wasSet = False
        self._itemPackageId = aItemPackageId
        wasSet = True
        return wasSet

    def getItemPackageId(self):
        return self._itemPackageId

    def getOrder(self):
        return self._order

    def getStylist(self):
        return self._stylist

    def getItem(self, index):
        aItem = self._items[index]
        return aItem

    def getItems(self):
        newItems = tuple(self._items)
        return newItems

    def numberOfItems(self):
        number = len(self._items)
        return number

    def hasItems(self):
        has = len(self._items) > 0
        return has

    def indexOfItem(self, aItem):
        index = (-1 if not aItem in self._items else self._items.index(aItem))
        return index

    def setStylist(self, aStylist):
        wasSet = False
        if aStylist is None :
            return wasSet
        existingStylist = self._stylist
        self._stylist = aStylist
        if not (existingStylist is None) and not existingStylist == aStylist :
            existingStylist.removeItemPackage(self)
        self._stylist.addItemPackage(self)
        wasSet = True
        return wasSet

    @staticmethod
    def minimumNumberOfItems():
        return 0

    def addItem(self, aItem):
        wasAdded = False
        if (aItem) in self._items :
            return False
        self._items.append(aItem)
        if aItem.indexOfItemPackage(self) != -1 :
            wasAdded = True
        else :
            wasAdded = aItem.addItemPackage(self)
            if not wasAdded :
                self._items.remove(aItem)
        return wasAdded

    def removeItem(self, aItem):
        wasRemoved = False
        if not (aItem) in self._items :
            return wasRemoved
        oldIndex = (-1 if not aItem in self._items else self._items.index(aItem))
        self._items.remove(oldIndex)
        if aItem.indexOfItemPackage(self) == -1 :
            wasRemoved = True
        else :
            wasRemoved = aItem.removeItemPackage(self)
            if not wasRemoved :
                self._items.insert(oldIndex, aItem)
        return wasRemoved

    def addItemAt(self, aItem, index):
        wasAdded = False
        if self.addItem(aItem) :
            if index < 0 :
                index = 0
            if index > self.numberOfItems() :
                index = self.numberOfItems() - 1
            self._items.remove(aItem)
            self._items.insert(index, aItem)
            wasAdded = True
        return wasAdded

    def addOrMoveItemAt(self, aItem, index):
        wasAdded = False
        if (aItem) in self._items :
            if index < 0 :
                index = 0
            if index > self.numberOfItems() :
                index = self.numberOfItems() - 1
            self._items.remove(aItem)
            self._items.insert(index, aItem)
            wasAdded = True
        else :
            wasAdded = self.addItemAt(aItem, index)
        return wasAdded

    def delete(self):
        existingOrder = self._order
        self._order = None
        if not (existingOrder is None) :
            existingOrder.delete()
        placeholderStylist = self._stylist
        self._stylist = None
        if not (placeholderStylist is None) :
            placeholderStylist.removeItemPackage(self)
        copyOfItems = self._items.copy()
        self._items.clear()
        for aItem in copyOfItems:
            aItem.removeItemPackage(self)

    def __str__(self):
        return str(super().__str__()) + "[" + "itemPackageId" + ":" + str(self.getItemPackageId()) + "]" + str(os.linesep) + "  " + "order = " + str(((format(id(self.getOrder()), "x")) if not (self.getOrder() is None) else "null")) + str(os.linesep) + "  " + "stylist = " + ((format(id(self.getStylist()), "x")) if not (self.getStylist() is None) else "null")

