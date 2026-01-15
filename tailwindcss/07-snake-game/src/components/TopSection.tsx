import { type Dispatch, type SetStateAction } from "react"
import type { Direction } from "../utils/types"
import "./TopSection.css"

type TopSectionProps = {
  start: boolean
  toRefresh: boolean
  setStart: Dispatch<SetStateAction<boolean>>
  setRefresh: Dispatch<SetStateAction<number>>
  setToRefresh: Dispatch<SetStateAction<boolean>>
  setDirection: Dispatch<SetStateAction<Direction>>
}

export default function TopSection({
  start,
  setStart,
  setRefresh,
  toRefresh,
  setToRefresh,
  setDirection,
}: TopSectionProps) {
  function handleClick() {
    if (toRefresh) {
      setDirection("right")
      setRefresh(Math.random())
      setToRefresh(false)
    }
    // if()
    else setStart((p) => !p)
  }
  return (
    <div className="top-section flex flex-col items-center gap-y-1.25 pb-2.5 border-b border-b-white [&>span]:text-[1.5em] [&>button]:p-0! [&>button_span]:text-[2em]! [&>button_span]:p-1.25!">
      <span>Snake Game</span>
      <button onClick={handleClick}>
        {toRefresh ? (
          <span className="material-symbols-outlined" title="pause">
            refresh
          </span>
        ) : start ? (
          <span className="material-symbols-outlined" title="pause">
            pause_circle
          </span>
        ) : (
          <span className="material-symbols-outlined" title="start">
            play_circle
          </span>
        )}
      </button>
    </div>
  )
}
