const fs = require('fs');

function readBackupSync() {
  try {
    const data = fs.readFileSync('backup.json', 'utf8');
    const products = JSON.parse(data);
    console.log('Sync Read:', products);
  } catch (err) {
    console.error('Error reading backup.json sync:', err);
  }
}

function readBackupAsync() {
  fs.readFile('backup.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading backup.json async:', err);
      return;
    }
    try {
      const products = JSON.parse(data);
      console.log('Async Read:', products);
    } catch (parseErr) {
      console.error('Error parsing backup.json:', parseErr);
    }
  });
}

module.exports = {
  readBackupSync,
  readBackupAsync
};
