import React from "react";

function Cards({ item }) {
  if (!item) return null; // Return null if item is undefined

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image || "https://via.placeholder.com/150"}
            alt={item.name || "Book Cover"}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name || "Unknown Title"}
            <div className="badge badge-secondary">
              {item.category || "Unknown Category"}
            </div>
          </h2>
          <p>{item.title || "No description available"}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price || "0.00"}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
