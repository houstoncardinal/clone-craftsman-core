import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import slipFallImage from "@/assets/slip-fall.jpg";

const PracticeAreasGrid = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const location = useLocation();
  const isVietnamese = location.pathname.startsWith('/vietnamese');

  const practiceAreas = isVietnamese ? [
    {
      name: "Tử vong do sai sót",
      image: "/wrongfuldeath.jpg",
      description: "Tìm kiếm công lý cho gia đình",
      link: "/vietnamese/linh-vuc-thuc-hanh/tu-vong-do-sai-sot"
    },
    {
      name: "Tai Nạn Xe Hơi",
      image: "/caraccident.jpg",
      description: "Bảo vệ quyền lợi của bạn",
      link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-hoi"
    },
    {
      name: "Tai nạn xe tải 18 bánh",
      image: "/18wheeler.png",
      description: "Vụ án tai nạn xe tải phức tạp",
      link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-tai"
    },
    {
      name: "Trượt Ngã",
      image: slipFallImage,
      description: "Khiếu nại trách nhiệm cơ sở",
      link: "/vietnamese/linh-vuc-thuc-hanh/truot-nga"
    },
    {
      name: "Lái xe trong tình trạng say rượu",
      image: "/dui.png",
      description: "Chuyên môn bào chữa hình sự",
      link: "/vietnamese/linh-vuc-thuc-hanh/lai-xe-say-ruou"
    },
    {
      name: "Bạo lực gia đình",
      image: "/domestic.jpg",
      description: "Bảo vệ tương lai của bạn",
      link: "/vietnamese/linh-vuc-thuc-hanh/bao-luc-gia-dinh"
    }
  ] : [
    {
      name: "Wrongful Death",
      image: "/wrongfuldeath.jpg",
      description: "Seeking justice for families",
      link: "/practice-areas/wrongful-death"
    },
    {
      name: "Car Accidents",
      image: "/caraccident.jpg",
      description: "Protecting your rights",
      link: "/practice-areas/car-accidents"
    },
    {
      name: "18-Wheeler Accidents",
      image: "/18wheeler.png",
      description: "Complex truck accident cases",
      link: "/practice-areas/truck-accidents"
    },
    {
      name: "Slip and Fall",
      image: slipFallImage,
      description: "Premises liability claims",
      link: "/practice-areas/slip-fall"
    },
    {
      name: "DWI/DUI",
      image: "/dui.png",
      description: "Criminal defense expertise",
      link: "/practice-areas/dwi-dui"
    },
    {
      name: "Domestic Violence",
      image: "/domestic.jpg",
      description: "Protecting your future",
      link: "/practice-areas/domestic-violence"
    }
  ];

  const defaultService = isVietnamese ? "Tử vong do sai sót" : "Wrongful Death";

  // Preload images for faster loading
  useEffect(() => {
    const imageUrls = [
      "/wrongfuldeath.jpg",
      "/caraccident.jpg", 
      "/18wheeler.png",
      "/slip-fall.jpg",
      "/dui.png",
      "/domestic.jpg"
    ];

    const preloadImages = async () => {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
        setHoveredService(defaultService);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        setImagesLoaded(true);
        setHoveredService(defaultService);
      }
    };

    preloadImages();
  }, [defaultService]);

  return (
    <section 
      className={`relative w-full bg-cover bg-center bg-no-repeat transition-all duration-500 ${!imagesLoaded ? 'bg-gray-800' : ''}`}
      style={{ 
        backgroundImage: imagesLoaded && hoveredService 
          ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${practiceAreas.find(area => area.name === hoveredService)?.image})`
          : imagesLoaded 
          ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${practiceAreas.find(area => area.name === defaultService)?.image})`
          : 'none'
      }}
    >
      {/* Mobile: Single column, full width, vertical stacking */}
      <div className="flex flex-col md:hidden w-full">
        {practiceAreas.map((area, index) => (
          <Link 
            key={index} 
            to={area.link}
            className="relative w-full h-48 bg-black/20 border-b border-gray-700 last:border-b-0 hover:bg-black/10 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredService(area.name)}
            onMouseLeave={() => setHoveredService(defaultService)}
            onTouchStart={() => setHoveredService(area.name)}
            onTouchEnd={() => setHoveredService(defaultService)}
            onClick={() => setHoveredService(area.name)}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
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
            className="relative flex-1 h-64 md:h-80 bg-black/20 border-r border-gray-700 last:border-r-0 hover:bg-black/10 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredService(area.name)}
            onMouseLeave={() => setHoveredService(defaultService)} // Return to default
            onTouchStart={() => setHoveredService(area.name)}
            onTouchEnd={() => setHoveredService(defaultService)}
            onClick={() => setHoveredService(area.name)}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
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