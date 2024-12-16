import { MarqueeDemo } from './Marquee';
import { MarqueeDemoVertical } from './MarqueeVertical';

const Testimonials = () => {
    return (
        <section id='testimonials' className="relative sm:mask-fade-sides  w-full h-[40rem] rounded-md flex flex-col antialiased items-center justify-center overflow-hidden">
            <div className='w-fit my-14 flex flex-col items-center'>
                <p className='uppercase mb-4 text-zinc-400'>what others say</p>
                <h2 className='sm:text-4xl text-2xl font-bold text-center text-[#915EFF]'>Testimonials</h2>
            </div>
            <div className='block sm:hidden'>
                <MarqueeDemoVertical />
            </div>
            <div className='hidden sm:block'>
                <MarqueeDemo />
            </div>
        </section>
    )
}

export default Testimonials
