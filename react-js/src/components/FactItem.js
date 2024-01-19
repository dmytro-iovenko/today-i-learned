import { useState } from "react";
import { CATEGORIES } from "../data";
import supabase from "../services/supabase-api";

function FactItem(props) {
  const { fact, setFacts } = props;
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  async function handleVote(event) {
    const name = event.target.name;
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [name]: fact[name] + 1 })
      .eq("id", fact.id)
      .select();
    setIsUpdating(false);
    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
    else alert("There was a problem updating data");
  }

  return (
    <li className="fact">
      <p>
        {isDisputed && <span className="disputed">[⛔️ DISPUTED]</span>}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          name="votesInteresting"
          onClick={handleVote}
          disabled={isUpdating}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          name="votesMindblowing"
          onClick={handleVote}
          disabled={isUpdating}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button name="votesFalse" onClick={handleVote} disabled={isUpdating}>
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
}

export default FactItem;
