import { useState } from "react";
import { useNavigate } from "react-router-dom";
import newFeedbackIcon from "../assets/icons/icon-new-feedback.svg";

function AddFeedback() {
  //used to help user navigate between pages
  const navigate = useNavigate();

  //UseState
  const [title, setTitle] = useState(""); //stores what user types into title input
  const [category, setCategory] = useState("Feature"); //stores the selected category (default is Feature)
  const [description, setDescription] = useState(""); //stores the feedback description input

  //ASYNC function that will send feedback data to backend
  const submitFeedback = async () => {
    try {
      //Make a POST request to save the new suggestion
      const response = await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          category: category,
        }),
      });

      const data = await response.text(); //reads the response from the server
      console.log("Feedback submitted successfully", data);

      //if error occurs, log it
    } catch (error) {
      console.error("Could not submit feedback", error);
    }
  };

  //Handle submit: will run once the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); //stops the page from refreshing

    console.log("Form Data:", { title, category, description }); //log form data for debugging

    submitFeedback(); //sends the feedback to the backend

    //this will be used to navigate back to home page
    navigate("/");

    //Reset form
    setTitle("");
    setCategory("Feature");
    setDescription("");
  };

  return (
    <>
      <div className="add-feedback-page">
        <div className="add-feedback-container">
          {/*Back Button*/}
          <div className="back-button-styling">
            <button className="back-btn" onClick={() => navigate("/")}>
              <span className="arrow">←</span>
              Go Back
            </button>
          </div>

          <div className="form-card">
            <div className="add-feedback-icon">
              <img src={newFeedbackIcon} alt="New feedback" />
            </div>
            <h1> Create New Feedback</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label> Feedback Title</label>
                <p>Add a short, descriptive headline</p>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <p>Choose a category for your feedback</p>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>UI</option>
                  <option>UX</option>
                  <option>Bug</option>
                  <option>Feature</option>
                  <option>Enhancement</option>
                </select>
              </div>

              <div className="form-group">
                <label> Feedback Detail</label>
                <p>
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="group-form-btns">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFeedback;
