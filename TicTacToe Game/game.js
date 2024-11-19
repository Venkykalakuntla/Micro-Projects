let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".resetbtn");
let newgame=document.querySelector(".newgamebtn");
let turnO=true;
let popup=document.querySelector(".popup");
let winnermsg=document.querySelector(".Winnermsg");
let count=0;
//disabling the buttons
const disablebuttons=()=>
    {
        for(let box of boxes)
        {
            box.disabled=true;
        }
    }
    //enabling the buttons
    const enableBoxes=()=>
        {
            for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
        }
//reset game or new game
    const resetnewgame=()=>
    {
        popup.classList.add("hide");
       turnO=true;
       enableBoxes();
       count=0;
    }
    //winning patterns array 2D
const winnpatter=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
//accessing the each box in the game 
boxes.forEach((box)=>
{
    //adding event(functionality) for each box
    box.addEventListener("click",()=>
    {
        //inserting the value i.e X or O based on turnO value
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        checkwinner();
    });
});
//checking whether any of the winning patterns have same value
const checkwinner=()=>
{
    for(let pattern of winnpatter)
    {
        //storing the inner text of the boxes of winning patterns
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1==pos2&&pos3==pos2)
            {
                winnermsg.innerText=`Winner is ${pos1}`;
               popup.classList.remove("hide");
               disablebuttons();
               count--;
             }
        }
        //checking for a tie situation
        if(count>=9)
        {
            winnermsg.innerText=`Tie`;
            popup.classList.remove("hide");
         }
    }
}
reset.addEventListener("click",resetnewgame);
newgame.addEventListener("click",resetnewgame);