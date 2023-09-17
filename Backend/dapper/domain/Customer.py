from User import User
from dataclasses import dataclass

@dataclass
class Customer(User):
    @classmethod
    def alternateConstructor(cls, aName, aEmailAddress, aPassword, aUserId, aSubscription, aPreference):
        self = cls.__new__(cls)
        self._addresses = None
        self._reviews = None
        self._orders = None
        self._preference = None
        self._subscription = None
        self._paymentInformations = None
        super().__init__(aName, aEmailAddress, aPassword, aUserId)
        self._paymentInformations = []
        if aSubscription is None or not (aSubscription.getCustomer() is None) :
            raise RuntimeError ("Unable to create Customer due to aSubscription. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._subscription = aSubscription
        if aPreference is None or not (aPreference.getCustomer() is None) :
            raise RuntimeError ("Unable to create Customer due to aPreference. See http://manual.umple.org?RE002ViolationofAssociationMultiplicity.html")
        self._preference = aPreference
        self._orders = []
        self._reviews = []
        self._addresses = []
        return self

    def __init__(self, aName, aEmailAddress, aPassword, aUserId, aPriceForSubscription, aTypeForSubscription, aStartDateForSubscription, aEndDateForSubscription, aOutfitsPerMonthForSubscription, aSizeForPreference, aColorForPreference, aStyleForPreference):
        from Preference import Preference
        from Subscription import Subscription
        self._addresses = None
        self._reviews = None
        self._orders = None
        self._preference = None
        self._subscription = None
        self._paymentInformations = None
        super().__init__(aName, aEmailAddress, aPassword, aUserId)
        self._paymentInformations = []
        self._subscription = Subscription.alternateConstructor(aPriceForSubscription, aTypeForSubscription, aStartDateForSubscription, aEndDateForSubscription, aOutfitsPerMonthForSubscription, self)
        self._preference = Preference.alternateConstructor(aSizeForPreference, aColorForPreference, aStyleForPreference, self)
        self._orders = []
        self._reviews = []
        self._addresses = []

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

    def getSubscription(self):
        return self._subscription

    def getPreference(self):
        return self._preference

    def getOrder(self, index):
        aOrder = self._orders[index]
        return aOrder

    def getOrders(self):
        newOrders = tuple(self._orders)
        return newOrders

    def numberOfOrders(self):
        number = len(self._orders)
        return number

    def hasOrders(self):
        has = len(self._orders) > 0
        return has

    def indexOfOrder(self, aOrder):
        index = (-1 if not aOrder in self._orders else self._orders.index(aOrder))
        return index

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

    def getAddress(self, index):
        aAddress = self._addresses[index]
        return aAddress

    def getAddresses(self):
        newAddresses = tuple(self._addresses)
        return newAddresses

    def numberOfAddresses(self):
        number = len(self._addresses)
        return number

    def hasAddresses(self):
        has = len(self._addresses) > 0
        return has

    def indexOfAddress(self, aAddress):
        index = (-1 if not aAddress in self._addresses else self._addresses.index(aAddress))
        return index

    @staticmethod
    def minimumNumberOfPaymentInformations():
        return 0

    def addPaymentInformation(self, aPaymentInformation):
        wasAdded = False
        if (aPaymentInformation) in self._paymentInformations :
            return False
        self._paymentInformations.append(aPaymentInformation)
        if aPaymentInformation.indexOfCustomer(self) != -1 :
            wasAdded = True
        else :
            wasAdded = aPaymentInformation.addCustomer(self)
            if not wasAdded :
                self._paymentInformations.remove(aPaymentInformation)
        return wasAdded

    def removePaymentInformation(self, aPaymentInformation):
        wasRemoved = False
        if not (aPaymentInformation) in self._paymentInformations :
            return wasRemoved
        oldIndex = (-1 if not aPaymentInformation in self._paymentInformations else self._paymentInformations.index(aPaymentInformation))
        self._paymentInformations.remove(oldIndex)
        if aPaymentInformation.indexOfCustomer(self) == -1 :
            wasRemoved = True
        else :
            wasRemoved = aPaymentInformation.removeCustomer(self)
            if not wasRemoved :
                self._paymentInformations.insert(oldIndex, aPaymentInformation)
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

    @staticmethod
    def minimumNumberOfOrders():
        return 0

    def addOrder1(self, aOrderId, aOrderDate, aDeliveryDate, aStatus, aItemPackage, aBill):
        from Order import Order
        return Order(aOrderId, aOrderDate, aDeliveryDate, aStatus, self, aItemPackage, aBill)

    def addOrder2(self, aOrder):
        wasAdded = False
        if (aOrder) in self._orders :
            return False
        existingCustomer = aOrder.getCustomer()
        isNewCustomer = not (existingCustomer is None) and not self == existingCustomer
        if isNewCustomer :
            aOrder.setCustomer(self)
        else :
            self._orders.append(aOrder)
        wasAdded = True
        return wasAdded

    def removeOrder(self, aOrder):
        wasRemoved = False
        if not self == aOrder.getCustomer() :
            self._orders.remove(aOrder)
            wasRemoved = True
        return wasRemoved

    def addOrderAt(self, aOrder, index):
        wasAdded = False
        if self.addOrder(aOrder) :
            if index < 0 :
                index = 0
            if index > self.numberOfOrders() :
                index = self.numberOfOrders() - 1
            self._orders.remove(aOrder)
            self._orders.insert(index, aOrder)
            wasAdded = True
        return wasAdded

    def addOrMoveOrderAt(self, aOrder, index):
        wasAdded = False
        if (aOrder) in self._orders :
            if index < 0 :
                index = 0
            if index > self.numberOfOrders() :
                index = self.numberOfOrders() - 1
            self._orders.remove(aOrder)
            self._orders.insert(index, aOrder)
            wasAdded = True
        else :
            wasAdded = self.addOrderAt(aOrder, index)
        return wasAdded

    @staticmethod
    def minimumNumberOfReviews():
        return 0

    def addReview(self, aReview):
        wasAdded = False
        if (aReview) in self._reviews :
            return False
        self._reviews.append(aReview)
        if aReview.indexOfCustomer(self) != -1 :
            wasAdded = True
        else :
            wasAdded = aReview.addCustomer(self)
            if not wasAdded :
                self._reviews.remove(aReview)
        return wasAdded

    def removeReview(self, aReview):
        wasRemoved = False
        if not (aReview) in self._reviews :
            return wasRemoved
        oldIndex = (-1 if not aReview in self._reviews else self._reviews.index(aReview))
        self._reviews.remove(oldIndex)
        if aReview.indexOfCustomer(self) == -1 :
            wasRemoved = True
        else :
            wasRemoved = aReview.removeCustomer(self)
            if not wasRemoved :
                self._reviews.insert(oldIndex, aReview)
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
    def minimumNumberOfAddresses():
        return 0

    def addAddress1(self, aAddress, aPostalCode, aCity, aProvince, aCountry):
        from Address import Address
        return Address(aAddress, aPostalCode, aCity, aProvince, aCountry, self)

    def addAddress2(self, aAddress):
        wasAdded = False
        if (aAddress) in self._addresses :
            return False
        existingCustomer = aAddress.getCustomer()
        isNewCustomer = not (existingCustomer is None) and not self == existingCustomer
        if isNewCustomer :
            aAddress.setCustomer(self)
        else :
            self._addresses.append(aAddress)
        wasAdded = True
        return wasAdded

    def removeAddress(self, aAddress):
        wasRemoved = False
        if not self == aAddress.getCustomer() :
            self._addresses.remove(aAddress)
            wasRemoved = True
        return wasRemoved

    def addAddressAt(self, aAddress, index):
        wasAdded = False
        if self.addAddress(aAddress) :
            if index < 0 :
                index = 0
            if index > self.numberOfAddresses() :
                index = self.numberOfAddresses() - 1
            self._addresses.remove(aAddress)
            self._addresses.insert(index, aAddress)
            wasAdded = True
        return wasAdded

    def addOrMoveAddressAt(self, aAddress, index):
        wasAdded = False
        if (aAddress) in self._addresses :
            if index < 0 :
                index = 0
            if index > self.numberOfAddresses() :
                index = self.numberOfAddresses() - 1
            self._addresses.remove(aAddress)
            self._addresses.insert(index, aAddress)
            wasAdded = True
        else :
            wasAdded = self.addAddressAt(aAddress, index)
        return wasAdded

    def delete(self):
        copyOfPaymentInformations = self._paymentInformations.copy()
        self._paymentInformations.clear()
        for aPaymentInformation in copyOfPaymentInformations:
            aPaymentInformation.removeCustomer(self)

        existingSubscription = self._subscription
        self._subscription = None
        if not (existingSubscription is None) :
            existingSubscription.delete()
        existingPreference = self._preference
        self._preference = None
        if not (existingPreference is None) :
            existingPreference.delete()
        i = len(self._orders)
        while i > 0 :
            aOrder = self._orders[i - 1]
            aOrder.delete()
            i -= 1

        copyOfReviews = self._reviews.copy()
        self._reviews.clear()
        for aReview in copyOfReviews:
            aReview.removeCustomer(self)

        i = len(self._addresses)
        while i > 0 :
            aAddress = self._addresses[i - 1]
            aAddress.delete()
            i -= 1

        super().delete()

    def addOrder(self, *argv):
        from Order import Order
        if len(argv) == 6 and isinstance(argv[0], str) and isinstance(argv[1], Date) and isinstance(argv[2], Date) and isinstance(argv[3], str) and isinstance(argv[4], ItemPackage) and isinstance(argv[5], Bill) :
            return self.addOrder1(argv[0], argv[1], argv[2], argv[3], argv[4], argv[5])
        if len(argv) == 1 and isinstance(argv[0], Order) :
            return self.addOrder2(argv[0])
        raise TypeError("No method matches provided parameters")

    def addAddress(self, *argv):
        from Address import Address
        if len(argv) == 5 and isinstance(argv[0], str) and isinstance(argv[1], str) and isinstance(argv[2], str) and isinstance(argv[3], str) and isinstance(argv[4], str) :
            return self.addAddress1(argv[0], argv[1], argv[2], argv[3], argv[4])
        if len(argv) == 1 and isinstance(argv[0], Address) :
            return self.addAddress2(argv[0])
        raise TypeError("No method matches provided parameters")

