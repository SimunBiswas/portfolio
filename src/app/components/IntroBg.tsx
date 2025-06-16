"use client";

import FadingFromEdge from "./FadingFromEdge";
import { Introtags, animation } from "../../../types";

const IntroBg = () => {
  return (
    <div className="absolute h-full w-screen">
      <div className="bg-[url('/images/IntroBg.png')] bg-cover bg-center h-screen w-screen flex justify-center items-center p-7">
        <div className="relative overflow-hidden h-[40%] w-[40%] flex justify-between flex-col gap-2 p-4">
          <div className="justify-start">        
            <FadingFromEdge text={Introtags[0]} animation={animation[0]} delay={0.25}/>
          </div>
          <div className="flex justify-end">
            <FadingFromEdge text={Introtags[1]} animation={animation[1]} delay={0.35}/>
          </div>
          <div className="justify-start">        
            <FadingFromEdge text={Introtags[2]} animation={animation[0]} delay={0.45}/>
          </div>

        </div>         
      </div>
     </div>
  )
}

export default IntroBg;
