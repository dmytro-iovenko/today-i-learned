import { CATEGORIES } from "../data";
import CategoryItem from "./CategoryItem";

function CategoryFilter() {
  return (
    <aside>
      <ul className="side-bar">
        <CategoryItem category={{ name: "All" }} />
        {CATEGORIES.map((category) => (
          <CategoryItem category={category} key={category.name} />
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
