# What is this? :dizzy:

A demo product page using an npm library called fullPage.js to for full page scrolling effects and nav menu on the right hand side. It also contains the newest, freshest js module on the market.

This page is using the following technologies:
- sass;
- fullpage.js through cdn;
- parcel bundler;
- js modules (invert.js is exported and imported, this useless module is available on npmjs);

The node_modules werent supposed to be uploaded to github but they did even though I had my .gitignore file so there's that. Also, the bundled build doesnt build the price and the buy now in a column for some reason which in turn kind of messes up the responsiveness but whatever.

# InvertIt package installation :rocket:

invertit.js is an _amazing_ package that will invert the colors of your whole page. This can be used as a dummy dark/light mode while app is still in development.

1.  to install with npm, run `npm i invertit`

or import with cdn: `https://cdn.jsdelivr.net/gh/alexanderjarl91/invert@v4f7d7af/invert.js`

2.  then link to the css in your .html
    `<link rel="stylesheet" href="node_modules/invertit/invert.css">`

or cdn

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexanderjarl91/invert/invert.css">`

then..

import the function to your js file

`import { toggleInvert } from "./node_modules/invertit/invert.js";`

then

then run toggleInvert() function on the click of a button for example.

happy camping!
