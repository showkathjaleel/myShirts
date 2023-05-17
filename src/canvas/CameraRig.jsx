import React,{useRef} from 'react'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import state from '../store'
import Shirt from './Shirt'
const CameraRig = ({children}) => {
  const group=useRef()
  const snap=useSnapshot(state)

  useFrame((state,delta)=>{
    const isBreakPoint=window.innerWidth<=1200;
    const isMobile=window.innerWidth<=600;
    //set initial position of the model
    let targetPosition=[-0.4,0,2]
    if(snap.intro){
      if(isBreakPoint) targetPosition=[0,0,2]
      if(isMobile) targetPosition=[0, 0.2 , 2.5]
    }else{
      //if not in home page
      if(isMobile) targetPosition=[0, 0 , 2.5]
      else targetPosition=[0, 0 , 2]
    }
   easing.damp3(state.camera.position,targetPosition,0.25,delta)


//set the model rotation slowly
easing.dampE(
  group.current.rotation,
  [state.pointer.y /10 , -state.pointer.x /5,0],
  0.25,
  delta
  )
  })



  return <group ref={group}>{children}</group>
}

export default CameraRig