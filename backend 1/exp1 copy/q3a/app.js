const fs = require('fs');  // Import the filesystem module

// Create a writable stream to output.txt
const writeStream = fs.createWriteStream('output.txt');

// Write data to the stream
writeStream.write("Hello, Node.js!");

// Close the stream
writeStream.end();

// Success and error handlers
writeStream.on('finish', () => {
    console.log("Data successfully written to output.txt");
});

writeStream.on('error', (err) => {
    console.error("Error writing to file:", err.message);
});