class ui {
    showScreen(screenName) {
        let screens = document.querySelectorAll('#wrapper > div');
        screens.forEach((screen) => {
            screen.style.display = 'none';
        })
        let currentScreen = document.getElementById(screenName);
        currentScreen.style.display = 'block';
    }

    onStartBtnClick(callback) {
        let startBtn = document.getElementById('startBtn');
        startBtn.addEventListener('click', callback);
    }

    onRankBtnClick(ranking) {
        let rankBtn = document.getElementById('rankBtn');
        rankBtn.addEventListener('click', ranking);
    }

    setRanking(ranking) {
        let arr2 = '';
        ranking.map(item => {
            arr2 += `<span>${item}</span><br>`
        })
        document.getElementById('ranking').innerHTML = arr2;


    }

    onInstructBtnClick(guide) {
        let instructBtn = document.getElementById('instructBtn');
        instructBtn.addEventListener('click', guide);
    }

    getUserName() {
        return document.getElementById('name').value;
    }

    setUserName(userName) {
        document.getElementById('userName').innerHTML = userName;
    }

    setpoint(point) {
        document.getElementById('point').innerHTML = point;
    }

    backScreen2(back) {
        let backBtn2 = document.getElementById('back');
        backBtn2.addEventListener('click', back);
    }

    showQuestion(question) {
        document.getElementById('question').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answers[0];
        document.getElementById('answer_2').innerHTML = question.answers[1];
        document.getElementById('answer_3').innerHTML = question.answers[2];
        document.getElementById('answer_4').innerHTML = question.answers[3];

    }

    onClickAnswer(callback) {
        document.getElementById('answer_1').addEventListener('click', () => callback(0));
        document.getElementById('answer_2').addEventListener('click', () => callback(1));
        document.getElementById('answer_3').addEventListener('click', () => callback(2));
        document.getElementById('answer_4').addEventListener('click', () => callback(3));
    }

    setSelectedAnswer(answer) {
        let answerIndex = answer + 1
        let answerDiv = document.getElementById('answer_' + answerIndex);
        answerDiv.style.backgroundColor = 'orange';
        answerDiv.style.color = 'white';
    }

    resetAnswerStyle() {
        for (let i = 1; i <= 4; i++) {
            document.getElementById('answer_' + i).style.backgroundColor = 'blue';
        }
        ;
    }

    showtrueAnswer(correctAnswer) {
        let correctAnswerIndex = correctAnswer + 1
        document.getElementById('answer_' + correctAnswerIndex).style.backgroundColor = 'green';
    }

    showfalseAnswer(currentAnswer, correctAnswer) {
        let currentAnswerIndex = currentAnswer + 1;
        let correctAnswerIndex = correctAnswer + 1;
        document.getElementById('answer_' + currentAnswerIndex).style.backgroundColor = 'red';
        document.getElementById('answer_' + correctAnswerIndex).style.backgroundColor = 'green';
    }
}