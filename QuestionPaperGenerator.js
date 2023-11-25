const questionStore  = require("./db");

class QuestionPaperGenerator {
  constructor() {
    this.questionStore = questionStore;
  }

  addQuestion(question, subject, topic, difficulty, marks) {
    this.questionStore.push({
      question: question,
      subject: subject,
      topic: topic,
      difficulty: difficulty,
      marks: marks,
    });
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    let remainingMarks = totalMarks;
    console.log(Object.entries(difficultyDistribution));
    for (const [difficulty, percentage] of Object.entries(difficultyDistribution)) {
      const difficultyQuestions = this.selectQuestions(difficulty, percentage, totalMarks);
      questionPaper.push(...difficultyQuestions);
      remainingMarks -= difficultyQuestions.reduce((acc, question) => acc + question.marks, 0);
      console.log(remainingMarks);
    }

    return questionPaper;
  }

  selectQuestions(difficulty, percentage, totalMarks) {
    const difficultyQuestions = this.questionStore.filter((q) => q.difficulty === difficulty);
    const selectedQuestions = [];
    let selectedMarks = 0;

    for(const question of difficultyQuestions) {
      if(selectedMarks + question.marks <= percentage * totalMarks) {
        selectedQuestions.push(question);
        selectedMarks += question.marks;
      }
      else {
        break;
      }
    }
    return selectedQuestions;
  }
}

module.exports = QuestionPaperGenerator;
