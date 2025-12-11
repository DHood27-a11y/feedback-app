import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFeedback() {
  const navigate = useNavigate();

  //UseState
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Feature");
  const [description, setDescription] = useState("");

  //ASYNC function
  const submitFeedback = async () => {
    try {
      const response = await fetch("http://localhost:3000/add-one-suggestion", {
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

      const data = await response.text();
      console.log("Feedback submitted successfully", data);
    } catch (error) {
      console.error("Could not submit feedback", error);
    }
  };

  //Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { title, category, description });

    submitFeedback();

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
        {/*Back Button*/}
        <button className="back-btn" onClick={() => navigate("/")}>
          <span className="arrow">←</span>
          Go Back
        </button>

        <div className="form-card">
          <h1> Create New Feedback</h1>
          <form onSubmit={handleSubmit}>
            <label> Feedback Title</label>
            <input
              type="text"
              placeholder="Add a short, descriptive headline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label>Category</label>
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

            <label> Feedback Detail</label>
            <textarea
              placeholder="Include any specific comments on what should be improved, added, etc."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <button type="submit">Add Feedback</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddFeedback;
