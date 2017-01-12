/* 
 * Generate Vim keyword list for all known CSS properties
 */
const fs = require('fs')
const path = require('path')
const properties = require('known-css-properties')

const filePath = path.join(__dirname, 'syntax', 'known-css-properties.vim')
const content = `syn keyword knownCSSProperties ${ properties.all.join("\n  \\ ") } contain`

fs.writeFile(filePath, content, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`${ filePath } saved.`);
});
