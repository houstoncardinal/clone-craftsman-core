import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ChanThuongThamKhoc = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Chấn Thương Thảm Khốc
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Bồi Thường Thiệt Hại Do Chấn Thương Thảm Khốc tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Đấu Tranh Cho Nạn Nhân Chấn Thương Nghiêm Trọng Và Gia Đình Họ
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chấn thương thảm khốc có thể thay đổi cuộc sống của bạn và gia đình mãi mãi. Những chấn thương này thường dẫn đến tàn tật vĩnh viễn, mất khả năng làm việc và gánh nặng tài chính đáng kể. Văn Phòng Luật SVR chuyên về đại diện nạn nhân chấn thương thảm khốc trên toàn Texas.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng chấn thương thảm khốc không chỉ ảnh hưởng đến nạn nhân mà còn ảnh hưởng đến toàn bộ gia đình. Đội ngũ của chúng tôi sẽ chiến đấu để đảm bảo bạn nhận được khoản bồi thường đầy đủ để trang trải tất cả các chi phí hiện tại và tương lai.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Chấn Thương Thảm Khốc Là Gì?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chấn thương thảm khốc là những chấn thương nghiêm trọng dẫn đến tàn tật vĩnh viễn hoặc thay đổi cuộc sống đáng kể. Những chấn thương này thường bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Chấn thương sọ não (TBI) nghiêm trọng</li>
                <li>Chấn thương tủy sống và liệt</li>
                <li>Mất chi hoặc tàn tật</li>
                <li>Mù lòa hoặc mất thị lực nghiêm trọng</li>
                <li>Điếc hoặc mất thính giác nghiêm trọng</li>
                <li>Bỏng nghiêm trọng</li>
                <li>Chấn thương nội tạng nghiêm trọng</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Những chấn thương này thường yêu cầu điều trị y tế kéo dài, phục hồi chức năng và chăm sóc suốt đời. Chúng cũng có thể dẫn đến mất khả năng làm việc và gánh nặng tài chính đáng kể cho gia đình.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Nguyên Nhân Phổ Biến Của Chấn Thương Thảm Khốc
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chấn thương thảm khốc có thể xảy ra trong nhiều tình huống khác nhau. Một số nguyên nhân phổ biến nhất bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tai nạn xe hơi nghiêm trọng:</strong> Va chạm tốc độ cao hoặc tai nạn đa xe</li>
                <li><strong>Tai nạn xe tải:</strong> Va chạm với xe tải 18 bánh</li>
                <li><strong>Tai nạn nơi làm việc:</strong> Tai nạn công nghiệp hoặc xây dựng</li>
                <li><strong>Sản phẩm có lỗi:</strong> Sản phẩm bị lỗi thiết kế hoặc sản xuất</li>
                <li><strong>Hành vi y tế sai sót:</strong> Lỗi y tế dẫn đến chấn thương nghiêm trọng</li>
                <li><strong>Tai nạn trượt ngã:</strong> Ngã từ độ cao hoặc trên bề mặt nguy hiểm</li>
                <li><strong>Bạo lực:</strong> Tấn công hoặc hành vi bạo lực</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bất kể nguyên nhân là gì, nếu sự bất cẩn của người khác dẫn đến chấn thương thảm khốc của bạn, bạn có quyền đòi bồi thường đầy đủ.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Tại Sao Bạn Cần Luật Sư Chuyên Về Chấn Thương Thảm Khốc?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ kiện chấn thương thảm khốc rất phức tạp và thường liên quan đến:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Đánh giá y tế phức tạp:</strong> Cần chuyên gia y tế để đánh giá đầy đủ thiệt hại</li>
                <li><strong>Tính toán thiệt hại phức tạp:</strong> Cần tính toán chi phí suốt đời</li>
                <li><strong>Đối phó với công ty bảo hiểm:</strong> Công ty bảo hiểm thường chống lại mạnh mẽ</li>
                <li><strong>Thu thập bằng chứng:</strong> Cần bằng chứng y tế và chuyên gia</li>
                <li><strong>Thương lượng phức tạp:</strong> Cần kỹ năng thương lượng mạnh mẽ</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tại Văn Phòng Luật SVR, chúng tôi có kinh nghiệm xử lý vụ kiện chấn thương thảm khốc và sẽ đảm bảo rằng bạn nhận được khoản bồi thường đầy đủ mà bạn xứng đáng.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Các Loại Bồi Thường Cho Chấn Thương Thảm Khốc
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Trong vụ kiện chấn thương thảm khốc, bạn có thể đòi bồi thường cho:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Chi phí y tế:</strong> Chi phí điều trị hiện tại và tương lai</li>
                <li><strong>Mất lương:</strong> Thu nhập bị mất do không thể làm việc</li>
                <li><strong>Đau đớn và khổ sở:</strong> Bồi thường cho đau đớn thể chất và tinh thần</li>
                <li><strong>Thiệt hại tài sản:</strong> Thiệt hại cho tài sản cá nhân</li>
                <li><strong>Chi phí chăm sóc:</strong> Chi phí chăm sóc tại nhà hoặc cơ sở y tế</li>
                <li><strong>Thiệt hại trừng phạt:</strong> Trong trường hợp hành vi cố ý hoặc liều lĩnh</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi sẽ làm việc với các chuyên gia để tính toán đầy đủ tất cả các thiệt hại mà bạn và gia đình phải chịu.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Quy Trình Xử Lý Vụ Kiện Chấn Thương Thảm Khốc
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Khi bạn thuê Văn Phòng Luật SVR để đại diện cho vụ kiện chấn thương thảm khốc của mình, chúng tôi sẽ:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Điều tra kỹ lưỡng:</strong> Thu thập tất cả bằng chứng có sẵn</li>
                <li><strong>Thuê chuyên gia y tế:</strong> Làm việc với bác sĩ và chuyên gia để đánh giá thiệt hại</li>
                <li><strong>Tính toán thiệt hại:</strong> Xác định đầy đủ các thiệt hại hiện tại và tương lai</li>
                <li><strong>Xây dựng vụ kiện mạnh mẽ:</strong> Tạo ra một vụ kiện thuyết phục</li>
                <li><strong>Thương lượng tích cực:</strong> Đàm phán với tất cả các bên để đạt được khoản bồi thường công bằng</li>
                <li><strong>Kiện tụng nếu cần:</strong> Sẵn sàng đưa vụ án ra tòa nếu cần thiết</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng bạn đang trải qua một thời gian khó khăn. Hãy để chúng tôi xử lý các chi tiết pháp lý trong khi bạn tập trung vào việc hồi phục.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về Chấn Thương Thảm Khốc
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có bao nhiêu thời gian để nộp đơn kiện chấn thương thảm khốc?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Texas, bạn có hai năm để nộp đơn kiện chấn thương cá nhân. Tuy nhiên, điều quan trọng là phải hành động nhanh chóng để bảo vệ bằng chứng.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể đòi bồi thường những gì cho chấn thương thảm khốc?
                  </h4>
                  <p className="text-gray-700">
                    A: Bạn có thể đòi bồi thường cho chi phí y tế, mất lương, đau đớn và khổ sở, chi phí chăm sóc, và trong một số trường hợp, thiệt hại trừng phạt.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tại sao tôi cần luật sư cho vụ kiện chấn thương thảm khốc?
                  </h4>
                  <p className="text-gray-700">
                    A: Vụ kiện chấn thương thảm khốc rất phức tạp và thường bị chống lại mạnh mẽ. Một luật sư có kinh nghiệm sẽ đảm bảo rằng bạn nhận được khoản bồi thường đầy đủ.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Chi phí thuê luật sư cho vụ kiện chấn thương thảm khốc là bao nhiêu?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Văn Phòng Luật SVR, chúng tôi làm việc theo cơ chế phí tùy thuộc vào kết quả. Bạn không phải trả chúng tôi bất cứ điều gì trừ khi chúng tôi thắng vụ án của bạn.
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
            Đừng Để Chấn Thương Thảm Khốc Phá Hủy Tương Lai Của Bạn
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Chấn thương thảm khốc có thể thay đổi cuộc sống, nhưng không có nghĩa là kết thúc. Hãy để chúng tôi chiến đấu cho quyền lợi của bạn.
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

export default ChanThuongThamKhoc; 