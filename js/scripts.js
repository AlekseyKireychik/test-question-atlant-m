window.onload = function (){ 

    const btnStart = document.getElementById('btnStart');
    const banner__start = document.getElementById('banner__start');
    const questions = document.getElementById('questions');
    const banner__end = document.getElementById('banner__end');
    const btnResult = document.getElementById('formBtnResutl');
    const resultFild = document.getElementById('resultFild');

    btnStart.addEventListener('click', function(){

        banner__start.style.display = "none";
        questions.style.display = "block";

    });

    btnResult.addEventListener('click', function(){

        const countQuestions = document.querySelectorAll(".questions__item li");
        const resultedInputs = document.querySelectorAll("input[type='radio']:checked");
        let result = 0;

        if (countQuestions.length === resultedInputs.length){
            
            questions.style.display = "none";
            banner__end.style.display = "block";
    
            Array.prototype.map.call(resultedInputs, (el)=>{
                result += parseInt(el.dataset.value);
            });
    
            let resultSchow = Math.ceil(result * 100 / 12);    
            resultFild.innerHTML = `Вы набрали ${resultSchow} баллов`;

        } else {

            alert("Вы ответили не на все вопросы");

        };
        
    });
};
