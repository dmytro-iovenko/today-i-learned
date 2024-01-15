function NewFactForm() {
  return (
    <form class="fact-form hidden">
      <input type="text" placeholder="Share a fact with the world..." />
      <span>200</span>
      <input type="text" placeholder="Trustworthy source..." />
      <select>
        <option value="">Choose category:</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="finance">Finance</option>
      </select>
      <button class="btn btn-large">Post</button>
    </form>
  );
}

export default NewFactForm;
