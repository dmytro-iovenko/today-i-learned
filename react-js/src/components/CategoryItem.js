function CategoryItem(props) {
  const { category, setCurrentCategory } = props;
  const filterFacts = (event) => {
    const category = event.target.textContent || event.target.innerText;
    setCurrentCategory(category);
  };

  return (
    <li className="category">
      {"color" in category ? (
        <button
          className="btn btn-category"
          style={{ backgroundColor: category.color }}
          onClick={filterFacts}
        >
          {category.name}
        </button>
      ) : (
        <button 
          className="btn btn-all-categories" 
          onClick={filterFacts}
        >
          {category.name}
        </button>
      )}
    </li>
  );
}

export default CategoryItem;
