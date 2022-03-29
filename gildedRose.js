class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
const sulfuras = 'Sulfuras, Hand of Ragnaros';
const agedBrie = 'Aged Brie';
const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';

  class Shop {
    constructor(items=[]){
      this.items = items;
    }

    updateQuality() {
      this.items.forEach(item => {
        this.updateQualityFor();
      });
  
      return this.items;
    }

    updateQualityFor() {
        this.updateQualityItem();
        this.updateSellIn();
        if (this.hasExpired()) {
            this.expiredItem();
        }
    }

    hasExpired() {
        return this.items[i].sellIn < 0;
    }

    expiredItem() {
        if (this.items[i].name != agedBrie) {
            if (this.items[i].name != backstagePasses) {
                if (this.items[i].quality > 0) {
                    this.updateSellIn();
                }
            } else {
                this.items[i].quality = this.items[i].quality - this.items[i].quality;
            }
        } else {
            if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
            }

        }
    }

    updateSellIn() {
        if (this.items[i].name != sulfuras) {
            this.items[i].sellIn = this.items[i].sellIn - 1;
        }
    }

    updateQualityItem() {
        if (this.items[i].name != agedBrie && this.items[i].name != backstagePasses) {
            if (this.items[i].quality > 0) {
                this.updateSellIn();
            }
        } else {
            increaseQuality();
            if (this.items[i].name == backstagePasses) {
                if (this.items[i].sellIn < 11) {
                    this.increaseQuality();
                }
                if (this.items[i].sellIn < 6) {
                    this.increaseQuality();
                }
            }
        }
    }
    

    increaseQuality() {
        if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
        }
    }
  }
  
  module.exports = {
    Item,
    Shop
  }