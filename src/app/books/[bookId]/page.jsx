


export const generateStaticParams = async() => {
  const res = await fetch('http://localhost:5000/books');
  const books = await res.json();

 
  return books.map(book => ({bookId: book.id}))
} 



const BookDetailsPage = async({params}) => {
    const {bookId} = await params;
    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const books = await res.json();
    // console.log(books, "form bookID");
   const {
    title,
    author,
    category,
    price,
    rating,
    publishedYear,
    pages,
    language,
    inStock,
    image,
    description,
  } = books;
    return (
        <div>
            <h1>Book Details</h1>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <h4>{category}</h4>
            <h4>{price}</h4>
            <h4>{language}</h4>
            <p>{description}</p>
            
        </div>
    )
};

export default BookDetailsPage;