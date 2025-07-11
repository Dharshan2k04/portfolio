
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    { 
      title: "Python Essentials 1", 
      issuer: "Cisco Networking Academy",
      color: "from-yellow-500 to-orange-500",
      link: "https://www.netacad.com/certificates?issuanceId=0ce9982f-dd4e-479b-a177-9d5a9e53b6f1"
    },
    { 
      title: "Python Essentials 2", 
      issuer: "Cisco Networking Academy",
      color: "from-green-500 to-emerald-500",
      link: "https://www.netacad.com/certificates?issuanceId=6b9289a8-d8b6-4132-a08b-4293e3548ea0"
    },
    { 
      title: "Python for Data Professionals", 
      issuer: "Codebasics",
      color: "from-blue-500 to-indigo-500",
      link: "https://codebasics.io/certificate/CB-48-447186"
    },
    { 
      title: "CCNA: Introduction to Networks", 
      issuer: "Cisco",
      color: "from-purple-500 to-violet-500",
      link: "https://www.netacad.com/certificates?issuanceId=4d06cca2-5010-4550-b03f-25924ca8be8b"
    },
    { 
      title: "Data Structures and Algorithms in C++", 
      issuer: "CodeChef",
      color: "from-red-500 to-pink-500",
      link: "https://www.codechef.com/certificates/public/1e77b6a"
    },
    { 
      title: "C++ Programming", 
      issuer: "CodeChef",
      color: "from-teal-500 to-cyan-500",
      link: "https://www.codechef.com/certificates/public/e583f8d"
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white" id="certifications">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white w-full"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
