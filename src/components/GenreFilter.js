import React from "react";

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

function GenreFilter({ setCurrentGenre }) {
  const handleGenreClick = (genre) => {
    console.log("Clicked genre:", genre);
    setCurrentGenre(genre);
  };

  return (
    <aside>
      <ul>
        {GENRE.map((gen) => (
          <li key={gen.name} className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: gen.color }}
              onClick={() => handleGenreClick(gen.name)}
            >
              {gen.name}
            </button>
          </li>
        ))}
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => handleGenreClick("all")}
          >
            All
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default GenreFilter;
