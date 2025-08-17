import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const LaiXeSayRuou = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lái Xe Trong Tình Trạng Say Rượu
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư DWI/DUI tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Bảo Vệ Quyền Lợi Của Bạn Trong Vụ Kiện DWI/DUI
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bị buộc tội lái xe trong tình trạng say rượu (DWI/DUI) có thể có hậu quả nghiêm trọng, bao gồm phạt tiền nặng, mất bằng lái xe, và thậm chí phạt tù. Tại Văn Phòng Luật SVR, chúng tôi chuyên về bào chữa DWI/DUI và sẽ chiến đấu để bảo vệ quyền lợi của bạn.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng một vụ kiện DWI/DUI có thể ảnh hưởng đến cuộc sống của bạn và gia đình. Đội ngũ của chúng tôi sẽ làm việc không mệt mỏi để đạt được kết quả tốt nhất có thể cho vụ án của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Luật DWI/DUI Tại Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tại Texas, bạn có thể bị buộc tội DWI nếu:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Nồng độ cồn trong máu (BAC) từ 0.08% trở lên</li>
                <li>Nồng độ cồn trong máu từ 0.04% trở lên nếu lái xe thương mại</li>
                <li>Nồng độ cồn trong máu từ 0.02% trở lên nếu dưới 21 tuổi</li>
                <li>Lái xe trong tình trạng bị suy giảm khả năng do rượu hoặc ma túy</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Hình phạt cho DWI có thể nghiêm trọng và tăng dần theo số lần vi phạm.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Hình Phạt Cho DWI Tại Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hình phạt cho DWI phụ thuộc vào số lần vi phạm và các yếu tố khác:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>DWI lần đầu:</strong> Phạt tiền lên đến $2,000, tù giam từ 3-180 ngày, mất bằng lái xe 90 ngày đến 1 năm</li>
                <li><strong>DWI lần hai:</strong> Phạt tiền lên đến $4,000, tù giam từ 30 ngày đến 1 năm, mất bằng lái xe 180 ngày đến 2 năm</li>
                <li><strong>DWI lần ba:</strong> Phạt tiền lên đến $10,000, tù giam từ 2-10 năm, mất bằng lái xe 180 ngày đến 2 năm</li>
                <li><strong>DWI với trẻ em:</strong> Hình phạt nghiêm trọng hơn nếu có trẻ em trong xe</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ngoài ra, bạn có thể phải tham gia chương trình giáo dục về rượu, lắp đặt thiết bị khóa động cơ, và đối mặt với phí bảo hiểm cao hơn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Tại Sao Bạn Cần Luật Sư DWI/DUI?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ kiện DWI/DUI có thể phức tạp và có nhiều yếu tố có thể được sử dụng để bảo vệ bạn:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Lý do dừng xe:</strong> Cảnh sát phải có lý do hợp pháp để dừng xe</li>
                <li><strong>Thử nghiệm nồng độ cồn:</strong> Có thể có vấn đề với cách thực hiện hoặc hiệu chuẩn</li>
                <li><strong>Quyền Miranda:</strong> Cảnh sát phải đọc quyền của bạn</li>
                <li><strong>Bằng chứng:</strong> Có thể có vấn đề với việc thu thập hoặc bảo quản bằng chứng</li>
                <li><strong>Thủ tục:</strong> Có thể có lỗi trong thủ tục pháp lý</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Một luật sư có kinh nghiệm sẽ biết cách xác định và khai thác những điểm yếu này trong vụ án của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Quy Trình Xử Lý Vụ Kiện DWI/DUI
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Khi bạn thuê Văn Phòng Luật SVR để đại diện cho vụ kiện DWI/DUI của mình, chúng tôi sẽ:
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
                Các Biện Pháp Bảo Vệ Phổ Biến Trong Vụ Kiện DWI
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Có nhiều biện pháp bảo vệ có thể được sử dụng trong vụ kiện DWI:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Lý do dừng xe không hợp pháp:</strong> Cảnh sát không có lý do hợp pháp để dừng xe</li>
                <li><strong>Thử nghiệm nồng độ cồn không chính xác:</strong> Vấn đề với máy thử hoặc cách thực hiện</li>
                <li><strong>Vi phạm quyền Miranda:</strong> Cảnh sát không đọc quyền của bạn</li>
                <li><strong>Bằng chứng bị loại trừ:</strong> Bằng chứng được thu thập bất hợp pháp</li>
                <li><strong>Lỗi trong thủ tục:</strong> Cảnh sát không tuân thủ thủ tục đúng</li>
                <li><strong>Bằng chứng không đủ:</strong> Không đủ bằng chứng để kết tội</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Luật sư có kinh nghiệm sẽ biết cách xác định và sử dụng những biện pháp bảo vệ này.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về DWI/DUI
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có nên từ chối thử nghiệm nồng độ cồn không?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Texas, bạn có quyền từ chối thử nghiệm nồng độ cồn, nhưng điều này có thể dẫn đến mất bằng lái xe tự động. Tốt nhất là tham khảo ý kiến luật sư trước khi quyết định.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể bị buộc tội DWI ngay cả khi BAC dưới 0.08% không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, bạn có thể bị buộc tội DWI nếu cảnh sát tin rằng khả năng lái xe của bạn bị suy giảm, ngay cả khi BAC dưới 0.08%.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể bị mất bằng lái xe bao lâu?
                  </h4>
                  <p className="text-gray-700">
                    A: Thời gian mất bằng lái xe phụ thuộc vào số lần vi phạm và các yếu tố khác. DWI lần đầu có thể dẫn đến mất bằng lái xe từ 90 ngày đến 1 năm.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể kháng cáo kết quả vụ kiện DWI không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, bạn có thể kháng cáo kết quả vụ kiện DWI. Tuy nhiên, điều quan trọng là phải có luật sư có kinh nghiệm để đảm bảo kháng cáo được thực hiện đúng cách.
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
            Đừng Để Vụ Kiện DWI Phá Hủy Tương Lai Của Bạn
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Vụ kiện DWI có thể có hậu quả nghiêm trọng. Hãy để chúng tôi chiến đấu cho quyền lợi của bạn.
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

export default LaiXeSayRuou; 