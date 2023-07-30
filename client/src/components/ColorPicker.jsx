import React from 'react'
import { SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'
import { color } from 'framer-motion'



const ColorPicker = () => {

  const snap = useSnapshot(state);
{/* presetColors={[
          
        ]   }*/}
  return (
    <div className="absolute left-full m1-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        
        onChange={(color) => state.color = color.hex}
      />

    </div>
  )
}

export default ColorPicker