// Define arrays to store questions and answers
let questions = [];
let answers = [];

// Add event listeners to buttons
document.getElementById("add-question-btn").addEventListener("click", addQuestion);
document.getElementById("remove-question-btn").addEventListener("click", removeQuestion);
document.getElementById("quiz-form").addEventListener("submit", submitQuiz);

function addQuestion() {
    const questionContainer = document.getElementById("question-container");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your question";
    questions.push(input);
    questionContainer.appendChild(input);
}

function removeQuestion() {
    const questionContainer = document.getElementById("question-container");
    if (questions.length > 0) {
        const removedQuestion = questions.pop();
        questionContainer.removeChild(removedQuestion);
    }
}

function submitQuiz(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous results
    const resultsSection = document.getElementById("results-section");
    resultsSection.style.display = "none";
    const quizResults = document.getElementById("quiz-results");
    quizResults.innerHTML = "";

    // Gather answers
    answers = [];
    questions.forEach((question, index) => {
        const answer = prompt(`Question ${index + 1}: ${question.value}`);
        answers.push(answer);
    });

    // Display results
    displayResults();
}

function displayResults() {
    const resultsSection = document.getElementById("results-section");
    resultsSection.style.display = "block";
    const quizResults = document.getElementById("quiz-results");
    answers.forEach((answer, index) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = `Question ${index + 1}: ${answer}`;
        quizResults.appendChild(paragraph);
    });
}
