
import { GraduationCap, Award, Users, Code } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-slate-800 text-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently pursuing my Bachelor's degree in Electronics and Communication Engineering 
                at Siddaganga Institute of Technology (2022–2026) with a CGPA of 8.23. My journey in 
                engineering has been driven by a deep fascination with technology and its potential to 
                solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My interests span across machine learning, IoT systems, and web development. I believe 
                in the power of interdisciplinary learning and enjoy exploring how different technologies 
                can work together to create innovative solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond academics, I'm an active contributor to college events and serve as an IEEE board 
                member, where I help organize technical workshops and coding competitions. I've learned 
                to balance rigorous academic pursuits with hands-on project building and continuous 
                technical learning.
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900 to-slate-700 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">8.23</h3>
                <p className="text-blue-200">CGPA</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-900 to-slate-700 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <Code className="h-8 w-8 text-indigo-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">5+</h3>
                <p className="text-indigo-200">Certifications</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900 to-slate-700 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <Award className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">2+</h3>
                <p className="text-purple-200">Major Projects</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-900 to-slate-700 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <Users className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">IEEE</h3>
                <p className="text-cyan-200">Board Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
