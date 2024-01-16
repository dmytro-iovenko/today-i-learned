import CategoryFilter from "./CategoryFilter";
import FactList from "./FactList";

function Main(props) {
  const { facts } = props;

  return (
    <main className="main">
      <CategoryFilter />
      <FactList facts={facts} />
    </main>
  );
}

export default Main;
