const fs = require('fs');

function removeStartingSlashFromPath(filename) {
  let content;
  content = fs.readFileSync(filename, {
    encoding: 'utf-8',
    flag: 'r+',
  });
  content = content.replace(/"\//g, '"');
  fs.writeFileSync(filename, content, (err) => {
    if (err) throw err;
  });
}

removeStartingSlashFromPath('./docs/asset-manifest.json');
removeStartingSlashFromPath('./docs/index.html');
