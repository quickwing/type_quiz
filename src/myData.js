export const myData = {
  default: {
    numQ: 3,
    1: {
      cardType: "standard",
      question: "test question 1",
      answers: [
        { answer: "answer2", tr: true, goTo: 2 },
        { answer: "answer3", tr: false, goTo: 3 }
      ]
    },
    2: {
      cardType: "standard",
      question: "test question 2",
      answers: [
        { answer: "answer1", tr: true, goTo: 1 },
        { answer: "answer3", tr: true, goTo: 3 }
      ]
    },
    3: {
      cardType: "standard",
      question: "test question 3",
      answers: [
        { answer: "answer1", tr: true, goTo: 1 },
        { answer: "answer2", tr: true, goTo: 2 }
      ]
    }
  }
};
