let books = [];

document.getElementById('add-book-btn').addEventListener('click', addBook);
document.getElementById('search-btn').addEventListener('click', searchBooks);

function addBook() {
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const genres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
                        .map(checkbox => checkbox.value);

    if (!title || !author || !pages || genres.length === 0) {
        displayMessage('Please fill all the fields before adding a book.', 'error');
        return;
    }

    const newBook = { title, author, pages: Number(pages), genres };
    books.push(newBook);
    displayBooks(books);
    clearInputs();
    displayMessage('Book added successfully!', 'success');
}

function searchBooks() {
    const searchValue = document.getElementById('search').value.trim().toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchValue));

    if (filteredBooks.length === 0) {
        displayMessage('No books found.', 'error');
    } else {
        displayMessage('');
    }

    displayBooks(filteredBooks);
}

function displayBooks(bookArray) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    bookArray.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Genres:</strong> ${book.genres.join(', ')}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.querySelectorAll('input[name="genre"]').forEach(checkbox => checkbox.checked = false);
}

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;

    if (type === 'error') {
        messageDiv.style.color = '#d32f2f';
    } else if (type === 'success') {
        messageDiv.style.color = '#8b0000';
    } else {
        messageDiv.innerText = '';
    }
}
