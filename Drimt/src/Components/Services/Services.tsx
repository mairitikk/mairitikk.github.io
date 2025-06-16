import React from 'react'
import theme_pattern from '../../assets/theme_pattern4.png'
import Services_Data from '../../assets/services_data.js'
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



const Services = () => {
 return (
    <div className='container mx-auto py-12 px-4'> 
        <div className="relative flex flex-col items-center mb-10">
        <h1 className='px-4 text-4xl sm:text-6xl lg:text-8xl font-semibold text-center'>My Services</h1>
        <img
          src={theme_pattern}
          alt="Decorative pattern"
          className='absolute bottom-[-5px] right-0 z-[-1] w-full h-16 sm:h-20 lg:h-28 object-cover'
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid layout */}
        {Services_Data.map((service, index) => (
          <Card key={index} className='p-6 flex flex-col justify-between h-full'> {/* Added padding and styling */}
            <CardHeader className='pb-4'> {/* Reduced padding below header */}
              <CardDescription className='text-lg font-semibold text-gray-500 mb-2'>{service.s_no}</CardDescription>
              <CardTitle className='text-3xl font-bold text-purple-500'>{service.s_name}</CardTitle> {/* Styled like the image */}
            </CardHeader>
            <CardContent className='flex-grow'> {/* Allows content to grow */}
              <p className='text-gray-700'>{service.s_desc}</p>
            </CardContent>
            <CardFooter className='pt-4 flex justify-end items-center'> {/* Aligns read more to the right */}
              <Button variant="link" className='text-purple-600 hover:underline flex items-center space-x-2 p-0 h-auto'>
                <p>Read More</p>
                {/* Make sure arrow_icon is correctly imported or replace with actual image */}
                {arrow_icon && <img src={arrow_icon} alt="Arrow Icon" className='w-4 h-4 ml-1' />}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services
