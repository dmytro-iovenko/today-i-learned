import { useState } from "react";
import { CATEGORIES } from "../data";
import supabase from "../services/supabase-api";

function NewFactForm(props) {
  const { setFacts, setShowForm } = props;
  const emptyData = {
    text: "",
    source: "",
    category: "",
  };
  const [formData, setFormData] = useState(emptyData);
  const [isUploading, setIsUploading] = useState(false);
  const textLength = formData.text.length;

  const capitalize = (s) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const checkValidity = () => {
    // check form data is not empty
    if (
      !(
        formData.text &&
        formData.source &&
        formData.category &&
        textLength <= 200
      )
    )
      return false;
    // check if category exists in the list
    if (!CATEGORIES.some((category) => category.name === formData.category))
      return false;
    // check if source is valid url
    let url;
    try {
      url = new URL(formData.source);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  async function submitForm(event) {
    event.preventDefault();
    if (checkValidity()) {
      // let nextId = facts.length > 0 ? facts[facts.length - 1].id + 1 : 1;
      // let newFact = {
      //   ...formData,
      //   id: nextId,
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear(),
      // };
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ ...formData }])
        .select();
      setIsUploading(false);
      if (!error) setFacts((facts) => [...newFact, ...facts]);
      else alert("There was a problem uploading data");
      setFormData(emptyData);
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={submitForm}>
      <input
        name="text"
        type="text"
        placeholder="Share a fact with the world..."
        value={formData.text}
        onChange={handleForm}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        name="source"
        type="text"
        placeholder="Trustworthy source..."
        value={formData.source}
        onChange={handleForm}
        disabled={isUploading}
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleForm}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {capitalize(category.name)}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

export default NewFactForm;
