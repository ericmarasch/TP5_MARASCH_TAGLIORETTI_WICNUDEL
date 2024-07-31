// wwwroot/js/controllers/gameController.js
class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.attachButtonClickHandler(this.handleUserInput.bind(this));
        this.view.attachNavigationHandler(this.handleRoomChange.bind(this));
        
        this.startGame();
    }

    startGame() {
        this.model.resetGame();
        this.generateNextColor();
    }

    generateNextColor() {
        const color = this.model.generateNextColor();
        this.playPattern();
    }

    playPattern() {
        const pattern = this.model.getSimonPattern();
        let i = 0;
        const interval = setInterval(() => {
            this.view.highlightColor(pattern[i]);
            i++;
            if (i >= pattern.length) {
                clearInterval(interval);
            }
        }, 1000);
    }

    handleUserInput(color) {
        this.model.addUserInput(color);
        const userPattern = this.model.getUserPattern();
        const simonPattern = this.model.getSimonPattern();
        const currentLevel = userPattern.length - 1;

        if (userPattern[currentLevel] !== simonPattern[currentLevel]) {
            alert("¡Juego terminado! Llegaste al nivel " + this.model.getLevel());
            this.startGame();
            return;
        }

        if (userPattern.length === simonPattern.length) {
            this.model.incrementLevel();
            this.model.userPattern = [];
            setTimeout(() => {
                this.generateNextColor();
            }, 1000);
        }
    }

    handleRoomChange(roomId) {
        this.view.showRoom(roomId);
        if (roomId === 'motores') {
            this.startGame();
        }
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const model = new GameModel();
    const view = new GameView();
    new GameController(model, view);
});
