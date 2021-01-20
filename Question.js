class Question {
    constructor(){
  
  
  
    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        Contestant = new contestant();
        Contestant.getCount();
        form = new Form()
        form.display();
      }
    }
  
    play(){
  
  form.hide();
  textSize(30);
  text ("GameStart", 120, 100);
  Contestant.getContestantInfo(); 
  if (allContestants !== undefined){
  var display_position = 130;
  for(var plr in allContestant){
  if (plr === "Contestant" + Contestant.index)
  fill("red") 
  else
  fill("black");
  
  display_position = display_position + 20;
  textSize(15);
  text(allContestants[plr].name + ":" + allContestants[plr].distance,120, display_position);
  
  }
  }
  }
  display(){

this.title.html("MyQuiz Game");
this.title.position(350, 0);
this.question.html("Question: What is the value of 10 + 10? ");
this.question.position (150, 80);
this.option1.html("30");
this.option1.postion(150, 100);
this.option2.html("20");
this.option2.position(150, 120);
this.input.position(150, 230);

  }

for(varplrinallContestants){

var correctAns = "2";
if (correctAns === allContestants[plr].answer)
fill("green")
else
fill("red"); 

}

  }