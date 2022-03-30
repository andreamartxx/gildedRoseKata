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
  });