document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: 'Какой способ передачи личных данных лучше избегать?',
            options: ['Электронная почта', 'Шифрованные мессенджеры', 'Телефонные звонки', 'Личная встреча'],
            answer: 'Электронная почта'
        },
        {
            question: 'Как называется вид мошенничества, связанный с кражей персональных данных через поддельные письма?',
            options: ['Фишинг', 'Спуфинг', 'Социальная инженерия', 'DDoS атака'],
            answer: 'Фишинг'
        },
        {
            question: 'Что означает аббревиатура VPN?',
            options: ['Virtual Private Network', 'Virus Protection Net', 'Verified Password Notification', 'Visual Programming Node'],
            answer: 'Virtual Private Network'
        },
        {
            question: 'Какой тип атаки направлен на подбор пароля методом перебора?',
            options: ['SQL-инъекция', 'Хеш-коллизия', 'Брутфорс', 'DoS атака'],
            answer: 'Брутфорс'
        }
    ];

    const form = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');
    const submitButton = form.querySelector('button');

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion(index) {
        const questionSection = document.getElementById('question-section');
        questionSection.innerHTML = `
            <label for="q${index}">Вопрос ${index+1}: ${questions[index].question}</label>
            ${questions[index].options.map((option, i) =>
                `<input type="radio" name="answer" value="${option}" required> ${option}<br>`
            ).join('')}
        `;
        
        submitButton.disabled = false;
    }

    function checkAnswer(event) {
        event.preventDefault();
        const selectedOption = document.querySelector('input[name="answer"]:checked').value;
        if (selectedOption === questions[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            endQuiz();
        } else {
            showQuestion(currentQuestionIndex);
        }
    }

    function endQuiz() {
        resultsDiv.classList.remove('hidden');
        resultsDiv.textContent = `Вы ответили верно на ${score}/${questions.length} вопросов.`;
        form.style.display = 'none';
    }

    showQuestion(currentQuestionIndex);
    form.addEventListener('submit', checkAnswer);
});