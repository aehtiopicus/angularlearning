(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products = gems;
	});
	var gems = [
	{
		name: 'Dodecachedron',
		price: 2.95,
		description: 'la la la',
		canPurchase:true,
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'la la la',
		canPurchase:false,
	}
	]
})();