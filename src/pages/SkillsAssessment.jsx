import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SkillsAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    communication: "",
    problemSolving: "",
    technicalProficiency: "",
    teamwork: "",
    timeManagement: "",
  });

  // Initialize suggestedRoles state
  const [suggestedRoles, setSuggestedRoles] = useState(null);

  const questions = [
    {
      category: "communication",
      question:
        "How would you handle a situation where there is a miscommunication with a team member?",
      choices: [
        " A. Schedule a meeting to discuss and clarify the communication.",
        " B. Send a detailed email to all involved parties explaining the situation.",
        " C. Pick up the phone and directly communicate to resolve the issue.",
      ],
    },
    {
      category: "communication",
      question:
        "In a professional setting, how do you tailor your communication style when interacting with different stakeholders (e.g., team members, managers, clients)?",
      choices: [
        " A. Use the same communication style with everyone.",
        " B. Adapt communication style based on the audience to ensure understanding.",
        " C. Only communicate through written channels.",
      ],
    },
    {
      category: "problem-solving",
      question:
        "Describe a challenging problem you faced at a previous job and how you approached solving it.",
      choices: [
        " A. Ignored the problem, hoping it would resolve itself.",
        " B. Collaborated with colleagues to brainstorm and implement a solution",
        " C. Took immediate action without consulting others.",
      ],
    },
    {
      category: "problem-solving",
      question:
        "How do you prioritize tasks when faced with multiple deadlines?",
      choices: [
        " A. Tackle tasks randomly as they come in.",
        " B. Prioritize based on urgency and importance.",
        " C. Focus only on tasks that are personally interesting.",
      ],
    },
    {
      category: "technical-proficiency",
      question: "What programming languages or tools are you proficient in?",
      choices: [
        " A. None.",
        " B. Proficient in one or two specific languages/tools.",
        " C. Proficient in multiple languages/tools with examples of projects.",
      ],
    },
    {
      category: "technical-proficiency",
      question:
        "How do you stay updated on industry trends and new technologies relevant to your field?",
      choices: [
        " A. I don't follow industry trends.",
        " B. Occasionally read articles or blogs.",
        " C. Regularly attend conferences, webinars, and actively engage in the community.",
      ],
    },
    {
      category: "teamwork",
      question:
        "Describe a successful team project you were part of. What was your role, and how did you contribute to the team's success?",
      choices: [
        " A. Never worked in a team project.",
        " B. Had a minor role and didn't contribute significantly.",
        " C. Played a key role, collaborating and contributing to the team's success.",
      ],
    },
    {
      category: "teamwork",
      question: "How do you handle conflicts within a team?",
      choices: [
        " A. Avoid conflicts and hope they resolve on their own.",
        " B. Confront conflicts directly and seek resolution.",
        " C. Escalate conflicts to higher management immediately.",
      ],
    },
    {
      category: "timeManagement",
      question:
        "How do you organize your tasks and manage your time to meet deadlines?",
      choices: [
        " A. Work on tasks as they come in without a plan.",
        " B. Use a to-do list or project management tool to prioritize tasks.",
        " C. Rely solely on memory to keep track of tasks.",
      ],
    },
    {
      category: "timeManagement",
      question:
        "Have you ever missed a deadline, and if so, how did you handle the situation.",
      choices: [
        " A. Never missed a deadline.",
        " B. Missed a deadline but communicated proactively and worked to resolve it.",
        " C. Missed a deadline without communication or attempting to resolve the issue.",
      ],
    },
  ];

  const handleAnswer = (value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questions[currentQuestion].category]: value,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const interpretResults = () => {
    const communicationRoles = {
      A: {
        keyPoint:
          "Schedule a meeting to discuss and clarify the communication.",
        suggestedJobs: [
          "Project Manager",
          "Team Leader",
          "Customer Support Manager",
        ],
      },
      B: {
        keyPoint:
          "Send a detailed email to all involved parties explaining the situation.",
        suggestedJobs: [
          "Technical Writer",
          "Marketing Coordinator",
          "Content Strategist",
        ],
      },
      C: {
        keyPoint:
          "Pick up the phone and directly communicate to resolve the issue.",
        suggestedJobs: [
          "Sales Representative",
          "Account Manager",
          "Customer Service Representative",
        ],
      },
    };

    const problemSolvingRoles = {
      A: {
        keyPoint: "Ignored the problem, hoping it would resolve itself.",
        suggestedJobs: ["Administrative Assistant", "Data Entry Clerk"],
      },
      B: {
        keyPoint:
          "Collaborated with colleagues to brainstorm and implement a solution.",
        suggestedJobs: ["Project Coordinator", "Analyst", "Researcher"],
      },
      C: {
        keyPoint: "Took immediate action without consulting others.",
        suggestedJobs: [
          "Entrepreneur",
          "Crisis Manager",
          "Emergency Response Coordinator",
        ],
      },
    };

    const technicalProficiencyRoles = {
      A: {
        keyPoint: "None.",
        suggestedJobs: ["Intern", "Trainee", "Entry-level Assistant"],
      },
      B: {
        keyPoint: "Proficient in one or two specific languages/tools.",
        suggestedJobs: [
          "Junior Developer",
          "IT Support Specialist",
          "Technical Support",
        ],
      },
      C: {
        keyPoint:
          "Proficient in multiple languages/tools with examples of projects.",
        suggestedJobs: [
          "Full-stack Developer",
          "Software Engineer",
          "Systems Architect",
        ],
      },
    };

    const teamworkRoles = {
      A: {
        keyPoint: "Never worked in a team project.",
        suggestedJobs: ["Individual Contributor roles", "Research Assistant"],
      },
      B: {
        keyPoint: "Had a minor role and didn't contribute significantly.",
        suggestedJobs: ["Junior Team Member", "Support Staff", "Assistant"],
      },
      C: {
        keyPoint:
          "Played a key role, collaborating and contributing to the team's success.",
        suggestedJobs: ["Team Leader", "Project Manager", "Senior Developer"],
      },
    };

    const timeManagementRoles = {
      A: {
        keyPoint: "Work on tasks as they come in without a plan.",
        suggestedJobs: ["Personal Assistant", "Office Assistant"],
      },
      B: {
        keyPoint:
          "Use a to-do list or project management tool to prioritize tasks.",
        suggestedJobs: [
          "Project Coordinator",
          "Administrative Coordinator",
          "Planner",
        ],
      },
      C: {
        keyPoint: "Rely solely on memory to keep track of tasks.",
        suggestedJobs: [
          "Entry-level roles with minimal multitasking",
          "Trainee",
        ],
      },
    };
    return {
      communication: communicationRoles[answers.communication],
      problemSolving: problemSolvingRoles[answers.problemSolving],
      technicalProficiency:
        technicalProficiencyRoles[answers.technicalProficiency],
      teamwork: teamworkRoles[answers.teamwork],
      timeManagement: timeManagementRoles[answers.timeManagement],
      // Add more categories if needed
    };
  };

  const handleSubmit = () => {
    console.log("here");
    console.log("Answers submitted:", answers);
    const suggestedRoles = interpretResults();
    console.log("Suggested Job Roles:", suggestedRoles);
    setSuggestedRoles(suggestedRoles);
  };

  return (
    <Card variant="outlined" className="m-10">
      <CardContent>
        <Typography variant="h5" component="div">
          Skill Assessment
        </Typography>
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].choices.map((choice, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name={questions[currentQuestion].category}
                  value={index}
                  checked={
                    answers[questions[currentQuestion].category] === index
                  }
                  onChange={() => handleAnswer(index)}
                />
                {choice}
              </label>
            </div>
          ))}
        </div>
        <div className="button-container">
          {currentQuestion > 0 && (
            <Button
              variant="contained"
              onClick={handlePreviousQuestion}
              style={{ marginRight: "8px" }}
            >
              Previous
            </Button>
          )}
          {currentQuestion < questions.length - 1 && (
            <Button variant="contained" onClick={handleNextQuestion}>
              Next
            </Button>
          )}
          {currentQuestion === questions.length - 1 && (
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
  {
    /* Display suggested roles after submission */
  }
  const renderSuggestedRoles = () => {
    return (
      <div>
        <Typography variant="h6">Suggested Job Roles:</Typography>
        <ul>
          {Object.entries(suggestedRoles).map(([category, roles]) => (
            <li key={category}>
              <strong>{category}:</strong> {roles.join(", ") || "No suggestion"}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Card variant="outlined" className="m-10">
      <CardContent>
        <Typography variant="h5" component="div">
          Skill Assessment
        </Typography>
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].choices.map((choice, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name={questions[currentQuestion].category}
                  value={index}
                  checked={
                    answers[questions[currentQuestion].category] === index
                  }
                  onChange={() => handleAnswer(index)}
                />
                {choice}
              </label>
            </div>
          ))}
        </div>
        <div className="button-container">
          {currentQuestion > 0 && (
            <Button
              variant="contained"
              onClick={handlePreviousQuestion}
              style={{ marginRight: "8px" }} // Add margin to the right
            >
              Previous
            </Button>
          )}
          {currentQuestion < questions.length - 1 && (
            <Button
              variant="contained"
              onClick={handleNextQuestion}
              style={{ marginLeft: "8px" }} // Add margin to the left
            >
              Next
            </Button>
          )}
          {currentQuestion === questions.length - 1 && (
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </CardContent>

      {/* Display suggested roles after submission */}
      {suggestedRoles && renderSuggestedRoles()}
    </Card>
  );
};

export default SkillsAssessment;
