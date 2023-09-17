from dataclasses import dataclass

@dataclass
class Item():
    def __init__(self, aSize, aPrice, aColorScheme, aBrand, aItemId, aImageURL):
        self._itemPackages = None
        self._imageURL = None
        self._itemId = None
        self._brand = None
        self._colorScheme = None
        self._seasons = None
        self._price = None
        self._size = None
        self._size = aSize
        self._price = aPrice
        self._seasons = []
        self._colorScheme = aColorScheme
        self._brand = aBrand
        self._itemId = aItemId
        self._imageURL = aImageURL
        self._itemPackages = []

    def setSize(self, aSize):
        wasSet = False
        self._size = aSize
        wasSet = True
        return wasSet

    def setPrice(self, aPrice):
        wasSet = False
        self._price = aPrice
        wasSet = True
        return wasSet

    def addSeason(self, aSeason):
        wasAdded = False
        wasAdded = self._seasons.append(aSeason)
        return wasAdded

    def removeSeason(self, aSeason):
        wasRemoved = False
        wasRemoved = self._seasons.remove(aSeason)
        return wasRemoved

    def setColorScheme(self, aColorScheme):
        wasSet = False
        self._colorScheme = aColorScheme
        wasSet = True
        return wasSet

    def setBrand(self, aBrand):
        wasSet = False
        self._brand = aBrand
        wasSet = True
        return wasSet

    def setItemId(self, aItemId):
        wasSet = False
        self._itemId = aItemId
        wasSet = True
        return wasSet

    def setImageURL(self, aImageURL):
        wasSet = False
        self._imageURL = aImageURL
        wasSet = True
        return wasSet

    def getSize(self):
        return self._size

    def getPrice(self):
        return self._price

    def getSeason(self, index):
        aSeason = self._seasons[index]
        return aSeason

    def getSeasons(self):
        newSeasons = self._seasons.copy()
        return newSeasons

    def numberOfSeasons(self):
        number = len(self._seasons)
        return number

    def hasSeasons(self):
        has = len(self._seasons) > 0
        return has

    def indexOfSeason(self, aSeason):
        index = (-1 if not aSeason in self._seasons else self._seasons.index(aSeason))
        return index

    def getColorScheme(self):
        return self._colorScheme

    def getBrand(self):
        return self._brand

    def getItemId(self):
        return self._itemId

    def getImageURL(self):
        return self._imageURL

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
    def minimumNumberOfItemPackages():
        return 0

    def addItemPackage(self, aItemPackage):
        wasAdded = False
        if (aItemPackage) in self._itemPackages :
            return False
        self._itemPackages.append(aItemPackage)
        if aItemPackage.indexOfItem(self) != -1 :
            wasAdded = True
        else :
            wasAdded = aItemPackage.addItem(self)
            if not wasAdded :
                self._itemPackages.remove(aItemPackage)
        return wasAdded

    def removeItemPackage(self, aItemPackage):
        wasRemoved = False
        if not (aItemPackage) in self._itemPackages :
            return wasRemoved
        oldIndex = (-1 if not aItemPackage in self._itemPackages else self._itemPackages.index(aItemPackage))
        self._itemPackages.remove(oldIndex)
        if aItemPackage.indexOfItem(self) == -1 :
            wasRemoved = True
        else :
            wasRemoved = aItemPackage.removeItem(self)
            if not wasRemoved :
                self._itemPackages.insert(oldIndex, aItemPackage)
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
        copyOfItemPackages = self._itemPackages.copy()
        self._itemPackages.clear()
        for aItemPackage in copyOfItemPackages:
            aItemPackage.removeItem(self)

    def __str__(self):
        return str(super().__str__()) + "[" + "size" + ":" + str(self.getSize()) + "," + "price" + ":" + str(self.getPrice()) + "," + "colorScheme" + ":" + str(self.getColorScheme()) + "," + "brand" + ":" + str(self.getBrand()) + "," + "itemId" + ":" + str(self.getItemId()) + "," + "imageURL" + ":" + str(self.getImageURL()) + "]"

