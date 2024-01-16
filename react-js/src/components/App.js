import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import NewFactForm from "./NewFactForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      <Header setShowForm={setShowForm} />
      {showForm && <NewFactForm />}
      <Main />
    </div>
  );
}

export default App;
