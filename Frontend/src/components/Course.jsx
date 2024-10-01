import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstorebackend-0lm0.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-10 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl mt-20">
            We're delighted to have you{" "}
            <span className="text-blue-600"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Thank you for visiting our bookstore! We believe that every book has the power to transform lives and ignite imaginations. As you explore our collection, we invite you to indulge in stories that inspire, educate, and entertain. Your journey into the world of literature starts here, and we're excited to share it with you!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
