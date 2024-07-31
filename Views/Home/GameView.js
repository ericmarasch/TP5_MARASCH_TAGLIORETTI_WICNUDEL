// wwwroot/js/views/gameView.js
class GameView {
    constructor() {
        this.simonContainer = document.getElementById('simon-container');
        this.rooms = document.querySelectorAll('.room');
    }

    highlightColor(color) {
        const element = document.getElementById(color);
        element.style.opacity = 0.5;
        setTimeout(() => {
            element.style.opacity = 1;
        }, 500);
    }

    showRoom(roomId) {
        this.rooms.forEach(room => {
            room.classList.remove('active');
        });
        document.getElementById(roomId).classList.add('active');
    }

    attachButtonClickHandler(handler) {
        document.querySelectorAll(".color-button").forEach(button => {
            button.addEventListener("click", (event) => {
                const color = event.target.id;
                handler(color);
            });
        });
    }

    attachNavigationHandler(handler) {
        document.querySelectorAll("button[data-room]").forEach(button => {
            button.addEventListener("click", (event) => {
                const roomId = event.target.getAttribute('data-room');
                handler(roomId);
            });
        });
    }
}
