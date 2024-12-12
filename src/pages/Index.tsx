import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-jeeth-cyan via-jeeth-purple to-jeeth-pink">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/a8bba3a5-fcc7-48fe-8ccc-35deff8bd8a9.png"
              alt="Jeeth Logo"
              className="w-32 h-32 animate-float"
            />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            $JEETH
          </h1>
          <p className="text-xl text-white/80 mb-8">
            The most innovative meme coin you've never heard of
          </p>
          <a
            href="https://x.com/JeethereumSol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-white text-black hover:bg-jeeth-yellow transition-all duration-300 transform hover:scale-105"
            >
              <Twitter className="mr-2 h-5 w-5" />
              Follow on Twitter
            </Button>
          </a>
        </div>

        {/* Profile Section */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/lovable-uploads/d39ef29c-1474-4535-92d9-d5005bd66340.png"
              alt="Jeeth Profile"
              className="w-32 h-32 rounded-full border-4 border-jeeth-yellow"
            />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Meet the Founder
          </h2>
          <p className="text-white/80 text-lg">
            The mastermind behind the next big thing in crypto
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            "Much Innovation",
            "Very Technology",
            "Such Gains",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
              <p className="text-white/70">
                {index === 0 && "Leading the way in blockchain innovation"}
                {index === 1 && "Powered by cutting-edge meme technology"}
                {index === 2 && "To the moon! 🚀"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;