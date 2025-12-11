function Suggestions({ suggestions }) {
  return (
    <>
      <div className="suggestions-list">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion-card">
            <div className="suggestion-content">
              <h3>{suggestion.title}</h3>
              <p>{suggestion.description}</p>
              <span className="category-tag">{suggestion.category}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Suggestions;
