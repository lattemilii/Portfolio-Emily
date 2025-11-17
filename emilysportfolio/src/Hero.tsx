function Hero() {

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/files/CV_Emily Francesca Gouw.pdf';
        link.download = 'Emily Francesca Gouw_CV.pdf';
        link.click();
    };

    return(
        <>
                <section id="home" className="flex md:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-24 overflow-x-hidden gap-8 md:gap-12">
                        <div className="w-full max-w-2xl flex-1">
                            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 text-primary text-center px-6 md:px-0 md:text-left break-words leading-tight whitespace-normal">
                                Nice to meet you, I'm Emily!
                            </h1>
                            <p className="text-secondary text-center md:text-left whitespace-normal mb-6 px-6 md:px-0">
                                Web Development, Database Management, and Computer Networks Enthusiast
                            </p>
                            <div className="flex justify-center md:justify-start mb-8 md:mb-0">
                                <button onClick={downloadCV} aria-label="Download CV" className="button text-tags-text inline-flex items-center justify-center px-4 py-2">
                                    My CV
                                </button>
                            </div>
                        </div>
                </section>
        </>
    )
}

export default Hero;