    $(document).ready(function() {
        $("#start").click(function() {
            $(this).fadeOut()
            $("#game-div").fadeIn()
          });
      var choices = ["rock", "paper", "scissors"]
      var audioWiner = new Audio('winner.mp3');
      var audioLooser= new Audio('looser1.mp3')
      var audioTie = new Audio('tie.mp3')
      
      $("#play-button").click(function() {
        var userChoice = $("#user-choice").val()
        var computerChoice = choices[Math.floor(Math.random() * choices.length)]
        var result = "";
        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            alert("Please choose between R/P/S.");
            return;
          }
        else if (userChoice === computerChoice) {
          result = "Tie!";
          $('#result-img').attr('src','tie.jpg')
          audioTie.play();
          
       
        } else if (userChoice === "rock" && computerChoice === "scissors" || 
                   userChoice === "paper" && computerChoice=== "rock" || 
                   userChoice === "scissors" && computerChoice === "paper") {
          result = "You win!";
          $('#result-img').attr('src','win1.jpg')
          
          audioWiner.play();
        } else {
          result = "You lose.";
          $('#result-img').attr('src','loos.jpg')
         audioLooser.play();
        }
        
        $("#result").text(result);
        $("#computer-choice").text(computerChoice);
        $("#user-choice").val('')
        setTimeout(function(){
            audioLooser.pause();
            audioWiner.pause();
            audioTie.pause();
          }, 5000)
      });
    });
  
