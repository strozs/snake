import { Cell } from "./Cell";
import { Direction } from "./Direction";
import { Game } from "./Game";

export class Snake {
  head = new Cell(2, 0);
  tail = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right"
  tailSize = 2
  
  
  setDirection(direction: Direction) {
    this.direction = direction
  }

  move() {
      this.tail.push(this.head)
      if (this.tailSize < this.tail.length)
      {
        this.tail.shift();
      }

      switch(this.direction)
      {
        case 'Right': this.head = new Cell(this.head.x + 1, this.head.y) 
        break
        case 'Down': this.head = new Cell(this.head.x, this.head.y + 1) 
        break
        case 'Up': this.head = new Cell(this.head.x, this.head.y - 1) 
        break
        case 'Left': this.head = new Cell(this.head.x - 1, this.head.y) 
        break
      }
      
      
  }

  grow() {
    this.tailSize += 3;
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    var die = false;
    this.tail.forEach(element => {
      if (element.x === cell.x && element.y === cell.y)
      {
        die = true;
      }
    });
    return die;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  
}
