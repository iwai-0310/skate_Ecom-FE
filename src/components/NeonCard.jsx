import React from 'react'

const NeonCard = () => {
  return (
    <div className="p-10 bg-black">
    <div
        className="w-48 h-80 flex justify-center items-center text-sky-200 border-4 rounded-xl   border-white shadow-[0_0_10px_#9400d3,0_0_10px_#9400d3,0_0_10px_#9400d3,0_0_15px_#9400d3,inset_0_0_1px_#9400d3,inset_0_0_2px_#9400d3,inset_0_0_10px_#9400d3,inset_0_0_40px_#4c00ff]"
    >
       <button className=" neon-border w-30 h-5 bg-red-700 flex justify-center items-center text-white border-2 rounded-lg border-white ">Explore More</button> 
    </div>
</div>
    
   
  )
}

export default NeonCard