import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Truck, User, Dog, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const VietnamesePersonalInjury = () => {
  const practiceAreas = [
    {
      name: "Tử vong do sai sót",
      icon: Heart,
      description: "Đại diện tận tâm cho các gia đình đã mất người thân do sự bất cẩn.",
      link: "/vietnamese/linh-vuc-thuc-hanh/tu-vong-do-sai-sot"
    },
    {
      name: "Trượt Ngã",
      icon: User,
      description: "Buộc chủ sở hữu tài sản chịu trách nhiệm về các điều kiện nguy hiểm gây ra chấn thương trượt ngã.",
      link: "/vietnamese/linh-vuc-thuc-hanh/truot-nga"
    },
    {
      name: "Cắn Chó",
      icon: Dog,
      description: "Đại diện cho nạn nhân bị chó cắn và chấn thương liên quan đến động vật.",
      link: "/vietnamese/linh-vuc-thuc-hanh/can-cho"
    },
    {
      name: "Chấn Thương Thảm Khốc",
      icon: Shield,
      description: "Đấu tranh cho nạn nhân bị chấn thương nghiêm trọng, thay đổi cuộc sống để đảm bảo bồi thường tối đa.",
      link: "/vietnamese/linh-vuc-thuc-hanh/chan-thuong-tham-khoc"
    },
    {
      name: "Tai Nạn Xe Hơi",
      icon: Car,
      description: "Đại diện cho nạn nhân tai nạn xe hơi để đòi bồi thường cho chấn thương, chi phí y tế và thiệt hại.",
      link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-hoi"
    },
    {
      name: "Tai nạn xe tải 18 bánh",
      icon: Truck,
      description: "Đại diện chuyên biệt cho nạn nhân tai nạn xe tải thương mại và hậu quả tàn khốc của chúng.",
      link: "/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-tai"
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
              Chấn thương cá nhân
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tại văn phòng luật SVR, chúng tôi cam kết đấu tranh cho quyền lợi của những cá nhân bị thương do sự sơ suất. Hãy để chúng tôi giúp bạn đảm bảo bồi thường xứng đáng mà bạn đáng được nhận.
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
                Đấu tranh cho Công lý và Bồi thường cho Các Nạn nhân Bị Thương
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Văn Phòng Luật SVR, có trụ sở tại Houston, chuyên về luật chấn thương cá nhân, cung cấp sự đại diện tận tâm cho khách hàng trên toàn Texas. Sứ mệnh của chúng tôi là bảo vệ quyền lợi cho những cá nhân đã bị thương do sự bất cẩn của người khác. Với sự tập trung mạnh mẽ vào việc đảm bảo bồi thường công bằng, chúng tôi hiểu được gánh nặng về thể chất, tinh thần và tài chính mà một chấn thương có thể mang lại cho bạn và gia đình.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dưới sự dẫn dắt của Sanah Roopani, văn phòng của chúng tôi tận dụng kiến thức pháp lý sâu rộng và kinh nghiệm tại tòa án để cung cấp sự đại diện hiệu quả. Chúng tôi cố gắng đảm bảo rằng mỗi khách hàng đều nhận được sự chú ý cá nhân mà họ xứng đáng có được, hướng dẫn họ qua từng bước của quá trình pháp lý.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/vietnamese/about">
                  <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                    Giới thiệu về chúng tôi
                  </Button>
                </Link>
                <Link to="/vietnamese/linh-vuc-thuc-hanh">
                  <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold">
                    Lĩnh vực thực hành
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Đại diện Chấn Thương Cá Nhân của Bạn – Văn Phòng Luật SVR</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Đại diện Chấn thương cá nhân tận tâm tại Houston, Texas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">KHÔNG PHÍ NẾU KHÔNG THẮNG</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Tận tâm đấu tranh cho quyền lợi của những cá nhân bị thương do sự bất cẩn</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-law-gold mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Hãy để chúng tôi giúp bạn đảm bảo khoản bồi thường mà bạn xứng đáng</p>
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
            <h2 className="text-3xl font-bold text-black mb-4">Các lĩnh vực thực hành Chấn thương cá nhân của chúng tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi xử lý tất cả các loại vụ kiện chấn thương cá nhân với cùng sự tận tâm và chuyên môn
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
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Tôi nên làm gì ngay sau một vụ tai nạn xe hơi?</h4>
                  <p className="text-gray-600">Liên hệ với luật sư chấn thương cá nhân càng sớm càng tốt để bảo vệ quyền lợi của bạn. Tránh đưa ra bất kỳ tuyên bố nào với các công ty bảo hiểm cho đến khi bạn đã nói chuyện với luật sư.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Làm thế nào để tôi biết liệu tôi có vụ kiện chấn thương cá nhân hay không?</h4>
                  <p className="text-gray-600">Nếu bạn bị thương do sự sơ suất của người khác, bạn có thể có một vụ kiện. Hãy liên hệ với chúng tôi để được tư vấn miễn phí, và chúng tôi sẽ đánh giá chi tiết tình huống của bạn.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Tôi có bao lâu để nộp đơn yêu cầu bồi thường chấn thương cá nhân ở Texas?</h4>
                  <p className="text-gray-600">Ở Texas, thời hiệu nộp đơn yêu cầu bồi thường chấn thương cá nhân thường là hai năm kể từ ngày xảy ra chấn thương. Điều quan trọng là phải hành động nhanh chóng để bảo vệ quyền lợi của bạn.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-black mb-2">Q: Tôi có thể nhận được những loại bồi thường nào cho chấn thương của mình?</h4>
                  <p className="text-gray-600">Bạn có thể được bồi thường cho chi phí y tế, tiền lương bị mất, đau đớn và khổ sở, và nhiều khoản khác. Văn Phòng Luật SVR sẽ đánh giá vụ án của bạn để xác định thiệt hại tiềm năng.</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="#" className="text-black hover:text-law-gold transition-colors underline">
                  Truy cập Trang Câu Hỏi Thường Gặp về Chấn Thương Cá Nhân
                </a>
              </div>
            </div>

            {/* Right Content - Call to Action */}
            <div className="flex justify-center lg:justify-end">
              <Link to="/vietnamese/len-lich-tu-van-mien-phi">
                <Button 
                  size="lg"
                  className="bg-law-gold hover:bg-law-gold-dark text-white px-10 py-8 text-xl font-bold text-center leading-tight shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Yêu cầu xem xét<br />
                  vụ án miễn phí
                </Button>
              </Link>
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

export default VietnamesePersonalInjury; 