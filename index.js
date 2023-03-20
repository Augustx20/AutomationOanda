const ProcessOanda = require('./ExchangeRate/Oanda')
const ProcessExcel = require('./Components/Excel')
ProcessOanda.Oanda();
setTimeout(() => { 
    ProcessExcel.SaveExcel()
    }, 15000); 

