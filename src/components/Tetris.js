import React from "react"
import Stage from'./Stage'
import StartButton from "./StartButton"
import Display from './Display'
import { StyledTetrisWrapper } from './styles/StyledTetris'
import { StyledTetris} from './styles/StyledTetris'


import {createStage} from '../gameHelpers'

const Tetris = () => {
  return(

    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage stage={createStage()}/>

      <aside>
        <div>
          <Display text="score"/>
          <Display text="rows"/>
          <Display text="level"/>
        </div>
        <StartButton />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
    )

}

// minute 47:16

export default Tetris
