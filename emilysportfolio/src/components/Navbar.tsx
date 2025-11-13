export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12 sm:w-auto px-8 py-3 
                    bg-[#A65E89]/35 backdrop-blur-md 
                    rounded-full">
      <nav className="flex items-center justify-center space-x-8 sm:space-x-12 md:space-x-16">
        <a href="#home" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">Home</a>
        <a href="#about" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">About Me</a>
        <a href="#skills" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">Skills</a>
        <a href="#projects" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">Projects</a>
        <a href="#contact" className="text-primary-foreground text-center hover:text-[#E5A6C4] cursor-pointer">Contact</a>
      </nav>
    </div>
  );
}
