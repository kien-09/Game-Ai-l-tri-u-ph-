const questions = [
    {
        question: 'Câu 1: Có câu thành ngữ: "Đi mây về ..." gì?',
        answers: [
            'A. Mây',
            'B. Núi',
            'C. Biển',
            'D. Gió',
        ],
        correct: 3
    },
    {
        question: 'Câu 2: Màu chủ đạo của tờ tiền Polymer mệnh giá 500.000 đồng là gì?',
        answers: [
            'A. Đỏ',
            'B. Xanh',
            'C. Vàng',
            'D. Tím',
        ],
        correct: 1
    },
    {
        question: 'Câu 3: Bảo tàng Hồ Chí Minh được thiết kế theo dáng một loài hoa nào?',
        answers: [
            'A. Hoa sen',
            'B. Hoa mai',
            'C. Hoa hồng',
            'D. Hoa đào',
        ],
        correct: 0
    },
    {
        question: 'Câu 4: Loại động vật nào chỉ ăn cỏ?',
        answers: [
            'A. Hổ vằn',
            'B. Sư tử',
            'C. Bò sữa',
            'D. Chó sói',
        ],
        correct: 2
    },
    {
        question: 'Câu 5: Tháng âm lịch nào còn được gọi là "Tháng cô hồn"?',
        answers: [
            'A. Tháng bảy',
            'B. Tháng tám',
            'C. Tháng chín',
            'D. Tháng mười',
        ],
        correct: 0
    },
    {
        question: 'Câu 6: Đâu là tên một loại chợ ?',
        answers: [
            'A. Ếch',
            'B. Nhái',
            'C. Rắn',
            'D. Cóc',
        ],
        correct: 3
    },
    {
        question: 'Câu 7: Đâu là một cách nói ví von về những trường hợp hay gặp vận hạn, rủi ro?',
        answers: [
            'A. Sao quả cân',
            'B. Sao quả tạ',
            'C. Sao quả tấn',
            'D. Sao quả yến',
        ],
        correct: 1
    },
    {
        question: 'Câu 8: Gỗ mun thường có màu gì?',
        answers: [
            'A. Vàng',
            'B. Đỏ',
            'C. Đen',
            'D. Xanh',
        ],
        correct: 2
    },
    {
        question: 'Câu 9: Tình cảnh đơn độc, yếu thế không có chỗ dựa là nghĩa của câu nào?',
        answers: [
            'A. Thân lừa ưa nặng',
            'B. Thân tàn ma dại',
            'C. Thân cô thế cô',
            'D. Thân làm tội đời',
        ],
        correct: 2
    },
    {
        question: 'Câu 10: Đâu là tên một loại đồ chơi dân gian của trẻ em?',
        answers: [
            'A. Tò he',
            'B. Tò mò',
            'C. Tò vò',
            'D. Tến tò',
        ],
        correct: 0
    },
    {
        question: 'Câu 11: Nhà văn Kim Dung (Trung Quốc) nổi tiếng với thể loại văn học gì?',
        answers: [
            'A. Truyện trinh thám',
            'B. Tiểu thuyết kiếm hiệp',
            'C. Sử thi',
            'D. Thơ lãng mạn',
        ],
        correct: 1
    },
    {
        question: 'Câu 12: Bộ phim "Chị Dậu" được chuyển thể từ tác phẩm nào?',
        answers: [
            'A. Người mẹ cầm súng',
            'B. Vợ chồng A Phủ',
            'C. Tắt đèn',
            'D. Tuổi thơ dữ dội',
        ],
        correct: 2
    },
    {
        question: 'Câu 13: Cho tới thời điểm hiện nay, vườn quốc gia nào của nước ta chưa được công nhận là Vườn Di sản ASEAN?',
        answers: [
            'A. Vườn quốc gia Kon Ka Kinh',
            'B. Vườn quốc gia Tam Đảo',
            'C. Vườn quốc gia Chư Mom Ray',
            'D. Vườn quốc gia Bái Tử Long',
        ],
        correct: 1
    },
    {
        question: 'Câu 14: Sầu riêng Cái Mơn là đặc sản của tỉnh nào?',
        answers: [
            'A. Tiền Giang',
            'B. Cà Mau',
            'C. Bến Tre',
            'D. Đồng Tháp',
        ],
        correct: 2
    },
    {
        question: 'Câu 15: Nhạc sĩ nào là người phổ nhạc ca khúc "Cây đàn sinh viên"?',
        answers: [
            'A. Bảo Chấn',
            'B. Trịnh Công Sơn',
            'C. Trần Tiến',
            'D. Quốc An',
        ],
        correct: 3
    }
]

class altp {
    constructor() {
        this.ui = new ui();
        this.ui.showScreen("welcomeScreen");
        this.currentQuestion = 0;
        this.currentAnswer = null;
        this.check = false;
        this.point = 0;
        this.userName = '';

        this.startSound = new sound('Start.mp3');
        this.trueSound = new sound('tiengvotaytrue.mp3');
        this.falseSound = new sound('traloisai.mp3');
        this.cau1_5Sound = new sound('Cau1-5.mp3');
        this.chon2Sound = new sound('chondapan2.mp3');

        this.ui.onStartBtnClick(() => {
            this.start();
        });
        this.ui.onInstructBtnClick(() => {
            this.instruct();
        });
        this.ui.backScreen2(() => {
            this.back();
        });
        this.ui.onRankBtnClick(() => {
            this.rank();
        });
    }

    instruct() {
        this.ui.showScreen('guide');
        this.cau1_5Sound.start();
    }

    back() {
        this.ui.showScreen('welcomeScreen');
        this.cau1_5Sound.stop();
        this.startSound.start();
    }

    rank() {
        this.ui.showScreen('ranking');
        this.cau1_5Sound.start();
        const local = localStorage.getItem('info');
        const arr = JSON.parse(local);
        arr.sort((a, b) => b.point - a.point);
        const rankings = arr.map(item => ` ${item.userName} - ${item.point}<br>`);
        this.ui.setRanking(rankings.slice(0, 5));
    }

    start() {
        this.userName = this.ui.getUserName();
        if (!this.userName) {
            alert("Bạn cần nhập tên của mình trước khi bắt đầu cuộc chơi !");
        } else {
            this.ui.showScreen('questionScreen');
            this.ui.resetAnswerStyle();
            this.startSound.stop();
            this.cau1_5Sound.start();
            this.ui.showQuestion(questions[this.currentQuestion]);
            this.ui.onClickAnswer((answer) => {
                if (!this.check) {
                    this.currentAnswer = answer;
                    this.ui.setSelectedAnswer(answer);
                    this.cau1_5Sound.stop();
                    this.chon2Sound.start(() => {
                        this.checkAnswer();
                    });
                }
                this.check = true;
            });
            this.ui.setUserName(this.userName);
            this.ui.setpoint(this.point);
        }
    }

    checkAnswer() {
        if (this.currentAnswer == questions[this.currentQuestion].correct) {
            this.point += 100;
            this.ui.showtrueAnswer(this.currentAnswer, questions[this.currentQuestion].correct);
            this.trueSound.start(() => {
                if (this.point == 1500) {
                    alert('Wow Wow. Chúc mừng bạn đã trở thành triệu phú <3');
                    this.startSound.start();
                    this.reset();
                } else {
                    this.check = false;
                    this.currentQuestion++;
                    this.start();
                }
            });
        } else {
            this.ui.showfalseAnswer(this.currentAnswer, questions[this.currentQuestion].correct);
            this.falseSound.start(() => {
                alert('Đáng tiếc quá, bạn đã trả lời sai, hẹn gặp lại bạn lần sau !')
                this.reset();
            });
        }
    }

    reset() {
        if (!localStorage.getItem('info')) {
            localStorage.setItem('info', JSON.stringify([{
                userName: this.userName,
                point: this.point
            }]));
        } else {
            const local = localStorage.getItem('info');
            const arr = JSON.parse(local);
            arr.push({
                userName: this.userName,
                point: this.point
            });
            localStorage.setItem('info', JSON.stringify(arr));
        }

        this.userName = ''
        this.point = 0
        this.currentQuestion = 0;
        this.check = false
        this.ui.showScreen('welcomeScreen');
        this.ui.resetAnswerStyle();

        this.startSound.start(() => {
            this.cau1_5Sound.stop();
        });
    }
}

var game = new altp();