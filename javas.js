var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;
var wrongAnswer;
//if we click on the start/reset
document.getElementById("startreset").onclick=function()
{
//if we are playing
if(playing==true)
{
	location.reload(); //reload page
}
else
{
	//if we are not playing

	//change mode to playing
	playing=true;
	//set score to zero
	score =0;
	document.getElementById("scorevalue").innerHTML=score;

   //show countdown box
   document.getElementById("timeremaining").style.display="block";

    timeremaining=60;
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;

    //hide game over box

    hide("gameover");

   //change button to reset
   document.getElementById("startreset").innerHTML="Reset Game";

   //start countdown

   startCountdown();

   //generate question and answer

    generateQA();
}


} 

// click on an answer box

for(i=1;i<5;i++)
{
  document.getElementById("box" + i).onclick=function()
{
  //check if we are playing
  if(playing==true)
  {
    //yes
    if(this.innerHTML==correctAnswer)
    {
      //correctanswer

      //increase score by 1
      score++;
      document.getElementById("scorevalue").innerHTML==score;

      //hide wrong box and show correct box

      hide("wrong");
      show("correct");
      setTimeout(function(){
        hide("correct");
      },1000);

      //new questions

      generateQA();
    }
    else
    {
      //wrong answer

      hide("correct");
      show("wrong");
      setTimeout(function(){
        hide("wrong");
      },1000);
      document.getElementById("gameover").innerHTML="<p>Game over</p><p> your score is "+ score + ".</p> ";
      stopCountdown();
      show("gameover");
    }
  }
}
}
function startCountdown()
{
	action=setInterval(function(){
       timeremaining -=1; 
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0)
        {
        	//game over
        	stopCountdown();
        	show("gameover");
        	//edit the text
        	document.getElementById("gameover").innerHTML="<p>Game over</p><p> your score is "+ score + ".</p> ";
        	//eliminate the time remaining block
        	hide("timeremaining");
        	hide("correct");
        	hide("wrong");
        	playing=false;
        	document.getElementById("startreset").innerHTML="<p> Start Game</p>";

        }

	},1000)

}
function stopCountdown()
{
	clearInterval(action);
}
function hide(Id)
{
	document.getElementById(Id).style.display="none";
}
function show(Id)
{
	document.getElementById(Id).style.display="block";
}

//generate questions and multiple answers

function generateQA()
{

var x=1+Math.round(9*Math.random());
var y=1+Math.round(9*Math.random());
 correctAnswer=x*y;
 document.getElementById("question").innerHTML=x + "x" + y;
var correctPosition=1+Math.round(3*Math.random());
									
document.getElementById("box" + correctPosition).innerHTML=correctAnswer;
//fill one box with the correct answer

//fill other boxes with wrong answers
var answers=[correctAnswer];

for(i=1;i<5;i++)
{
	if(i!=correctPosition)
	{
		do
		{
			wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
		}while(answers.indexOf(wrongAnswer)>-1)
		document.getElementById("box" + i).innerHTML=wrongAnswer;
     answers.push(wrongAnswer);
	}
} 
}