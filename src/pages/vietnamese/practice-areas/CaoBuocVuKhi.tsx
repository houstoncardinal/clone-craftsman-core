import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CaoBuocVuKhi = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cáo Buộc Về Vũ Khí
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Bào Chữa Tội Vũ Khí tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Bảo Vệ Quyền Lợi Của Bạn Trong Vụ Kiện Vũ Khí
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bị buộc tội về vũ khí có thể có hậu quả nghiêm trọng, bao gồm phạt tiền nặng, phạt tù, và mất quyền sở hữu vũ khí. Tại Văn Phòng Luật SVR, chúng tôi chuyên về bào chữa vụ kiện vũ khí và sẽ chiến đấu để bảo vệ quyền lợi của bạn.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng vụ kiện vũ khí có thể phức tạp và có nhiều yếu tố cần xem xét. Đội ngũ của chúng tôi sẽ làm việc không mệt mỏi để đạt được kết quả tốt nhất có thể cho vụ án của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Luật Vũ Khí Tại Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Texas có luật vũ khí phức tạp. Một số tội phạm vũ khí phổ biến bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Sở hữu vũ khí bất hợp pháp</li>
                <li>Sở hữu vũ khí bị cấm</li>
                <li>Sở hữu vũ khí mà không có giấy phép</li>
                <li>Sử dụng vũ khí trong khi phạm tội</li>
                <li>Mang vũ khí vào nơi bị cấm</li>
                <li>Bán hoặc chuyển giao vũ khí bất hợp pháp</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Hình phạt phụ thuộc vào loại tội phạm và các yếu tố khác.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Hình Phạt Cho Tội Phạm Vũ Khí Tại Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hình phạt cho tội phạm vũ khí có thể nghiêm trọng:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tội nhẹ:</strong> Phạt tiền lên đến $4,000, tù giam lên đến 1 năm</li>
                <li><strong>Tội nặng:</strong> Phạt tiền lên đến $10,000, tù giam từ 2-10 năm</li>
                <li><strong>Tội nghiêm trọng:</strong> Phạt tiền lên đến $10,000, tù giam từ 2-20 năm</li>
                <li><strong>Tội nghiêm trọng nhất:</strong> Phạt tiền lên đến $10,000, tù giam từ 5-99 năm</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ngoài ra, bạn có thể mất quyền sở hữu vũ khí và đối mặt với các hậu quả khác.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Tại Sao Bạn Cần Luật Sư Vũ Khí?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ kiện vũ khí có thể phức tạp và có nhiều yếu tố có thể được sử dụng để bảo vệ bạn:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tìm kiếm bất hợp pháp:</strong> Cảnh sát không có lý do hợp pháp để tìm kiếm</li>
                <li><strong>Tịch thu bất hợp pháp:</strong> Vũ khí được tịch thu bất hợp pháp</li>
                <li><strong>Quyền Miranda:</strong> Cảnh sát không đọc quyền của bạn</li>
                <li><strong>Bằng chứng:</strong> Có thể có vấn đề với việc thu thập hoặc bảo quản bằng chứng</li>
                <li><strong>Thủ tục:</strong> Có thể có lỗi trong thủ tục pháp lý</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Một luật sư có kinh nghiệm sẽ biết cách xác định và khai thác những điểm yếu này trong vụ án của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Quy Trình Xử Lý Vụ Kiện Vũ Khí
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Khi bạn thuê Văn Phòng Luật SVR để đại diện cho vụ kiện vũ khí của mình, chúng tôi sẽ:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Điều tra vụ án:</strong> Thu thập tất cả bằng chứng và thông tin có sẵn</li>
                <li><strong>Phân tích bằng chứng:</strong> Xem xét kỹ lưỡng tất cả bằng chứng chống lại bạn</li>
                <li><strong>Xác định điểm yếu:</strong> Tìm ra những điểm yếu trong vụ án của công tố</li>
                <li><strong>Thương lượng:</strong> Đàm phán với công tố viên để đạt được thỏa thuận tốt nhất</li>
                <li><strong>Đại diện tại tòa:</strong> Đại diện cho bạn tại tòa nếu cần thiết</li>
                <li><strong>Kháng cáo:</strong> Kháng cáo nếu cần thiết</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi sẽ làm việc không mệt mỏi để đạt được kết quả tốt nhất có thể cho vụ án của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Các Biện Pháp Bảo Vệ Phổ Biến Trong Vụ Kiện Vũ Khí
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Có nhiều biện pháp bảo vệ có thể được sử dụng trong vụ kiện vũ khí:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tìm kiếm bất hợp pháp:</strong> Cảnh sát không có lý do hợp pháp để tìm kiếm</li>
                <li><strong>Tịch thu bất hợp pháp:</strong> Vũ khí được tịch thu bất hợp pháp</li>
                <li><strong>Vi phạm quyền Miranda:</strong> Cảnh sát không đọc quyền của bạn</li>
                <li><strong>Bằng chứng bị loại trừ:</strong> Bằng chứng được thu thập bất hợp pháp</li>
                <li><strong>Lỗi trong thủ tục:</strong> Cảnh sát không tuân thủ thủ tục đúng</li>
                <li><strong>Bằng chứng không đủ:</strong> Không đủ bằng chứng để kết tội</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Luật sư có kinh nghiệm sẽ biết cách xác định và sử dụng những biện pháp bảo vệ này.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về Vụ Kiện Vũ Khí
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể bị buộc tội vũ khí nếu tôi có giấy phép không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, bạn vẫn có thể bị buộc tội vũ khí ngay cả khi có giấy phép. Điều này có thể xảy ra nếu bạn vi phạm các điều kiện của giấy phép hoặc sử dụng vũ khí bất hợp pháp.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể bị buộc tội vũ khí nếu vũ khí không phải của tôi không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, bạn có thể bị buộc tội nếu vũ khí được tìm thấy trong xe hoặc nhà của bạn. Tuy nhiên, có thể có biện pháp bảo vệ nếu bạn không biết về sự hiện diện của vũ khí.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể bị buộc tội vũ khí nếu tôi chỉ có vũ khí để tự vệ không?
                  </h4>
                  <p className="text-gray-700">
                    A: Tự vệ có thể là một biện pháp bảo vệ hợp lệ trong vụ kiện vũ khí. Tuy nhiên, điều quan trọng là phải có luật sư có kinh nghiệm để chứng minh điều này.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể kháng cáo kết quả vụ kiện vũ khí không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, bạn có thể kháng cáo kết quả vụ kiện vũ khí. Tuy nhiên, điều quan trọng là phải có luật sư có kinh nghiệm để đảm bảo kháng cáo được thực hiện đúng cách.
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
            Đừng Để Vụ Kiện Vũ Khí Phá Hủy Tương Lai Của Bạn
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Vụ kiện vũ khí có thể có hậu quả nghiêm trọng. Hãy để chúng tôi chiến đấu cho quyền lợi của bạn.
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

export default CaoBuocVuKhi; 