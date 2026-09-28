'use client'

import Link from "next/link";
import { use, useContext } from "react";
import { UserContext } from "../context/UserContext";

const BookCard = ({book}) => {
    const {title, author,id} = book;
    const user = use(UserContext);
    console.log(user, 'context in the bookcard');
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{author}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      <Link href={`/books/${id}`}>
      <button className="btn btn-primary">Show Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;