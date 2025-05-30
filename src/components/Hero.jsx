import { FaPlay } from 'react-icons/fa'
import HeroImg from "../assets/hero/dumbell.jpeg"
import { motion } from 'framer-motion'
import { SlideRight } from '../utility/animation'


const Hero = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h[650px] relative">
            {/* BRAND INFO */}
            <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
                <div className="text-center md:text-left space-y-6">
                    <motion.h1 variants={SlideRight(0.6)} initial="hidden" animate="visible" className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>
                        Gym gives you the perfect{" "} 
                        <span className='text-primary'>Health</span>{" "}
                    </motion.h1>

                    <motion.p variants={SlideRight(1.2)} initial="hidden" animate="visible" className='text-gray-600 xl:max-w[500px]'>
                        it is a long establish fact that a reader will be by readable content of a page when are the best product.
                    </motion.p>

                {/* BUTTON SECTION */}
                <motion.div variants={SlideRight(1.6)} initial="hidden" animate="visible" className="flex justify-center items-center gap-8  md:justify-start !mt-4">
                    <button className='primary-btn flex items-center gap-2'>
                        {" "}
                        Order Now</button>
                    <button className='flex justify-center items-center gap-2'>
                    <FaPlay />Watch Now</button>
                </motion.div>

                </div>     
            </div>


            {/* HERO IMAGE */}
            <div className="flex justify-center items-center">
                <img src={HeroImg} alt="" className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'/>
            </div>

        </div>
      
    </section>
  )
}

export default Hero
