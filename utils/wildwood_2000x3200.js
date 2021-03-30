const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 2000,
    height: 3200,
    deviceScaleFactor: 0.4,
  });
  await page.goto('https://wildwoodtaphouse.com/tap-list/');
  await page.screenshot({path: 'c:/users/kruff/Desktop/wildwood_2000x3200.png'});

  await browser.close();
})();