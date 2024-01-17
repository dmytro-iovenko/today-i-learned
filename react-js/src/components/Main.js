import CategoryFilter from "./CategoryFilter";
import FactList from "./FactList";
import Loader from "./Loader";

function Main(props) {
  const { facts, isLoading } = props;

  return (
    <main className="main">
      <CategoryFilter />
      {isLoading ? <Loader /> : <FactList facts={facts} />}
    </main>
  );
}

export default Main;
