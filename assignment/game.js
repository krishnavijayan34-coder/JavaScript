const prompt = require("prompt-sync")();

const playGame = (userNumber, callback) => {

    console.log("User number:", userNumber);

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        console.log("Random number:", randomNumber);

        let points = 0;

        if (userNumber === randomNumber) {
            points = 2;
        } else if (Math.abs(userNumber - randomNumber) === 1) {
            points = 1;
        } else {
            points = 0;
        }

        callback(points);

    }, 1000);
};


const startGame = () => {
    let totalScore = 0;
    let play = true;

    const gameLoop = () => {

        if (!play) {
            console.log("Game Over! Final Score:", totalScore);
            return;
        }

        const userInput = prompt("Enter a number between 1 and 6: ");
        const userNumber = Number(userInput);

        playGame(userNumber, (points) => {

            console.log("Points earned:", points);

            totalScore += points;

            console.log("Total Score:", totalScore);

            const choice = prompt("Do you want to play again? (yes/no): ");

            if (choice.toLowerCase() !== "yes") {
                play = false;
            }

            gameLoop();
        });
    };

    gameLoop();
};

startGame();