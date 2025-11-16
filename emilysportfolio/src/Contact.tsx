function Contact() {
    return(
        <>
        <section id="contact" className="flex flex-col items-start mx-28 justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-primary">Contact Me!</h1>
            <p className="text-start text-secondary">Let's get in touch</p>
            <div className="flex flex-col gap-1">
                <p className="text-start text-secondary"><img src="/./img/wa.svg" alt="Phone" className="w-6 inline-block mr-2" /><a href="https://wa.me/6287887152688" target="_blank">+62 878-8715-2688</a></p>
                <p className="text-start text-secondary"><img src="/./img/gmail.png" alt="Email" className="w-6 inline-block mr-3" /><a href="mailto:emilygouw4@gmail.com" target="_blank">emilygouw4@gmail.com</a></p>
                <p className="text-start text-secondary"><img src="/./img/linkedin.png" alt="LinkedIn" className="w-6 inline-block mr-3" /><a className="cursor-pointer" href="https://www.linkedin.com/in/emilyfgouw" target="_blank">www.linkedin.com/in/emilyfgouw</a></p>
            </div>
        </section>
        </>
    )
}

export default Contact;