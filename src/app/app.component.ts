import { Component, OnInit } from '@angular/core';

interface PaperData {
  flipped: boolean;
  zIndex: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Portafolio';
  currentLocation = 1;
  numberOfPapers = 3;
  maxLocation = this.numberOfPapers + 1;

  prevButton = {};
  nextButton = {};
  book = {};
  paperFlipped: PaperData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.numberOfPapers; i++) {
      this.paperFlipped.push({
        flipped: false,
        zIndex: this.numberOfPapers - i,
      });
    }
  }

  openBook() {
    this.book = this.translateX('50%');
    this.prevButton = this.translateX('-263px');
    this.nextButton = this.translateX('263px');
  }

  closeBook(isAtBeginning: boolean) {
    this.book = this.translateX(isAtBeginning ? '0%' : '100%');

    this.prevButton = this.translateX('0px');
    this.nextButton = this.translateX('0px');
  }
  goNextPage() {
    if (this.currentLocation < this.maxLocation) {
      const cl = this.currentLocation;
      if (cl === 1) {
        this.openBook();
      }
      this.paperFlipped[cl - 1].flipped = true;
      this.paperFlipped[cl - 1].zIndex = 1;
      if (cl === this.maxLocation - 1) {
        this.closeBook(false);
      }
      this.currentLocation++;
    }
  }

  goPrevPage() {
    if (this.currentLocation > 1) {
      const cl = this.currentLocation;
      if (cl === 2) {
        this.closeBook(true);
      }
      if (cl === this.maxLocation) {
        this.openBook();
      }

      this.paperFlipped[cl - 2].flipped = false;
      this.paperFlipped[cl - 2].zIndex = this.maxLocation - cl + 1;

      this.currentLocation--;
    }
  }

  translateX(degree: string) {
    return {
      transform: `translateX(${degree})`,
    };
  }
}
