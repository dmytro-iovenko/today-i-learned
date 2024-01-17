import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import NewFactForm from "./NewFactForm";
import supabase from "../services/supabase-api";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true);
      const query =
        currentCategory === "all"
          ? supabase.from("facts").select()
          : supabase.from("facts").select().eq("category", currentCategory);
      const { data: facts, error } = await query
        .order("votesInteresting", { ascending: false })
        .limit(20);
      if (!error) setFacts(facts);
      else alert("Tehre was a problem getting data");
      setIsLoading(false);
    }
    getFacts();
  }, [currentCategory]);

  return (
    <div className="container">
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm && (
        <NewFactForm
          facts={facts}
          setFacts={setFacts}
          setShowForm={setShowForm}
        />
      )}
      <Main
        facts={facts}
        isLoading={isLoading}
        setCurrentCategory={setCurrentCategory}
      />
    </div>
  );
}

export default App;
