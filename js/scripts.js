window.onload = () => { 

    const btnStart = document.getElementById('btnStart'),
        bannerStart = document.getElementById('bannerStart'),
        questions = document.getElementById('questions'),
        bannerEnd = document.getElementById('bannerEnd'),
        btnResult = document.getElementById('formBtnResutl'),
        resultFild = document.getElementById('resultFild');

    btnStart.addEventListener('click', (e) => {

        if (e.target) {
              e.preventDefault()    
        };

        bannerStart.style.display = "none";
        questions.style.display = "block";  
    });

    btnResult.addEventListener('click', (e) => {

        if (e.target) {
            e.preventDefault()    
        };

        const countQuestions = document.querySelectorAll(".questions__item li"),
            resultedInputs = document.querySelectorAll("input[type='radio']:checked");
            
        let result = 0;

        if (countQuestions.length === resultedInputs.length){

            questions.style.display = "none";
            bannerEnd.style.display = "block";
    
            Array.prototype.map.call(resultedInputs, (el) => {
                result += parseInt(el.dataset.value);
            });
    
            let resultSchow = Math.ceil(result * 100 / 12);    
            resultFild.innerHTML = `Вы набрали ${resultSchow} баллов`;

        } else {
            const popup = document.createElement('div');
            popup.className = "popup";
            popup.innerHTML = "<div class='popup__content'><p>Вы ответили не на все вопросы</p><button class='btn' id='btnClose'>Продолжить</button></div>";
            
            questions.append(popup);

            const btnClose = document.getElementById('btnClose');
            btnClose.addEventListener('click', (e) => {

                if (e.target) {
                    e.preventDefault()    
                };

                popup.remove();
            });
        };
        
    });
};
