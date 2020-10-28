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

mainContentDIV.style.display = `none`
resultsSECTION.style.display = `none`

let displayQuestion = function(){
    navLIS[question-1].classList.add(`active`)
    let arrayCorrection  = responses.length - (question-1)
    if(arrayCorrection){
        for(let i=0;i<arrayCorrection;i++){
            responses.pop()
        }
    }

    if (question === 1){
        questionDIV.textContent = `1. When you think back on your childhood...`
        optionLABELS[0].textContent = `You remember being closely watched by your parents. They always had a plan for what should happen when and would give you clear signals when it was time to do something.`
        optionLABELS[1].textContent = `You were rebellious and secretive. You made up your own language to communicate with your friends and you still remember that language very clearly.`
        optionLABELS[2].textContent = `You imagined living long, long ago - more at home as a knight or ancient conqueror than a child of the present day.`
        optionLABELS[3].textContent = `You had a talent for making new friends and bringing people together. Your peers were comfortable coming to you with their problems and you helped solve them more often than not.`
    }

    if (question === 2){
        questionDIV.textContent = `2. You keep running into a stranger at odd times. The thing you remember about them is...`
        optionLABELS[0].textContent = `The tattoo of an intricate geometric pattern on their neck.`
        optionLABELS[1].textContent = `Their brim of their hat is always drawn low, like they don't want you to see their face.`
        optionLABELS[2].textContent = `Their arms are always full with what look like maps and lists.`
        optionLABELS[3].textContent = `They hold themselves with dignity and are clearly wealthy and respected.`
    }

    if (question === 3){
        questionDIV.textContent = `3. You have a place you like to go to be alone...`
        optionLABELS[0].textContent = `It's an old abandoned church with beautiful stained-glass windows.`
        optionLABELS[1].textContent = `It's your car. You like to drive and stay on the move - you're harder to find that way.`
        optionLABELS[2].textContent = `It's the cemetary. For some reason, tombs make you feel comfortable and at ease.`
        optionLABELS[3].textContent = `It's a hotel bar. You get a table by yourself and keep an eye out for interesting people to talk to later.`
    }

    if (question === 4){
        questionDIV.textContent = `4. Sometimes, you find yourself obssessing over...`
        optionLABELS[0].textContent = `The way things fit together. Everything happens for a reason and there's no such thing as coincidence.`
        optionLABELS[1].textContent = `New and exciting ideas. The world can be made so much better than it is right now.`
        optionLABELS[2].textContent = `Power and how to acquire more of it.`
        optionLABELS[3].textContent = `The exact right way to persuade someone to do what you want.`
    }

    if (question === 5){
        questionDIV.textContent = `5. Something is about to happen...`
        optionLABELS[0].textContent = `And you have been preparing for it for a very long time.`
        optionLABELS[1].textContent = `And if all goes according to plan, no one will suspect a thing.`
        optionLABELS[2].textContent = `And by the end of it, your enemies will be utterly defeated.`
        optionLABELS[3].textContent = `And it will require the effort and cooperation of a great many people.`
    }



    console.log(responses)
}

let advanceQuestion = function(){
    navLIS[question-1].classList.remove(`active`)
    question++
    for(let i=0;i<4;i++){
        rowSECTIONS[i].style.border = `1px black solid`
        if(optionINPUTS[i].checked) {optionINPUTS[i].checked = false}
    }
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
        mainContentDIV.style.display = `none`
        resultsSECTION.style.display = `block`
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

for(let i=0;i<5;i++){
    navLIS[i].addEventListener(`click`, function(event){
        for(let j=0;j<5;j++){
            if(navLIS[j].className === `active` && i<j){ 
                navLIS[j].classList.remove(`active`)
                question = parseInt(event.target.textContent)
                displayQuestion()
            }
        }
    })
}
