import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const KhongTietLoXoaBo = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Không Tiết Lộ & Xóa Bỏ
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Bào Chữa Tội & Xóa Bỏ Hồ Sơ Hình Sự tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Xóa Bỏ Hồ Sơ Hình Sự Và Bắt Đầu Lại Cuộc Sống Mới
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hồ sơ hình sự có thể ảnh hưởng đến cuộc sống của bạn trong nhiều năm, gây khó khăn trong việc tìm việc làm, thuê nhà, và xây dựng tương lai. Tại Văn Phòng Luật SVR, chúng tôi chuyên về xóa bỏ hồ sơ hình sự và sẽ giúp bạn bắt đầu lại cuộc sống mới.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng mọi người đều xứng đáng có cơ hội thứ hai. Đội ngũ của chúng tôi sẽ làm việc không mệt mỏi để giúp bạn xóa bỏ hồ sơ hình sự và xây dựng tương lai tốt hơn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Xóa Bỏ Hồ Sơ Hình Sự Là Gì?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Xóa bỏ hồ sơ hình sự (Expunction) là quá trình pháp lý để xóa hoàn toàn hồ sơ hình sự của bạn. Khi hồ sơ được xóa bỏ:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Hồ sơ sẽ bị xóa hoàn toàn khỏi cơ sở dữ liệu</li>
                <li>Bạn có thể phủ nhận việc bị bắt hoặc bị buộc tội</li>
                <li>Hồ sơ sẽ không xuất hiện trong kiểm tra lý lịch</li>
                <li>Bạn có thể nộp đơn xin việc làm mà không phải tiết lộ</li>
                <li>Bạn có thể thuê nhà mà không gặp khó khăn</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Xóa bỏ hồ sơ hình sự có thể mở ra nhiều cơ hội mới cho bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Không Tiết Lộ Là Gì?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Không tiết lộ (Non-Disclosure) là một lựa chọn khác để bảo vệ hồ sơ hình sự của bạn. Với không tiết lộ:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Hồ sơ vẫn tồn tại nhưng được bảo vệ</li>
                <li>Hầu hết người sử dụng lao động không thể thấy hồ sơ</li>
                <li>Bạn có thể nộp đơn xin việc làm mà không phải tiết lộ</li>
                <li>Hồ sơ vẫn có thể được sử dụng trong một số trường hợp nhất định</li>
                <li>Đây là lựa chọn cho những trường hợp không đủ điều kiện xóa bỏ</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Không tiết lộ có thể là lựa chọn tốt cho những người không đủ điều kiện xóa bỏ hồ sơ.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Ai Có Thể Xóa Bỏ Hồ Sơ Hình Sự?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Không phải ai cũng có thể xóa bỏ hồ sơ hình sự. Bạn có thể đủ điều kiện nếu:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Bạn được tha bổng hoặc không bị buộc tội</li>
                <li>Vụ kiện của bạn bị bác bỏ</li>
                <li>Bạn được tha bổng theo lệnh của tòa án</li>
                <li>Bạn được tha bổng theo quyết định của bồi thẩm đoàn</li>
                <li>Bạn được tha bổng theo quyết định của công tố viên</li>
                <li>Bạn được tha bổng theo quyết định của thẩm phán</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Điều quan trọng là phải tham khảo ý kiến luật sư để xác định xem bạn có đủ điều kiện hay không.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Ai Có Thể Được Không Tiết Lộ?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bạn có thể đủ điều kiện không tiết lộ nếu:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Bạn đã hoàn thành thời gian thử thách thành công</li>
                <li>Bạn đã hoàn thành thời gian tù giam</li>
                <li>Bạn đã hoàn thành tất cả các điều kiện của bản án</li>
                <li>Bạn không có tiền sử phạm tội khác</li>
                <li>Bạn đã chờ đủ thời gian theo luật định</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Thời gian chờ đợi phụ thuộc vào loại tội phạm và các yếu tố khác.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Quy Trình Xóa Bỏ Hồ Sơ Hình Sự
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Quy trình xóa bỏ hồ sơ hình sự có thể phức tạp. Khi bạn thuê Văn Phòng Luật SVR, chúng tôi sẽ:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Đánh giá hồ sơ:</strong> Xem xét hồ sơ hình sự của bạn</li>
                <li><strong>Xác định tính đủ điều kiện:</strong> Xác định xem bạn có đủ điều kiện hay không</li>
                <li><strong>Chuẩn bị hồ sơ:</strong> Chuẩn bị tất cả tài liệu cần thiết</li>
                <li><strong>Nộp đơn:</strong> Nộp đơn xin xóa bỏ hồ sơ</li>
                <li><strong>Đại diện tại tòa:</strong> Đại diện cho bạn tại tòa</li>
                <li><strong>Theo dõi:</strong> Theo dõi quá trình và đảm bảo hồ sơ được xóa</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi sẽ làm việc không mệt mỏi để đảm bảo quá trình diễn ra suôn sẻ.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Lợi Ích Của Việc Xóa Bỏ Hồ Sơ Hình Sự
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Xóa bỏ hồ sơ hình sự có thể mang lại nhiều lợi ích:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Cơ hội việc làm tốt hơn:</strong> Nhiều nhà tuyển dụng sẽ không thấy hồ sơ</li>
                <li><strong>Thuê nhà dễ dàng hơn:</strong> Chủ nhà sẽ không thấy hồ sơ</li>
                <li><strong>Xin học bổng:</strong> Có thể xin học bổng mà không gặp khó khăn</li>
                <li><strong>Xin giấy phép:</strong> Có thể xin giấy phép nghề nghiệp</li>
                <li><strong>Bảo hiểm:</strong> Có thể nhận bảo hiểm với giá tốt hơn</li>
                <li><strong>Hòa nhập xã hội:</strong> Có thể tham gia vào cộng đồng mà không bị kỳ thị</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Xóa bỏ hồ sơ hình sự có thể thay đổi cuộc sống của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về Xóa Bỏ Hồ Sơ Hình Sự
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể xóa bỏ hồ sơ hình sự sau bao lâu?
                  </h4>
                  <p className="text-gray-700">
                    A: Thời gian chờ đợi phụ thuộc vào loại tội phạm và các yếu tố khác. Một số trường hợp có thể xóa bỏ ngay lập tức, trong khi những trường hợp khác có thể cần chờ đợi nhiều năm.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể xóa bỏ hồ sơ hình sự nếu tôi đã bị kết tội không?
                  </h4>
                  <p className="text-gray-700">
                    A: Nếu bạn đã bị kết tội, bạn thường không thể xóa bỏ hồ sơ. Tuy nhiên, bạn có thể đủ điều kiện không tiết lộ sau khi hoàn thành bản án.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Xóa bỏ hồ sơ hình sự có tốn kém không?
                  </h4>
                  <p className="text-gray-700">
                    A: Chi phí xóa bỏ hồ sơ hình sự phụ thuộc vào độ phức tạp của vụ án. Tuy nhiên, lợi ích thường vượt xa chi phí.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể tự xóa bỏ hồ sơ hình sự không?
                  </h4>
                  <p className="text-gray-700">
                    A: Mặc dù về mặt kỹ thuật có thể tự làm, nhưng quá trình rất phức tạp và có nhiều rủi ro. Tốt nhất là thuê luật sư có kinh nghiệm.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link to="/vietnamese/len-lich-tu-van-mien-phi">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold shadow-lg">
                  Tư Vấn Miễn Phí
                </Button>
              </Link>
              <Link to="/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su">
                <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold shadow-lg">
                  Xem Tất Cả Bào Chữa Hình Sự
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-law-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bắt Đầu Lại Cuộc Sống Mới
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Hồ sơ hình sự không nên định nghĩa tương lai của bạn. Hãy để chúng tôi giúp bạn xóa bỏ quá khứ và xây dựng tương lai tốt hơn.
          </p>
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

export default KhongTietLoXoaBo; 