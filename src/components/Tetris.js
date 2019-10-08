import React, { useState } from "react"

// components
import Stage from'./Stage'
import StartButton from "./StartButton"
import Display from './Display'

// styled components
import { StyledTetrisWrapper } from './styles/StyledTetris'
import { StyledTetris } from './styles/StyledTetris'

// hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'


import {createStage} from '../gameHelpers'

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player] = usePlayer()
  const [stage, setStage] = useStage(player)


  return(

    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage stage={stage}/>

      <aside>
        {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"}/>

      ) : (
          <div>
            <Display text="score"/>
            <Display text="rows"/>
            <Display text="level"/>
          </div>
      ) }
        <StartButton />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
    )

}

// minute 47:16

export default Tetris
