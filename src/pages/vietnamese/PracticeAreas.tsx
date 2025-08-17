import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Shield, Scale, Users, Heart, Car, Truck, User, Dog } from "lucide-react";
import wrongfulDeathImg from "@/assets/wrongful-death.jpg";
import carAccidentsImg from "@/assets/car-accidents.jpg";
import truckAccidentsImg from "@/assets/truck-accidents.jpg";
import slipFallImg from "@/assets/slip-fall.jpg";
import dwiDuiImg from "@/assets/dwi-dui.jpg";
import domesticViolenceImg from "@/assets/domestic-violence.jpg";

const VietnamesePracticeAreas = () => {
  const [hoveredPersonalInjury, setHoveredPersonalInjury] = useState<string | null>("Tai Nạn Xe Hơi");
  const [hoveredCriminalDefense, setHoveredCriminalDefense] = useState<string | null>("Lái xe trong tình trạng say rượu");

  const personalInjuryAreas = [
    {
      name: "Tai Nạn Xe Hơi",
      image: carAccidentsImg,
      description: "Bảo vệ quyền lợi của bạn",
      link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-hoi",
      icon: Car
    },
    {
      name: "Tai nạn xe tải 18 bánh",
      image: truckAccidentsImg,
      description: "Vụ án tai nạn xe tải phức tạp",
      link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-tai",
      icon: Truck
    },
    {
      name: "Trượt Ngã",
      image: slipFallImg,
      description: "Khiếu nại trách nhiệm cơ sở",
      link: "/vietnamese/linh-vuc-thuc-hanh/truot-nga",
      icon: User
    },
    {
      name: "Tử vong do sai sót",
      image: wrongfulDeathImg,
      description: "Tìm kiếm công lý cho gia đình",
      link: "/vietnamese/linh-vuc-thuc-hanh/tu-vong-do-sai-sot",
      icon: Heart
    },
    {
      name: "Chấn Thương Thảm Khốc",
      image: carAccidentsImg,
      description: "Đấu tranh cho nạn nhân chấn thương nghiêm trọng",
      link: "/vietnamese/linh-vuc-thuc-hanh/chan-thuong-tham-khoc",
      icon: Shield
    },
    {
      name: "Cắn Chó",
      image: slipFallImg,
      description: "Đại diện cho nạn nhân bị chó cắn",
      link: "/vietnamese/linh-vuc-thuc-hanh/can-cho",
      icon: Dog
    }
  ];

  const criminalDefenseAreas = [
    {
      name: "Lái xe trong tình trạng say rượu",
      image: dwiDuiImg,
      description: "Chuyên môn bào chữa hình sự",
      link: "/vietnamese/linh-vuc-thuc-hanh/lai-xe-say-ruou",
      icon: Car
    },
    {
      name: "Sở hữu ma túy",
      image: dwiDuiImg,
      description: "Chiến lược bào chữa chiến lược",
      link: "/vietnamese/linh-vuc-thuc-hanh/so-huu-ma-tuy",
      icon: Shield
    },
    {
      name: "Cáo Buộc Về Vũ Khí",
      image: domesticViolenceImg,
      description: "Bào chữa cáo buộc sở hữu vũ khí",
      link: "/vietnamese/linh-vuc-thuc-hanh/cao-buoc-vu-khi",
      icon: Shield
    },
    {
      name: "Trộm Cắp/Cướp Giật",
      image: domesticViolenceImg,
      description: "Bảo vệ quyền lợi trong tội phạm tài sản",
      link: "/vietnamese/linh-vuc-thuc-hanh/trom-cap-cuop-giat",
      icon: Shield
    },
    {
      name: "Bạo lực gia đình",
      image: domesticViolenceImg,
      description: "Bảo vệ tương lai của bạn",
      link: "/vietnamese/linh-vuc-thuc-hanh/bao-luc-gia-dinh",
      icon: Heart
    },
    {
      name: "Tấn công",
      image: domesticViolenceImg,
      description: "Bảo vệ quyền lợi của bạn",
      link: "/vietnamese/linh-vuc-thuc-hanh/tan-cong",
      icon: Shield
    },
    {
      name: "Không Tiết Lộ/Xóa Bỏ",
      image: dwiDuiImg,
      description: "Xóa bỏ hồ sơ hình sự",
      link: "/vietnamese/linh-vuc-thuc-hanh/khong-tiet-lo-xoa-bo",
      icon: Scale
    }
  ];

  const PracticeAreaSection = ({ 
    title, 
    subtitle,
    areas, 
    hoveredService, 
    setHoveredService, 
    defaultService,
    sectionColor = "bg-gradient-to-br from-gray-50 to-white",
    isLast = false
  }: {
    title: string;
    subtitle: string;
    areas: Array<{name: string; image: string; description: string; link: string; icon: any}>;
    hoveredService: string | null;
    setHoveredService: (service: string | null) => void;
    defaultService: string;
    sectionColor?: string;
    isLast?: boolean;
  }) => (
    <section className={`pt-20 ${isLast ? 'pb-0' : 'pb-20'} ${sectionColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
        
        <div 
          className="relative w-full bg-cover bg-center bg-no-repeat transition-all duration-700 shadow-2xl"
          style={{ 
            backgroundImage: hoveredService 
              ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${areas.find(area => area.name === hoveredService)?.image})`
              : `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${areas.find(area => area.name === defaultService)?.image})`
          }}
        >
          {/* Mobile: Single column, full width, vertical stacking */}
          <div className="flex flex-col md:hidden w-full">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Link 
                  key={index} 
                  to={area.link}
                  className="relative w-full h-56 bg-black/20 border-b border-gray-700 last:border-b-0 hover:bg-black/10 transition-all duration-500 cursor-pointer group"
                  onMouseEnter={() => setHoveredService(area.name)}
                  onMouseLeave={() => setHoveredService(defaultService)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-3 group-hover:text-law-gold transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-white/90 text-base group-hover:text-law-gold transition-colors mb-4">
                      {area.description}
                    </p>
                    <div className="flex items-center text-law-gold group-hover:text-white transition-colors">
                      <span className="text-sm font-semibold mr-2">Tìm Hiểu Thêm</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Desktop: Horizontal banner with equal cards */}
          <div className="hidden md:flex w-full">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Link 
                  key={index} 
                  to={area.link}
                  className="relative flex-1 h-80 bg-black/20 border-r border-gray-700 last:border-r-0 hover:bg-black/10 transition-all duration-500 cursor-pointer group"
                  onMouseEnter={() => setHoveredService(area.name)}
                  onMouseLeave={() => setHoveredService(defaultService)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <h3 className="text-white font-bold text-xl mb-4 group-hover:text-law-gold transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-white/90 text-lg group-hover:text-law-gold transition-colors mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex items-center text-law-gold group-hover:text-white transition-colors">
                      <span className="text-sm font-semibold mr-2">Tìm Hiểu Thêm</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lĩnh Vực Thực Hành
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Dịch vụ pháp lý toàn diện cho nạn nhân chấn thương cá nhân và khách hàng bào chữa hình sự trên toàn Texas
            </p>
          </div>
        </div>
      </section>

      {/* Personal Injury Law Section */}
      <PracticeAreaSection
        title="Luật Chấn Thương Cá Nhân"
        subtitle="Trọng tâm chính của chúng tôi là bảo vệ quyền lợi cho những người bị thương trong các vụ tai nạn. Chúng tôi giúp bạn đòi lại khoản bồi thường mà bạn xứng đáng thông qua đại diện tích cực và các chiến lược đã được chứng minh."
        areas={personalInjuryAreas}
        hoveredService={hoveredPersonalInjury}
        setHoveredService={setHoveredPersonalInjury}
        defaultService="Tai Nạn Xe Hơi"
        sectionColor="bg-gradient-to-br from-gray-50 to-white"
      />

      {/* Criminal Defense Law Section */}
      <PracticeAreaSection
        title="Luật Bào Chữa Hình Sự"
        subtitle="Đại diện chiến lược để bảo vệ quyền lợi và tự do của bạn. Chúng tôi phát triển các chiến lược bào chữa mạnh mẽ cho tất cả các loại cáo buộc với các luật sư bào chữa hình sự có kinh nghiệm."
        areas={criminalDefenseAreas}
        hoveredService={hoveredCriminalDefense}
        setHoveredService={setHoveredCriminalDefense}
        defaultService="Lái xe trong tình trạng say rượu"
        sectionColor="bg-gradient-to-br from-white to-gray-50"
        isLast={true}
      />

      <Footer />
    </div>
  );
};

export default VietnamesePracticeAreas; 