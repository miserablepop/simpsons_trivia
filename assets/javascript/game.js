$(document).ready(function(){

    // VARIABLES
    ///////////////////////////////////////////////////////////////////////////////

    // Defining the questions, choices, and answers

    var questions = ['The Simpsons live on the following street...'];
    var firstChoice = ['Woodview Terrace'];
    var secondChoice = ['Pine Tree Terrace'];
    var thirdChoice = ['State Street'];
    var fourthChoice = ['Evergreen Terrace'];
    var answer = ['Evergreen Terrace'];
    
    // Defining the counters for the end game

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    

    var isSelected = false;


    // Defining the timer variables

    var count = 0;
    var timer;
    var time = 30;
    

    // FUNCTIONS
    ///////////////////////////////////////////////////////////////////////////////
    
    // Show the question and choices

    function showGameContainers() {
        $("#question").show();
        $("#choice-1").show();
        $("#choice-2").show();
        $("#choice-3").show();
        $("#choice-4").show();
    }

    // Hide the question and choices

    function hideGameContainers() {
        $("#question").hide();
        $("#choice-1").hide();
        $("#choice-2").hide();
        $("#choice-3").hide();
        $("#choice-4").hide();
    }

    // Hide the final results 

    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }


    // Display the question and choices

    function displayQuestions(){

        hideResults();
        // $('#timer').show();
        $('#question-holder').html(questions[count]);
        $("#choice-1").html(firstChoice[count]);
        $("#choice-2").html(secondChoice[count]);
        $("#choice-3").html(thirdChoice[count]);
        $("#choice-4").html(fourthChoice[count]);


        // Functions to change the choices font color
        
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

    // Listening for the answer selected

    $('#choice-1').on('click', answerSelected)
    $('#choice-2').on('click', answerSelected)
    $('#choice-3').on('click', answerSelected)
    $('#choice-4').on('click', answerSelected)


    // Checking the user selected answer

    function answerSelected() {

        hideResults();  

        if ($(this).text() === answer[count]){

            hideGameContainers();
            stopTime();
            isSelected = true;
            
            $('#answer').show();
            $('#answer-holder').html("Correct!")

            correct++;
            count++;
        } else {

            hideGameContainers();
            stopTime();
            isSelected = true;

            $('#answer').show();
            $('#answer-holder').html('Incorrect! Correct answer was: ' + answer[count]);

            incorrect++;
            count++;
        }

    }

    // Display image for correct 

    // Display the time remaining 

    function displayTime() {
        time--;
        $("#timer-holder").html("Time remaining: " + time);
      
            if (time <= 0) {
                hideGameContainers();
                stopTime();
                $("#answer").show();
                $("#answer").html("Time is up! The answer is: " + answer[count]);
                // // displayImage();
                unanswered++;
                count++;
                // checkGameEnd();
            }
    }

    // Start the countdown for the time remaining

    function startTime(){
        clearInterval(timer);
        timer = setInterval(displayTime, 1000);
    }

    // Stop the countdown for the time remaining

    function stopTime() {
        clearInterval(timer);
    }

    // Start the game 

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