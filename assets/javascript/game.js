$(document).ready(function(){

    // VARIABLES
    ///////////////////////////////////////////////////////////////////////////////

   
    var questions = ['The Simpsons live on the following street...'];
    var firstChoice = ['Woodview Terrace'];
    var secondChoice = ['Pine Tree Terrace'];
    var thirdChoice = ['State Street'];
    var fourthChoice = ['Evergreen Terrace'];
    var answer = ['Evergreen Terrace'];
    
    
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    
    var isSelected = false;
    var count = 0;
    var timer;
    var time = 30;
    

    // FUNCTIONS
    ///////////////////////////////////////////////////////////////////////////////
    
    
    function showGameContainers() {
        $("#question").show();
        $("#choice-1").show();
        $("#choice-2").show();
        $("#choice-3").show();
        $("#choice-4").show();
    }
    function hideGameContainers() {
        $("#question").hide();
        $("#choice-1").hide();
        $("#choice-2").hide();
        $("#choice-3").hide();
        $("#choice-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }

    function displayQuestions(){
        hideResults();
        $('#timer').show();
        $('#question-holder').html(questions[count]);
        $("#choice-1").html(firstChoice[count]);
        $("#choice-2").html(secondChoice[count]);
        $("#choice-3").html(thirdChoice[count]);
        $("#choice-4").html(fourthChoice[count]);

        $("#choice-1").hover(function() {
            $(this).css("color", "blue");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-2").hover(function() {
            $(this).css("color", "blue");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-3").hover(function() {
            $(this).css("color", "blue");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-4").hover(function() {
            $(this).css("color", "blue");
        },
        function(){
            $(this).css("color", "black");
        });
    }

    function displayTime() {
        time--;
        $("#timer-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                // $("#answer").show();
                // $("#answer").html("Time is up! The answer is: " + answer[count]);
                // // displayImage();
                // unanswered++;
                // // count++;
                // checkGameEnd();
            }
    }

    function startTime(){
        clearInterval(timer);
        timer = setInterval(displayTime, 1000);
    }

    function stopTime(){
        clearInterval(timer);
    }


    function startGame(){
        
        $('#startBtn').hide();
        startTime();
        displayQuestions();

    }

    // Start game on click

    $('#startBtn').on('click', function() {
        startGame();
      });

});