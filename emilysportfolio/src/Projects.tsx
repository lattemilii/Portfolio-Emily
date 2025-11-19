import ProjectCard from "./components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className=" relative min-h-screen mx-8 md:mx-28 py-12 -top-35">
      <img src="/img/diamond/diamond-1.png" alt="star" className="absolute md:top-15 md:right-87 top-23 right-1 w-15 h-15 md:w-17 md:h-17"/>
      <img src="/img/stars/star-3.png" alt="star" className="absolute md:top-30 md:-left-30 top-58 -left-13 rotate-15 w-20 h-20 md:w-40 md:h-40"/>
      <img src="/img/stars/star-1.png" alt="star" className="absolute md:-bottom-5 md:-right-25 bottom-5 -right-13 rotate-15 w-20 h-20 md:w-30 md:h-30"/>
      <img src="/img/heart/heart.png" alt="heart" className="absolute md:top-60 md:-right-20 top-130 -right-7 rotate-15 w-10 h-10 md:w-10 md:h-10"/>
      <img src="/img/heart/heart.png" alt="heart" className="absolute md:top-100 md:-left-20 top-250 -left-7 -rotate-15 w-10 h-10 md:w-10 md:h-10"/>
      <img src="/img/flower/flower-1.png" alt="heart" className="absolute md:top-180 md:-right-20 top-340 -right-7 -rotate-15 w-10 h-10 md:w-10 md:h-10"/>
      <img src="/img/flower/flower-3.png" alt="heart" className="absolute md:top-240 md:-left-20 top-440 -left-7 -rotate-15 w-10 h-10 md:w-10 md:h-10"/>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mt-18 md:mt-10">Projects</h1>
        <p className="text-secondary mt-2">
          These are the projects I've worked on in university
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <ProjectCard
          title="Lensz"
          description="A web application to help 'Optik Gembira' perform inventory checking. Built using React + TypeScript with Shadcn UI components."
          images={["/./img/Lensz/1.png",
             "/./img/Lensz/2.png",
             "/./img/Lensz/3.png"]}  
          tags={["React", "TypeScript", "Shadcn", "Tailwind CSS", "PostgreSQL"]}
          repositoryUrl="https://github.com/Petinggi-Teknik-Indonesia/lensz-client-web"
        />

        <ProjectCard
          title="Garuda Hacks – FrugalWatt"
          description="A hackathon project focused on sustainability, tracking energy consumption. Built using Next.js with Supabase integration."
          images={["/./img/FrugalWatt/1.png", "/./img/FrugalWatt/2.jpg", "/./img/FrugalWatt/3.png"]}
          tags={["Next.js", "Supabase", "Hackathon", "Shadcn", "Tailwind CSS"]}
          repositoryUrl="https://github.com/Deswandy/Labubuntu"
        />

        <ProjectCard
          title="JualannMommy"
          description="A shopping website for a clothing business where admins can manage catalog data. Built using Laravel Blade and MySQL."
          images={["/./img/JualanMommy/1.png",
            "/./img/JualanMommy/2.png",
            "/./img/JualanMommy/3.png"
          ]}
          tags={["Laravel", "PHP Blade", "MySQL"]}
          repositoryUrl="https://github.com/lattemilii/UAS-WEBPROG"
        />

        <ProjectCard
          title="MyUMN Mockup"
          description="A mockup website built to replicate features from the MyUMN campus portal. Built using PHP and MySQL."
          images={[
            "/./img/MyUMN/1.png",
             "/./img/MyUMN/2.png",
             "/./img/MyUMN/3.png"]}
          tags={["PHP", "MySQL"]}
          repositoryUrl="https://github.com/lattemilii/UTS-WEBPROG"
        />

      </div>
    </section>
  );
}

export default Projects;
