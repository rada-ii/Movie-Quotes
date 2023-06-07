import React, { useState } from "react";
import supabase from "../supabase";

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

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewQuoteForm({ setQuotes, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");
  const [actor, setActor] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  async function handleSubmit(e) {
    // 1. Prevent browser reload
    e.preventDefault();
    // console.log(text, source, genre);
    // 2. Check if data is valid. If so, create a new fact
    if (text && isValidHttpUrl(source) && genre && textLength <= 200) {
      console.log("valid data");
      try {
        setIsUploading(true);
        const { data: newQuote, error } = await supabase
          .from("quotes")
          .insert([
            {
              text,
              source,
              genre,
              characterInTheMovie: character,
              actor,
              nameOfTheMovie: name,
            },
          ])
          .select();
        setIsUploading(false);
        if (!error) {
          setQuotes((quotes) => [newQuote[0], ...quotes]);
          setText("");
          setSource("");
          setGenre("");
          setName("");
          setCharacter("");
          setActor("");
          setShowForm(false);
        }
      } catch (error) {
        console.error("Error creating new quote:", error);
      }
    }
  }
  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <input
        className="quote-text"
        type="text"
        placeholder="Share a quote..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        className="source-text"
        type="text"
        placeholder="Source:(https://example.com/)"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">Choose category:</option>
        {GENRE.map((gen) => (
          <option key={gen.name} value={gen.name}>
            {gen.name.toUpperCase()}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Actor..."
        value={actor}
        onChange={(e) => setActor(e.target.value)}
        disabled={isUploading}
      />
      <input
        type="text"
        placeholder="Character in the movie..."
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        disabled={isUploading}
      />
      <input
        type="text"
        placeholder="Name of the movie..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isUploading}
      />
      <button className="btn btn-large">Post</button>
    </form>
  );
}
export default NewQuoteForm;
