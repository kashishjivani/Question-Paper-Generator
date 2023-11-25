const QuestionPaperGenerator = require('./QuestionPaperGenerator');

const generator = new QuestionPaperGenerator();

// Generating a question paper
const totalMarks = 100;
const difficultyDistribution = { Easy: 0.2, Medium: 0.5, Hard: 0.3 };
const questionPaper = generator.generateQuestionPaper(totalMarks, difficultyDistribution);

// Display the generated question paper
questionPaper.forEach((question) => {
  console.log(question);
});
