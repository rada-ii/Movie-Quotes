import React from "react";

function Header({ showForm, setShowForm }) {
  // const [showForm, setShowForm] = useState(false);
  const appTitle = "Movie Quotes";

  return (
    <header className="header">
      <div className="logo">
        <img src="movie.png" height="68" width="68" alt="Movie logo" />
        <h1>{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a quote"}
      </button>
    </header>
  );
}

export default Header;
