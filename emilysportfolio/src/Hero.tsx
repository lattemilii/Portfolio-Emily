function Hero() {
    return(
        <>
        <section id="home" className="flex flex-col mx-8 justify-center min-h-screen">
            <h1 className="flex flex-col text-4xl font-bold mb-4 text-primary">Nice to meet you, I'm Emily!</h1>
            <p className="text-start text-secondary">Web Development & Data Engineering Enthusiast</p>
            <a href="/path-to-cv.pdf" download>
            <button className="mt-4 px-4 py-2 w-24">
                My CV
            </button>
            </a>
        </section>
        </>
    )
}

export default Hero;