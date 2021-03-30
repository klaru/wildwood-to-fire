const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 800,
    height: 1280,
    deviceScaleFactor: 1,
  });
  await page.goto('https://wildwoodtaphouse.com/tap-list/');
  await page.screenshot({path: 'c:/users/kruff/Desktop/wildwood_800x1280.png'});

  await browser.close();
})();