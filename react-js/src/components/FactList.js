import FactItem from "./FactItem";

function FactList(props) {
  const { facts, setFacts } = props;

  if (facts.length === 0)
    return (
      <p className="message">
        No facts for this category yet! Create the first one ✌️
      </p>
    );

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <FactItem fact={fact} key={fact.id} setFacts={setFacts} />
        ))}
      </ul>
      <p>There are {facts.length} facts in the database. Add your own!</p>
    </section>
  );
}

export default FactList;
