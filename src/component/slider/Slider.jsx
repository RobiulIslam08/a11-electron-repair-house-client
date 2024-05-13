
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Slider = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
    
        className="mySwiper h-[200px] mt-20 md:h-[400px] lg:h-[500px]"
      >
        <SwiperSlide>
       
          <div className='relative'>
            <img className='w-full bg-cover  object-cover'
              src="
              https://i.ibb.co/Vpg0nSp/pexels-pixabay-159235.jpg"
              loading="lazy"
            />
         
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'> 
            <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500'>Chiang Mai </p>
        <p className='text-center text-sm lg:text-base'> <h1  >
        Our{' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter

            words={['Ancient temples, lush jungles, and vibrant markets enchant visitors.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1></p>
        
              </div>
            </div>
   
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full  object-cover'
              src="https://i.ibb.co/zf5KjGd/pexels-lastly-719399.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'>
            
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500'>  Bandarban </p>
        <p className='text-center text-sm lg:text-base'>
        <h1  >
        {' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter

            words={['Verdant hills, tribal culture, and serene landscapes embrace adventurers.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
        </p>
        
              </div>
              </div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full bg-cover  object-fill'
              src="https://i.ibb.co/8d2V4jb/pexels-zeleboba-4211136.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500'>Langkawi</p>
        <p className='text-center text-sm lg:text-base'>
        <h1  >
        {' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter

            words={['Endless golden sands meet vibrant culture by the sea.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
        </p>
        
              </div>
              </div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full bg-cover  object-cover'
              src="https://i.ibb.co/7RwTRX7/pexels-it-services-eu-9278798-7639370.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'><div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500'>  Cox's Bajar </p>
        <p className='text-center text-sm lg:text-base'>
        <h1  >
        Our{' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter

            words={['Majestic beaches, bustling markets, and rich cultural heritage await.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
        </p>
        
              </div></div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
    

      </Swiper>

    </>
  );
};

export default Slider;


// https://i.ibb.co/y05nQNT/6560cb78a3727966adfbf2b8-356119658.jpg
// https://i.ibb.co/t8B1TdN/Nilgiri.jpg
// https://i.ibb.co/3CYtPYc/images-2.jpg
// https://i.ibb.co/7t9zb9N/Exploring-Coxs-Bazar.jpg