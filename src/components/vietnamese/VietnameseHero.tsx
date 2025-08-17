import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const VietnameseHero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#practice-areas-overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-20 md:py-32 flex items-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Professional gradient overlay - darker on left where content is */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <p className="text-sm font-semibold text-gray-300 mb-4 tracking-wider uppercase">
            LUẬT SƯ TEXAS ĐÁNG TIN CẬY CỦA BẠN
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-left tracking-tight">
            Bạn không phải trả gì cho đến khi <span className="text-law-gold">chúng tôi thắng cho bạn.</span>
          </h1>

          {/* Description paragraph */}
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl leading-relaxed">
            Trải nghiệm sự yên tâm với cam kết 'Không Thắng, Không Phí' của chúng tôi. Tại Văn Phòng Luật SVR, chúng tôi chiến đấu không mệt mỏi cho quyền lợi của bạn, và bạn chỉ phải trả tiền nếu chúng tôi đảm bảo được khoản bồi thường mà bạn xứng đáng. Liên hệ với chúng tôi ngay hôm nay để được đánh giá vụ án miễn phí!
          </p>

          {/* CTA Section */}
          <div className="mb-12">
            <Link to="/vietnamese/free-consultation">
              <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 md:px-10 py-4 md:py-6 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                NHẬN ĐÁNH GIÁ VỤ ÁN MIỄN PHÍ
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToNextSection}
          className="text-white/70 hover:text-white transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-medium tracking-wider">CUỘN XUỐNG</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none transition-all duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default VietnameseHero; 