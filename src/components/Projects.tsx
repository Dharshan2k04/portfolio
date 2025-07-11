import { ExternalLink, Github, Bot, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Night Patrol Robot",
      description: "An autonomous robot for night-time security surveillance, built using Raspberry Pi and Arduino. Features include line-following, obstacle avoidance, and live image capture.",
      icon: Bot,
      technologies: ["Raspberry Pi", "Arduino", "Python", "Computer Vision"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Crop Prediction System",
      description: "Used Recurrent Neural Network (LSTM) on environmental data to predict the best crop with 97% accuracy. Input features: N, P, K, pH, temperature, humidity, and rainfall.",
      icon: BarChart3,
      technologies: ["Python", "Machine Learning", "LSTM", "Neural Networks"],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Line-Following Robot for Patient Monitoring",
      description: "Designed an autonomous hospital surveillance robot using ultrasonic sensors to monitor patients and RGB LEDs for real-time status display. Communicates patient conditions to doctors post-patrol, improving efficiency and monitoring.",
      icon: Bot,
      technologies: ["Arduino", "C/C++", "Ultrasonic Sensor", "IR Sensor"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm border border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
