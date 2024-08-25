import { InfiniteMovingCards } from './InfiniteMovingCards';

const Testimonials = () => {
    return (
        <section id='testimonials' className="relative w-full h-[40rem] rounded-md flex flex-col antialiased items-center justify-center overflow-hidden">
            <div className='w-fit my-14 flex flex-col items-center'>
                <p className='uppercase mb-4 text-zinc-400'>what others say</p>
                <h2 className='sm:text-4xl text-2xl font-bold text-center text-[#915EFF]'>Testimonials</h2>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </section>
    )
}

export default Testimonials

const testimonials = [
    {
        quote:
            "I thought it was impossible to make a website as beautiful as our product, but Yosef proved me wrong.",
        name: "Noa Meltzer",
        title: "CFO @ Acme Co",
    },
    {
        quote:
            "I've never met a web developer who truly cares about their clients' success like Yosef does.",
        name: "Ofek Berkovich",
        title: "COO @ DEF Corp",
    },
    {
        quote: "Yosef consistently goes above and beyond to ensure the success of every project he works on. His expertise in full-stack development, coupled with his dedication to clean architecture, resulted in a product that was both robust and scalable. I highly recommend him for any web development role.",
        name: " Emily Watson",
        title: "Full Stack Team Lead @ Synthetix",
    },
    {
        quote:
            "After Yosef optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Limor Cohen",
        title: "CEO @ GHI Inc",
    },
    {
        quote:
            "Yosef's contributions to our web development projects have been invaluable. His deep understanding of both frontend and backend technologies, along with his ability to collaborate effectively with cross-functional teams, made him a key player in our success. His work is always delivered on time and exceeds expectations.",
        name: "Herman Melville",
        title: "CTO @ Melville Co",
    },
];
