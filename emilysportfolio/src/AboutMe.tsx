function AboutMe() {
    return(
        <>
        <section id="about" className=" relative flex flex-col md:flex-row items-center justify-center min-h-screen sm:px-6 md:px-24  md:gap-12">
            <img src="/img/diamond/diamond.png" alt="Diamond" className="absolute md:top-50 md:right-74 top-98 right-0.5 w-10 h-10 md:w-18 md:h-18"/>
            <img src="/img/stars/sparkle-1.png" alt="sparkle" className="absolute md:bottom-40 md:right-35 md:left-auto bottom-10 left-10 w-10 h-10 md:w-18 md:h-18"/>
            <img src="/img/flower/flower-2.png" alt="Flower" className="absolute -bottom-15 -left-12 md:left-auto md:-bottom-40 md:-right-30  w-40 h-40 md:w-100 md:h-100"/>

            <img src="/img/heart/heart-1.png" alt="Heart" className="absolute top-30 -left-1  md:top-auto md:-bottom-40 md:left-5 w-25 h-25 md:w-80 md:h-80"/>
            <img src="/img/heart/heart-2.png" alt="Heart" className="absolute top-15 -left-13 md:top-auto md:bottom-5 md:-left-45 w-25 h-25 md:w-80 md:h-80"/>
            <img src="/img/heart/heart-3.png" alt="Heart" className="absolute top-45 -left-13 md:top-auto md:-bottom-85 md:-left-45 w-25 h-25 md:w-80 md:h-80"/>
                        
            <div className="md:w-auto max-w-sm mt-28 md:mt-0 md:max-w-md flex-1 flex justify-center">
                <img src="/Emily-1.png" alt="Emily" className="md:w-auto md:h-auto h-70"/>
            </div>
            <div className="w-full max-w-2xl flex-1 z-10">
                <h1 className="text-2xl md:text-6xl font-bold mb-4 text-primary text-center md:text-left whitespace-normal md:px-0 sm:px-6">About Emily</h1>
                <p className="text-secondary text-center md:text-left whitespace-normal mb-6 md:px-0 px-8">A computer engineering undergraduate who have interests in Web Development, Database Management, and Computer Networks, who also have a passion to learn new things in the field of technology and innovation.</p>
            </div>
        </section>
        </>
    )
}

export default AboutMe;