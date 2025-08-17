import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TaiNanXeHoi = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tai Nạn Xe Hơi
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật Sư Tai Nạn Xe Hơi tại Houston, Texas
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Giúp Nạn Nhân Tai Nạn Xe Hơi Đòi Lại Khoản Bồi Thường Trên Toàn Texas
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tai nạn xe hơi có thể gây ra những chấn thương nghiêm trọng, khó khăn tài chính và chấn thương tâm lý. Nếu bạn hoặc người thân bị thương trong vụ tai nạn xe hơi do sự bất cẩn của người khác, bạn xứng đáng được đại diện pháp lý có kinh nghiệm. Văn Phòng Luật SVR, có trụ sở tại Houston, cung cấp sự đại diện tận tâm và có kỹ năng cho nạn nhân tai nạn xe hơi trên toàn Texas.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Đội ngũ của chúng tôi sẽ chiến đấu để đảm bảo rằng bạn nhận được khoản bồi thường cần thiết để trang trải chi phí y tế, mất lương và đau đớn. Nếu bạn bị thương trong vụ tai nạn xe hơi, hãy liên hệ với Văn Phòng Luật SVR ngay hôm nay để được tư vấn miễn phí.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Tại Sao Bạn Cần Luật Sư Tai Nạn Xe Hơi tại Houston, TX
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Các con đường và đường cao tốc nhộn nhịp của Houston, bao gồm I-45, I-10, SH 288 và U.S. 59, được biết đến với tần suất tai nạn giao thông thường xuyên. Dù bạn tham gia vào một vụ va chạm nhẹ hay một vụ đâm xe nghiêm trọng, việc đối phó với các công ty bảo hiểm và hồi phục sau chấn thương có thể rất áp lực.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Thuê một luật sư tai nạn xe hơi có kinh nghiệm tại Houston có thể giúp đảm bảo quyền lợi của bạn được bảo vệ. Tại Văn Phòng Luật SVR, chúng tôi làm việc không mệt mỏi để:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Điều tra vụ tai nạn để xác định lỗi.</li>
                <li>Thu thập bằng chứng, bao gồm báo cáo cảnh sát, hồ sơ y tế và lời khai của nhân chứng.</li>
                <li>Thương lượng với các công ty bảo hiểm để đảm bảo bạn nhận được khoản bồi thường công bằng.</li>
                <li>Theo đuổi kiện tụng nếu cần thiết để đảm bảo khoản bồi thường đầy đủ.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Với nhiều năm kinh nghiệm xử lý các vụ kiện chấn thương cá nhân tại Texas, công ty của chúng tôi biết cách tối đa hóa khoản bồi thường mà bạn được hưởng.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Nguyên Nhân Phổ Biến Của Tai Nạn Xe Hơi Tại Houston
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Houston, giống như nhiều thành phố khác ở Texas, có tỷ lệ tai nạn xe hơi cao, nhiều vụ do sự bất cẩn hoặc lái xe liều lĩnh. Một số nguyên nhân phổ biến nhất của tai nạn xe hơi bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Lái xe mất tập trung:</strong> Nhắn tin, sử dụng điện thoại và các yếu tố phân tâm khác có thể dẫn đến tai nạn.</li>
                <li><strong>Lái xe khi say rượu:</strong> Lái xe dưới ảnh hưởng của rượu là nguyên nhân hàng đầu gây ra tai nạn xe hơi nghiêm trọng và tử vong.</li>
                <li><strong>Chạy quá tốc độ:</strong> Tốc độ quá mức thường dẫn đến tai nạn thảm khốc.</li>
                <li><strong>Lái xe liều lĩnh:</strong> Không tuân thủ luật giao thông hoặc lái xe hung hăng đặt mọi người vào rủi ro.</li>
                <li><strong>Điều kiện thời tiết:</strong> Mưa lớn và đường trơn có thể góp phần vào tai nạn trong thời tiết không thể đoán trước của Houston.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bất kể nguyên nhân là gì, nếu sự bất cẩn của người khác dẫn đến vụ tai nạn của bạn, Văn Phòng Luật SVR sẽ buộc họ chịu trách nhiệm.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Các Loại Chấn Thương Trong Tai Nạn Xe Hơi
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tai nạn xe hơi có thể gây ra nhiều loại chấn thương, từ vết cắt và bầm tím nhẹ đến chấn thương thay đổi cuộc sống. Một số chấn thương phổ biến mà khách hàng của chúng tôi gặp phải trong tai nạn xe hơi bao gồm:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li>Chấn thương cổ và whiplash</li>
                <li>Gãy xương và nứt xương</li>
                <li>Chấn thương đầu, bao gồm chấn thương sọ não (TBI)</li>
                <li>Chấn thương tủy sống, bao gồm liệt</li>
                <li>Chấn thương nội tạng, như tổn thương cơ quan</li>
                <li>Vết rách nghiêm trọng và bỏng</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mỗi loại chấn thương đều có thể có tác động lâu dài đến cuộc sống của bạn. Chúng tôi hiểu rằng bạn cần khoản bồi thường đầy đủ để trang trải chi phí y tế hiện tại và tương lai, cũng như bồi thường cho đau đớn và khổ sở.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Quy Trình Xử Lý Vụ Kiện Tai Nạn Xe Hơi
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tại Văn Phòng Luật SVR, chúng tôi có một quy trình có hệ thống để xử lý vụ kiện tai nạn xe hơi của bạn:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
                <li><strong>Điều tra vụ tai nạn:</strong> Chúng tôi tiến hành điều tra kỹ lưỡng, thu thập bằng chứng để chứng minh sự bất cẩn của bên kia.</li>
                <li><strong>Tài liệu y tế:</strong> Chúng tôi làm việc chặt chẽ với bác sĩ của bạn để ghi lại chấn thương và đảm bảo bạn nhận được chăm sóc y tế phù hợp.</li>
                <li><strong>Thương lượng với công ty bảo hiểm:</strong> Đội ngũ của chúng tôi có kinh nghiệm trong việc đối phó với các điều chỉnh viên bảo hiểm, những người thường cố gắng giảm thiểu yêu cầu bồi thường. Chúng tôi sẽ không chấp nhận các đề nghị thấp.</li>
                <li><strong>Theo đuổi kiện tụng nếu cần thiết:</strong> Nếu công ty bảo hiểm từ chối đưa ra khoản bồi thường công bằng, chúng tôi sẵn sàng đưa vụ án ra tòa.</li>
              </ul>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Công ty của chúng tôi có thành tích đã được chứng minh trong việc đảm bảo các khoản bồi thường và phán quyết thuận lợi cho nạn nhân tai nạn xe hơi trên toàn Houston và Texas.
              </p>

              <h3 className="text-2xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp (FAQ) – Vụ Kiện Tai Nạn Xe Hơi Tại Houston
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi có bao nhiêu thời gian để nộp đơn kiện tai nạn xe hơi tại Texas?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Texas, thời hiệu để nộp đơn kiện chấn thương cá nhân sau tai nạn xe hơi là hai năm kể từ ngày xảy ra tai nạn. Điều quan trọng là phải hành động nhanh chóng để bảo vệ quyền lợi của bạn.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Nếu tài xế khác không có bảo hiểm thì sao?
                  </h4>
                  <p className="text-gray-700">
                    A: Nếu tài xế khác không có bảo hiểm hoặc bảo hiểm không đủ, bạn vẫn có thể đòi lại khoản bồi thường thông qua chính sách bảo hiểm của mình với bảo hiểm tài xế không có bảo hiểm/không đủ bảo hiểm. Văn Phòng Luật SVR có thể giúp bạn điều hướng quá trình này.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Chi phí thuê luật sư tai nạn xe hơi là bao nhiêu?
                  </h4>
                  <p className="text-gray-700">
                    A: Tại Văn Phòng Luật SVR, chúng tôi làm việc theo cơ chế phí tùy thuộc vào kết quả, có nghĩa là bạn không phải trả chúng tôi bất cứ điều gì trừ khi chúng tôi thắng vụ án của bạn. Điều này đảm bảo rằng mọi người đều có quyền tiếp cận đại diện pháp lý chất lượng cao, bất kể tình hình tài chính.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    Q: Tôi nên tránh làm gì sau khi xảy ra tai nạn xe hơi?
                  </h4>
                  <p className="text-gray-700">
                    A: Tránh đưa ra những tuyên bố có thể được sử dụng chống lại bạn sau này, chẳng hạn như thừa nhận lỗi hoặc giảm thiểu chấn thương của bạn. Hãy để Văn Phòng Luật SVR xử lý việc giao tiếp với các công ty bảo hiểm.
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
            Đừng Đối Mặt Với Công Ty Bảo Hiểm Một Mình
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Các công ty bảo hiểm có đội ngũ luật sư làm việc chống lại bạn. Hãy để chúng tôi chiến đấu cho quyền lợi của bạn và đòi lại khoản bồi thường mà bạn xứng đáng.
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

export default TaiNanXeHoi; 