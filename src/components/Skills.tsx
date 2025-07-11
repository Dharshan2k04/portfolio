
import { Code, Database, Settings, Brain, MessageSquare, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["C++", "Python", "PHP"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "Streamlit"],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL"],
      color: "from-purple-600 to-violet-600"
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["VS Code", "PyCharm", "Jupyter Notebook", "Google Colab"],
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Concepts",
      icon: Brain,
      skills: ["Machine Learning", "Deep Learning", "Computer Networks", "OOPs", "Data Structures"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Soft Skills",
      icon: MessageSquare,
      skills: ["Time Management", "Communication", "Teamwork", "Adaptability"],
      color: "from-pink-600 to-rose-600"
    }
  ];

  const languages = ["English", "Kannada", "Telugu"];

  return (
    <section className="py-16 bg-slate-800 text-white" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl hover:scale-105 transition-all duration-300 border border-slate-600 hover:border-blue-500"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Languages Section */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-600">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Languages Known</h3>
            <div className="flex justify-center space-x-8">
              {languages.map((language, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{language.charAt(0)}</span>
                  </div>
                  <p className="text-gray-300">{language}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
