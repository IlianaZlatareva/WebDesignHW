// масив от обекти представящи данни[] за различни марки бири:
const beers = [
	{name: "Ариана", color: "светло", prices:[1.3, 2, 2.4], town: "София"},
	{name: "Ариана", color: "тъмно", prices:[1.4, 2.2, 2.8], town: "София"},
	{name: "Каменица", color: "светло", prices:[1.5, 2.5, 3], town: "Пловдив"},
	{name: "Загорка", color: "светло", prices:[2, 3, 3.6], town: "Стара Загора"},
];
console.log("The beers array: ", beers);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ПРИМЕР: изписване на имената и цвета на всички бири:

let cheapestBeerPrice = beers[0];
    for (let i = 0, len = beers.length; i < len; i++) {
        const beer = beers[i];

    if(beers[i].prices[2]<cheapestBeerPrice.prices[2]){
        cheapestBeerPrice=beers[i];
    }
}
console.log("Най-евтината бира е: " + cheapestBeerPrice.name + ", цвета й е: " + cheapestBeerPrice.color + ", цената й е: " + cheapestBeerPrice.prices[2]);