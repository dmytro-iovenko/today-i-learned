function CategoryItem(props) {
  const { category } = props;
  const filterFacts = () => {
    return null;
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
        <button className="btn btn-all-categories" onClick={filterFacts}>
          {category.name}
        </button>
      )}
    </li>
  );
}

export default CategoryItem;
