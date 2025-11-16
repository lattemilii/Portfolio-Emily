function AboutMe() {
    return(
        <>
        <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-24 overflow-x-hidden md:gap-12">
            <div className="md:w-auto max-w-sm mt-6 md:mt-0 md:max-w-md flex-1 flex justify-center">
                <img src="/./img/Emily-1.png" alt="Emily" className="h-96 max-h-96 md:max-h-full w-auto" />
            </div>
            <div className="w-full max-w-2xl flex-1">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 text-primary text-center md:text-left break-words leading-tight whitespace-normal">About Emily</h1>
                <p className="text-secondary text-center md:text-left whitespace-normal mb-6">A computer engineering undergraduate who have interests in Web Development, Data Engineering, and Computer Networks. I also have a passion to learn new things in the field of technology and innovation.</p>
            </div>
        </section>
        </>
    )
}

export default AboutMe;