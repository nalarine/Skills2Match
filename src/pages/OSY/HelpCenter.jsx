import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [comment, setComment] = React.useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = React.useState(false);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
    setFeedbackSubmitted(false); // Reset the feedback submission status
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitFeedback = () => {
    alert(`Feedback submitted!\nRating: ${value}\nComment: ${comment}`);
    setFeedbackSubmitted(true);

    // Reset the input fields
    setValue(2); // Set it to the initial value or any default value
    setComment("");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 style={{ paddingTop: "50px" }}>How was your experience? </h1>

      <Box
        sx={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          paddingTop: "30px",
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={handleRatingChange}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          size="large" // Increase the size
        />
        {value !== null && (
          <Box sx={{ mt: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>

      <textarea
        placeholder="Add your comment here..."
        value={comment}
        onChange={handleCommentChange}
        rows={4}
        style={{ marginTop: "10px", width: "30%" }}
      />

      <button
        onClick={handleSubmitFeedback}
        style={{
          marginTop: "10px",
          padding: "8px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit Feedback
      </button>

      {feedbackSubmitted && (
        <div style={{ marginTop: "10px", color: "green" }}>
          Feedback submitted successfully!
        </div>
      )}
    </div>
  );
}
