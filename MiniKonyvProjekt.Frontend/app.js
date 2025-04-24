async function loadBooks() {
    const res = await fetch('/api/books');
    const books = await res.json();

    const list = document.getElementById('book-list');
    list.innerHTML = '';
    books.forEach(b => {
        const item = document.createElement('li');
        item.textContent = `${b.cim} – ${b.szerzo}`;
        const del = document.createElement('button');
        del.textContent = 'Törlés';
        del.onclick = () => deleteBook(b.id);
        item.appendChild(del);
        list.appendChild(item);
    });
}

async function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cim: title, szerzo: author })
    });

    loadBooks();
}

async function deleteBook(id) {
    await fetch(`/api/books/${id}`, { method: 'DELETE' });
    loadBooks();
}

loadBooks();
