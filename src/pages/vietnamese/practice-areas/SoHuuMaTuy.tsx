import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SoHuuMaTuy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sở Hữu Ma Túy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Sở Hữu Ma Túy tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Bảo Vệ Quyền Lợi Của Bạn Trong Vụ Kiện Sở Hữu Ma Túy
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bị buộc tội sở hữu ma túy có thể có hậu quả nghiêm trọng, bao gồm phạt tiền nặng, phạt tù, và hồ sơ hình sự vĩnh viễn. Tại Văn Phòng Luật SVR, chúng tôi chuyên về bào chữa sở hữu ma túy và sẽ chiến đấu để bảo vệ quyền lợi của bạn.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng một vụ kiện sở hữu ma túy có thể ảnh hưởng đến cuộc sống của bạn và gia đình. Đội ngũ của chúng tôi sẽ làm việc không mệt mỏi để đạt được kết quả tốt nhất có thể cho vụ án của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Luật Sở Hữu Ma Túy Tại Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tại Texas, sở hữu ma túy được phân loại theo loại ma túy và số lượng:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Nhóm 1 (Marijuana):</strong> Dưới 2 ounce là vi phạm hành chính, trên 2 ounce là tội hình sự</li>
                <li><strong>Nhóm 2 (Cocaine, Methamphetamine):</strong> Sở hữu bất kỳ số lượng nào đều là tội hình sự</li>
                <li><strong>Nhóm 3 (Xanax, Valium):</strong> Sở hữu không có đơn thuốc là tội hình sự</li>
                <li><strong>Nhóm 4 (Heroin, Fentanyl):</strong> Sở hữu bất kỳ số lượng nào đều là tội hình sự nghiêm trọng</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Hình phạt phụ thuộc vào loại ma túy, số lượng, và tiền sử phạm tội của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Hình Phạt Cho Sở Hữu Ma Túy Tại Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hình phạt cho sở hữu ma túy có thể nghiêm trọng:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Vi phạm hành chính:</strong> Phạt tiền lên đến $2,000 cho marijuana dưới 2 ounce</li>
                <li><strong>Tội nhẹ:</strong> Phạt tiền lên đến $4,000, tù giam lên đến 1 năm</li>
                <li><strong>Tội nặng:</strong> Phạt tiền lên đến $10,000, tù giam từ 2-20 năm</li>
                <li><strong>Tội nghiêm trọng:</strong> Phạt tiền lên đến $50,000, tù giam từ 5-99 năm</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ngoài ra, bạn có thể mất bằng lái xe, gặp khó khăn trong việc tìm việc làm, và đối mặt với các hậu quả khác.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Tại Sao Bạn Cần Luật Sư Sở Hữu Ma Túy?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ kiện sở hữu ma túy có thể phức tạp và có nhiều yếu tố có thể được sử dụng để bảo vệ bạn:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tìm kiếm và tịch thu bất hợp pháp:</strong> Cảnh sát phải có lý do hợp pháp để tìm kiếm</li>
                <li><strong>Quyền Miranda:</strong> Cảnh sát phải đọc quyền của bạn</li>
                <li><strong>Bằng chứng:</strong> Có thể có vấn đề với việc thu thập hoặc bảo quản bằng chứng</li>
                <li><strong>Thủ tục:</strong> Có thể có lỗi trong thủ tục pháp lý</li>
                <li><strong>Phân tích ma túy:</strong> Có thể có vấn đề với việc phân tích ma túy</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Một luật sư có kinh nghiệm sẽ biết cách xác định và khai thác những điểm yếu này trong vụ án của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Quy Trình Xử Lý Vụ Kiện Sở Hữu Ma Túy
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Khi bạn thuê Văn Phòng Luật SVR để đại diện cho vụ kiện sở hữu ma túy của mình, chúng tôi sẽ:
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
                Các Biện Pháp Bảo Vệ Phổ Biến Trong Vụ Kiện Sở Hữu Ma Túy
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Có nhiều biện pháp bảo vệ có thể được sử dụng trong vụ kiện sở hữu ma túy:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tìm kiếm bất hợp pháp:</strong> Cảnh sát không có lý do hợp pháp để tìm kiếm</li>
                <li><strong>Tịch thu bất hợp pháp:</strong> Ma túy được tịch thu bất hợp pháp</li>
                <li><strong>Vi phạm quyền Miranda:</strong> Cảnh sát không đọc quyền của bạn</li>
                <li><strong>Bằng chứng bị loại trừ:</strong> Bằng chứng được thu thập bất hợp pháp</li>
                <li><strong>Lỗi trong thủ tục:</strong> Cảnh sát không tuân thủ thủ tục đúng</li>
                <li><strong>Phân tích ma túy không chính xác:</strong> Vấn đề với việc phân tích ma túy</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Luật sư có kinh nghiệm sẽ biết cách xác định và sử dụng những biện pháp bảo vệ này.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về Sở Hữu Ma Túy
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể bị buộc tội sở hữu ma túy nếu ma túy không phải của tôi không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, bạn có thể bị buộc tội nếu ma túy được tìm thấy trong xe hoặc nhà của bạn. Tuy nhiên, có thể có biện pháp bảo vệ nếu bạn không biết về sự hiện diện của ma túy.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể bị buộc tội sở hữu ma túy nếu tôi có đơn thuốc không?
                  </h4>
                  <p className="text-gray-700">
                    A: Nếu bạn có đơn thuốc hợp lệ cho ma túy được kê đơn, bạn thường không thể bị buộc tội sở hữu ma túy. Tuy nhiên, bạn phải tuân thủ các quy định về đơn thuốc.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể bị buộc tội sở hữu ma túy nếu tôi chỉ có một lượng nhỏ không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, bạn có thể bị buộc tội sở hữu ma túy ngay cả với một lượng nhỏ. Tuy nhiên, hình phạt có thể nhẹ hơn cho lượng nhỏ.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể kháng cáo kết quả vụ kiện sở hữu ma túy không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, bạn có thể kháng cáo kết quả vụ kiện sở hữu ma túy. Tuy nhiên, điều quan trọng là phải có luật sư có kinh nghiệm để đảm bảo kháng cáo được thực hiện đúng cách.
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
            Đừng Để Vụ Kiện Sở Hữu Ma Túy Phá Hủy Tương Lai Của Bạn
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Vụ kiện sở hữu ma túy có thể có hậu quả nghiêm trọng. Hãy để chúng tôi chiến đấu cho quyền lợi của bạn.
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

export default SoHuuMaTuy; 