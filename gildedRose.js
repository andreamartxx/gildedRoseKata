class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const maxQuantity = 50;
const minQuality = 0;

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItemQuality(i);
    }

    return this.items;
  }

  updateItemQuality(i) {
    if(this.isLegendary(i)){
      return;
    }

    if(this.isCheese(i)){
      return this.updateCheese(i);
    }

    if ((this.isTicket(i))) {
      this.updateTicket(i);
      
    }
    this.updateNormal(i);
    
  }

  updateNormal(i) {
    this.decreaseSellIn(i);
    this.decreaseQuality(i);

    if (this.isExpired(i)) {
      this.decreaseQuality(i);
    }
  }

  updateTicket(i){
    this.decreaseSellIn(i);
      if (this.items[i].quality < maxQuantity) {
        this.items[i].quality += 1;
        
          if (this.items[i].sellIn < 10) {
            this.increaseQuality(i);

          }
          if (this.items[i].sellIn < 5) {
            this.increaseQuality(i);

          }
          if (this.isExpired(i)) {
              this.items.quality = minQuality;
          }
          return;
    }
  }

  updateCheese(i) {
    this.decreaseSellIn(i);
    if (this.items[i].quality < maxQuantity) {
      this.items[i].quality += 1;
    }
    if (this.isExpired(i)) {
      this.increaseQuality(i);
    }
    return;
  }


  isExpired(i) {
    return this.items[i].sellIn < minQuality;
  }

  decreaseSellIn() {
    this.items.sellIn = -1;
  }

  decreaseQuality(i) {
    if (this.isLegendary(i)) {
      this.items[i].quality -= 1;
    }
  }

    increaseQuality(i) {
        if (this.items[i].quality < maxQuantity) {
            this.items[i].quality += 1;
        }
    }

    isLegendary(i) {
        return this.items[i].name === 'Sulfuras, Hand of Ragnaros';
    }

    isTicket(i) {
        return this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert';
    }

    isCheese(i) {
        return this.items[i].name === 'Aged Brie';
    }
}

module.exports = {
  Item,
  Shop
}