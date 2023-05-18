import React from 'react'
import {Html,useProgress} from "@react-three/drei"

const Loader = () => {
  const {progress} = useProgress();

  return (
    <Html>
      <span >
      </span>
      <p style={{
        fontSize:14,
        color:"#fff",
        fontWeight:600,
        marginTop:20
      }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader