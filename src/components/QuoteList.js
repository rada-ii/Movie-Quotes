// import React, { useState } from "react";

// const GENRE = [
//   { name: "thriller", color: "#3b82f6" },
//   { name: "fantasy", color: "#16a34a" },
//   { name: "action", color: "#ef4444" },
//   { name: "adventure", color: "#eab308" },
//   { name: "drama", color: "#db2777" },
//   { name: "crime", color: "#14b8a6" },
//   { name: "romance", color: "#f97316" },
//   { name: "war", color: "#8b5cf6" },
//   { name: "comedy", color: "#74b9ff" },
// ];

const GENRE = [
  { name: "thriller", color: getRandomColor() },
  { name: "fantasy", color: getRandomColor() },
  { name: "action", color: getRandomColor() },
  { name: "adventure", color: getRandomColor() },
  { name: "drama", color: getRandomColor() },
  { name: "crime", color: getRandomColor() },
  { name: "romance", color: getRandomColor() },
  { name: "war", color: getRandomColor() },
  { name: "comedy", color: getRandomColor() },
];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function QuoteList({ quotes }) {
  if (quotes.length === 0)
    return (
      <div className="quote-content">
        <h2>
          There are no quotes for this genre of the movie! Create the first
          one!😉
        </h2>
      </div>
    );

  return (
    <section>
      <ul className="quotes-list">
        {quotes.map((quote) => (
          <li key={quote.id} className="quote">
            <p className="qoute-text">
              {quote.text}
              <a
                className="source"
                href={quote.source}
                // target="_blank"
              >
                (Source)
              </a>
            </p>
            <span
              className="tag"
              style={{
                backgroundColor: GENRE.find(
                  (genre) => genre.name === quote.genre
                ).color,
              }}
            >
              {quote.genre}
            </span>
            <div className="vote-buttons">
              <button>{quote.actor}</button>
              <button>{quote.characterInTheMovie}</button>
              <button>{quote.nameOfTheMovie}</button>
            </div>
          </li>
        ))}
      </ul>
      <p>
        {quotes.length === 1
          ? `There is ${quotes.length} quote in the database. Add your own!`
          : `There are ${quotes.length} quotes in the database. Add your own!`}
      </p>
    </section>
  );
}

export default QuoteList;
