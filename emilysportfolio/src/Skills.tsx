import {Card} from '@/components/ui/card';

function Skills() {
    return(
        <>
        <section id="skills" className="flex flex-col items-center mx-8 justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-primary">Skills</h1>
            <div className="flex flex-row gap-12">
                <div className="flex flex-col mb-8 space-y-4">
                    <h2 className="text-3xl font-semibold mb-4 text-primary">Hard Skills</h2>
                    <Card className="w-112 p-4 mb-4 bg-accent/10">
                        <h2 className="text-2xl font-bold mb-2 text-secondary">Web Development</h2>
                        <p className="text-secondary">HTML, CSS, Typescript, JavaScript, React, Tailwind CSS, Vite</p>
                    </Card>
                    <Card className="w-112 p-4 mb-4 bg-accent/10">
                        <h2 className="text-2xl font-bold mb-2 text-secondary">Data Engineering</h2>
                        <p className="text-secondary">SQL, PostgreSQL </p>
                    </Card>
                    <Card className="w-112 p-4 mb-4 bg-accent/10">
                        <h2 className="text-2xl font-bold mb-2 text-secondary">Programming Languages</h2>
                        <p className="text-secondary">Python, Java, C </p>
                    </Card>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-3xl font-semibold mb-4 text-primary">Soft Skills</h2>
                    <Card className="w-112 p-4 mb-4 bg-accent/10">
                        <h2 className="text-2xl font-bold mb-2 text-secondary">Communication</h2>
                        <p className="text-secondary">Able to effectively convey ideas and information both verbally and in writing.</p>
                    </Card>
                    <Card className="w-112 p-4 mb-4 bg-accent/10">
                        <h2 className="text-2xl font-bold mb-2 text-secondary">Teamwork</h2>
                        <p className="text-secondary">Collaborative and works well within a team environment to achieve common goals.</p>
                    </Card>
                    <Card className="w-112 p-4 mb-4 bg-accent/10">
                        <h2 className="text-2xl font-bold mb-2 text-secondary">Problem-Solving</h2>
                        <p className="text-secondary">Adept at analyzing situations, identifying issues, and developing effective solutions.</p>
                    </Card>
                </div>
            </div>
        </section>
        </>
    )
}

export default Skills;