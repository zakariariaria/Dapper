import os

class Review():
    def __init__(self, aRating, aComment, aRatingId, aStylist):
        self._customers = None
        self._stylist = None
        self._ratingId = None
        self._comment = None
        self._rating = None
        self._rating = aRating
        self._comment = aComment
        self._ratingId = aRatingId
        didAddStylist = self.setStylist(aStylist)
        if not didAddStylist :
            raise RuntimeError ("Unable to create review due to stylist. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._customers = []

    def setRating(self, aRating):
        wasSet = False
        self._rating = aRating
        wasSet = True
        return wasSet

    def setComment(self, aComment):
        wasSet = False
        self._comment = aComment
        wasSet = True
        return wasSet

    def setRatingId(self, aRatingId):
        wasSet = False
        self._ratingId = aRatingId
        wasSet = True
        return wasSet

    def getRating(self):
        return self._rating

    def getComment(self):
        return self._comment

    def getRatingId(self):
        return self._ratingId

    def getStylist(self):
        return self._stylist

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

    def setStylist(self, aStylist):
        wasSet = False
        if aStylist is None :
            return wasSet
        existingStylist = self._stylist
        self._stylist = aStylist
        if not (existingStylist is None) and not existingStylist == aStylist :
            existingStylist.removeReview(self)
        self._stylist.addReview(self)
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
        if aCustomer.indexOfReview(self) != -1 :
            wasAdded = True
        else :
            wasAdded = aCustomer.addReview(self)
            if not wasAdded :
                self._customers.remove(aCustomer)
        return wasAdded

    def removeCustomer(self, aCustomer):
        wasRemoved = False
        if not (aCustomer) in self._customers :
            return wasRemoved
        oldIndex = (-1 if not aCustomer in self._customers else self._customers.index(aCustomer))
        self._customers.remove(oldIndex)
        if aCustomer.indexOfReview(self) == -1 :
            wasRemoved = True
        else :
            wasRemoved = aCustomer.removeReview(self)
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
        placeholderStylist = self._stylist
        self._stylist = None
        if not (placeholderStylist is None) :
            placeholderStylist.removeReview(self)
        copyOfCustomers = self._customers.copy()
        self._customers.clear()
        for aCustomer in copyOfCustomers:
            aCustomer.removeReview(self)

    def __str__(self):
        return str(super().__str__()) + "[" + "comment" + ":" + str(self.getComment()) + "," + "ratingId" + ":" + str(self.getRatingId()) + "]" + str(os.linesep) + "  " + "rating" + "=" + str((((self.getRating().__str__().replaceAll("  ", "    ")) if not self.getRating() == self else "this") if not (self.getRating() is None) else "null")) + str(os.linesep) + "  " + "stylist = " + ((format(id(self.getStylist()), "x")) if not (self.getStylist() is None) else "null")

