import type { Direction } from "../utils/types"
// import { type MouseEvent } from "react"

// import "./BottomSection.css"

type BottomSectionProps = {
  changeDirection: (value: Direction) => void
}

export default function BottomSection({ changeDirection }: BottomSectionProps) {
  return (
    <div className="flex items-center justify-center mt-2.5">
      <div className="grid grid-rows-3 grid-cols-3 gap-x-2 justify-center">
        <button
          className="col-start-2"
          title="up"
          value="up"
          onClick={(e) => changeDirection(e.currentTarget.value as Direction)}>
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
        <button
          className="col-start-3 row-start-2"
          title="right"
          value="right"
          onClick={(e) => changeDirection(e.currentTarget.value as Direction)}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button
          className="col-start-1 row-start-2"
          title="left"
          value="left"
          onClick={(e) => changeDirection(e.currentTarget.value as Direction)}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button
          className="col-start-2 row-start-3"
          title="down"
          value="down"
          onClick={(e) => changeDirection(e.currentTarget.value as Direction)}>
          <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </div>
    </div>
  )
}
