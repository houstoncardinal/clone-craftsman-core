import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CanCho = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cắn Chó
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Cắn Chó tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Đại Diện Cho Nạn Nhân Bị Chó Cắn Và Gia Đình Họ
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ tấn công chó có thể gây ra những chấn thương nghiêm trọng, đau đớn và chấn thương tâm lý lâu dài. Nếu bạn hoặc người thân bị chó cắn, bạn có quyền đòi bồi thường từ chủ sở hữu chó. Văn Phòng Luật SVR chuyên về đại diện nạn nhân bị chó cắn trên toàn Texas.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng vụ tấn công chó có thể gây ra chấn thương thể chất và tâm lý nghiêm trọng. Đội ngũ của chúng tôi sẽ chiến đấu để đảm bảo bạn nhận được khoản bồi thường đầy đủ cho tất cả các thiệt hại của mình.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Luật Về Chó Cắn Tại Texas
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Texas có luật nghiêm ngặt về trách nhiệm của chủ sở hữu chó. Theo luật Texas, chủ sở hữu chó có thể bị buộc phải bồi thường nếu:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Chó đã từng cắn người trước đó</li>
                <li>Chủ sở hữu biết chó có tính cách hung hăng</li>
                <li>Chủ sở hữu không kiểm soát chó đúng cách</li>
                <li>Chó được thả rông hoặc không được giám sát</li>
                <li>Chủ sở hữu vi phạm luật về chó nguy hiểm</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chủ sở hữu chó có nghĩa vụ pháp lý để kiểm soát chó của họ và ngăn chặn chúng gây thương tích cho người khác.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Chấn Thương Phổ Biến Từ Vụ Tấn Công Chó
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ tấn công chó có thể gây ra nhiều loại chấn thương nghiêm trọng, bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Vết cắn sâu và rách da</li>
                <li>Chấn thương mô mềm</li>
                <li>Gãy xương</li>
                <li>Chấn thương thần kinh</li>
                <li>Nhiễm trùng</li>
                <li>Sẹo vĩnh viễn</li>
                <li>Chấn thương tâm lý</li>
                <li>Bệnh dại (trong trường hợp hiếm)</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Những chấn thương này có thể yêu cầu điều trị y tế kéo dài, phẫu thuật và có thể để lại sẹo vĩnh viễn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Bạn Cần Làm Gì Sau Khi Bị Chó Cắn?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nếu bạn bị chó cắn, điều quan trọng là phải hành động nhanh chóng để bảo vệ sức khỏe và quyền lợi của mình:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tìm kiếm chăm sóc y tế:</strong> Đi khám bác sĩ ngay lập tức</li>
                <li><strong>Báo cáo sự cố:</strong> Báo cáo cho cảnh sát và cơ quan kiểm soát động vật</li>
                <li><strong>Chụp ảnh:</strong> Chụp ảnh vết thương và khu vực xảy ra tai nạn</li>
                <li><strong>Thu thập thông tin:</strong> Lấy thông tin của chủ sở hữu chó và nhân chứng</li>
                <li><strong>Liên hệ luật sư:</strong> Gọi cho Văn Phòng Luật SVR càng sớm càng tốt</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Đừng đưa ra bất kỳ tuyên bố nào với chủ sở hữu chó hoặc công ty bảo hiểm mà không tham khảo ý kiến luật sư trước.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Trách Nhiệm Của Chủ Sở Hữu Chó
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chủ sở hữu chó có nghĩa vụ pháp lý để:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Kiểm soát chó của họ mọi lúc</li>
                <li>Giữ chó trong sân có rào chắn</li>
                <li>Xích chó khi ở nơi công cộng</li>
                <li>Đào tạo chó đúng cách</li>
                <li>Không để chó chạy rông</li>
                <li>Tuân thủ luật về chó nguy hiểm</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nếu chủ sở hữu chó không thực hiện những nghĩa vụ này và chó của họ cắn bạn, họ có thể bị buộc phải bồi thường.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Các Loại Bồi Thường Cho Vụ Tấn Công Chó
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Trong vụ kiện chó cắn, bạn có thể đòi bồi thường cho:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Chi phí y tế:</strong> Chi phí điều trị, phẫu thuật và phục hồi chức năng</li>
                <li><strong>Mất lương:</strong> Thu nhập bị mất do không thể làm việc</li>
                <li><strong>Đau đớn và khổ sở:</strong> Bồi thường cho đau đớn thể chất và tinh thần</li>
                <li><strong>Sẹo và biến dạng:</strong> Bồi thường cho sẹo vĩnh viễn</li>
                <li><strong>Chấn thương tâm lý:</strong> Bồi thường cho nỗi sợ hãi và lo lắng</li>
                <li><strong>Thiệt hại trừng phạt:</strong> Trong trường hợp hành vi cố ý hoặc liều lĩnh</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi sẽ làm việc với các chuyên gia y tế để đảm bảo rằng tất cả các thiệt hại của bạn được tính toán đầy đủ.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về Vụ Tấn Công Chó
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có bao nhiêu thời gian để nộp đơn kiện chó cắn?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Texas, bạn có hai năm để nộp đơn kiện chấn thương cá nhân. Tuy nhiên, điều quan trọng là phải hành động nhanh chóng để bảo vệ bằng chứng.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể đòi bồi thường những gì cho vụ tấn công chó?
                  </h4>
                  <p className="text-gray-700">
                    A: Bạn có thể đòi bồi thường cho chi phí y tế, mất lương, đau đớn và khổ sở, sẹo vĩnh viễn, và chấn thương tâm lý.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Nếu tôi một phần có lỗi thì sao?
                  </h4>
                  <p className="text-gray-700">
                    A: Texas tuân theo quy tắc lỗi tương đối. Ngay cả khi bạn một phần có lỗi, bạn vẫn có thể đòi bồi thường, mặc dù khoản bồi thường có thể bị giảm.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tại sao tôi cần luật sư cho vụ kiện chó cắn?
                  </h4>
                  <p className="text-gray-700">
                    A: Chủ sở hữu chó và công ty bảo hiểm thường có luật sư mạnh mẽ. Bạn cần một luật sư có kinh nghiệm để đảm bảo quyền lợi của mình được bảo vệ.
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
              <Link to="/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan">
                <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold shadow-lg">
                  Xem Tất Cả Chấn Thương Cá Nhân
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
            Đừng Để Chủ Sở Hữu Chó Thoát Trách Nhiệm
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Chủ sở hữu chó có nghĩa vụ kiểm soát chó của họ. Hãy để chúng tôi chiến đấu cho quyền lợi của bạn.
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

export default CanCho; 