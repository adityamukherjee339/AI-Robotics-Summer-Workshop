import { Bot, Code2, Cpu, Lightbulb, Blocks } from "lucide-react";

export default function LearningOutcomes() {
  const outcomes = [
    {
      title: "Build 3 Real Robots",
      description: "Hands-on experience building functional robots using logic circuits and modern components.",
      icon: Bot,
    },
    {
      title: "Master Python Basics",
      description: "Learn the fundamentals of Python, the most popular programming language in AI.",
      icon: Code2,
    },
    {
      title: "Understand AI Logic",
      description: "Grasp how machines learn, make decisions, and process data using basic algorithms.",
      icon: Cpu,
    },
    {
      title: "Problem Solving Skills",
      description: "Develop critical thinking by debugging code and optimizing robotic movements.",
      icon: Lightbulb,
    },
    {
      title: "Interactive Projects",
      description: "Create visually appealing mini-projects that combine hardware and software seamlessly.",
      icon: Blocks,
    },
  ];

  return (
    <section id="curriculum" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4">What Your Child Will Learn</h2>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Our curriculum is designed to be engaging, practical, and highly relevant to the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            const colors = ['#06B6D4', '#F97316', '#4F46E5', '#901E3E', '#511D43'];
            const bgColors = [
              'rgba(6, 182, 212, 0.15)', 
              'rgba(249, 115, 22, 0.15)', 
              'rgba(79, 70, 229, 0.15)', 
              'rgba(144, 30, 62, 0.15)', 
              'rgba(81, 29, 67, 0.15)'
            ];
            
            const color = colors[index % 5];
            const bgColor = bgColors[index % 5];

            return (
              <div key={index} className="p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all group backdrop-blur-md border border-white/20 border-t-4" style={{ backgroundColor: bgColor, borderTopColor: color }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm" style={{ backgroundColor: color }}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">{outcome.title}</h3>
                <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
