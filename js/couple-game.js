const questions = [
  {
    q: "ถ้ามีวันว่าง 1 วัน อยากทำอะไรด้วยกันที่สุด",
    c: ["ดูหนัง", "เดินเล่น", "อยู่ด้วยกันเฉย ๆ"],
  },
  {
    q: "เวลาที่คิดถึงกันมากที่สุดคือเมื่อไหร่",
    c: ["ก่อนนอน", "ตอนเหนื่อย", "ทุกเวลา"],
  },
  {
    q: "อะไรทำให้ยิ้มได้ง่ายที่สุด",
    c: ["ข้อความ", "เสียงหัวเราะ", "ได้เจอหน้า"],
  },
  {
    q: "ถ้าวันนี้ไม่สมบูรณ์ อยากได้อะไรมากที่สุด",
    c: ["กำลังใจ", "กอด", "อยู่ข้าง ๆ"],
  },
  {
    q: "วาเลนไทน์นี้อยากบอกอะไร",
    c: ["ขอบคุณ", "รักนะ", "อยู่ด้วยกันไปนาน ๆ"],
  }
];

let index = 0;
let userAnswers = [];

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(choice) {
  userAnswers.push(choice);

  // โชว์สิ่งที่เลือก
  answerHint.textContent = `คุณเลือก: ${choice} `;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  let answersHTML = "";

  userAnswers.forEach((ans, i) => {
    answersHTML += `<h7>${i + 1}. ${ans}</h7>`;
  });

  gameCard.innerHTML = `
    <h2>สรุปคำตอบของคุณ </h2>
    ${answersHTML}

  `;
}

renderQuestion();
