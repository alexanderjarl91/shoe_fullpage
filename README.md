# What is this?

A demo product page using an npm package called fullPage.js to for full page scrolling effects and nav menu on the right hand side.

This page is using the following technologies:
`sass fullpage.js through cdn parcel bundler to bundle all files js modules (invert.js is exported and imported, this useless module is available on npmjs)`

# InvertModeInstallation

invert.js is a module that will invert the colors of your whole page.

to install with npm, run `npm i toggleInvert`

or import with cdn: `https://cdn.jsdelivr.net/gh/alexanderjarl91/invert@v4f7d7af/invert.js`

then..

import the function to your js file

`import { toggleInvert } from 'toggleInvert';`

then add dark-mode to your css
`.invert-mode { filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%); -webkit-filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%); }`

this should probably be
