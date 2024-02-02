const fs = require('fs');
const path = require('path');

// Specify the directory containing your HTML files
const directoryPath = './Course';

// Flag to track if the first occurrence has been found
let firstOccurrenceFound = false;

// Iterate through each HTML file in the directory
fs.readdirSync(directoryPath).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(directoryPath, file);
    console.log("filepath =", filePath)

    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Replace the specified content within the first <div> with class "residents"
    fileContent = fileContent.replace(
      /<div style=" background-color:transparent" class="residents">[\s\S]*?<\/button>/g,
      match => {
        // Check if this is the first occurrence
        if (!firstOccurrenceFound) {
          firstOccurrenceFound = true;
          return '<div style=" background-color:transparent" class="residents">' +
            '<div class="container-fluid">' +
            '<div class="row">' +
            '<div class="col-xl-7 col-lg-6 col-md-6 col-12">' +
            '<div class="place-heading col-flex">' +
            '<h2 style="color:black;"> Uncodemy </h2>' +
            '<p class="Acce">Access unparalleled learning with live sessions, recordings, assignments, and live projects led by a top-tier mentor and industry expert trainer. Elevate your skills with the best-in-class educational content.</p>' +
            '<button style="color:rgb(247, 5, 5); " type="button" class="fill-btn" data-toggle="modal" onclick="showForm()">Apply Now</button>';
        }
        // If it's not the first occurrence, leave the content unchanged
        return match;
      }
    );

    // Write the updated content back to the file
    fs.writeFileSync(filePath, fileContent);

    // Reset the flag for the next file
    firstOccurrenceFound = false;
  }
});

console.log('HTML files updated successfully.');
