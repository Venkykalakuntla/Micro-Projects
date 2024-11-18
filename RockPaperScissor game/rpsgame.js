let choices=document.querySelectorAll(".choice");
let userscore=0;
let compscore=0;
let user=document.querySelector(".uscore");
let computer=document.querySelector(".compscore");
let message=document.querySelector(".innermessage");
let newgame=document.querySelector(".newgamebtn");
newgame.addEventListener("click",()=>
{
    userscore=0;
    compscore=0;
    user.innerText=userscore;
    computer.innerText=compscore;
    message.innerText=`Choose your option`;
    message.style.backgroundColor="rgb(9, 9, 41)";


})
function checkwinner(choiceid)
{
    let arr=["Rock","Paper","Scissor"];
    let compchoice=arr[Math.floor(Math.random()*3)];
    if(choiceid===compchoice)
    {
       message.innerText=`Tie.computer choose ${compchoice}`;
       message.style.backgroundColor="rgb(9, 9, 41)";

    }
   else if(choiceid=="Rock")
    {
        if(compchoice=="Scissor")
        {
            userscore++;
            user.innerText=userscore;
            message.innerText=`You win!computer choose ${compchoice}`;
            message.style.backgroundColor="green";
        }
        else
        {
            compscore++;
            computer.innerText=compscore;
            message.innerText=`You lose. computer choose ${compchoice}`;
            message.style.backgroundColor="red";

        }
    }
    else if(choiceid=="Paper")
        {
            if(compchoice=="Scissor")
            {
                compscore++;
                computer.innerText=compscore;
                message.innerText=`You lose. computer choose ${compchoice}`;
                message.style.backgroundColor="red";

            }
            else{
                userscore++;
            user.innerText=userscore;
            message.innerText=`You win!computer choose ${compchoice}`;
          message.style.backgroundColor="green";
            }
        }
        else 
        {
            if(compchoice=="Paper")
            {
                userscore++;
                user.innerText=userscore;
                message.innerText= `You win.computer choose ${compchoice}`;
                message.style.backgroundColor="green";

            }
            else
            {
                compscore++;
                computer.innerText=compscore;
                message.innerText=`You lose.computer choose ${compchoice}`; 
                message.style.backgroundColor="red";

            }
        }

 }
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        let id=choice.getAttribute("id")
        checkwinner(id);
    })
})