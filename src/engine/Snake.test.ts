import { Snake } from './Snake'
import { Cell } from './Cell'

describe("Snake", () => {
    it("should take three cells at the beginning", () => {
        const snake = new Snake()

        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)])
    })


    it("should be able to move right", () => {
        const snake = new Snake()

        snake.move()

        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })


    it("should be able to move down", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(2, 1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })


    it("should remember direction", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        
        expect(snake.getDirection()).toBe('Down')
    })


    it("should be able to move up", () => {
        const snake = new Snake()

        snake.setDirection('Up')
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(2, -1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })


    it("should be able to move left", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        snake.move()

        snake.setDirection('Left')
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(1, 1))
        expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)])
    })


    it("should be able to grow", () => {
        const snake = new Snake()

        snake.grow()

        snake.move()
        snake.move()
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(5, 0))
        expect(snake.getTail().length).toBe(5)
    })


})