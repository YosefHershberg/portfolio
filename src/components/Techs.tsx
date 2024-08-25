import { technologies } from "@/constants"
import BallCanvas from "./canvas/Ball"

const Techs = () => {
    return (
        <section className="relative sm:mx-6 mx-4 my-14 pt-1 flex justify-center items-center flex-col" id='techs'>
            <div className="flex flex-row flex-wrap justify-center gap-10 max-w-[50rem]">
                {technologies.map(technology => (
                    <div className="size-24" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <p className="w-full text-center mt-2">{technology.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Techs