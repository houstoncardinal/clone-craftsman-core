import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PracticeAreasGrid from "@/components/PracticeAreasGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Plus, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const VietnameseIndex = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#practice-areas-overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Exact match to English */}
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
              LUẬT SƯ XÉT XỬ ĐÁNG TIN CẬY CỦA BẠN Ở TEXAS
            </p>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-left tracking-tight">
              Chuyên gia đã được chứng minh trong lĩnh vực<br />
              <span className="text-law-gold">Chấn thương Cá Nhân & Bảo vệ Hình sự</span>
            </h1>

            {/* Description paragraph */}
            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl leading-relaxed">
              Với nhiều năm kinh nghiệm xét xử và cam kết đạt được kết quả tốt nhất có thể, văn phòng của chúng tôi đã xây dựng được uy tín xuất sắc trên toàn Texas.
            </p>

            {/* CTA Section */}
            <div className="mb-12">
              <Link to="/vietnamese/len-lich-tu-van-mien-phi">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 md:px-10 py-4 md:py-6 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  YÊU CẦU TƯ VẤN MIỄN PHÍ
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
              <span className="text-xs font-medium tracking-wider">CUỘN</span>
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none transition-all duration-300" />
            </div>
          </button>
        </div>
      </section>

      {/* Practice Areas Overview - Exact match to English */}
      <section id="practice-areas-overview" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Personal Injury Law */}
            <Link to="/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan" className="text-white hover:text-law-gold transition-colors duration-300 cursor-pointer group">
              <div className="h-full">
                <h2 className="text-2xl font-bold mb-4 group-hover:text-law-gold transition-colors">Luật Chấn Thương Cá Nhân</h2>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Chúng tôi tập trung chính vào việc bảo vệ quyền lợi cho những người bị thương trong các vụ tai nạn. Dù là tai nạn xe hơi, tai nạn xe tải 18 bánh hay vụ án tử vong do sai sót, chúng tôi ở đây để giúp bạn đòi lại khoản bồi thường mà bạn xứng đáng nhận.
                </p>
                <div className="flex justify-end">
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-law-gold group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
            
            {/* Criminal Defense Law */}
            <Link to="/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su" className="text-white hover:text-law-gold transition-colors duration-300 cursor-pointer group">
              <div className="h-full">
                <h2 className="text-2xl font-bold mb-4 group-hover:text-law-gold transition-colors">Luật Bào Chữa Hình Sự</h2>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                  Chúng tôi cũng cung cấp dịch vụ bào chữa hình sự vững chắc cho khách hàng đối mặt với cáo buộc. Đội ngũ của chúng tôi cung cấp đại diện chiến lược trong các vụ hành hung, lái xe khi say rượu (DWI/DUI), tàng trữ ma túy và nhiều vấn đề khác.
                </p>
                <div className="flex justify-end">
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-law-gold group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section - Exact match to English */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wider">
                CHÀO MỪNG ĐẾN VỚI VĂN PHÒNG LUẬT SVR
              </p>
              <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
                Đại diện pháp lý có kinh nghiệm<br />
                mà bạn có thể tin tưởng
              </h2>
            </div>
            
            {/* Right Content */}
            <div className="text-black">
              <p className="mb-6 leading-relaxed">
                Tại Văn phòng Luật SVR, chúng tôi tập trung vào việc cung cấp các chiến lược pháp lý được điều chỉnh cho các <u>nạn nhân bị thương tích</u> và <u>những cá nhân đối mặt với cáo buộc hình sự</u> tại Houston hoặc bất kỳ đâu trong tiểu bang Texas. Với nhiều năm kinh nghiệm xét xử và cam kết đạt được kết quả tốt nhất có thể, văn phòng chúng tôi đã xây dựng được danh tiếng xuất sắc.
              </p>
              <div className="flex space-x-4 mb-4">
                <Link to="/vietnamese/about">
                  <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                    GIỚI THIỆU VỀ CHÚNG TÔI
                  </Button>
                </Link>
                <Link to="/vietnamese/linh-vuc-thuc-hanh">
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-6 py-3 font-semibold">
                    LĨNH VỰC HÀNH NGHỀ
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                Lưu ý, phần dưới đây là bản xem trước chung về một số lĩnh vực hành nghề của chúng tôi. <Link to="/vietnamese/linh-vuc-thuc-hanh" className="underline hover:text-law-gold">Nhấp vào đây</Link> để xem trang lĩnh vực hành nghề đầy đủ của chúng tôi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <PracticeAreasGrid />

      {/* FAQ Section - Simplified full width */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Left Content - FAQs */}
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                CÂU HỎI THƯỜNG GẶP
              </p>
              <h2 className="text-4xl font-bold text-white mb-12 leading-tight">
                Có câu hỏi?<br />
                Chúng tôi có câu trả lời!
              </h2>
              <div className="space-y-6">
                <div className="border-b border-gray-700 pb-6">
                  <div className="flex items-center justify-between cursor-pointer py-2 group">
                    <span className="text-white text-lg group-hover:text-law-gold transition-colors">
                      <Plus className="w-5 h-5 inline mr-2" />
                      Q: Tôi nên làm gì ngay lập tức sau một vụ tai nạn ô tô?
                    </span>
                  </div>
                  <div className="mt-2 text-gray-300">
                    A: Liên hệ với một luật sư về tai nạn cá nhân ngay khi có thể để bảo vệ quyền lợi của bạn. Tránh phát biểu với các công ty bảo hiểm cho đến khi bạn đã nói chuyện với một luật sư.
                  </div>
                </div>
                <div className="border-b border-gray-700 pb-6">
                  <div className="flex items-center justify-between cursor-pointer py-2 group">
                    <span className="text-white text-lg group-hover:text-law-gold transition-colors">
                      <Plus className="w-5 h-5 inline mr-2" />
                      Q: Làm thế nào để tôi biết nếu tôi có một vụ kiện về tai nạn cá nhân?
                    </span>
                  </div>
                  <div className="mt-2 text-gray-300">
                    A: Nếu bạn bị thương do sự bất cẩn của người khác, bạn có thể có một vụ kiện. Liên hệ với chúng tôi để được tư vấn miễn phí, và chúng tôi sẽ đánh giá chi tiết về tình huống của bạn.
                  </div>
                </div>
                <div className="border-b border-gray-700 pb-6">
                  <div className="flex items-center justify-between cursor-pointer py-2 group">
                    <span className="text-white text-lg group-hover:text-law-gold transition-colors">
                      <Plus className="w-5 h-5 inline mr-2" />
                      Q: Chi phí để thuê một luật sư cho vụ kiện về tai nạn cá nhân hoặc biện hộ hình sự là bao nhiêu?
                    </span>
                  </div>
                  <div className="mt-2 text-gray-300">
                    A: Đối với các vụ kiện về tai nạn cá nhân, chúng tôi làm việc theo cơ sở phí hoa hồng, có nghĩa là bạn không phải trả tiền trừ khi chúng tôi thắng. Đối với biện hộ hình sự, chi phí khác nhau tùy thuộc vào độ phức tạp của vụ án, nhưng chúng tôi cung cấp các kế hoạch thanh toán linh hoạt và một buổi tư vấn ban đầu miễn phí.
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="tel:281-249-9835" className="text-white hover:text-law-gold transition-colors underline">
                  Gọi Văn phòng Luật SVR để có câu trả lời chi tiết cho câu hỏi của bạn!
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 flex justify-center">
              <Link to="/vietnamese/len-lich-tu-van-mien-phi">
                <Button 
                  size="lg"
                  className="bg-law-gold hover:bg-law-gold-dark text-white px-10 py-8 text-xl font-bold text-center leading-tight shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Nhận Đánh Giá<br />
                  Vụ Án Miễn Phí
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Exact match to English structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Call SVR Law Firm */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Gọi Văn phòng Luật SVR</h3>
              <p className="text-black mb-6 text-lg leading-relaxed">
                Nếu bạn có câu hỏi hoặc lo ngại về vụ án của mình, vui lòng gọi cho chúng tôi trực tiếp. Các luật sư có kinh nghiệm của chúng tôi ở đây để giúp bạn hiểu các lựa chọn pháp lý của mình và cung cấp sự hướng dẫn mà bạn cần.
              </p>
              <a href="tel:281-249-9835">
                <Button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                  GỌI (281) 249-9835
                </Button>
              </a>
            </div>
            
            {/* Message Us */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Nhắn Tin Cho Chúng Tôi</h3>
              <p className="text-black mb-8 text-lg leading-relaxed">
                Để biết thêm thông tin hoặc đặt lịch tư vấn, vui lòng gửi tin nhắn cho chúng tôi thông qua biểu mẫu liên hệ. Chúng tôi sẽ phản hồi tin nhắn của bạn càng sớm càng tốt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/vietnamese/lien-he">
                  <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                    GỬI TIN NHẮN CHO CHÚNG TÔI
                  </Button>
                </Link>
                <Link to="/vietnamese/len-lich-tu-van-mien-phi">
                  <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                    TƯ VẤN MIỄN PHÍ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Exact match to English structure */}
      <section className="py-20 bg-law-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Cần Hỗ Trợ Pháp Lý Ngay Bây Giờ?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Đừng chờ đợi để được tư vấn pháp lý. Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vietnamese/len-lich-tu-van-mien-phi">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Tư Vấn Miễn Phí
              </Button>
            </Link>
            <a href="tel:281-249-9835">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Gọi (281) 249-9835
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VietnameseIndex; 