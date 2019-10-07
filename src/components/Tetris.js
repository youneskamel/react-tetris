import React from "react"
import Stage from'./Stage'
import StartButton from "./StartButton"
import Display from './Display'

import {createStage} from '../gameHelpers'

const Tetris = () => {
  return(

    <div>
      <Stage stage={createStage()}/>

      <aside>
        <div>
          <Display text="score"/>
          <Display text="rows"/>
          <Display text="level"/>
        </div>
        <StartButton />
      </aside>
    </div>
    )

}

export default Tetris
