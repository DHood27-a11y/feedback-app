import { useNavigate } from "react-router-dom";
import emptyIllustration from "../assets/suggestions/illustration-empty.svg";

function EmptyFeedback() {
  const navigate = useNavigate();

  return (
    <>
      <div className="empty-feedback">
        <div className="empty-illustration">
          <img src={emptyIllustration} alt="No feedback yet" />
        </div>

        <h2> There is no feedback yet.</h2>

        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>

        <button
          className="add-feedback-btn"
          onClick={() => navigate("/AddFeedback")}
        >
          + Add Feedback
        </button>
      </div>
    </>
  );
}

export default EmptyFeedback;
