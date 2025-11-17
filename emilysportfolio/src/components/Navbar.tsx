export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12  max-w-full sm:max-w-fit  px-3  sm:px-4  py-1.5
                    bg-accent/35 backdrop-blur-md
                    rounded-full">
      <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-4 md:gap-4 lg:gap-6 text-lg">
        <a href="#home" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">Home</a>
        <a href="#about" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">About Me</a>
        <a href="#skills" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">Skills</a>
        <a href="#projects" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">Projects</a>
        <a href="#contact" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">Contact</a>
      </nav>
    </div>
  );
}
