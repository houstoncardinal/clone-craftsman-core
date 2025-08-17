import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PracticeAreasGrid from "@/components/PracticeAreasGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Plus, Minus, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";
import { SEOHead } from "@/components/SEOHead";
import { LawFirmSchema } from "@/components/SchemaMarkup";
import { VietnameseFAQSchema } from "@/components/FAQSchema";

const VietnameseIndex = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqData = [
    {
      question: "Tôi nên làm gì ngay lập tức sau một vụ tai nạn ô tô?",
      answer: "Liên hệ với một luật sư về tai nạn cá nhân ngay khi có thể để bảo vệ quyền lợi của bạn. Tránh phát biểu với các công ty bảo hiểm cho đến khi bạn đã nói chuyện với một luật sư. Ghi lại mọi thứ, chụp ảnh, và tìm kiếm sự chăm sóc y tế nếu cần thiết."
    },
    {
      question: "Làm thế nào để tôi biết mình có vụ kiện chấn thương cá nhân không?",
      answer: "Nếu bạn bị thương do sự bất cẩn của người khác, bạn có thể có vụ kiện. Liên hệ với chúng tôi để được tư vấn miễn phí, và chúng tôi sẽ đánh giá chi tiết tình huống của bạn. Chúng tôi sẽ giúp bạn hiểu các lựa chọn pháp lý và khoản bồi thường tiềm năng."
    },
    {
      question: "Chi phí để thuê một luật sư cho vụ kiện về tai nạn cá nhân hoặc biện hộ hình sự là bao nhiêu?",
      answer: "Đối với các vụ kiện về tai nạn cá nhân, chúng tôi làm việc theo cơ sở phí hoa hồng, có nghĩa là bạn không phải trả tiền trừ khi chúng tôi thắng. Đối với biện hộ hình sự, chi phí khác nhau tùy thuộc vào độ phức tạp của vụ án, nhưng chúng tôi cung cấp các kế hoạch thanh toán linh hoạt và một buổi tư vấn ban đầu miễn phí."
    },
    {
      question: "Tôi có bao nhiêu thời gian để nộp đơn kiện về tai nạn cá nhân?",
      answer: "Tại Texas, bạn thường có 2 năm từ ngày bị thương để nộp đơn kiện về tai nạn cá nhân. Tuy nhiên, điều quan trọng là phải hành động nhanh chóng vì bằng chứng có thể bị mất và ký ức của nhân chứng có thể phai mờ. Liên hệ với chúng tôi ngay lập tức để bảo vệ quyền lợi của bạn."
    },
    {
      question: "Tôi có thể đòi bồi thường những gì?",
      answer: "Bạn có thể được quyền bồi thường cho chi phí y tế, mất lương, đau đớn và khổ sở, thiệt hại tài sản, và nhiều hơn nữa. Các thiệt hại cụ thể phụ thuộc vào vụ án của bạn. Chúng tôi sẽ chiến đấu để tối đa hóa việc phục hồi của bạn."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#practice-areas-overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Văn Phòng Luật SVR - Luật Sư Chấn Thương Cá Nhân & Bào Chữa Hình Sự Houston | Tư Vấn Miễn Phí"
        description="Văn Phòng Luật SVR tại Houston, TX cung cấp dịch vụ pháp lý chuyên nghiệp cho chấn thương cá nhân và bào chữa hình sự. Tai nạn xe hơi, DWI, bạo lực gia đình, tử vong do sai sót. Tư vấn miễn phí. Gọi (281) 249-9835."
        keywords="luật sư chấn thương cá nhân Houston, luật sư bào chữa hình sự Houston, luật sư tai nạn xe hơi, luật sư DWI Houston, luật sư bạo lực gia đình, luật sư tử vong do sai sót, văn phòng luật Houston, tư vấn pháp lý miễn phí"
        canonical="https://svrlawfirm.com/vietnamese"
        language="vi"
      />
      <LawFirmSchema />
      <VietnameseFAQSchema />
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
                  <Button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 font-semibold">
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
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Câu Hỏi Thường Gặp
              </h2>
              <div className="w-24 h-1 bg-law-gold mx-auto"></div>
            </div>

            {/* FAQs */}
            <div className="space-y-4 mb-16">
              {faqData.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-900 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="w-5 h-5 text-law-gold" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Sẵn Sàng Bắt Đầu?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:281-249-9835"
                  className="inline-flex items-center justify-center px-8 py-4 bg-law-gold hover:bg-law-gold-dark text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Gọi (281) 249-9835
                </a>
                <Link 
                  to="/vietnamese/len-lich-tu-van-mien-phi"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-colors duration-200"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Tư Vấn Miễn Phí
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Không phí trừ khi chúng tôi thắng
              </p>
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
                Nếu bạn có câu hỏi hoặc lo ngại về vụ án của mình, vui lòng gọi cho chúng tôi trực tiếp. Luật sư có kinh nghiệm của chúng tôi ở đây để giúp bạn hiểu các lựa chọn pháp lý của mình và cung cấp sự hướng dẫn mà bạn cần.
              </p>
              <a href="tel:281-249-9835">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
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
                  <Button className="bg-gray-100 hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold transition-all duration-300">
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