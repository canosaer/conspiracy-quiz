let beginSECTION=document.querySelector(".begin"),beginBUTTON=document.querySelector(".begin button"),mainContentDIV=document.querySelector(".main-content"),navELEMENT=document.querySelector("nav"),questionSECTION=document.querySelector(".question"),optionsSECTION=document.querySelector(".options"),submitSECTION=document.querySelector(".submit"),resultsSECTION=document.querySelector(".results"),rowSECTIONS=document.querySelectorAll(".row"),optionINPUTS=document.querySelectorAll("input"),submitBUTTON=document.querySelector(".submit button"),navLIS=document.querySelectorAll("nav li"),optionLABELS=document.querySelectorAll(".options label"),questionDIV=document.querySelector(".text");var question=1,responses=[];mainContentDIV.style.display="none",resultsSECTION.style.display="none";let displayQuestion=function(){navLIS[question-1].classList.add("active");let e=responses.length-(question-1);if(e)for(let t=0;t<e;t++)responses.pop();1===question&&(questionDIV.textContent="1. When you think back on your childhood...",optionLABELS[0].textContent="You remember being closely watched by your parents. They always had a plan for what should happen when and would give you clear signals when it was time to do something.",optionLABELS[1].textContent="You were rebellious and secretive. You made up your own language to communicate with your friends and you still remember that language very clearly.",optionLABELS[2].textContent="You imagined living long, long ago - more at home as a knight or ancient conqueror than a child of the present day.",optionLABELS[3].textContent="You had a talent for making new friends and bringing people together. Your peers were comfortable coming to you with their problems and you helped solve them more often than not."),2===question&&(questionDIV.textContent="Lorem ipsum",optionLABELS[0].textContent="Lorem ipsum",optionLABELS[1].textContent="Lorem ipsum",optionLABELS[2].textContent="Lorem ipsum",optionLABELS[3].textContent="Lorem ipsum"),console.log(responses)},advanceQuestion=function(){navLIS[question-1].classList.remove("active"),question++,displayQuestion()};displayQuestion(),beginBUTTON.addEventListener("click",(function(){beginSECTION.style.display="none",mainContentDIV.style.display="block"}));for(let e=0;e<4;e++)rowSECTIONS[e].addEventListener("click",(function(){for(let e=0;e<4;e++)rowSECTIONS[e].style.border="1px black solid";rowSECTIONS[e].style.border="1px solid red",optionINPUTS[e].checked=!0}));submitBUTTON.addEventListener("click",(function(){5===question?console.log("end"):!0===optionINPUTS[0].checked?(responses.push("f"),advanceQuestion()):!0===optionINPUTS[1].checked?(responses.push("i"),advanceQuestion()):!0===optionINPUTS[2].checked?(responses.push("s"),advanceQuestion()):!0===optionINPUTS[3].checked&&(responses.push("b"),advanceQuestion())}));for(let e=0;e<3;e++)navLIS[e].addEventListener("click",(function(t){for(let o=0;o<4;o++)"active"===navLIS[o].className&&e<o&&(navLIS[o].classList.remove("active"),question=parseInt(t.target.textContent),displayQuestion())}));
//# sourceMappingURL=main.js.map