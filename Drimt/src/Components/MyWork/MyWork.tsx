import React from 'react'
import theme_pattern from '../../assets/theme_pattern4.png'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import {Button} from '../Navbar/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Services/card.tsx"



const MyWork = () => {
 return (
   <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 mt-10 mb-10 mx-5 sm:mx-10 lg:mx-[170px]">
      <div className="relative flex flex-col items-center mb-10 mt-20">
        <h1 className='px-4 text-4xl sm:text-6xl lg:text-8xl font-semibold text-center'>My latest work</h1>
        <img
          src={theme_pattern}
          alt="Decorative pattern"
          className='absolute bottom-[-5px] right-0 z-[-1] w-full h-16 sm:h-20 lg:h-28 object-cover'
        />
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mywork_data.map((work, index) => (
          <Card key={index}   className='p-6 flex flex-col justify-between h-full bg-blue-100 border-2 border-transparent rounded-lg transition-all duration-400 ease-in-out hover:scale-105 hover:border-[#3A3AF8]  hover:bg-gradient-to-br from-blue-200 to-blue-300 '>
         
            <CardContent className='flex-grow'>
             {/* Image added here */}
        {work.w_img && <img src={work.w_img} alt={work.s_name || "Work image"} className='w-full h-48 object-cover rounded-md mb-4' />}
            </CardContent>
            <CardFooter className='pt-4 flex justify-end items-center'>
              <Button variant="link" className='text-[#3A3AF8] hover:underline flex items-center space-x-2 p-0 h-auto'>
  {/* Show More Text */}
  <p className='text-base sm:text-lg'>Show More</p>
  {arrow_icon && <img src={arrow_icon} alt="Arrow Icon" className='w-6 h-6 ml-1' />}
</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyWork
