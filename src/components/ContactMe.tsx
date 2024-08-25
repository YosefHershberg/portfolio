import EarthCanvas from "./canvas/Earth"
import ContactFrom from "./ContactForm"

const ContactMe = () => {
    return (
        <section className='relative w-screen max-w-6xl sm:px-10 px-6 sm:mx-6 mx-4 my-14 pt-1 flex flex-col items-center' id='contact'>
            <div className='w-fit my-14 flex flex-col items-center'>
                <p className='uppercase mb-4 text-zinc-400'>get in touch</p>
                <h2 className='sm:text-4xl text-2xl font-bold text-center text-[#915EFF]'>Contact me</h2>
            </div>
            <div className="md:flex w-full justify-between">
                <div className="md:w-1/2">
                    <ContactFrom />
                </div>
                <div className="md:block hidden md:w-1/2">
                    <EarthCanvas />
                </div>
            </div>
        </section>
    )
}

export default ContactMe