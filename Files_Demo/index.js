const { addProductFromUser } = require('./write');
const { readBackupSync, readBackupAsync } = require('./read');

(async () => {
  try {
    await addProductFromUser();  // Wait until user input is complete
    readBackupSync();            // Then read backup.json sync
    readBackupAsync();           // Then read backup.json async
  } catch (err) {
    console.error('Error:', err);
  }
})();
