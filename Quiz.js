class Quiz {
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

async start (){

if (gameState === 0){

    Contestant = new contestant();
    var contestantCountRef = await database.ref ('contestantCount').once("value");
    if (contestantCountRef.exist()){

contestantCount = contestantCountRef.val();
contestant.getCount();

    }
Question = new question();
question.display
}

}

hide(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    
    }
    
      display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(130, 0);
        this.input.position(130, 160);
        this.button.position(250, 200);
    
        this.button.mousePressed(() => {
          this.input.hide();
          this.button.hide();
    
          contestant.name = this.input.value();
          
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
          this.greeting.html("Hello " + contestant.name )
          this.greeting.position(130, 160)
        });
    
      }
}