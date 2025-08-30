const fs = require('fs');                                     

const filePath = 'data.txt';                                   


fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error("File does not exist");
        return;
    }

    // Create a readable stream
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    // Read chunks of data
    readStream.on('data', chunk => console.log(chunk));

    // Signal when end of file is reached
    readStream.on('end', () => console.log('--- EOF ---'));

    // Handle errors (e.g., permission issues)
    readStream.on('error', err => console.error("Error reading file:", err.message));
});