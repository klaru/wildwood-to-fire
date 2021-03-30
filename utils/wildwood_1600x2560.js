const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1600,
    height: 2560,
    deviceScaleFactor: 0.5,
  });
  await page.goto('https://wildwoodtaphouse.com/tap-list/');
  await page.screenshot({path: 'c:/users/kruff/Desktop/wildwood_1600x2560.png'});

  await browser.close();
})();