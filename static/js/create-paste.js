// create-paste.js

// Function to create a new file in the pages directory
function createNewFile(title, author, content) {
  // Create a clone of the index.html content
  var cloneIndex = document.documentElement.cloneNode(true);

  // Replace placeholder texts with variables
  cloneIndex.querySelector("#paste-title").placeholder = title;
  cloneIndex.querySelector("#author-name").placeholder = author;
  cloneIndex.querySelector("#paste-content").placeholder = content;

  // Append the cloned content to the document body
  document.body.innerHTML = cloneIndex.innerHTML;

  // Save the page as .html with the specified title
  saveAsHtml(title);
}

// Function to save the page as a .html file
function saveAsHtml(title) {
  // Get the content of the current page
  var htmlContent = document.documentElement.outerHTML;

  // Create a Blob object from the HTML content
  var blob = new Blob([htmlContent], { type: 'text/html' });

  // Create a URL for the Blob object
  var url = URL.createObjectURL(blob);

  // Create an anchor element for downloading
  var a = document.createElement('a');
  a.href = url;
  a.download = title + '.html'; // Specify the file name here

  // Append the anchor element to the body and trigger the download
  document.body.appendChild(a);
  a.click();

  // Remove the anchor element
  document.body.removeChild(a);
}
