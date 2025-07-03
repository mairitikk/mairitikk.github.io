
import theme_pattern from '../../assets/theme_pattern4.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import {Button} from '../navbar/button'
import {Card} from "../services/card"



const MyWork = () => {
 return (
   <div id="work" className="flex flex-col items-center justify-center gap-10 lg:gap-20 mt-10 mb-10 mx-5 sm:mx-10 lg:mx-[170px]">
      <div className="relative flex flex-col items-center mb-10 mt-20">
        <h1 className='px-4 text-4xl sm:text-6xl lg:text-8xl font-semibold text-center'>My latest work</h1>
        <img
          src={theme_pattern}
          alt="Decorative pattern"
          className='absolute bottom-[-5px] right-0 z-[-1] w-full h-16 sm:h-20 lg:h-28 object-cover'
        />
      </div>

     <div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {mywork_data.map((work, index:number) => (
      <Card key={index} className='p-0 flex flex-col justify-between h-full bg-blue-100 border-2 border-transparent rounded-lg overflow-hidden transition-all duration-400 ease-in-out hover:scale-105 hover:border-[#3A3AF8] hover:bg-gradient-to-br from-blue-200 to-blue-300 '>
        {work.w_img && (
          <div className="relative w-full h-full min-h-[200px]"> 
            <img
              src={work.w_img}
              alt={work.w_name || "Work image"}
              className='w-full h-full object-contain'
            />
          
          </div>
        )}
      </Card>
    ))}
  </div>

  {/* Single "Show More" Button for the entire section */}
  <div className="flex justify-center mt-8">
    <Button variant="outline"  className='flex items-center space-x-2 h-auto px-6 py-3 text-lg sm:text-xl border-2 border-[#3A3AF8] text-[#3A3AF8] bg-blue-200 hover:bg-blue-300 hover:text-[#2A2AD7] transition-colors duration-300 rounded-full group'>
      <p className="transition-all duration-600 group-hover:mr-[30px]">Show More</p>
      {arrow_icon && <img src={arrow_icon} alt="Arrow Icon" className='w-6 h-6' />}
    </Button>
  </div>
</div>
    </div>
  );
};

export default MyWork
