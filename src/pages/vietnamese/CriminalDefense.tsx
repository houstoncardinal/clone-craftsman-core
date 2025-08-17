import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Lock, Heart, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const VietnameseCriminalDefense = () => {
  const practiceAreas = [
    {
      name: "Trộm Cắp/Cướp Giật",
      icon: Lock,
      description: "Bảo vệ quyền lợi trong tội phạm tài sản và các cáo buộc liên quan đến trộm cắp.",
      link: "/vietnamese/linh-vuc-thuc-hanh/trom-cap-cuop-giat"
    },
    {
      name: "Tấn công",
      icon: User,
      description: "Bào chữa các cáo buộc tấn công ở mọi mức độ với kinh nghiệm bào chữa hình sự.",
      link: "/vietnamese/linh-vuc-thuc-hanh/tan-cong"
    },
    {
      name: "Sở hữu ma túy",
      icon: Shield,
      description: "Bào chữa chiến lược cho cáo buộc ma túy để giảm thiểu hình phạt và bảo vệ quyền lợi của bạn.",
      link: "/vietnamese/linh-vuc-thuc-hanh/so-huu-ma-tuy"
    },
    {
      name: "Lái xe trong tình trạng say rượu",
      icon: Car,
      description: "Chiến lược bào chữa DWI tích cực để bảo vệ đặc quyền lái xe và tương lai của bạn.",
      link: "/vietnamese/linh-vuc-thuc-hanh/lai-xe-say-ruou"
    },
    {
      name: "Không Tiết Lộ/Xóa Bỏ",
      icon: FileText,
      description: "Xóa bỏ hồ sơ hình sự và giúp khách hàng tiến về phía trước với cuộc sống của họ.",
      link: "/vietnamese/linh-vuc-thuc-hanh/khong-tiet-lo-xoa-bo"
    },
    {
      name: "Cáo Buộc Về Vũ Khí",
      icon: Shield,
      description: "Bào chữa cáo buộc sở hữu vũ khí với đại diện pháp lý chiến lược.",
      link: "/vietnamese/linh-vuc-thuc-hanh/cao-buoc-vu-khi"
    },
    {
      name: "Bạo lực gia đình",
      icon: Heart,
      description: "Bào chữa bạo lực gia đình nhạy cảm với đại diện pháp lý tận tâm.",
      link: "/vietnamese/linh-vuc-thuc-hanh/bao-luc-gia-dinh"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bảo Chữa Hình Sự
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Văn Phòng Luật SVR cung cấp dịch vụ bảo vệ hình sự mạnh mẽ và tận tâm cho các cá nhân đang đối mặt với các cáo buộc nghiêm trọng tại Houston và toàn bộ Texas. Hãy tin tưởng vào đội ngũ của chúng tôi để bảo vệ tương lai của bạn với sự đại diện pháp lý chuyên nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Bảo Vệ Quyền Lợi Của Bạn Trong Hệ Thống Tư Pháp Hình Sự Texas
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Văn Phòng Luật SVR, có trụ sở tại Houston, chuyên cung cấp dịch vụ bảo chữa hình sự xuất sắc cho các cá nhân trên toàn Texas. Với kinh nghiệm phong phú tại tòa án và hiểu biết sâu sắc về hệ thống tư pháp hình sự Texas, công ty chúng tôi cam kết cung cấp đại diện pháp lý cá nhân hóa và hiệu quả.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bị buộc tội phạm tội có thể rất áp lực. Với Sanah Roopani là người đại diện của bạn, bạn sẽ có một luật sư tận tâm đấu tranh cho quyền lợi của bạn. Dù bạn đang đối mặt với tội nhẹ hay tội nặng, Văn Phòng Luật SVR phát triển các chiến lược bảo vệ mạnh mẽ để đạt được kết quả tốt nhất cho vụ án của bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/vietnamese/ve-chung-toi">
                  <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                    Về Chúng Tôi
                  </Button>
                </Link>
                <Link to="/vietnamese/linh-vuc-thuc-hanh">
                  <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold">
                    Lĩnh Vực Thực Hành
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Đại Diện Bảo Chữa Hình Sự Đáng Tin Cậy Của Bạn – Văn Phòng Luật SVR</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Luật Sư Bảo Vệ Hình Sự Có Kinh Nghiệm Tại Houston, Texas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Luật sư xét xử đáng tin cậy của bạn ở Texas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Bảo vệ hình sự mạnh mẽ và tận tâm cho các cá nhân đối mặt với cáo buộc nghiêm trọng</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Hãy tin tưởng vào đội ngũ của chúng tôi để bảo vệ tương lai của bạn với đại diện pháp lý chuyên nghiệp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Các lĩnh vực thực hành Bảo vệ Hình sự của chúng tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi xử lý tất cả các loại vụ kiện bào chữa hình sự với cùng sự tận tâm và chuyên môn
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-law-gold mr-3" />
                    <h3 className="text-xl font-bold text-black">{area.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Link to={area.link}>
                    <Button variant="outline" className="border-law-gold text-law-gold hover:bg-law-gold hover:text-white">
                      Xem thêm <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - FAQs */}
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">
                CÁC CÂU HỎI THƯỜNG GẶP
              </p>
              <h2 className="text-4xl font-bold text-black mb-12 leading-tight">
                Có câu hỏi?<br />
                Chúng tôi có câu trả lời!
              </h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Tôi nên làm gì nếu tôi bị bắt ở Texas?</h4>
                  <p className="text-gray-600">Giữ bình tĩnh, im lặng và yêu cầu đại diện pháp lý ngay lập tức. Liên hệ với Văn Phòng Luật SVR để được hỗ trợ.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Làm thế nào Văn Phòng Luật SVR có thể bảo vệ tôi trước cáo buộc DWI?</h4>
                  <p className="text-gray-600">Chúng tôi sẽ điều tra hoàn cảnh vụ bắt giữ của bạn, bao gồm các bài kiểm tra nồng độ cồn và kết quả máy thở, để thách thức bất kỳ sai sót nào và bảo vệ quyền lợi của bạn.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Hình phạt cho việc sở hữu ma túy ở Texas là gì?</h4>
                  <p className="text-gray-600">Hình phạt phụ thuộc vào chất và số lượng liên quan nhưng có thể bao gồm phạt tiền, án tù và hồ sơ vĩnh viễn. Văn phòng luật SVR sẽ làm việc để giảm nhẹ hoặc bác bỏ các cáo buộc.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Văn phòng luật SVR có thể giúp tôi xóa bỏ hồ sơ hình sự của tôi không?</h4>
                  <p className="text-gray-600">Có, chúng tôi chuyên về việc xóa bỏ và không công khai để giúp bạn xóa sạch hồ sơ của mình, cho phép bạn tiến về phía trước mà không phải gánh nặng lịch sử hình sự.</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="#" className="text-black hover:text-law-gold transition-colors underline">
                  Truy cập Trang Câu Hỏi Thường Gặp về Bảo Vệ Hình Sự
                </a>
              </div>
            </div>

            {/* Right Content - Call to Action */}
            <div className="flex justify-center lg:justify-end">
              <Button 
                size="lg"
                className="bg-law-gold hover:bg-law-gold-dark text-white px-10 py-8 text-xl font-bold text-center leading-tight shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Yêu cầu xem xét<br />
                vụ án miễn phí
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Call SVR Law Firm */}
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Gọi cho Công Ty Luật SVR</h3>
              <p className="text-black mb-6 text-lg leading-relaxed">
                Nếu có thắc mắc, lo ngại, hoặc nếu bạn chỉ cần nói chuyện với ai đó ngay lập tức, vui lòng gọi cho chúng tôi trực tiếp tại số (281) 249-9835.
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
                Nếu bạn có câu hỏi hoặc cần giải đáp, hãy gửi tin nhắn cho chúng tôi. Chúng tôi sẽ phản hồi kịp thời trong giờ làm việc để hỗ trợ bạn nhanh chóng.
              </p>
              <Link to="/vietnamese/lien-he">
                <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Gửi Tin Nhắn Cho Chúng Tôi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-law-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vietnamese/len-lich-tu-van-mien-phi">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                Nhận Đánh Giá Vụ Án Miễn Phí
              </Button>
            </Link>
            <a href="tel:281-249-9835">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
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

export default VietnameseCriminalDefense; 