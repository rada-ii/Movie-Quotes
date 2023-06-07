import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./App.css";
import GenreFilter from "./components/GenreFilter";
import Header from "./components/Header";
import NewQuoteForm from "./components/NewQuoteForm";
import QuoteList from "./components/QuoteList";
import Loader from "./components/Loader";
import PageError from "./components/PageError";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentGenre, setCurrentGenre] = useState("all");

  useEffect(() => {
    async function getQuotes() {
      let query = supabase.from("quotes").select("*");
      if (currentGenre !== "all") query = query.eq("genre", currentGenre);
      setIsLoading(true);
      try {
        const { data, error } = await query
          .order("nameOfTheMovie", { ascending: true })
          .limit(15);
        if (!error) {
          setQuotes(data);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    getQuotes();
  }, [currentGenre]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <PageError />;
  }

  return (
    <>
      <div className="container">
        <Header showForm={showForm} setShowForm={setShowForm} />
        {showForm ? (
          <NewQuoteForm setQuotes={setQuotes} setShowForm={setShowForm} />
        ) : null}

        <main className="main">
          <GenreFilter setCurrentGenre={setCurrentGenre} />
          <QuoteList quotes={quotes} />
        </main>
      </div>
    </>
  );
}

export default App;
