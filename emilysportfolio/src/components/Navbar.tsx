export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12  max-w-sm sm:max-w-fit  px-3  sm:px-4  py-1.5
                    bg-accent/35 backdrop-blur-md
                    rounded-full">
      <nav className="flex items-center justify-center gap-4 sm:gap-2 md:gap-4 lg:gap-6 md:text-lg ">
        <a href="#home" className="text-primary-foreground text-center  cursor-pointer"><img src="/files/logo.png" alt="Logo" className="h-6.5" /></a>
        <a href="#about" className="text-primary-foreground text-center  cursor-pointer">About</a>
        <a href="#skills" className="text-primary-foreground text-center  cursor-pointer">Skills</a>
        <a href="#projects" className="text-primary-foreground text-center  cursor-pointer">Projects</a>
        <a href="#contact" className="text-primary-foreground text-center  cursor-pointer">Contact</a>
      </nav>
    </div>
  );
}
