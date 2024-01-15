function CategoryFilter() {
  const filterFacts = () => {
    return null;
  };

  return (
    <aside>
      <ul className="side-bar">
        <li className="category">
          <button className="btn btn-all-categories" onClick={filterFacts}>
            All
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default CategoryFilter;
