import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  selectedNumber = 0;
  screen: number[] = [];

  code: number[] = [];
  errors: boolean[] = [false, false, false];
  errorCounter = 0;

  winner = false;

  constructor() {}

  ngOnInit(): void {
    this.generateCode();
    setInterval(() => {
      setTimeout(() => {
        this.selectedNumber = this.selectedNumber + 1;
      }, 80);
      if (this.selectedNumber > 9) {
        this.selectedNumber = 0;
      }
    }, 125);
  }

  generateCode() {
    for (let i = 0; i < 5; i++) {
      this.code.push(Math.floor(Math.random() * 10));
    }
  }

  restartGame() {
    this.screen = [];
    this.errors = [false, false, false];
    this.errorCounter = 0;
    this.winner = false;
  }

  selectNumber() {
    const length = this.screen.length;
    if (length < 5) {
      this.screen.push(this.selectedNumber);

      if (this.code[length] !== this.selectedNumber) {
        this.errors[this.errorCounter] = true;
        this.errorCounter += 1;
        if (this.errorCounter === 3) {
          alert('You Lose. Start again');
          this.restartGame();
        }
        this.screen = [];
      } else if (this.screen.length === 5) {
        this.winner = true;
        alert('You Win!');
      }
    }
  }
}
