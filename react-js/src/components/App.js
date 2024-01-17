import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import NewFactForm from "./NewFactForm";
import { initialFacts } from "../data";
import supabase from "../services/supabase-api";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    async function getFacts() {
      const { data: facts } = await supabase.from("facts").select();
      setFacts(facts);
    }
    getFacts();
  }, []);

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
      <Main facts={facts} />
    </div>
  );
}

export default App;
