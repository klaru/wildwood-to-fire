const express = require('express');
const path = require('path');
const puppeteer = require('puppeteer');
const fs = require('fs');

const PORT = process.env.PORT || 3012;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', async (req, res) => {
    const browser = await puppeteer.launch({ 
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 3200, deviceScaleFactor: 0.52 });
    await page.goto(process.env.SCREENSHOT_URL || 'https://wildwoodtaphouse.com/tap-list/');
    await page.screenshot({
      path: '/tmp/screenshot.png',
      clip: {'x': 130, 'y': 700, 'width': 1600, 'height': 3200}

    });

    await browser.close();

    screenshot = fs.readFileSync('/tmp/screenshot.png');

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': screenshot.length,
    });
    return res.end(screenshot);
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
