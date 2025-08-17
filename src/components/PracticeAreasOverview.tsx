import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PracticeAreasOverview = () => {
  return (
    <section id="practice-areas-overview" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Injury Law */}
          <Link to="/practice-areas/personal-injury" className="text-white hover:text-law-gold transition-colors group">
            <div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-law-gold transition-colors">Personal Injury Law</h2>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                We advocate for individuals who have been injured due to the negligence or intentional acts of others. Our experienced attorney handles a wide range of personal injury cases including car accidents, truck accidents, slip and fall accidents, medical malpractice, and more. We fight to ensure you receive the compensation you deserve for your injuries, medical expenses, lost wages, and pain and suffering.
              </p>
              <div className="flex justify-end">
                <ArrowRight className="w-6 h-6 text-white group-hover:text-law-gold group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </Link>
          
          {/* Criminal Defense Law */}
          <Link to="/practice-areas/criminal-defense" className="text-white hover:text-law-gold transition-colors group">
            <div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-law-gold transition-colors">Criminal Defense Law</h2>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                If you are facing criminal charges, you need experienced legal representation. Our criminal defense attorney provides strategic representation for all types of criminal charges including DWI/DUI, drug offenses, assault, domestic violence, theft, and more. We work tirelessly to protect your rights and achieve the best possible outcome for your case.
              </p>
              <div className="flex justify-end">
                <ArrowRight className="w-6 h-6 text-white group-hover:text-law-gold group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasOverview; 