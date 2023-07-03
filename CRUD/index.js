const express = require('express');
const app = express();
app.use(express.json());

// In-memory data store (replace with a database in production)
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Get a specific book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.json(book);
  }
});

// Create a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: generateId(), title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update an existing book
// Serve the HTML page for updating a book
// app.get('/books/:id', (req, res) => {
//     const bookId = parseInt(req.params.id);
//     const book = books.find((b) => b.id === bookId);
//     if (!book) {
//       res.status(404).json({ error: 'Book not found' });
//     } else {
//       res.send(`
//         <html>
//           <body>
//             <h1>Update Book</h1>
//             <form id="updateForm">
//               <input type="text" id="titleInput" value="${book.title}" placeholder="Title">
//               <input type="text" id="authorInput" value="${book.author}" placeholder="Author">
//               <button onclick="updateBook(${book.id})">Update</button>
//             </form>
//             <script>
//               function updateBook(id) {
//                 const title = document.getElementById('titleInput').value;
//                 const author = document.getElementById('authorInput').value;
//                 fetch('/books/' + id, {
//                   method: 'PUT',
//                   headers: {
//                     'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify({ title, author })
//                 })
//                   .then(response => response.json())
//                   .then(updatedBook => {
//                     // Handle the updated book as needed
//                     console.log(updatedBook);
//                   });
//               }
//             </script>
//           </body>
//         </html>
//       `);
//     }
//   });
  
// Delete a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === bookId);
  if (index === -1) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
  }
});

// Serve the HTML page with the input field and buttons
// Serve the HTML page with the input field and buttons
app.get('/', (req, res) => {
    res.send(`
      <html>
        <body>
          <h1>Books</h1>
          <ul id="bookList">
            <!-- Display books dynamically here -->
          </ul>
          <h2>Add Book</h2>
          <input id="titleInput" type="text" placeholder="Title">
          <input id="authorInput" type="text" placeholder="Author">
          <button onclick="addBook()">Add</button>
          <script>
            // Fetch all books and display them on page load
            fetch('/books')
              .then(response => response.json())
              .then(books => {
                const bookList = document.getElementById('bookList');
                bookList.innerHTML = books.map(book => '<li>' + book.title + ' by ' + book.author + '</li>').join('');
              });
  
            // Function to add a new book
            function addBook() {
              const title = document.getElementById('titleInput').value;
              const author = document.getElementById('authorInput').value;
              fetch('/books', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author })
              })
                .then(response => response.json())
                .then(newBook => {
                  const bookList = document.getElementById('bookList');
                  bookList.innerHTML += '<li>' + newBook.title + ' by ' + newBook.author + '</li>';
                });
            }
          </script>
        </body>
      </html>
    `);
  });
  

// Helper function to generate a new ID
function generateId() {
  const maxId = books.reduce((max, book) => (book.id > max ? book.id : max), 0);
  return maxId + 1;
}

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
