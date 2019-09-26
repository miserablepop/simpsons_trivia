$(document).ready(function(){

    // VARIABLES
    ///////////////////////////////////////////////////////////////////////////////

    // Defining the questions, choices, and answers

    var questions = ['The Simpsons live on the following street...', 'Homer Simpson is a...', 'Which of the following characters is a non-smoker ?'
    ,'Which of the following names did Bart not use in a prank call to Moe ?', "What word is missing in the following quote _______, is there anything they can't do",
    'Who shot Mr. Burns?', 'How much money did Marge lose on Jeporady?', 'Name of the cinema in Springfield', "What was Maggie's first word?", 
    'What was the secret ingredient in a Flaming Moe/Homer ?'];
    var firstChoice = ['Woodview Terrace', 'Telephone Repair Man', 'Krusty', 'Ivana Tinkle', 'Donuts', 'Bart', '$6200', 'Googolplex', 'Daddy',
                        'Bleach'];
    var secondChoice = ['Pine Tree Terrace', 'IRS Collection Agent','Nelson', 'Bea O Problem', 'Kids', 'Homer', '$4200', 'Monties Movies', 'Homer',
                        'Cough Syrup'];
    var thirdChoice = ['State Street', 'Nuclear Power Plant Safety Inspector', 'Grandpa Simpson', 'Amanda Huggenkiss', 'Computers', 'Maggie', 
                        '$5200', 'Mega Movies', 'Momma', 'Denture Cleaner'];
    var fourthChoice = ['Evergreen Terrace', 'City Bus Driver','Mrs. Krabapple', 'Hugh Johnson', 'Women', 'Lisa', '$3200', 
                        'Springfield Screen', "D'oh", 'Shampoo'];
    var answer = ['Evergreen Terrace', 'Nuclear Power Plant Safety Inspector','Grandpa Simpson', 'Hugh Johnson', 'Donuts',
                    'Maggie', '$5200', 'Googolplex', 'Daddy', 'Cough Syrup'];
    
    // Defining the counters for the end game

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    
    // Checking to see if selection is made

    var isSelected = false;


    // Defining the timer variables

    var count = 0;
    var timer;
    var time = 31;
    

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
        $("#answer-holder").hide();
        $("#restart-holder").hide();
        $('#correct-result').hide();
        $('#incorrect-result').hide();
        $('#unanswered-result').hide();
        $('#restart-result').hide();
    }

    // Show the final results

    function showResults(){
        
        $('#correct-result').show();
        $('#correct-result').html('You got ' + correct + ' questions right');
        $('#incorrect-result').show();
        $('#incorrect-result').html('You got ' + incorrect + ' questions wrong');
        $('#unanswered-result').show();
        $('#unanswered-result').html('You did not answer ' + unanswered + ' questions');
        $('#restart-result').show();
        $('#restart-result').html('Select the start button below to restart the game.');
    }


    // Display the question and choices

    function displayQuestions(){

        hideResults();

        $('#timer-holder').show();
        $("#answer-holder").hide();

        showGameContainers();
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

    $('#choice-1').on('click', answerSelected);
    $('#choice-2').on('click', answerSelected);
    $('#choice-3').on('click', answerSelected);
    $('#choice-4').on('click', answerSelected);


    // Checking the user selected answer

    function answerSelected() {

        hideGameContainers();  

        console.log($(this).text());

        if ($(this).text() === answer[count]){

            stopTime();
            isSelected = true;
            
            console.log (isSelected);

            $('#answer-holder').show();
            $('#answer-holder').html('Correct! The answer is... ' + answer[count]);

            correct++;
            count++;

        } else {

            hideGameContainers();
            stopTime();
            isSelected = true;

            console.log (isSelected);

            $('#answer-holder').show();
            $('#answer-holder').html('Incorrect! Correct answer is... ' + answer[count]);

            incorrect++;
            count++;

        }
        console.log(count);
        endGame();

    }
 

    // Display the time remaining 

    function displayTime() {
        time--;
        $("#timer-holder").html("Time remaining: " + time);
      
            if (time <= 0) {
                hideGameContainers();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                // // displayImage();
                unanswered++;
                count++;
                endGame();
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

        resetTimer();
        console.log(time);

        if (count < questions.length - 1){
            setTimeout(startTime, 3000);
            setTimeout(displayQuestions, 3000);
        }
    }

    
    // Resetting the time remaining

    function resetTimer(){

        time = 31;
    }
    
    // Resetting the counter variables

    function resetCounters(){
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

    // End game

    function endGame() {
        if (count === questions.length){
            $('#timer-holder').hide();
            $('#answer-holder').hide();
            showResults();
            count = 0;
            $('#startBtn').show();
            $('#startBtn').on('click', function(){
                resetCounters();
                startGame();
            });
        }
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