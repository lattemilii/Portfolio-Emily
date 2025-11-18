import { Card } from '@/components/ui/card';

function Skills() {
  return (
    <section id="skills" className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 -top-35">
      <img src="/img/stars/star.png" alt="star" className="absolute md:bottom-1 md:-right-15 md:left-auto bottom-1 -left-20 rotate-100 w-50 h-50 md:w-75 md:h-75"/>
      <img src="/img/stars/star.png" alt="star" className="absolute md:bottom-1 md:hidden top-30 -left-25 rotate-60  w-50 h-50 md:w-75 md:h-75"/>
      <img src="/img/stars/star.png" alt="star" className="absolute md:bottom-1 md:hidden bottom-160 -right-25 rotate-60  w-50 h-50 md:w-75 md:h-75"/>
      <img src="/img/stars/sparkle-1.png" alt="sparkle" className="absolute md:-top-40 md:right-1 md:left-auto -top-3 -left-3.5  w-10 h-12 md:w-10 md:h-12"/>
      <h1 className="text-4xl md:text-5xl font-bold mt-18 mb-12 md:mt-10 text-primary z-10">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 max-w-6xl z-10">
        
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-semibold mb-2 text-primary z-10">Hard Skills</h2>

          <Card className="p-5 bg-foreground/20 h-full z-10">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Web Development</h3>
            <p className="text-secondary">HTML, CSS, Typescript, JavaScript, React, Tailwind CSS, Vite</p>
          </Card>

          <Card className="p-5 bg-foreground/20 h-full">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Database</h3>
            <p className="text-secondary">SQL</p>
          </Card>

          <Card className="p-5 bg-foreground/20 h-full">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Programming Languages</h3>
            <p className="text-secondary">Python, Java, C</p>
          </Card>

          <Card className="p-5 bg-foreground/20 h-full">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Computer Network</h3>
            <p className="text-secondary">Cisco Packet Tracer</p>
          </Card>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-semibold mb-2 text-primary">Soft Skills</h2>

          <Card className="p-5 bg-foreground/20 h-full">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Communication</h3>
            <p className="text-secondary">Able to effectively convey ideas and information.</p>
          </Card>

          <Card className="p-5 bg-foreground/20 h-full">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Teamwork</h3>
            <p className="text-secondary">Collaborative and works well within a team environment.</p>
          </Card>

          <Card className="p-5 bg-foreground/20 h-full">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Problem-Solving</h3>
            <p className="text-secondary">Adept at analyzing situations and developing solutions.</p>
          </Card>

          <Card className="p-5 bg-foreground/20 h-full">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Adaptability</h3>
            <p className="text-secondary">Able to adjust to new conditions and challenges.</p>
          </Card>
        </div>

      </div>
    </section>
  );
}

export default Skills;
