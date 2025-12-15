import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Suggestions from "../components/Suggestions";
import EmptyFeedback from "../components/EmptyFeedback";
import IconSuggestion from "../assets/suggestions/icon-suggestions.svg";

function Home() {
  //created variable for each category so they can be filtered properly
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const navigate = useNavigate();

  //Use state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //ASYNC function
  const getSuggestions = async () => {
    try {
      setIsLoading(true);

      const url =
        selectedCategory === "All"
          ? "/api/get-all-suggestions"
          : `/api/get-all-suggestions-by-category/${selectedCategory}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log("Suggestions fetched:", data);
      setSuggestions(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching suggestions", error);
      setIsLoading(false);
    }
  };

  //useEffect
  useEffect(() => {
    getSuggestions();
  }, [selectedCategory]);

  return (
    <>
      {/*Add Feedback button and suggestions header*/}

      <div className="home-page-container">
        {/*Sidebar*/}
        <div className="sidebar">
          {/*Wrapping My Company and Feedback Board in one box*/}
          <div className="company-feedback-box">
            <h2>My Company </h2>
            <p>Feedback Board</p>
          </div>

          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/*Main Content */}
        <div className="top-header">
          <img src={IconSuggestion} alt="suggestions bulb" />
          <h3>{suggestions.length} Suggestions</h3>
          <button className="add-btn" onClick={() => navigate("/AddFeedback")}>
            + Add Feedback
          </button>
        </div>

        <div className="content-area">
          {/*Loading */}
          {isLoading && <p>Loading...</p>}

          {/*Empty State */}
          <div className="empty-feedback">
            {!isLoading && suggestions.length === 0 && <EmptyFeedback />}
          </div>
          {/* Suggestions List */}
          {!isLoading && suggestions.length > 0 && (
            <Suggestions suggestions={suggestions} />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
