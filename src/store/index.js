import {proxy} from "valtio"

const state=proxy({
    //to know are we currently in home page or not
   intro:true,
   //default color
   color:"#EFBD48",
   //are we currently displaying logo in shirt
   isLogoTexture:true,
   isFullTexture:false,  
   //initial logo
   logoDecal:'./threejs.png',
   fullDecal:'./threejs.png'

})

export default state