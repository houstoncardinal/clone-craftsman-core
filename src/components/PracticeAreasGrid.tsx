import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import wrongfulDeathImg from "@/assets/wrongful-death.jpg";
import carAccidentsImg from "@/assets/car-accidents.jpg";
import truckAccidentsImg from "@/assets/truck-accidents.jpg";
import slipFallImg from "@/assets/slip-fall.jpg";
import dwiDuiImg from "@/assets/dwi-dui.jpg";
import domesticViolenceImg from "@/assets/domestic-violence.jpg";

const PracticeAreasGrid = () => {
  const [hoveredService, setHoveredService] = useState<string | null>("Car Accidents"); // Set default
  const location = useLocation();
  const isVietnamese = location.pathname.startsWith('/vietnamese');

  const practiceAreas = isVietnamese ? [
    {
      name: "Tử vong do sai sót",
      image: wrongfulDeathImg,
      description: "Tìm kiếm công lý cho gia đình",
      link: "/vietnamese/linh-vuc-thuc-hanh/tu-vong-do-sai-sot"
    },
    {
      name: "Tai Nạn Xe Hơi",
      image: carAccidentsImg,
      description: "Bảo vệ quyền lợi của bạn",
      link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-hoi"
    },
    {
      name: "Tai nạn xe tải 18 bánh",
      image: truckAccidentsImg,
      description: "Vụ án tai nạn xe tải phức tạp",
      link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-tai"
    },
    {
      name: "Trượt Ngã",
      image: slipFallImg,
      description: "Khiếu nại trách nhiệm cơ sở",
      link: "/vietnamese/linh-vuc-thuc-hanh/truot-nga"
    },
    {
      name: "Lái xe trong tình trạng say rượu",
      image: dwiDuiImg,
      description: "Chuyên môn bào chữa hình sự",
      link: "/vietnamese/linh-vuc-thuc-hanh/lai-xe-say-ruou"
    },
    {
      name: "Bạo lực gia đình",
      image: domesticViolenceImg,
      description: "Bảo vệ tương lai của bạn",
      link: "/vietnamese/linh-vuc-thuc-hanh/bao-luc-gia-dinh"
    }
  ] : [
    {
      name: "Wrongful Death",
      image: wrongfulDeathImg,
      description: "Seeking justice for families",
      link: "/practice-areas/wrongful-death"
    },
    {
      name: "Car Accidents",
      image: carAccidentsImg,
      description: "Protecting your rights",
      link: "/practice-areas/car-accidents"
    },
    {
      name: "18-Wheeler Accidents",
      image: truckAccidentsImg,
      description: "Complex truck accident cases",
      link: "/practice-areas/truck-accidents"
    },
    {
      name: "Slip and Fall",
      image: slipFallImg,
      description: "Premises liability claims",
      link: "/practice-areas/slip-fall"
    },
    {
      name: "DWI/DUI",
      image: dwiDuiImg,
      description: "Criminal defense expertise",
      link: "/practice-areas/dwi-dui"
    },
    {
      name: "Domestic Violence",
      image: domesticViolenceImg,
      description: "Protecting your future",
      link: "/practice-areas/domestic-violence"
    }
  ];

  const defaultService = isVietnamese ? "Tai Nạn Xe Hơi" : "Car Accidents";

  return (
    <section 
      className="relative w-full bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ 
        backgroundImage: hoveredService 
          ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${practiceAreas.find(area => area.name === hoveredService)?.image})`
          : `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${carAccidentsImg})`
      }}
    >
      {/* Mobile: Single column, full width, vertical stacking */}
      <div className="flex flex-col md:hidden w-full">
        {practiceAreas.map((area, index) => (
          <Link 
            key={index} 
            to={area.link}
            className="relative w-full h-48 bg-black/15 border-b border-gray-700 last:border-b-0 hover:bg-black/3 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredService(area.name)}
            onMouseLeave={() => setHoveredService(defaultService)}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/2 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-law-gold transition-colors">
                {area.name}
              </h3>
              <p className="text-white text-sm group-hover:text-law-gold transition-colors">
                {area.description} →
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop: Horizontal banner with six equal cards */}
      <div className="hidden md:flex w-full">
        {practiceAreas.map((area, index) => (
          <Link 
            key={index} 
            to={area.link}
            className="relative flex-1 h-64 md:h-80 bg-black/15 border-r border-gray-700 last:border-r-0 hover:bg-black/3 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredService(area.name)}
            onMouseLeave={() => setHoveredService(defaultService)} // Return to default
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/2 transition-all duration-300" />
            <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-6">
              <h3 className="text-white font-bold text-base md:text-lg mb-2 group-hover:text-law-gold transition-colors">
                {area.name}
              </h3>
              <p className="text-white text-sm group-hover:text-law-gold transition-colors">
                {area.description} →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreasGrid; 