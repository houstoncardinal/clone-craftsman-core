import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TuVongDoSaiSot = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tử Vong Do Sai Sót
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Tử Vong Do Sai Sót tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Tìm Kiếm Công Lý Cho Gia Đình Bạn Sau Mất Mát Đau Thương
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mất đi người thân yêu do sự bất cẩn của người khác là một trong những trải nghiệm đau đớn nhất mà một gia đình có thể trải qua. Vụ kiện tử vong do sai sót (wrongful death) cho phép gia đình đòi bồi thường cho sự mất mát này. Văn Phòng Luật SVR chuyên về đại diện gia đình trong vụ kiện tử vong do sai sót trên toàn Texas.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng không có khoản tiền nào có thể thay thế người thân yêu của bạn. Tuy nhiên, khoản bồi thường có thể giúp gia đình bạn đối phó với gánh nặng tài chính và đảm bảo rằng những người chịu trách nhiệm bị buộc phải chịu trách nhiệm.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Vụ Kiện Tử Vong Do Sai Sót Là Gì?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vụ kiện tử vong do sai sót là một vụ kiện dân sự được nộp khi một người chết do sự bất cẩn, cố ý hoặc hành vi sai trái của người khác. Theo luật Texas, gia đình của người đã khuất có thể nộp đơn kiện để đòi bồi thường cho:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Thiệt hại thực tế (chi phí y tế, chi phí tang lễ)</li>
                <li>Thiệt hại tinh thần (đau đớn và khổ sở)</li>
                <li>Mất thu nhập và hỗ trợ</li>
                <li>Mất tình yêu, sự quan tâm và hướng dẫn</li>
                <li>Thiệt hại trừng phạt (trong một số trường hợp)</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Vụ kiện tử vong do sai sót có thể phức tạp và đòi hỏi sự hiểu biết sâu sắc về luật Texas. Điều quan trọng là phải có một luật sư có kinh nghiệm đại diện cho gia đình bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Nguyên Nhân Phổ Biến Của Tử Vong Do Sai Sót
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tử vong do sai sót có thể xảy ra trong nhiều tình huống khác nhau. Một số nguyên nhân phổ biến nhất bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Tai nạn xe hơi:</strong> Tai nạn do sự bất cẩn của tài xế khác</li>
                <li><strong>Tai nạn xe tải:</strong> Tai nạn với xe tải 18 bánh</li>
                <li><strong>Tai nạn nơi làm việc:</strong> Tai nạn do điều kiện làm việc không an toàn</li>
                <li><strong>Sản phẩm có lỗi:</strong> Sản phẩm bị lỗi thiết kế hoặc sản xuất</li>
                <li><strong>Hành vi y tế sai sót:</strong> Lỗi y tế dẫn đến tử vong</li>
                <li><strong>Bạo lực:</strong> Hành vi bạo lực hoặc tấn công</li>
                <li><strong>Tai nạn trượt ngã:</strong> Tử vong do điều kiện không an toàn</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bất kể nguyên nhân là gì, nếu sự bất cẩn của người khác dẫn đến cái chết của người thân yêu của bạn, gia đình bạn có quyền đòi bồi thường.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Ai Có Thể Nộp Đơn Kiện Tử Vong Do Sai Sót?
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Theo luật Texas, những người sau đây có thể nộp đơn kiện tử vong do sai sót:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Vợ/chồng còn sống</li>
                <li>Con cái (bao gồm con nuôi)</li>
                <li>Cha mẹ</li>
                <li>Anh chị em</li>
                <li>Người thừa kế theo di chúc</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Thứ tự ưu tiên được xác định theo luật Texas. Nếu có nhiều người thân, họ có thể cùng nộp đơn kiện.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Thời Hiệu Cho Vụ Kiện Tử Vong Do Sai Sót
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tại Texas, thời hiệu để nộp đơn kiện tử vong do sai sót là hai năm kể từ ngày tử vong. Điều quan trọng là phải hành động nhanh chóng vì:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Bằng chứng có thể bị mất hoặc bị phá hủy theo thời gian</li>
                <li>Nhân chứng có thể quên chi tiết quan trọng</li>
                <li>Công ty bảo hiểm có thể cố gắng trì hoãn quá trình</li>
                <li>Gia đình cần khoản bồi thường để đối phó với gánh nặng tài chính</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nếu bạn đã mất người thân yêu, hãy liên hệ với Văn Phòng Luật SVR càng sớm càng tốt để bảo vệ quyền lợi của gia đình bạn.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Quy Trình Xử Lý Vụ Kiện Tử Vong Do Sai Sót
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Khi bạn thuê Văn Phòng Luật SVR để đại diện cho vụ kiện tử vong do sai sót của gia đình, chúng tôi sẽ:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Điều tra kỹ lưỡng:</strong> Thu thập tất cả bằng chứng có sẵn về vụ tử vong</li>
                <li><strong>Xác định tất cả các bên chịu trách nhiệm:</strong> Tìm ra ai có thể bị buộc phải bồi thường</li>
                <li><strong>Thuê chuyên gia:</strong> Làm việc với các chuyên gia để xây dựng vụ kiện mạnh mẽ</li>
                <li><strong>Tính toán thiệt hại:</strong> Xác định đầy đủ các thiệt hại mà gia đình phải chịu</li>
                <li><strong>Thương lượng tích cực:</strong> Đàm phán với tất cả các bên để đạt được khoản bồi thường công bằng</li>
                <li><strong>Kiện tụng nếu cần:</strong> Sẵn sàng đưa vụ án ra tòa nếu cần thiết</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chúng tôi hiểu rằng đây là thời gian khó khăn cho gia đình bạn. Hãy để chúng tôi xử lý các chi tiết pháp lý trong khi bạn tập trung vào việc chữa lành và chăm sóc lẫn nhau.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp Về Vụ Kiện Tử Vong Do Sai Sót
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có bao nhiêu thời gian để nộp đơn kiện tử vong do sai sót?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Texas, bạn có hai năm kể từ ngày tử vong để nộp đơn kiện. Tuy nhiên, điều quan trọng là phải hành động nhanh chóng để bảo vệ bằng chứng.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có thể đòi bồi thường những gì trong vụ kiện tử vong do sai sót?
                  </h4>
                  <p className="text-gray-700">
                    A: Bạn có thể đòi bồi thường cho chi phí y tế, chi phí tang lễ, mất thu nhập, đau đớn và khổ sở, và mất tình yêu, sự quan tâm và hướng dẫn.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có cần luật sư cho vụ kiện tử vong do sai sót không?
                  </h4>
                  <p className="text-gray-700">
                    A: Có, vụ kiện tử vong do sai sót rất phức tạp và thường bị chống lại mạnh mẽ. Một luật sư có kinh nghiệm sẽ đảm bảo rằng gia đình bạn nhận được khoản bồi thường đầy đủ.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Chi phí thuê luật sư cho vụ kiện tử vong do sai sót là bao nhiêu?
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
            Đừng Để Gia Đình Bạn Đối Mặt Với Gánh Nặng Tài Chính Một Mình
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Chúng tôi hiểu nỗi đau của bạn. Hãy để chúng tôi chiến đấu cho công lý và đảm bảo rằng những người chịu trách nhiệm bị buộc phải chịu trách nhiệm.
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

export default TuVongDoSaiSot; 