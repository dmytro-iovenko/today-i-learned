import { initialFacts } from "../data";
import FactItem from "./FactItem";

function FactList() {
  return (
    <section>
      <ul className="facts-list">
        {initialFacts.map((fact) => (
          <FactItem fact={fact} key={fact.id} />
        ))}
      </ul>
    </section>
  );
}

export default FactList;
