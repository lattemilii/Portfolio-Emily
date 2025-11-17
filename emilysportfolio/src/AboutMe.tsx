function AboutMe() {
    return(
        <>
        <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen sm:px-6 md:px-24 overflow-x-hidden md:gap-12">
            <div className="md:w-auto max-w-sm mt-6 md:mt-0 md:max-w-md flex-1 flex justify-center">
                <img src="/Emily-1.png" alt="Emily" className="md:w-auto md:h-auto h-96" />
            </div>
            <div className="w-full max-w-2xl flex-1">
                <h1 className="text-2xl md:text-6xl font-bold mb-4 text-primary text-center md:text-left whitespace-normal md:px-0 sm:px-6">About Emily</h1>
                <p className="text-secondary text-center md:text-left whitespace-normal mb-6 md:px-0 px-8">A computer engineering undergraduate who have interests in Web Development, Database Management, and Computer Networks, who also have a passion to learn new things in the field of technology and innovation.</p>
            </div>
        </section>
        </>
    )
}

export default AboutMe;