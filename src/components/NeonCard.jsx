import React from 'react'

const NeonCard = () => {
  return (
    
    <div
<<<<<<< HEAD
        className="w-full  h-full flex-end justify-center items-center text-sky-200 border-2 rounded-xl  border-purp shadow-[0_0_10px_#9400d3,0_0_10px_#9400d3,0_0_10px_#9400d3,0_0_15px_#9400d3,inset_0_0_1px_#9400d3,inset_0_0_2px_#9400d3,inset_0_0_10px_#9400d3,inset_0_0_40px_#4c00ff]"
=======
        className="w-48 h-80 flex justify-center items-center text-sky-200 border-4 rounded-xl  border-white shadow-[0_0_10px_#9400d3,0_0_10px_#9400d3,0_0_10px_#9400d3,0_0_15px_#9400d3,inset_0_0_1px_#9400d3,inset_0_0_2px_#9400d3,inset_0_0_10px_#9400d3,inset_0_0_40px_#4c00ff]"
>>>>>>> 688b93d489d4e1d83a4901dc6a395c2440f253ad
    >
      {/* image section starts here */}
      <div className='py-10 px-5 h-4/5'>
      <img
      className="h-full w-full rounded-lg object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
      </div>
      {/* image section ends here */}
       
    
      {/* button section starts here */}
       <div class="relative inline-flex  group">
        <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a href="#" title="testing if this works or not "
            class="relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">Explore Now
        </a>
        {/* button section ends here */}
    </div>    
    </div>

    
   
  )
}

export default NeonCard