function Hero() {

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/files/CV_Emily Francesca Gouw.pdf';
        link.download = 'Emily Francesca Gouw_CV.pdf';
        link.click();
    };

    return (
        <>
            <section id="home" className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-24 overflow-hidden gap-8 md:gap-12">
                <img src="/img/stars/star-1.png" alt="Star" className="absolute md:bottom-3 md:right-3 bottom-3 right-3 w-40 h-40 md:w-60 md:h-60 opacity-50"/>
                <img src="/img/stars/star-2.png" alt="Star" className="absolute md:top-3 md:left-0 top-14 left-3 w-40 h-40 md:w-60 md:h-60 opacity-50"/>

                <div className="w-full max-w-2xl flex-1 relative z-10">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 text-primary text-center px-6 md:px-0 md:text-left break-words leading-tight whitespace-normal">Nice to meet you, I'm Emily!</h1>
                    <p className="text-secondary text-center md:text-left whitespace-normal mb-6 px-6 md:px-0">Web Development, Database Management, and Computer Networks Enthusiast</p>

                    <div className="flex justify-center md:justify-start mb-8 md:mb-0">
                        <button onClick={downloadCV} aria-label="Download CV" className="button text-tags-text inline-flex items-center justify-center px-4 py-2">
                            Download My CV
                            <img src="/Download.png" alt="Download Icon" className="ml-2 w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
