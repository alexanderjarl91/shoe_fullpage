# What is this?

A demo product page using an npm package called fullPage.js to for full page scrolling effects and nav menu on the right hand side. It also contains the newest, freshest js module on the market.

This page is using the following technologies:
*sass;
*fullpage.js through cdn;
*parcel bundler;
*js modules (invert.js is exported and imported, this useless module is available on npmjs);

The node_modules werent supposed to be uploaded to github but they did even though I had my .gitignore file so there's that. Also, the bundled build doesnt build the price and the buy now in a column for some reason which in turn kind of messes up the responsiveness but whatever.

# InvertMode Module Installation

invert.js is an amazing module that will invert the colors of your whole page. This can be used as a dummy dark/light mode while app is still in development.

to install with npm, run `npm i toggleInvert`

or import with cdn: `https://cdn.jsdelivr.net/gh/alexanderjarl91/invert@v4f7d7af/invert.js`

then..

import the function to your js file

`import { toggleInvert } from 'toggleInvert';`

then add dark-mode to your css
`.invert-mode { filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%); -webkit-filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%); }`
(this should probably be delivered with the package, or at least with cdn but just copy paste it for now)

then run toggleInvert() function on the click of a button for example.

happy camping!
