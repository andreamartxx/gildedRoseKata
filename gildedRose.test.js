const {Shop, Item} = require("./gildedRose");

	describe('default item', function() {

		it('do not decrease quality for default name when sellIn = 0 quality = 0', function() {
			const gildedRose = new Shop([new Item('default', 0, 0)]);
			const items = gildedRose.updateQuality();

			expect(items[0].quality).toBe(0);
		});
	});

	describe('Aged Brie item', function() {
		it('increase quality for Aged Brie by 1', function() {
			const gildedRose = new Shop([new Item('Aged Brie', 5, 10)]);
			const items = gildedRose.updateQuality();

			expect(items[0].quality).toBe(11);
		});

		it('never increase quality for Aged Brie over 50', function() {
			const gildedRose = new Shop([new Item('Aged Brie', 5, 50)]);
			const items = gildedRose.updateQuality();

			expect(items[0].quality).toBe(50);
		});

		it('increase quality for Aged Brie when it expires by 2', function() {
			const gildedRose = new Shop([new Item('Aged Brie', -1, 45)]);
			const items = gildedRose.updateQuality();

			expect(items[0].quality).toBe(47);
		});

		it('never increase quality for Aged Brie over 50 and sellIn < 0', function() {
			const gildedRose = new Shop([new Item('Aged Brie', -1, 50)]);
			const items = gildedRose.updateQuality();

			expect(items[0].quality).toBe(50);
		});
	});
