let beginSECTION = document.querySelector(`.begin`)
let beginBUTTON = document.querySelector(`.begin button`)
let mainContentDIV = document.querySelector(`.main-content`)
let navELEMENT = document.querySelector(`nav`)
let questionSECTION = document.querySelector(`.question`)
let optionsSECTION = document.querySelector(`.options`)
let submitSECTION = document.querySelector(`.submit`)
let resultsSECTION = document.querySelector(`.results`)
let rowSECTIONS = document.querySelectorAll(`.row`)
let optionINPUTS = document.querySelectorAll(`input`)
let submitBUTTON = document.querySelector(`.submit button`)
let navLIS = document.querySelectorAll(`nav li`)
let optionLABELS = document.querySelectorAll(`.options label`)
let questionDIV = document.querySelector(`.text`)

var question = 1;
var responses = [];
var activeLI = -1

mainContentDIV.style.display = `none`
resultsSECTION.style.display = `none`

let displayQuestion = function(){
    navLIS[question-1].classList.add(`active`)

    if (question === 1){
        questionDIV.textContent = `1. When you think back on your childhood...`
        optionLABELS[0].textContent = `You remember being closely watched by your parents. They always had a plan for what should happen when and would give you clear signals when it was time to do something.`
        optionLABELS[1].textContent = `You were rebellious and secretive. You made up your own language to communicate with your friends and you still remember that language very clearly.`
        optionLABELS[2].textContent = `You imagined living long, long ago - more at home as a knight or ancient conqueror than a child of the present day.`
        optionLABELS[3].textContent = `You had a talent for making new friends and bringing people together. Your peers were comfortable coming to you with their problems and you helped solve them more often than not.`
    }

    if (question === 2){
        questionDIV.textContent = `Lorem ipsum`
        optionLABELS[0].textContent = `Lorem ipsum`
        optionLABELS[1].textContent = `Lorem ipsum`
        optionLABELS[2].textContent = `Lorem ipsum`
        optionLABELS[3].textContent = `Lorem ipsum`
    }
}

let advanceQuestion = function(){
    navLIS[question-1].classList.remove(`active`)
    question++
    displayQuestion()
}

displayQuestion()

beginBUTTON.addEventListener(`click`, function(){
    beginSECTION.style.display = `none`
    mainContentDIV.style.display = `block`
})

for(let i=0;i<4;i++){
    rowSECTIONS[i].addEventListener(`click`, function(){
        for(let j=0;j<4;j++){
            rowSECTIONS[j].style.border = `1px black solid`
        }
        rowSECTIONS[i].style.border = `1px solid red`
        optionINPUTS[i].checked = true;
    })
}

submitBUTTON.addEventListener(`click`, function(){
    if(question === 5){
        console.log(`end`)
    }
    else{
        if(optionINPUTS[0].checked === true){
            responses.push(`f`)
            advanceQuestion()
        }
        else if(optionINPUTS[1].checked === true){
            responses.push(`i`)
            advanceQuestion()
        }
        else if(optionINPUTS[2].checked === true){
            responses.push(`s`)
            advanceQuestion()
        }
        else if(optionINPUTS[3].checked === true){ 
            responses.push(`b`)
            advanceQuestion()
        }
    }
    

})

for(let i=0;i<3;i++){
    navLIS[i].addEventListener(`click`, function(event){
        
        for(let j=0;j<4;j++){
            if(navLIS.className === `active`){ activeLI = j}
        }
        console.log(i)
        console.log(activeLI)
        if((parseInt(event.target.textContent)-1) < i){
            console.log(`yo`)
        }
        
        
        // for(let j=0;j<4;j++){
        //     if ((parseInt(event.target.textContent)+1) < j){
        //         console.log(navLIS[j])
        //         navLIS[j].classList.remove(`active`)
        //         event.target.classList.add(`active`)
        //         question = event.target.textContent
        //         displayQuestion()
        //         return;
        //     }
            
        // }
    })
}
