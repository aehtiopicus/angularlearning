(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products = gems;
	});
	var gems = [
	{
		name: 'Dodecachedron',
		price: 2.912,
		description: 'la la la',
		canPurchase:true,
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'la la la',
		canPurchase:false,
	},
	{
		name: 'Dodecachedron2',
		price: 2.912,
		description: 'la la la',
		canPurchase:true,
	},
	{
		name: 'Pentagonal Gem2',
		price: 5.95,
		description: 'la la la',
		canPurchase:false,
	},
	{
		name: 'Dodecachedron3',
		price: 2.912,
		description: 'la la la',
		canPurchase:true,
	},
	{
		name: 'Pentagonal Gem3',
		price: 5.95,
		description: 'la la la',
		canPurchase:false,
	},
	{
		name: 'Dodecachedron4',
		price: 2.912,
		description: 'la la la',
		canPurchase:true,
	},
	{
		name: 'Pentagonal Gem4',
		price: 5.95,
		description: 'la la la',
		canPurchase:false,
	}
	]
})();