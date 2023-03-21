const ProcessOanda = require('./ExchangeRate/Oanda');
const ProcessExcel = require('./Components/Excel');
console.log("Search Exchange Rate")
ProcessOanda.Oanda();
setTimeout(() => { 
ProcessExcel.SaveExcel()
}, 15000); 

