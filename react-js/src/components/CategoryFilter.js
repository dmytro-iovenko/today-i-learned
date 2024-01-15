function CategoryFilter() {
  return (
    <aside>
      <ul class="side-bar">
        <li class="category">
          <button class="btn btn-all-categories" onclick="filterFacts();">
            All
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default CategoryFilter;
