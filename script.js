
const questions = [
  {
    text: "¿Qué es una zoonosis?",
    options: [
      { id: "a", text: "Una enfermedad respiratoria de origen animal", correct: false },
      { id: "b", text: "Una enfermedad transmitida solo por vectores", correct: false },
      { id: "c", text: "Una enfermedad transmitida de animales vertebrados al ser humano", correct: true }
    ],
    explanation: "Las zoonosis son enfermedades que se transmiten de animales vertebrados al ser humano."
  },
  {
    text: "¿Cuál de los siguientes no es un grupo de riesgo según la OMS frente a las zoonosis?",
    options: [
      { id: "a", text: "Investigadores de campo", correct: false },
      { id: "b", text: "Personal de mataderos", correct: false },
      { id: "c", text: "Agricultores y ganaderos", correct: false },
      { id: "d", text: "Oficinistas en entorno urbano sin contacto con animales", correct: true }
    ],
    explanation: "Los oficinistas no se consideran grupo de riesgo frente a las zoonosis."
  }
];

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  questions.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    qDiv.id = "q" + index;

    const qTitle = document.createElement("h3");
    qTitle.textContent = (index + 1) + ". " + q.text;
    qDiv.appendChild(qTitle);

    q.options.forEach(opt => {
      const optDiv = document.createElement("div");
      optDiv.className = "option";
      optDiv.textContent = opt.text;
      optDiv.onclick = () => checkAnswer(index, opt.id, opt.correct);
      qDiv.appendChild(optDiv);
    });

    const feedback = document.createElement("div");
    feedback.className = "feedback";
    qDiv.appendChild(feedback);

    container.appendChild(qDiv);
  });
}

function checkAnswer(qIndex, selectedId, isCorrect) {
  const qDiv = document.getElementById("q" + qIndex);
  const options = qDiv.querySelectorAll(".option");
  options.forEach(opt => {
    opt.onclick = null;
    if (opt.textContent === questions[qIndex].options.find(o => o.correct).text) {
      opt.classList.add("correct");
    } else if (opt.textContent === questions[qIndex].options.find(o => o.id === selectedId).text) {
      opt.classList.add("incorrect");
    }
  });

  const feedback = qDiv.querySelector(".feedback");
  feedback.textContent = isCorrect ? "✅ ¡Correcto!" : "❌ Incorrecto. " + questions[qIndex].explanation;
}

window.onload = renderQuiz;
