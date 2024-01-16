import FactItem from "./FactItem";

function FactList(props) {
  const { facts } = props;

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <FactItem fact={fact} key={fact.id} />
        ))}
      </ul>
    </section>
  );
}

export default FactList;
