function fetchBooks() {
  console.log("Calling fetchBooks...")
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
     .then(response =>{
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
     })
     .then(data =>{
      console.log("Fetched books:",data);
      renderBooks(data);
     })
     .catch(error=>{
       console.error("Error during fetchBooka:",error);
     });
}

function renderBooks(books) {
  const main = document.querySelector('main');

  if(!main){
    console.error("No <main> element found in DOM.");
    return;
  }
  
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});