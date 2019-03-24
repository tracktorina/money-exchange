// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var exchange = {};

    if (currency <= 0) {
        return {};
    }

    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } 

    var H = Math.floor(currency / 50);
    if (H != 0)
        exchange.H = H;

    currency = currency % 50;

    var Q = Math.floor(currency / 25);
    if (Q != 0) 
        exchange.Q = Q;

    currency = currency % 25;

    var D = Math.floor(currency / 10);
    if (D != 0)
        exchange.D = D;

    currency = currency % 10;

    var N = Math.floor(currency / 5);
    if (N != 0)
        exchange.N = N;

    currency = currency % 5;

    var P = currency;
    if (P != 0)
        exchange.P = P;

    return exchange;
}
