// build.js
const pug = require('pug');

const sass = require('sass')

const fs = require('fs');
const path = require('path')

const diceDir = path.join(__dirname, 'diceRoller')

const scssPath = path.join(diceDir, 'roller.scss')
const cssPath = path.join(diceDir, 'dist/style.css')
const pugPath = path.join(diceDir, 'rooler.pug') // FIXED: correct filename
const outHtml = path.join(diceDir, 'dist/myfile.html')
// compile css
const roller = sass.compile(scssPath);
fs.writeFileSync(cssPath,roller.css);

// Compile Pug
const rollerhtml = pug.renderFile(pugPath,{pretty:true});
fs.writeFileSync(outHtml, rollerhtml);

