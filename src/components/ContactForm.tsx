import React from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import emailjs from '@emailjs/browser'

export default function ContactFrom() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        setIsSubmitting(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    to_name: "Yosef Herhsberg",
                    from_email: formData.email,
                    to_email: "berioo2000@gmail.com",
                    message: formData.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setIsSubmitting(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setIsSubmitting(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className="w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <form className="my-2" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-6">
                    <Label className="mb-2" htmlFor="email">Your Email</Label>
                    <Input
                        onChange={handleChange}
                        value={formData.email}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="thedude@abides.com"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-6">
                    <Label className="mb-2" htmlFor="name">Your Name</Label>
                    <Input
                        onChange={handleChange}
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="The Dude"
                        type="text"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-6">
                    <Label className="mb-2" htmlFor="message">Your Message</Label>
                    <Textarea
                        onChange={handleChange}
                        value={formData.message}
                        id="message"
                        name="message"
                        placeholder='What do you want to say?'
                        rows={4}
                        className="resize-none"
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"

                >
                    {isSubmitting ? "Sending..." :
                        <>
                            Send
                            <BottomGradient />
                        </>}
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
