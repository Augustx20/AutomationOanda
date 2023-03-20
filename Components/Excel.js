const xlsx = require("xlsx")
const Oanda = require('../ExchangeRate/Oanda');

const SaveExcel = async () => {

    setTimeout(() => {
      //  Oanda
      
      let EURUSD = Oanda.OandaArray[0];
      let EURCOP = Oanda.OandaArray[1];
      let CNYUSD = Oanda.OandaArray[2];
      let JPYUSD = Oanda.OandaArray[3];
      //const wb = xlsx.readFile("Datos.xlsx");
  
  const datos = [
      ["","Bancos","","","","Oanda"],
      ["Country","To /From","Amount","","","To/From","Amount"],
      ["Costa Rica","USD CRC","","","","EUR USD",EURUSD],
      ["Uruguay","USD UYU","","","","EUR COP",EURCOP],
      ["Colombia","USD COP","","","","CNY USD",CNYUSD],
      ["Peru","USD PEN","","","","JPY USD",JPYUSD],
      ["Peru","EUR PEN","","","","CNY COP",""],
      ["Chile","USD CLP","","","","JPY COP",""],
      ["Chile","EUR CLP","","","","BRL USD",""],
      ["Guatemala","USD GTQ","","","","KRW USD",""],
      ["Honduras","USD HNL","","","","USD CLP",""],
    ];
  
    var ws = xlsx.utils.aoa_to_sheet(datos);
    const wb = xlsx.utils.book_new();
    wb.Sheets['Datos'] = ws;
    xlsx.utils.book_append_sheet(wb,ws,"datos")
    xlsx.writeFile(wb, "datos.xlsx"); 
    
    console.log("Excel Actualizado")
   
  }, 6500)
  
  }

  module.exports = {
      SaveExcel
  }