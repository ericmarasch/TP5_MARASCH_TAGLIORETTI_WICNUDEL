// wwwroot/js/models/gameModel.js
class GameModel {
    constructor() {
        this.colors = ["red", "green", "blue", "yellow"];
        this.simonPattern = [];
        this.userPattern = [];
        this.level = 0;
    }

    generateNextColor() {
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.simonPattern.push(randomColor);
        return randomColor;
    }

    resetGame() {
        this.simonPattern = [];
        this.userPattern = [];
        this.level = 0;
    }

    addUserInput(color) {
        this.userPattern.push(color);
    }

    getUserPattern() {
        return this.userPattern;
    }

    getSimonPattern() {
        return this.simonPattern;
    }

    incrementLevel() {
        this.level++;
    }

    getLevel() {
        return this.level;
    }
}
