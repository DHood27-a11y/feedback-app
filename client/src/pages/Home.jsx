import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Suggestions from "../components/Suggestions";
import EmptyFeedback from "../components/EmptyFeedback";
import IconSuggestion from "../assets/suggestions/icon-suggestions.svg";

function Home() {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]; //created variable for each category so they can be filtered properly

  const navigate = useNavigate(); //allows user to navigate to different page

  const [selectedCategory, setSelectedCategory] = useState("All"); //will keep track of which category is currently selected
  const [suggestions, setSuggestions] = useState([]); //stores the suggestions gotten from backend
  const [isLoading, setIsLoading] = useState(true); //will produce loading message while backend talks to frontend

  //ASYNC function that will get suggestions from the backend
  const getSuggestions = async () => {
    try {
      setIsLoading(true); //this will turn on loading prior to fetching

      const url =
        selectedCategory === "All"
          ? "/api/get-all-suggestions"
          : `/api/get-all-suggestions-by-category/${selectedCategory}`; //If "all" is selected, get everything; otherwise get only suggestions for that category

      const response = await fetch(url); //makes the request
      const data = await response.json();
      console.log("Suggestions fetched:", data);
      //saves the results into state
      setSuggestions(data);
      setIsLoading(false);
      //this will catch error and log it
    } catch (error) {
      console.error("Error fetching suggestions", error);
      //turn off loading no matter what occurs
      setIsLoading(false);
    }
  };

  //useEffect will run getSuggestions every time the category changes
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
