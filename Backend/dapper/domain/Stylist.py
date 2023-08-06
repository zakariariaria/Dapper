from User import User

class Stylist(User):
    def __init__(self, aName, aEmailAddress, aPassword, aUserId, aBio, aProfilePictureURL):
        self._itemPackages = None
        self._reviews = None
        self._profilePictureURL = None
        self._bio = None
        super().__init__(aName, aEmailAddress, aPassword, aUserId)
        self._bio = aBio
        self._profilePictureURL = aProfilePictureURL
        self._reviews = []
        self._itemPackages = []

    def setBio(self, aBio):
        wasSet = False
        self._bio = aBio
        wasSet = True
        return wasSet

    def setProfilePictureURL(self, aProfilePictureURL):
        wasSet = False
        self._profilePictureURL = aProfilePictureURL
        wasSet = True
        return wasSet

    def getBio(self):
        return self._bio

    def getProfilePictureURL(self):
        return self._profilePictureURL

    def getReview(self, index):
        aReview = self._reviews[index]
        return aReview

    def getReviews(self):
        newReviews = tuple(self._reviews)
        return newReviews

    def numberOfReviews(self):
        number = len(self._reviews)
        return number

    def hasReviews(self):
        has = len(self._reviews) > 0
        return has

    def indexOfReview(self, aReview):
        index = (-1 if not aReview in self._reviews else self._reviews.index(aReview))
        return index

    def getItemPackage(self, index):
        aItemPackage = self._itemPackages[index]
        return aItemPackage

    def getItemPackages(self):
        newItemPackages = tuple(self._itemPackages)
        return newItemPackages

    def numberOfItemPackages(self):
        number = len(self._itemPackages)
        return number

    def hasItemPackages(self):
        has = len(self._itemPackages) > 0
        return has

    def indexOfItemPackage(self, aItemPackage):
        index = (-1 if not aItemPackage in self._itemPackages else self._itemPackages.index(aItemPackage))
        return index

    @staticmethod
    def minimumNumberOfReviews():
        return 0

    def addReview1(self, aRating, aComment, aRatingId):
        from Review import Review
        return Review(aRating, aComment, aRatingId, self)

    def addReview2(self, aReview):
        wasAdded = False
        if (aReview) in self._reviews :
            return False
        existingStylist = aReview.getStylist()
        isNewStylist = not (existingStylist is None) and not self == existingStylist
        if isNewStylist :
            aReview.setStylist(self)
        else :
            self._reviews.append(aReview)
        wasAdded = True
        return wasAdded

    def removeReview(self, aReview):
        wasRemoved = False
        if not self == aReview.getStylist() :
            self._reviews.remove(aReview)
            wasRemoved = True
        return wasRemoved

    def addReviewAt(self, aReview, index):
        wasAdded = False
        if self.addReview(aReview) :
            if index < 0 :
                index = 0
            if index > self.numberOfReviews() :
                index = self.numberOfReviews() - 1
            self._reviews.remove(aReview)
            self._reviews.insert(index, aReview)
            wasAdded = True
        return wasAdded

    def addOrMoveReviewAt(self, aReview, index):
        wasAdded = False
        if (aReview) in self._reviews :
            if index < 0 :
                index = 0
            if index > self.numberOfReviews() :
                index = self.numberOfReviews() - 1
            self._reviews.remove(aReview)
            self._reviews.insert(index, aReview)
            wasAdded = True
        else :
            wasAdded = self.addReviewAt(aReview, index)
        return wasAdded

    @staticmethod
    def minimumNumberOfItemPackages():
        return 0

    def addItemPackage1(self, aItemPackageId, aOrder):
        from ItemPackage import ItemPackage
        return ItemPackage(aItemPackageId, aOrder, self)

    def addItemPackage2(self, aItemPackage):
        wasAdded = False
        if (aItemPackage) in self._itemPackages :
            return False
        existingStylist = aItemPackage.getStylist()
        isNewStylist = not (existingStylist is None) and not self == existingStylist
        if isNewStylist :
            aItemPackage.setStylist(self)
        else :
            self._itemPackages.append(aItemPackage)
        wasAdded = True
        return wasAdded

    def removeItemPackage(self, aItemPackage):
        wasRemoved = False
        if not self == aItemPackage.getStylist() :
            self._itemPackages.remove(aItemPackage)
            wasRemoved = True
        return wasRemoved

    def addItemPackageAt(self, aItemPackage, index):
        wasAdded = False
        if self.addItemPackage(aItemPackage) :
            if index < 0 :
                index = 0
            if index > self.numberOfItemPackages() :
                index = self.numberOfItemPackages() - 1
            self._itemPackages.remove(aItemPackage)
            self._itemPackages.insert(index, aItemPackage)
            wasAdded = True
        return wasAdded

    def addOrMoveItemPackageAt(self, aItemPackage, index):
        wasAdded = False
        if (aItemPackage) in self._itemPackages :
            if index < 0 :
                index = 0
            if index > self.numberOfItemPackages() :
                index = self.numberOfItemPackages() - 1
            self._itemPackages.remove(aItemPackage)
            self._itemPackages.insert(index, aItemPackage)
            wasAdded = True
        else :
            wasAdded = self.addItemPackageAt(aItemPackage, index)
        return wasAdded

    def delete(self):
        i = len(self._reviews)
        while i > 0 :
            aReview = self._reviews[i - 1]
            aReview.delete()
            i -= 1

        i = len(self._itemPackages)
        while i > 0 :
            aItemPackage = self._itemPackages[i - 1]
            aItemPackage.delete()
            i -= 1

        super().delete()

    def __str__(self):
        return str(super().__str__()) + "[" + "bio" + ":" + str(self.getBio()) + "," + "profilePictureURL" + ":" + str(self.getProfilePictureURL()) + "]"

    def addReview(self, *argv):
        from Review import Review
        if len(argv) == 3 and isinstance(argv[0], Int) and isinstance(argv[1], str) and isinstance(argv[2], str) :
            return self.addReview1(argv[0], argv[1], argv[2])
        if len(argv) == 1 and isinstance(argv[0], Review) :
            return self.addReview2(argv[0])
        raise TypeError("No method matches provided parameters")

    def addItemPackage(self, *argv):
        from ItemPackage import ItemPackage
        if len(argv) == 2 and isinstance(argv[0], str) and isinstance(argv[1], Order) :
            return self.addItemPackage1(argv[0], argv[1])
        if len(argv) == 1 and isinstance(argv[0], ItemPackage) :
            return self.addItemPackage2(argv[0])
        raise TypeError("No method matches provided parameters")

