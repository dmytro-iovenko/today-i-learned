import { CATEGORIES } from "../data";
import CategoryItem from "./CategoryItem";

function CategoryFilter(props) {
  const { setCurrentCategory } = props;

  return (
    <aside>
      <ul className="side-bar">
        <CategoryItem
          category={{ name: "all" }}
          setCurrentCategory={setCurrentCategory}
        />
        {CATEGORIES.map((category) => (
          <CategoryItem
            key={category.name}
            category={category}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
