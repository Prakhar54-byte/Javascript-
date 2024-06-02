// Imediately Invoked Function Expressions (IIFE)
//Pollution of Global s
(function chai() {
    //Named IIFE
    console.log(`DB CONNCTED`);
})();// ; is used for to end the first fun

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Prakhar")