import { Mail, Phone, Linkedin, Github, Code, Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Contact = () => {
  const contactMethods = [{
    icon: Mail,
    label: "Email",
    value: "darshan.1si22ec025@gmail.com",
    href: "mailto:darshan.1si22ec025@gmail.com",
    color: "from-red-500 to-pink-500"
  }, {
    icon: Phone,
    label: "Phone",
    value: "9632544031",
    href: "tel:9632544031",
    color: "from-green-500 to-emerald-500"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dharshan-a-b22328251",
    href: "https://linkedin.com/in/dharshan-a-b22328251",
    color: "from-blue-500 to-indigo-500"
  }, {
    icon: Github,
    label: "GitHub",
    value: "Dharshan2k04",
    href: "https://github.com/Dharshan2k04",
    color: "from-gray-700 to-gray-900"
  }];
  const codingProfiles = [{
    platform: "LeetCode",
    username: "dharshan481",
    href: "https://leetcode.com/u/dharshan481/",
    color: "from-orange-500 to-yellow-500"
  }, {
    platform: "GeeksforGeeks",
    username: "dharshanyp3t0",
    href: "https://www.geeksforgeeks.org/user/dharshanyp3t0/",
    color: "from-green-600 to-green-400"
  }, {
    platform: "CodeChef",
    username: "sit1si22ec025",
    href: "https://www.codechef.com/users/sit1si22ec025",
    color: "from-brown-600 to-orange-600"
  }];
  return <section className="py-16 bg-slate-800 text-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          {/* Main Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((contact, index) => <Card key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 border-slate-600 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                  <p className="text-gray-300 text-sm mb-4 break-all">{contact.value}</p>
                  <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white" onClick={() => window.open(contact.href, '_blank')}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Connect
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          
          {/* Coding Profiles */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-600">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center flex items-center justify-center">
              <Code className="mr-3 h-6 w-6 text-blue-400" />
              Coding Profiles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {codingProfiles.map((profile, index) => <div key={index} className="bg-slate-800 p-6 rounded-lg hover:scale-105 transition-all duration-300 border border-slate-600 hover:border-blue-500 cursor-pointer" onClick={() => window.open(profile.href, '_blank')}>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${profile.color} flex items-center justify-center mb-4`}>
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{profile.platform}</h4>
                  <p className="text-gray-400 text-sm mb-3">{profile.username}</p>
                  <div className="flex items-center text-blue-400 text-sm hover:text-blue-300">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Profile
                  </div>
                </div>)}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12">
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;