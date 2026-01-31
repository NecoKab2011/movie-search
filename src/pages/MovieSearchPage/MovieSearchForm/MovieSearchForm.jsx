export const MovieSearchForm = ({ setQuery, query, setSearchParams }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!query) return;
        setSearchParams({ query: query });
      }}
    >
      <label>
        <input
          value={query}
          placeholder="Search..."
          onChange={(e) => setQuery(e.currentTarget.value)}
          type="text"
          name="usesearch"
          required
        />
      </label>
      <button>Submit</button>
    </form>
  );
};