class AudioController {
  constructor() {
    this.bgMusic = new Audio('assets/audio/gameStart.mp3');
    this.victorySound = new Audio('assets/audio/victory.mov');
    this.gameOverSound = new Audio('assets/audio/gameOver.mov');
    this.bgMusic.volume = 0.4;
    this.bgMusic.loop = true;
  }
  startMusic() {
    this.bgMusic.play();
  }
  stopMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }
  victory() {
    this.stopMusic();
    this.victorySound.play();
  }
  gameOver() {
    this.stopMusic();
    this.gameOverSound.play();
  }
}

class avatarMatch {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
  }

  startGame() {
    this.cardToCheck = null;
  }
}

// let audioController = new AudioController();
//       audioController.startMusic();

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let cards = Array.from(document.getElementsByClassName('card'));

  // CLICK TO START
  overlays.forEach((overlay) => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      // game.startGame();
    });
  });

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      //game.flipCard();
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}
