import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown, Car, Truck, User, Dog, Heart, Shield, Pill, Lock, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "../contexts/TranslationContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);
  const [isVietnameseOpen, setIsVietnameseOpen] = useState(false);
  const [isVietnameseMobileOpen, setIsVietnameseMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentLanguage, switchLanguage, isTranslating } = useTranslation();

  const isActive = (path: string) => location.pathname === path;
  const isVietnamese = location.pathname.startsWith('/vietnamese');

  // Ensure Google Translate widget is visible and styled
  useEffect(() => {
    const checkGoogleTranslate = () => {
      const element = document.getElementById('google_translate_element');
      if (element) {
        element.style.display = 'inline-block';
        element.style.visibility = 'visible';
        element.style.opacity = '1';
        element.style.background = 'transparent';
        element.style.border = 'none';
        element.style.padding = '0';
        element.style.margin = '0';
        element.style.cursor = 'pointer';
        element.style.lineHeight = '1';
        element.style.height = 'auto';
        element.style.minHeight = '0';
        element.style.maxHeight = 'none';
        
        // Check if the widget has content
        const hasContent = element.children.length > 0 || element.innerHTML.trim() !== '';
        if (!hasContent) {
          // If no content, try to reinitialize
          setTimeout(() => {
            if (window.google && window.google.translate) {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,vi,es',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true,
                gaTrack: false,
              }, 'google_translate_element');
            }
          }, 2000);
        }
      }
    };

    // Check immediately and after a delay
    checkGoogleTranslate();
    const interval = setInterval(checkGoogleTranslate, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleLanguageSwitch = (targetLang: string) => {
    if (targetLang === 'vi') {
      // Switch to Vietnamese using React Router
      if (!isVietnamese) {
        // Map English routes to Vietnamese routes
        const routeMap: { [key: string]: string } = {
          '/': '/vietnamese',
          '/about': '/vietnamese/ve-chung-toi',
          '/contact': '/vietnamese/lien-he',
          '/free-consultation': '/vietnamese/len-lich-tu-van-mien-phi',
          '/practice-areas': '/vietnamese/linh-vuc-thuc-hanh',
          '/practice-areas/personal-injury': '/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan',
          '/practice-areas/criminal-defense': '/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su'
        };
        
        const vietnamesePath = routeMap[location.pathname] || '/vietnamese';
        navigate(vietnamesePath);
      }
    } else if (targetLang === 'en') {
      // Switch to English using React Router
      if (isVietnamese) {
        // Map Vietnamese routes to English routes
        const routeMap: { [key: string]: string } = {
          '/vietnamese': '/',
          '/vietnamese/ve-chung-toi': '/about',
          '/vietnamese/lien-he': '/contact',
          '/vietnamese/len-lich-tu-van-mien-phi': '/free-consultation',
          '/vietnamese/linh-vuc-thuc-hanh': '/practice-areas',
          '/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan': '/practice-areas/personal-injury',
          '/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su': '/practice-areas/criminal-defense'
        };
        
        const englishPath = routeMap[location.pathname] || '/';
        navigate(englishPath);
      }
    }
    // For Spanish, the TranslationContext will handle Google Translate
    switchLanguage(targetLang);
  };

  const personalInjuryAreas = isVietnamese ? [
    { name: "Tai Nạn Xe Hơi", icon: Car, description: "Đại diện cho nạn nhân tai nạn xe hơi", link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-hoi" },
    { name: "Tai nạn xe tải 18 bánh", icon: Truck, description: "Đại diện chuyên biệt cho tai nạn xe tải", link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-tai" },
    { name: "Trượt Ngã", icon: User, description: "Buộc chủ sở hữu tài sản chịu trách nhiệm", link: "/vietnamese/linh-vuc-thuc-hanh/truot-nga" },
    { name: "Tử vong do sai sót", icon: Heart, description: "Đại diện tận tâm cho các gia đình", link: "/vietnamese/linh-vuc-thuc-hanh/tu-vong-do-sai-sot" },
    { name: "Chấn Thương Thảm Khốc", icon: Shield, description: "Đấu tranh cho nạn nhân chấn thương nghiêm trọng", link: "/vietnamese/linh-vuc-thuc-hanh/chan-thuong-tham-khoc" },
    { name: "Cắn Chó", icon: Dog, description: "Đại diện cho nạn nhân bị chó cắn", link: "/vietnamese/linh-vuc-thuc-hanh/can-cho" }
  ] : [
    { name: "Car Accidents", icon: Car, description: "Representing victims of car accidents", link: "/practice-areas/car-accidents" },
    { name: "18-Wheeler Accidents", icon: Truck, description: "Specialized truck accident representation", link: "/practice-areas/truck-accidents" },
    { name: "Slip and Fall", icon: User, description: "Holding property owners accountable", link: "/practice-areas/slip-fall" },
    { name: "Wrongful Death", icon: Heart, description: "Compassionate representation for families", link: "/practice-areas/wrongful-death" },
    { name: "Catastrophic Injury", icon: Shield, description: "Fighting for severe injury victims", link: "/practice-areas/catastrophic-injury" },
    { name: "Dog Bites", icon: Dog, description: "Representing dog attack victims", link: "/practice-areas/dog-bites" }
  ];

  const criminalDefenseAreas = isVietnamese ? [
    { name: "Lái xe trong tình trạng say rượu", icon: Car, description: "Chiến lược bào chữa DWI tích cực", link: "/vietnamese/linh-vuc-thuc-hanh/lai-xe-say-ruou" },
    { name: "Sở hữu ma túy", icon: Pill, description: "Bào chữa chiến lược cho cáo buộc ma túy", link: "/vietnamese/linh-vuc-thuc-hanh/so-huu-ma-tuy" },
    { name: "Cáo Buộc Về Vũ Khí", icon: Shield, description: "Bào chữa cáo buộc sở hữu vũ khí", link: "/vietnamese/linh-vuc-thuc-hanh/cao-buoc-vu-khi" },
    { name: "Trộm Cắp/Cướp Giật", icon: Lock, description: "Bảo vệ quyền lợi trong tội phạm tài sản", link: "/vietnamese/linh-vuc-thuc-hanh/trom-cap-cuop-giat" },
    { name: "Bạo lực gia đình", icon: Heart, description: "Bào chữa bạo lực gia đình nhạy cảm", link: "/vietnamese/linh-vuc-thuc-hanh/bao-luc-gia-dinh" },
    { name: "Tấn công", icon: User, description: "Bào chữa cáo buộc tấn công ở mọi mức độ", link: "/vietnamese/linh-vuc-thuc-hanh/tan-cong" },
    { name: "Không Tiết Lộ/Xóa Bỏ", icon: FileText, description: "Xóa bỏ hồ sơ hình sự", link: "/vietnamese/linh-vuc-thuc-hanh/khong-tiet-lo-xoa-bo" }
  ] : [
    { name: "DWI/DUI", icon: Car, description: "Aggressive DWI defense strategies", link: "/practice-areas/dwi-dui" },
    { name: "Drug Possession", icon: Pill, description: "Strategic drug charge defense", link: "/practice-areas/drug-possession" },
    { name: "Weapon Cases", icon: Shield, description: "Defending weapon possession charges", link: "/practice-areas/weapon-cases" },
    { name: "Theft & Robbery", icon: Lock, description: "Protecting rights in property crimes", link: "/practice-areas/theft-robbery" },
    { name: "Domestic Violence", icon: Heart, description: "Sensitive domestic violence defense", link: "/practice-areas/domestic-violence" },
    { name: "Assault", icon: User, description: "Defending assault charges of all levels", link: "/practice-areas/assault" },
    { name: "Non-Disclosure & Expunctions", icon: FileText, description: "Clearing criminal records", link: "/practice-areas/non-disclosure-expunctions" }
  ];

  const practiceAreasItems = isVietnamese ? [
    { path: "/vietnamese/linh-vuc-thuc-hanh", label: "Tất cả Lĩnh Vực Thực Hành", isMain: true },
    { path: "/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan", label: "Chấn thương cá nhân" },
    { path: "/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su", label: "Bảo Chữa Hình Sự" }
  ] : [
    { path: "/practice-areas", label: "All Practice Areas", isMain: true },
    { path: "/practice-areas/personal-injury", label: "Personal Injury Law" },
    { path: "/practice-areas/criminal-defense", label: "Criminal Defense Law" }
  ];

  const vietnameseItems = [
    { path: "/vietnamese", label: "Trang Tiếng Việt", isMain: true },
    { path: "/vietnamese/linh-vuc-thuc-hanh", label: "Lĩnh Vực Thực Hành" },
    { path: "/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan", label: "Chấn thương cá nhân" },
    { path: "/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su", label: "Bảo Chữa Hình Sự" },
    { path: "/vietnamese/len-lich-tu-van-mien-phi", label: "Lên Lịch Tư Vấn Miễn Phí" }
  ];

  const navigationItems = isVietnamese ? [
    { path: "/vietnamese", label: "Trang Chủ", hasDropdown: false },
    { path: "/vietnamese/linh-vuc-thuc-hanh", label: "Lĩnh Vực Thực Hành", hasDropdown: true, dropdownItems: practiceAreasItems },
    { path: "/vietnamese/ve-chung-toi", label: "Về Chúng Tôi", hasDropdown: false },
    { path: "/vietnamese/lien-he", label: "Liên Hệ", hasDropdown: false },
    { path: "/vietnamese/len-lich-tu-van-mien-phi", label: "Tư Vấn Miễn Phí", hasDropdown: false }
  ] : [
    { path: "/", label: "Home", hasDropdown: false },
    { path: "/practice-areas", label: "Practice Areas", hasDropdown: true, dropdownItems: practiceAreasItems },
    { path: "/about", label: "About", hasDropdown: false },
    { path: "/contact", label: "Contact", hasDropdown: false },
    { path: "/free-consultation", label: "Free Consultation", hasDropdown: false }
  ];

  return (
    <header className="bg-black">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link to={isVietnamese ? "/vietnamese" : "/"} className="flex items-center">
            <img 
              src="/svr.jpeg" 
              alt="SVR LAW" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
            />
          </Link>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative flex items-center">
                {item.hasDropdown ? (
                  <div 
                    className="relative group flex items-center"
                    onMouseEnter={() => setIsPracticeAreasOpen(true)}
                    onMouseLeave={() => setIsPracticeAreasOpen(false)}
                  >
                    <Link 
                      to={item.path}
                      className="flex items-center space-x-1 text-white hover:text-law-gold transition-colors py-2 relative"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                      {isActive(item.path) && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-law-gold"></div>
                      )}
                    </Link>
                    
                    {/* Invisible hover area to prevent gap */}
                    <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                    
                    {isPracticeAreasOpen && (
                      <div className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-2xl z-50 border border-gray-200">
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-6">
                            {/* Personal Injury Section */}
                            <div>
                              <div className="flex items-center mb-4">
                                <div className="w-1 h-6 bg-law-gold mr-3"></div>
                                <h3 className="text-lg font-bold text-black">Personal Injury Law</h3>
                              </div>
                              <div className="space-y-2">
                                {personalInjuryAreas.map((area, index) => {
                                  const IconComponent = area.icon;
                                  return (
                                    <Link
                                      key={index}
                                      to={area.link}
                                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 transition-colors group rounded"
                                    >
                                      <IconComponent className="w-4 h-4 text-law-gold group-hover:text-law-gold-dark transition-colors flex-shrink-0" />
                                      <div>
                                        <h4 className="font-semibold text-black group-hover:text-law-gold transition-colors text-sm">{area.name}</h4>
                                        <p className="text-xs text-gray-500">{area.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <div className="mt-4 pt-3 border-t border-gray-200">
                                <Link to={isVietnamese ? "/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan" : "/practice-areas/personal-injury"}>
                                  <Button className="w-full bg-law-gold hover:bg-law-gold-dark text-white py-2 text-sm font-semibold">
                                    {isVietnamese ? "Xem Tất Cả Dịch Vụ Chấn Thương Cá Nhân" : "View All Personal Injury Services"}
                                  </Button>
                                </Link>
                              </div>
                            </div>

                            {/* Criminal Defense Section */}
                            <div>
                              <div className="flex items-center mb-4">
                                <div className="w-1 h-6 bg-law-gold mr-3"></div>
                                <h3 className="text-lg font-bold text-black">Criminal Defense Law</h3>
                              </div>
                              <div className="space-y-2">
                                {criminalDefenseAreas.map((area, index) => {
                                  const IconComponent = area.icon;
                                  return (
                                    <Link
                                      key={index}
                                      to={area.link}
                                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 transition-colors group rounded"
                                    >
                                      <IconComponent className="w-4 h-4 text-law-gold group-hover:text-law-gold-dark transition-colors flex-shrink-0" />
                                      <div>
                                        <h4 className="font-semibold text-black group-hover:text-law-gold transition-colors text-sm">{area.name}</h4>
                                        <p className="text-xs text-gray-500">{area.description}</p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <div className="mt-4 pt-3 border-t border-gray-200">
                                <Link to={isVietnamese ? "/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su" : "/practice-areas/criminal-defense"}>
                                  <Button className="w-full bg-law-gold hover:bg-law-gold-dark text-white py-2 text-sm font-semibold">
                                    {isVietnamese ? "Xem Tất Cả Dịch Vụ Bào Chữa Hình Sự" : "View All Criminal Defense Services"}
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* Bottom CTA Section */}
                          <div className="mt-4 pt-3 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-black text-sm">Need Immediate Legal Help?</h4>
                                <p className="text-xs text-gray-600">Get a free consultation with our experienced attorney</p>
                              </div>
                              <div className="flex space-x-2">
                                <Link to={isVietnamese ? "/vietnamese/len-lich-tu-van-mien-phi" : "/free-consultation"}>
                                  <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-3 py-1 text-xs font-semibold">
                                    {isVietnamese ? "Tư Vấn Miễn Phí" : "Free Consultation"}
                                  </Button>
                                </Link>
                                <a href="tel:281-249-9835">
                                  <Button variant="outline" className="border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-3 py-1 text-xs font-semibold">
                                    {isVietnamese ? "Gọi Ngay" : "Call Now"}
                                  </Button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`transition-colors py-2 relative flex items-center ${isActive(item.path) ? 'text-law-gold' : 'text-white hover:text-law-gold'}`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-law-gold"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}

            {/* Vietnamese Navigation Item */}
            {!isVietnamese && (
              <div className="relative flex items-center">
                <div 
                  className="relative group flex items-center"
                  onMouseEnter={() => setIsVietnameseOpen(true)}
                  onMouseLeave={() => setIsVietnameseOpen(false)}
                >
                  <Link 
                    to="/vietnamese"
                    className="flex items-center space-x-1 text-white hover:text-law-gold transition-colors py-2 relative"
                  >
                    <span>Trang Tiếng Việt</span>
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  
                  {/* Invisible hover area to prevent gap */}
                  <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                  
                  {isVietnameseOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl z-50 border border-gray-200">
                      <div className="p-4">
                        <div className="space-y-2">
                          {vietnameseItems.slice(1).map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block py-2 px-3 text-black hover:bg-gray-50 hover:text-law-gold transition-colors rounded"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </nav>
          
          {/* Desktop Contact and Language */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:281-249-9835" className="flex items-center space-x-2 text-white hover:text-law-gold transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span>{isVietnamese ? "Gọi Văn Phòng Luật SVR" : "Call SVR Law Firm"}</span>
            </a>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleLanguageSwitch('en')}
                className={`flex items-center space-x-2 transition-colors ${
                  currentLanguage === 'en' ? 'text-law-gold' : 'text-white hover:text-law-gold'
                }`}
              >
                <span className="text-sm">🇺🇸</span>
                <span className="text-sm">English</span>
              </button>
              <button
                onClick={() => handleLanguageSwitch('vi')}
                className={`flex items-center space-x-2 transition-colors ${
                  currentLanguage === 'vi' ? 'text-law-gold' : 'text-white hover:text-law-gold'
                }`}
              >
                <span className="text-sm">🇻🇳</span>
                <span className="text-sm">Tiếng Việt</span>
              </button>

            </div>
            {/* Google Translate Element */}
            <div className="relative" style={{ lineHeight: '1', height: 'auto', minHeight: '0' }}>
              <div 
                id="google_translate_element" 
                className="text-white hover:text-law-gold transition-colors cursor-pointer"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'inline-block',
                  visibility: 'visible',
                  opacity: '1',
                  lineHeight: '1',
                  height: 'auto',
                  minHeight: '0',
                  maxHeight: 'none'
                }}
              ></div>
            </div>
          </div>

          {/* Mobile Contact and Menu */}
          <div className="flex lg:hidden items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLanguageSwitch('en')}
                className={`text-sm transition-colors ${
                  currentLanguage === 'en' ? 'text-law-gold' : 'text-white hover:text-law-gold'
                }`}
              >
                🇺🇸
              </button>
              <button
                onClick={() => handleLanguageSwitch('vi')}
                className={`text-sm transition-colors ${
                  currentLanguage === 'vi' ? 'text-law-gold' : 'text-white hover:text-law-gold'
                }`}
              >
                🇻🇳
              </button>

            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-700 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          className={`py-2 transition-colors ${isActive(item.path) ? 'text-law-gold' : 'text-white hover:text-law-gold'}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => setIsPracticeAreasOpen(!isPracticeAreasOpen)}
                          className="p-2 text-white hover:text-law-gold transition-colors"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${isPracticeAreasOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {isPracticeAreasOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <div key={dropdownItem.path}>
                              <Link
                                to={dropdownItem.path}
                                className={`block py-2 transition-colors ${
                                  dropdownItem.isMain 
                                    ? 'text-law-gold font-semibold hover:text-law-gold-dark' 
                                    : 'text-gray-300 hover:text-law-gold'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </Link>
                              {dropdownItem.isMain && index < item.dropdownItems.length - 1 && (
                                <div className="border-t border-gray-600 my-2"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`py-2 transition-colors ${isActive(item.path) ? 'text-law-gold' : 'text-white hover:text-law-gold'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Vietnamese Navigation Item for Mobile */}
              {!isVietnamese && (
                <div>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/vietnamese"
                      className="py-2 text-white hover:text-law-gold transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Trang Tiếng Việt
                    </Link>
                    <button
                      onClick={() => setIsVietnameseMobileOpen(!isVietnameseMobileOpen)}
                      className="p-2 text-white hover:text-law-gold transition-colors"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isVietnameseMobileOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {isVietnameseMobileOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <div>
                        <Link
                          to="/vietnamese/linh-vuc-thuc-hanh"
                          className="block py-2 text-gray-300 hover:text-law-gold transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Tất cả Lĩnh Vực Thực Hành
                        </Link>
                      </div>
                      <div className="border-t border-gray-600 my-2"></div>
                      <div>
                        <Link
                          to="/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan"
                          className="block py-2 text-gray-300 hover:text-law-gold transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Chấn thương cá nhân
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su"
                          className="block py-2 text-gray-300 hover:text-law-gold transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Bảo Chữa Hình Sự
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <a href="tel:281-249-9835" className="flex items-center space-x-2 text-white hover:text-law-gold transition-colors cursor-pointer mb-2">
                <Phone className="w-4 h-4" />
                <span>{isVietnamese ? "Gọi Văn Phòng Luật SVR" : "Call SVR Law Firm"}</span>
              </a>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLanguageSwitch('en')}
                  className={`flex items-center space-x-2 transition-colors ${
                    currentLanguage === 'en' ? 'text-law-gold' : 'text-white hover:text-law-gold'
                  }`}
                >
                  <span className="text-sm">🇺🇸</span>
                  <span className="text-sm">English</span>
                </button>
                <button
                  onClick={() => handleLanguageSwitch('vi')}
                  className={`flex items-center space-x-2 transition-colors ${
                    currentLanguage === 'vi' ? 'text-law-gold' : 'text-white hover:text-law-gold'
                  }`}
                >
                  <span className="text-sm">🇻🇳</span>
                  <span className="text-sm">Tiếng Việt</span>
                </button>

              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;