import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wider">
              WELCOME TO SVR LAW FIRM
            </p>
            <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
              Experienced Legal<br />
              Representation You Can Trust
            </h2>
          </div>
          
          {/* Right Content */}
          <div className="text-black">
            <p className="mb-6 leading-relaxed">
              At SVR Law Firm, we focus on delivering superior legal strategies for <u>personal injury victims</u> and <u>individuals facing criminal charges</u> across the State of Texas. With years of trial experience and a commitment to achieving the best possible results, we have earned a reputation for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link to="/about">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                  ABOUT US
                </Button>
              </Link>
              <Link to="/practice-areas">
                <Button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 font-semibold">
                  PRACTICE AREAS
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Please note, the section below is a general preview of some of our practice areas. <Link to="/practice-areas" className="underline hover:text-law-gold">Click here</Link> to view our full practice areas page
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;