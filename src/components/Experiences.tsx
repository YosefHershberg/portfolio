import { Timeline, type TimelineEntry } from "./ui/timeline";

const experiences: TimelineEntry[] = [
    {
        title: "2026 — Present",
        content: (
            <div>
                <h4 className="text-white text-xl md:text-2xl font-semibold mb-1">
                    Full Stack Developer · Proceed
                </h4>
                <p className="text-neutral-400 text-sm md:text-base mb-4">
                    Building enterprise-grade Project & Portfolio Management (PPM)
                    applications on Broadcom Clarity for multi-project organizations
                    in the Israeli market.
                </p>
                <ul className="list-disc pl-5 text-neutral-300 text-sm md:text-base space-y-2">
                    <li>
                        Designed and developed AI-driven applications from scratch using{" "}
                        <span className="text-[#915EFF]">React</span>,{" "}
                        <span className="text-[#915EFF]">Node.js</span>, and{" "}
                        <span className="text-[#915EFF]">SQL</span> databases.
                    </li>
                    <li>
                        Delivered scalable Clarity workflows integrating with React and
                        Node.js services and existing client systems.
                    </li>
                    <li>
                        Collaborated cross-functionally to translate business needs into
                        maintainable, scalable solutions that shorten delivery cycles.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: "2025 — Present",
        content: (
            <div>
                <h4 className="text-white text-xl md:text-2xl font-semibold mb-1">
                    Full Stack Lecturer · Analiza Education Center
                </h4>
                <p className="text-neutral-400 text-sm md:text-base mb-4">
                    Promoted from Teaching Assistant to Lead Lecturer. Train Haredi
                    students in modern web development and software fundamentals.
                </p>
                <ul className="list-disc pl-5 text-neutral-300 text-sm md:text-base space-y-2">
                    <li>
                        Lead fast-paced, hands-on coding sessions covering{" "}
                        <span className="text-[#915EFF]">JavaScript</span>,{" "}
                        <span className="text-[#915EFF]">React</span>,{" "}
                        <span className="text-[#915EFF]">Node</span>, SQL/NoSQL
                        databases, and Kubernetes.
                    </li>
                    <li>
                        Teach OOP in C# and common design patterns alongside
                        software-development principles.
                    </li>
                    <li>Trained students for various technological units in the IDF.</li>
                </ul>
            </div>
        ),
    },
    {
        title: "2024 — 2026",
        content: (
            <div>
                <h4 className="text-white text-xl md:text-2xl font-semibold mb-1">
                    Full Stack Developer · CulinaryGPT
                </h4>
                <p className="text-neutral-400 text-sm md:text-base mb-4">
                    Designed and shipped a scalable full-stack AI platform for
                    personalized recipe generation, deployed on AWS ECS.
                </p>
                <ul className="list-disc pl-5 text-neutral-300 text-sm md:text-base space-y-2">
                    <li>
                        Built with <span className="text-[#915EFF]">React</span>,{" "}
                        <span className="text-[#915EFF]">Node.js</span>, and{" "}
                        <span className="text-[#915EFF]">MongoDB</span>; containerized
                        with Docker for streamlined deployments.
                    </li>
                    <li>
                        Reduced wait time by over <span className="text-[#915EFF]">40%</span>{" "}
                        by parallelizing API calls and streaming results to the client
                        via Server-Sent Events.
                    </li>
                    <li>
                        Supported <span className="text-[#915EFF]">thousands</span> of
                        recipe creations with high availability and a modular,
                        secure architecture.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        title: "2022 — 2023",
        content: (
            <div>
                <h4 className="text-white text-xl md:text-2xl font-semibold mb-1">
                    Full Stack Developer · INT College
                </h4>
                <p className="text-neutral-400 text-sm md:text-base mb-4">
                    Project-based course bridging theory and practice across the
                    full stack.
                </p>
                <ul className="list-disc pl-5 text-neutral-300 text-sm md:text-base space-y-2">
                    <li>
                        Frontend: <span className="text-[#915EFF]">HTML</span>, CSS,
                        JavaScript, TypeScript,{" "}
                        <span className="text-[#915EFF]">React</span> & Redux.
                    </li>
                    <li>
                        Backend: <span className="text-[#915EFF]">Node.js</span>,
                        Express, Redis & MongoDB.
                    </li>
                </ul>
            </div>
        ),
    },
];

const Experiences = () => {
    return (
        <section
            className="relative sm:mx-6 mx-4 my-14 pt-1 flex flex-col items-center w-full"
            id="experience"
        >
            <div className="w-fit my-14 flex flex-col items-center">
                <p className="uppercase mb-4 text-zinc-400">what I have done</p>
                <h2 className="sm:text-4xl text-2xl font-bold text-center text-[#915EFF]">
                    Experience
                </h2>
            </div>
            <Timeline data={experiences} />
        </section>
    );
};

export default Experiences;
