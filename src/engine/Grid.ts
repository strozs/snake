import { Cell } from "./Cell";
import { Configuration } from "./Configuration";
import { Snake } from "./Snake";
var applesEaten = 0;

export class Grid {
  private configuration: Configuration;
  apples = [
    new Cell(33, 22),
    new Cell(35, 22),
    new Cell(37, 22),
    new Cell(39, 22),
    new Cell(41, 22)
  ];

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void {
    if (applesEaten % 5 == 0)
    {
      this.apples = [new Cell(Math.floor(Math.random() * 80) + 1, Math.floor(Math.random() * 40) + 1),
        new Cell(Math.floor(Math.random() * 80) + 1, Math.floor(Math.random() * 40) + 1),
        new Cell(Math.floor(Math.random() * 80) + 1, Math.floor(Math.random() * 40) + 1),
        new Cell(Math.floor(Math.random() * 80) + 1, Math.floor(Math.random() * 40) + 1),
        new Cell(Math.floor(Math.random() * 80) + 1, Math.floor(Math.random() * 40) + 1)]
    }
    //this.apples = [new Cell(Math.floor(Math.random() * 80) + 1, Math.floor(Math.random() * 40) + 1)]
  }

  isAppleInside(cell: Cell): boolean {
    return this.apples.find(apple => apple.x === cell.x && apple.y === cell.y) !== undefined;
  }

  removeApple(cell: Cell): void {
    const apple = this.apples.find(apple => apple.x === cell.x && apple.y === cell.y)!
    const i = this.apples.indexOf(apple)
    this.apples.splice(i, 1)

    applesEaten++;
    this.seed();
  }

  isDone(): boolean {
    return false;
  }

  getApples(): Cell[] {
    return this.apples;
  }
}
