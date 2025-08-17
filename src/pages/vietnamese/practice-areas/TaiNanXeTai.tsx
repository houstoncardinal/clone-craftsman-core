import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TaiNanXeTai = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tai Nạn Xe Tải 18 Bánh
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Tai Nạn Xe Tải tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Đại Diện Chuyên Biệt Cho Nạn Nhân Tai Nạn Xe Tải Trên Toàn Texas
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tai nạn xe tải 18 bánh có thể gây ra những hậu quả tàn khốc do kích thước và trọng lượng khổng lồ của những chiếc xe này. Nếu bạn hoặc người thân bị thương trong vụ tai nạn xe tải, bạn cần một luật sư có kinh nghiệm hiểu rõ sự phức tạp của những vụ kiện này. Văn Phòng Luật SVR chuyên về đại diện nạn nhân tai nạn xe tải trên toàn Texas.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng tai nạn xe tải thường dẫn đến chấn thương nghiêm trọng và thiệt hại đáng kể. Đội ngũ của chúng tôi sẽ chiến đấu để đảm bảo bạn nhận được khoản bồi thường đầy đủ cho tất cả các thiệt hại của mình.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Tại Sao Tai Nạn Xe Tải Lại Nguy Hiểm Đến Vậy?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Xe tải 18 bánh có thể nặng tới 80,000 pound và dài hơn 70 feet. Khi một chiếc xe tải đâm vào xe hơi, hậu quả thường rất nghiêm trọng. Một số lý do khiến tai nạn xe tải đặc biệt nguy hiểm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Kích thước và trọng lượng:</strong> Xe tải lớn hơn nhiều so với xe hơi thông thường</li>
                <li><strong>Thời gian dừng dài hơn:</strong> Xe tải cần nhiều thời gian hơn để dừng lại</li>
                <li><strong>Góc mù:</strong> Tài xế xe tải có nhiều góc mù hơn</li>
                <li><strong>Hàng hóa nguy hiểm:</strong> Một số xe tải chở hàng hóa nguy hiểm</li>
                <li><strong>Mệt mỏi của tài xế:</strong> Tài xế xe tải thường lái xe trong thời gian dài</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Do những yếu tố này, tai nạn xe tải thường dẫn đến chấn thương nghiêm trọng hoặc tử vong. Điều quan trọng là phải có một luật sư có kinh nghiệm đại diện cho bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Nguyên Nhân Phổ Biến Của Tai Nạn Xe Tải
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tai nạn xe tải có thể xảy ra vì nhiều lý do khác nhau. Một số nguyên nhân phổ biến nhất bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Mệt mỏi của tài xế:</strong> Tài xế xe tải thường lái xe quá giờ quy định</li>
                <li><strong>Bảo trì kém:</strong> Xe tải không được bảo trì đúng cách</li>
                <li><strong>Lái xe mất tập trung:</strong> Sử dụng điện thoại hoặc các thiết bị khác</li>
                <li><strong>Lái xe khi say rượu:</strong> Một số tài xế xe tải lái xe dưới ảnh hưởng</li>
                <li><strong>Chạy quá tốc độ:</strong> Tài xế xe tải thường chạy quá tốc độ để đúng lịch</li>
                <li><strong>Lỗi của công ty:</strong> Công ty vận tải có thể gây áp lực cho tài xế</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bất kể nguyên nhân là gì, nếu sự bất cẩn của tài xế xe tải hoặc công ty vận tải dẫn đến vụ tai nạn của bạn, bạn có quyền đòi bồi thường.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Chấn Thương Phổ Biến Trong Tai Nạn Xe Tải
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Do kích thước và trọng lượng của xe tải, chấn thương trong tai nạn xe tải thường rất nghiêm trọng. Một số chấn thương phổ biến bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Chấn thương sọ não (TBI)</li>
                <li>Chấn thương tủy sống và liệt</li>
                <li>Gãy xương nghiêm trọng</li>
                <li>Chấn thương nội tạng</li>
                <li>Bỏng và vết thương</li>
                <li>Chấn thương tâm lý</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Những chấn thương này có thể yêu cầu điều trị y tế kéo dài và có thể thay đổi cuộc sống của bạn mãi mãi. Chúng tôi hiểu rằng bạn cần khoản bồi thường đầy đủ để trang trải tất cả các chi phí liên quan.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Tại Sao Bạn Cần Luật Sư Chuyên Về Tai Nạn Xe Tải?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ kiện tai nạn xe tải phức tạp hơn nhiều so với vụ kiện tai nạn xe hơi thông thường. Có thể có nhiều bên chịu trách nhiệm, bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Tài xế xe tải</li>
                <li>Công ty vận tải</li>
                <li>Chủ sở hữu xe tải</li>
                <li>Nhà sản xuất xe tải</li>
                <li>Công ty bảo hiểm</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tại Văn Phòng Luật SVR, chúng tôi có kinh nghiệm xử lý những vụ kiện phức tạp này và sẽ đảm bảo rằng tất cả các bên chịu trách nhiệm đều bị buộc phải bồi thường cho bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Quy Trình Xử Lý Vụ Kiện Tai Nạn Xe Tải
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Khi bạn thuê Văn Phòng Luật SVR để đại diện cho vụ kiện tai nạn xe tải của mình, chúng tôi sẽ:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Điều tra kỹ lưỡng:</strong> Thu thập tất cả bằng chứng có sẵn</li>
                <li><strong>Xác định tất cả các bên chịu trách nhiệm:</strong> Tìm ra ai có thể bị buộc phải bồi thường</li>
                <li><strong>Thuê chuyên gia:</strong> Làm việc với các chuyên gia để xây dựng vụ kiện mạnh mẽ</li>
                <li><strong>Thương lượng tích cực:</strong> Đàm phán với tất cả các bên để đạt được khoản bồi thường công bằng</li>
                <li><strong>Kiện tụng nếu cần:</strong> Sẵn sàng đưa vụ án ra tòa nếu cần thiết</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng bạn đang trải qua một thời gian khó khăn. Hãy để chúng tôi xử lý các chi tiết pháp lý trong khi bạn tập trung vào việc hồi phục.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về Tai Nạn Xe Tải
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể đòi bồi thường từ ai trong vụ tai nạn xe tải?
                  </h4>
                  <p className="text-gray-700">
                    A: Bạn có thể đòi bồi thường từ tài xế xe tải, công ty vận tải, chủ sở hữu xe tải, và trong một số trường hợp, nhà sản xuất xe tải. Luật sư của chúng tôi sẽ xác định tất cả các bên có thể chịu trách nhiệm.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có bao nhiêu thời gian để nộp đơn kiện tai nạn xe tải?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Texas, bạn có hai năm để nộp đơn kiện chấn thương cá nhân. Tuy nhiên, điều quan trọng là phải hành động nhanh chóng để bảo vệ bằng chứng và quyền lợi của bạn.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể đòi bồi thường những gì trong vụ tai nạn xe tải?
                  </h4>
                  <p className="text-gray-700">
                    A: Bạn có thể đòi bồi thường cho chi phí y tế, mất lương, đau đớn và khổ sở, thiệt hại tài sản, và trong một số trường hợp, thiệt hại trừng phạt.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tại sao tôi cần luật sư cho vụ tai nạn xe tải?
                  </h4>
                  <p className="text-gray-700">
                    A: Vụ kiện tai nạn xe tải rất phức tạp và thường liên quan đến nhiều bên. Một luật sư có kinh nghiệm sẽ đảm bảo rằng bạn nhận được khoản bồi thường đầy đủ mà bạn xứng đáng.
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
            Đừng Đối Mặt Với Công Ty Vận Tải Một Mình
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Các công ty vận tải có đội ngũ luật sư mạnh mẽ. Hãy để chúng tôi chiến đấu cho quyền lợi của bạn và đòi lại khoản bồi thường mà bạn xứng đáng.
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

export default TaiNanXeTai; 