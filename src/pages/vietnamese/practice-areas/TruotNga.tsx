import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TruotNga = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trượt Ngã
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Trượt Ngã tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Buộc Chủ Sở Hữu Tài Sản Chịu Trách Nhiệm Cho Chấn Thương Của Bạn
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ kiện trách nhiệm cơ sở (slip and fall) có thể xảy ra ở bất kỳ đâu - từ cửa hàng tạp hóa đến văn phòng, từ nhà hàng đến trung tâm mua sắm. Nếu bạn bị thương do điều kiện không an toàn trên tài sản của người khác, bạn có quyền đòi bồi thường. Văn Phòng Luật SVR chuyên về đại diện nạn nhân trượt ngã trên toàn Texas.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng chấn thương từ vụ trượt ngã có thể nghiêm trọng và ảnh hưởng lâu dài đến cuộc sống của bạn. Đội ngũ của chúng tôi sẽ chiến đấu để đảm bảo bạn nhận được khoản bồi thường đầy đủ cho tất cả các thiệt hại của mình.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Nguyên Nhân Phổ Biến Của Vụ Trượt Ngã
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ trượt ngã có thể xảy ra vì nhiều lý do khác nhau. Một số nguyên nhân phổ biến nhất bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Sàn ướt:</strong> Sàn không được lau khô sau khi làm sạch</li>
                <li><strong>Băng đá:</strong> Băng đá không được dọn sạch trong mùa đông</li>
                <li><strong>Thảm lỏng:</strong> Thảm không được cố định đúng cách</li>
                <li><strong>Bậc thang không an toàn:</strong> Bậc thang bị hỏng hoặc thiếu tay vịn</li>
                <li><strong>Ánh sáng kém:</strong> Khu vực không đủ ánh sáng</li>
                <li><strong>Vật cản:</strong> Đồ vật để ở nơi không phù hợp</li>
                <li><strong>Bề mặt không bằng phẳng:</strong> Lỗ, vết nứt hoặc bề mặt không đều</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chủ sở hữu tài sản có nghĩa vụ pháp lý để duy trì tài sản của họ trong tình trạng an toàn. Nếu họ không làm điều này và bạn bị thương, bạn có quyền đòi bồi thường.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Chấn Thương Phổ Biến Trong Vụ Trượt Ngã
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ trượt ngã có thể gây ra nhiều loại chấn thương, từ nhẹ đến nghiêm trọng. Một số chấn thương phổ biến bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Gãy xương và nứt xương</li>
                <li>Chấn thương đầu và chấn động</li>
                <li>Chấn thương cổ và lưng</li>
                <li>Chấn thương khớp</li>
                <li>Vết cắt và bầm tím</li>
                <li>Chấn thương tâm lý</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Những chấn thương này có thể yêu cầu điều trị y tế kéo dài và có thể ảnh hưởng đến khả năng làm việc và chất lượng cuộc sống của bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Nghĩa Vụ Của Chủ Sở Hữu Tài Sản
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Theo luật Texas, chủ sở hữu tài sản có nghĩa vụ pháp lý để:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Duy trì tài sản trong tình trạng an toàn</li>
                <li>Sửa chữa các điều kiện nguy hiểm đã biết</li>
                <li>Cảnh báo khách về các mối nguy hiểm</li>
                <li>Kiểm tra tài sản thường xuyên</li>
                <li>Tuân thủ các quy định an toàn</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nếu chủ sở hữu tài sản không thực hiện những nghĩa vụ này và bạn bị thương, họ có thể bị buộc phải bồi thường cho bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Bạn Cần Làm Gì Sau Khi Bị Trượt Ngã?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nếu bạn bị thương trong vụ trượt ngã, điều quan trọng là phải hành động nhanh chóng để bảo vệ quyền lợi của mình:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tìm kiếm chăm sóc y tế:</strong> Đi khám bác sĩ ngay lập tức</li>
                <li><strong>Báo cáo sự cố:</strong> Báo cáo cho chủ sở hữu tài sản hoặc quản lý</li>
                <li><strong>Chụp ảnh:</strong> Chụp ảnh khu vực xảy ra tai nạn và chấn thương</li>
                <li><strong>Thu thập thông tin:</strong> Lấy tên và thông tin liên hệ của nhân chứng</li>
                <li><strong>Liên hệ luật sư:</strong> Gọi cho Văn Phòng Luật SVR càng sớm càng tốt</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Đừng đưa ra bất kỳ tuyên bố nào với công ty bảo hiểm hoặc chủ sở hữu tài sản mà không tham khảo ý kiến luật sư trước.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Tại Sao Bạn Cần Luật Sư Cho Vụ Trượt Ngã?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ kiện trượt ngã có thể phức tạp và thường bị chủ sở hữu tài sản và công ty bảo hiểm của họ chống lại mạnh mẽ. Một luật sư có kinh nghiệm sẽ:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Điều tra kỹ lưỡng vụ tai nạn</li>
                <li>Thu thập bằng chứng quan trọng</li>
                <li>Làm việc với các chuyên gia để xây dựng vụ kiện</li>
                <li>Thương lượng với công ty bảo hiểm</li>
                <li>Đại diện cho bạn tại tòa nếu cần thiết</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tại Văn Phòng Luật SVR, chúng tôi có kinh nghiệm xử lý vụ kiện trượt ngã và sẽ đảm bảo rằng bạn nhận được khoản bồi thường đầy đủ mà bạn xứng đáng.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về Vụ Trượt Ngã
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có bao nhiêu thời gian để nộp đơn kiện trượt ngã?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Texas, bạn có hai năm để nộp đơn kiện chấn thương cá nhân. Tuy nhiên, điều quan trọng là phải hành động nhanh chóng để bảo vệ bằng chứng.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể đòi bồi thường những gì trong vụ trượt ngã?
                  </h4>
                  <p className="text-gray-700">
                    A: Bạn có thể đòi bồi thường cho chi phí y tế, mất lương, đau đớn và khổ sở, và trong một số trường hợp, thiệt hại trừng phạt.
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
                    Q: Tại sao tôi cần luật sư cho vụ trượt ngã?
                  </h4>
                  <p className="text-gray-700">
                    A: Chủ sở hữu tài sản và công ty bảo hiểm thường có luật sư mạnh mẽ. Bạn cần một luật sư có kinh nghiệm để đảm bảo quyền lợi của mình được bảo vệ.
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
            Đừng Để Chủ Sở Hữu Tài Sản Thoát Trách Nhiệm
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Chủ sở hữu tài sản có nghĩa vụ giữ cho tài sản của họ an toàn. Hãy để chúng tôi chiến đấu cho quyền lợi của bạn.
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

export default TruotNga; 