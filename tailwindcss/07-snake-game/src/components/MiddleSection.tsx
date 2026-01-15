import { useState, useEffect, type Dispatch, type SetStateAction } from "react"
import type { Direction } from "../utils/types"

import "./MiddleSection.css"

type MiddleSectionProps = {
  direction: Direction
  start: boolean
  setStart: Dispatch<SetStateAction<boolean>>
  setToRefresh: Dispatch<SetStateAction<boolean>>
  movingDirection: Direction
  setMovingDirection: Dispatch<SetStateAction<Direction>>
}

export default function MiddleSection({
  direction,
  start,
  setStart,
  setToRefresh,
  // movingDirection,
  setMovingDirection,
}: MiddleSectionProps) {
  const [headPosition, setHeadPosition] = useState({ r: 14, c: 19 })
  const [snakeTailPositions, setSnakeTailPositions] = useState<
    { r: number; c: number }[]
  >([])
  const [foodPosition, setFoodPosition] = useState(generateFood())
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState<number>(
    Number(localStorage.getItem("highScore")) || 0
  )
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    // if (start) {
    const timer = start
      ? setTimeout(() => {
          snake()
        }, 90)
      : undefined
    // }
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, setHeadPosition, start, headPosition])

  useEffect(() => {
    localStorage.setItem("highScore", String(highScore))
  }, [highScore])

  function snakeTailPositionCheck(position: { r: number; c: number }) {
    return snakeTailPositions.every(
      (tail) => JSON.stringify(tail) !== JSON.stringify(position)
    )
  }

  function generateFood() {
    const r = Math.floor(Math.random() * 29)
    const c = Math.floor(Math.random() * 39)
    const newFoodPosition = { r, c }
    if (
      !r ||
      !c ||
      JSON.stringify(newFoodPosition) === JSON.stringify(headPosition) ||
      !snakeTailPositionCheck(newFoodPosition)
    ) {
      return generateFood()
    }
    // console.log(newFoodPosition)
    // console.log(headPosition)
    // console.log(JSON.stringify(newFoodPosition))
    // console.log(JSON.stringify(headPosition))
    // console.log(
    //   JSON.stringify(newFoodPosition) === JSON.stringify(headPosition)
    // )
    // console.log(
    //   !snakeTailPositions.every(
    //     (tail) => JSON.stringify(tail) !== JSON.stringify(newFoodPosition)
    //   )
    // )
    // console.log(newFoodPosition)
    return { r, c }
  }

  function snake() {
    let nextHeadPosition = headPosition

    if (direction === "up") {
      nextHeadPosition = { ...headPosition, r: headPosition.r - 1 }

      setRotate(270)
      // if (movingDirection === "left") setRotate((p) => p + 90)
      // else if (movingDirection === "right") setRotate((p) => p - 90)
    } else if (direction === "down") {
      nextHeadPosition = { ...headPosition, r: headPosition.r + 1 }
      setRotate(90)
      // if (movingDirection === "left") setRotate((p) => p - 90)
      // else if (movingDirection === "right") setRotate((p) => p + 90)
    } else if (direction === "left") {
      nextHeadPosition = { ...headPosition, c: headPosition.c - 1 }
      setRotate(180)

      // if (movingDirection === "up") setRotate((p) => p - 90)
      //   else if (movingDirection === "down") setRotate((p) => p + 90)
    } else if (direction === "right") {
      nextHeadPosition = { ...headPosition, c: headPosition.c + 1 }
      setRotate(0)

      // if (movingDirection === "up") setRotate((p) => p + 90)
      // else if (movingDirection === "down") setRotate((p) => p - 90)
    }
    const { r, c } = nextHeadPosition
    if (
      !r ||
      !c ||
      r >= 29 ||
      c >= 39 ||
      !snakeTailPositionCheck(nextHeadPosition)
    ) {
      setToRefresh(true)
      setStart(false)
      // console.log("check")
      return
    }

    let newScore = score
    if (JSON.stringify(foodPosition) === JSON.stringify(nextHeadPosition)) {
      // console.log("hello")
      setScore(++newScore)
      if (newScore > highScore) {
        setHighScore(newScore)
      }
      setFoodPosition(generateFood())
    }
    // console.log(movingDirection)
    // console.log(direction)
    // console.log(
    //   JSON.stringify(foodPosition) === JSON.stringify(nextHeadPosition)
    // )
    // console.log(JSON.stringify(nextHeadPosition))
    // console.log(JSON.stringify(foodPosition))

    setHeadPosition(nextHeadPosition)
    setSnakeTailPositions((p) => [headPosition, ...p].slice(0, newScore))
    setMovingDirection(direction)
  }

  // console.log(headPosition)
  // console.log(snakeTailPositions)
  // console.log(rotate)

  return (
    <div className="middle-section flex flex-col gap-y-1.25 mt-2.5 pb-2.5 border-b border-solid border-white">
      <div className="game-grid w-95 h-70 grid grid-cols-38 grid-rows-28 shadow-[0_0_4px_rgba(245,245,245,0.5)_inset] border border-[rgb(245,245,245)] justify-items-center items-center">
        <span
          className="grid-content head snake bg-[rgb(0,128,0)] relative after:content-[''] after:absolute after:w-0.5 after:h-0.5 after:bg-black after:top-0.5 after:left-[4.5px] before:content-[''] before:absolute before:w-0.5 before:h-0.5 before:bg-black before:top-1.25 before:left-[4.5px]"
          style={{
            transform: `rotate(${rotate}deg)`,
            gridArea: `${headPosition.r} / ${headPosition.c}`,
          }}></span>
        {snakeTailPositions.map((position, index) => {
          return (
            <span
              key={index}
              className="grid-content snake bg-[rgb(0,128,0)]"
              style={{
                transform: `rotate(${rotate}deg)`,
                gridArea: `${position.r} / ${position.c}`,
              }}></span>
          )
        })}
        <span
          className="grid-content food bg-[rgb(255,165,0)] "
          style={{
            gridArea: `${foodPosition.r} / ${foodPosition.c}`,
          }}></span>
      </div>
      <div className="score-container flex justify-between">
        <span className="high-score">High score: {highScore}</span>
        <span className="score">Score: {score}</span>
      </div>
    </div>
  )
}
