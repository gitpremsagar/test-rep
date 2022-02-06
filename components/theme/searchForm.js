import { useState } from "react";

export default function SearchForm() {
  const [formData, setformData] = useState([]);

  function handleSearchTermSubmit(e) {
    e.preventDefault();
    console.log("search form submitted!");
  }
  return (
    <form onSubmit={handleSearchTermSubmit}>
      <input name="searchTerm" type="text" placeholder="search" />
      <button type="submit">search</button>
    </form>
  );
}
