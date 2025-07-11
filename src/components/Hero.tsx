import {
  ChevronDown,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin
} from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center animate-fade-in">
            <span className="text-4xl font-bold text-white">DA</span>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl mb-4 animate-fade-in bg-gradient-to-r from-blue-400 to-white bg-clip-text md:text-5xl text-[#090e32]/0 font-extrabold">
            Dharshan A
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-200 mb-8 animate-fade-in delay-300 font-bold">
            Electronics and Communication Engineering Student | Aspiring Developer
          </h2>

          {/* Intro Text */}
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500 md:text-xl font-medium">
            Passionate about building real-world tech solutions with a focus on Artificial Intelligence,
            Machine Learning, and web technologies. Eager to learn, build, and innovate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-700">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center w-fit"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>

          {/* Quick Contact Icons */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-1000">
            <a
              href="mailto:darshan.1si22ec025@gmail.com"
              className="text-blue-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:9632544031"
              className="text-blue-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Dharshan2k04"
              className="text-blue-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/dharshan-a-b22328251"
              className="text-blue-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
