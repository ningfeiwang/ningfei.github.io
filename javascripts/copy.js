document.querySelector('.show-bib').addEventListener('click', function(e) {
    e.preventDefault();
    var bibContent = document.querySelector('.bibref');
    var copyButton = document.querySelector('.copy-bib-btn');
    
    bibContent.style.display = 'block';
    copyButton.style.display = 'block';
});

document.querySelector('.copy-bib-btn').addEventListener('click', function() {
    var bibContent = document.querySelector('.bibref').textContent;
    
    // Create a temporary textarea to copy from
    var tempTextarea = document.createElement('textarea');
    document.body.appendChild(tempTextarea);
    tempTextarea.value = bibContent;
    tempTextarea.select();

    // Copy the content and remove the temporary textarea
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    // Optionally, notify the user
    alert('BibTeX content copied!');
});