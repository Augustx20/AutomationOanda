const puppeteer = require("puppeteer");
const Selector = "#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)";

const OandaArray = [];

const Oanda = async () => {
  const URL = [
    "https://www.oanda.com/currency-converter/es/?from=EUR&to=USD&amount=1",
    "https://www.oanda.com/currency-converter/es/?from=EUR&to=COP&amount=1",
    "https://www.oanda.com/currency-converter/es/?from=CNY&to=USD&amount=1",
    "https://www.oanda.com/currency-converter/es/?from=JPY&to=USD&amount=1",
  ];
const browser = await puppeteer.launch({handless: false});
const page = await browser.newPage();
try {
  for (let UrlPage of URL) {
    await page.goto(UrlPage);
    await page.setViewport({width: 1280, height: 720})
    await page.waitForSelector("#cc-time-series-plot");
    
    const book = await page.evaluate(() => {
    const tmp = {};
    tmp.Data = document.querySelector(
    "#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML;
    return tmp});
    
    let valor = book.Data.replace(/,/g, ".");
    let numero = Number(valor);
    OandaArray.push(numero);
};

} catch (err) {
  console.log("The Page Oanda didn't Load");
  await browser.close();
}

var j = OandaArray.map(i =>{ return isNaN(i) ? 0 : i});  
console.log(j);

for (var i = 0; i < URL.length; i++) {
    const websiteUrl = URL[i];
    await page.goto(websiteUrl)
    await page.waitForSelector(Selector);
    await page.wa
    await page.screenshot({
        path: `Oanda_${i+1}.jpg`,
    }) 
}
await browser.close();

}

module.exports = {
  Oanda,
  OandaArray,
};
