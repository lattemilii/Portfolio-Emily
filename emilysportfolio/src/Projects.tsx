import ProjectCard from "./components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="min-h-screen mx-8 md:mx-28 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Projects</h1>
        <p className="text-secondary mt-2">
          These are the projects I've worked on in university
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <ProjectCard
          title="Lensz"
          description="A web application to help 'Optik Gembira' perform inventory checking. Built using React + TypeScript with Shadcn UI components."
          images={["/./img/Emily.jpg", "/lensz2.png"]}  
          tags={["React", "TypeScript", "Shadcn", "Inventory"]}
        />

        <ProjectCard
          title="Garuda Hacks – FrugalWatt"
          description="A hackathon project focused on sustainability, tracking energy consumption. Built using Next.js with Supabase integration."
          images={["/./img/FrugalWatt/1.png", "/./img/FrugalWatt/2.jpg", "/./img/FrugalWatt/3.png"]}
          tags={["Next.js", "Supabase", "Hackathon"]}
        />

        <ProjectCard
          title="JualannMommy"
          description="A shopping website for a clothing business where admins can manage catalog data. Built using Laravel Blade and MySQL."
          images={[
            "./img/JualanMommy/1.png",
            "./img/JualanMommy/2.png",
            "./img/JualanMommy/3.png"
          ]}
          tags={["Laravel", "PHP Blade", "MySQL"]}
        />

        <ProjectCard
          title="MyUMN Mockup"
          description="A mockup website built to replicate features from the MyUMN campus portal. Built using PHP and MySQL."
          images={["/./img/MyUMN/1.png",
             "./img/MyUMN/2.png",
             "./img/MyUMN/3.png"]}
          tags={["PHP", "MySQL"]}
        />

      </div>
    </section>
  );
}

export default Projects;
