import BookCard from "../components/BookCard";

 const getBooks = async () => {
    const res = await fetch('http://localhost:5000/books', {next: {revalidate: 10}});
    if(!res.ok) {
        throw new Error('something Wrong Fail to fetch')
    }
    return res.json();
 }


const BooksPage = async() => {
    const books = await getBooks();
    return (
        <div>
                <h1>Books:{books.length}</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        books.map(book => <BookCard key={book.id} book = {book}></BookCard>)
                    }
                </div>
        </div>
    );
};

export default BooksPage;