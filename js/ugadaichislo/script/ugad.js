export default class GuessTheNum {
    constructor(game) {
        this.game = game;
        this.randomNumber = 0;

        this.chat = this.game.querySelector(".chat_block");
        this.Btn = this.game.querySelector(".send_num");
        this.inputNumber = this.game.querySelector(".input_num");

        this.Btn.addEventListener("click", ()=>{
            this.checkRes();
        });
    }

    init() {
        this.createRandomInt() ;
    }

    createRandomInt() {
        this.randomNumber = 1 + Math.floor(Math.random() * 10);
    }

    sendAnswer(inputNum, resultText) {
        const inputNumMessage = inputNum;
        const resultTextMessage = resultText;
      
        if (inputNumMessage !== "") {
            
            const inputNumMessageForm = document.createElement("div");
            const resultTextMessageForm = document.createElement("div");
    
            inputNumMessageForm.classList.add("input_num_message");
            inputNumMessageForm.textContent = inputNumMessage;

            resultTextMessageForm.classList.add("result_text_message");
            resultTextMessageForm.textContent = resultTextMessage;


            this.chat.appendChild(inputNumMessageForm);
            this.chat.appendChild(resultTextMessageForm);
        

            inputNum.value = "";
            resultText = "";
            chatBlock.scrollTop = chatBlock.scrollHeight;
         }
    }


    checkRes() {
        const inputNum = parseInt(this.inputNumber.value);

        if (inputNum > 10 || inputNum < 1) {
            this.sendAnswer(inputNum, "Загаданное число в диапазоне от 1 до 10 ");
        }
        else
        {
            if (inputNum > parseInt(this.randomNumber)) {
                this.sendAnswer(inputNum, "Загаданное число меньше");
            }
            else if (inputNum < parseInt(this.randomNumber)) {
                this.sendAnswer(inputNum,"Загаданное число больше");
            }
            else {
                this.sendAnswer(inputNum, "Наконец - то ты выиграл, поздравляю!");
            }
        }
    }
}