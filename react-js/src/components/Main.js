import CategoryFilter from "./CategoryFilter";
import FactList from "./FactList";
import Loader from "./Loader";

function Main(props) {
  const { facts, setFacts, isLoading, setCurrentCategory } = props;

  return (
    <main className="main">
      <CategoryFilter setCurrentCategory={setCurrentCategory} />
      {isLoading ? <Loader /> : <FactList facts={facts} setFacts={setFacts} />}
    </main>
  );
}

export default Main;
