import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import NewFactForm from "./NewFactForm";
import { initialFacts } from "../data";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

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
