import React from 'react'
import { TestimonialsData } from '../../mockdata/data'
import Slider from 'react-slick';

const Testimonials = () => {
    const setting = {
        arrow: false,
        Infinity: true,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: 
                    {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                    },
            },
            {
                breakpoint: 640,
                settings: 
                    {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        
                    },

            }
        ],
    };
  return (
    <div className='py-14 mb-10'>
        <div className="container">
            {/* HEADER SECTION */}
            <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
                <h1 className='text-4xl font-bold'>What Are The Costumer Saying About Us
                </h1>
            </div>

            {/* TESTIMONIALS CARDS */}
            <div className="">
                <Slider {...setting}>
                    {TestimonialsData.map((data) =>(
                        <div key={data.id} className="my-6">
                            
                            <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-primary/10">
                                {/* UPPER SECTION */}
                                <div className="flex justify-start items-center gap-5">
                                    <img src={data.img} alt="" className='rounded-full w-16 h-16'/>
                                <div className="">
                                    <p className='text-xl font-bold text-black 80'>{data.name}</p>
                                    <p>{data.name}</p>
                                </div>
                                </div>

                                <div className="">
                                    {/* BOTTOM SECTION */}
                                    <div className="py-6 space-y-4">
                                       <p className='text-sm text-gray-500'>{data.text}</p>
                                       <p>⭐⭐⭐⭐⭐</p> 
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div > 
    </div>
  )
}

export default Testimonials 
  