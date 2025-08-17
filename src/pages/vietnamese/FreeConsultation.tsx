import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Shield, Phone, Mail, MapPin, Star, Award, Gavel, ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const VietnameseFreeConsultation = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lên Lịch Tư Vấn Miễn Phí
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Nhận tư vấn pháp lý chuyên nghiệp miễn phí. Luật sư có kinh nghiệm của chúng tôi sẵn sàng giúp bạn hiểu rõ quyền lợi và các lựa chọn của mình.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:281-249-9835">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Gọi (281) 249-9835
                </Button>
              </a>
              <Link to="/vietnamese/lien-he">
                <Button variant="outline" className="border-2 border-white bg-white text-black hover:bg-law-gold hover:text-white px-8 py-4 text-lg font-semibold shadow-lg">
                  Gửi Tin Nhắn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Full Width */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Nhận Tư Vấn Miễn Phí Ngay Hôm Nay</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Điền vào biểu mẫu bên dưới và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ để lên lịch tư vấn miễn phí.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">Yêu Cầu Tư Vấn Miễn Phí</h3>
                <div className="space-y-4">
                  <Input 
                    type="text" 
                    placeholder="Họ và tên của bạn"
                    className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg"
                  />
                  <Input 
                    type="tel" 
                    placeholder="Số điện thoại của bạn"
                    className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg"
                  />
                  <Input 
                    type="email" 
                    placeholder="Địa chỉ email của bạn"
                    className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lĩnh vực thực hành</label>
                    <select className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg">
                      <option value="">Chọn lĩnh vực thực hành</option>
                      <option value="tai-nan-xe-hoi">Tai nạn xe hơi</option>
                      <option value="tai-nan-xe-tai">Tai nạn xe tải</option>
                      <option value="truot-nga">Trượt ngã</option>
                      <option value="tu-vong-do-sai-sot">Tử vong do sai sót</option>
                      <option value="chan-thuong-tham-khoc">Chấn thương thảm khốc</option>
                      <option value="can-cho">Cắn chó</option>
                      <option value="lai-xe-say-ruou">Lái xe trong tình trạng say rượu</option>
                      <option value="so-huu-ma-tuy">Sở hữu ma túy</option>
                      <option value="cao-buoc-vu-khi">Cáo buộc về vũ khí</option>
                      <option value="trom-cap-cuop-giat">Trộm cắp/Cướp giật</option>
                      <option value="bao-luc-gia-dinh">Bạo lực gia đình</option>
                      <option value="tan-cong">Tấn công</option>
                      <option value="khong-tiet-lo-xoa-bo">Không tiết lộ/Xóa bỏ</option>
                    </select>
                  </div>
                  <Textarea 
                    placeholder="Mô tả ngắn gọn về vụ án của bạn (tùy chọn)"
                    rows={4}
                    className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent rounded-lg"
                  />
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="agree" className="w-5 h-5 text-law-gold focus:ring-law-gold" />
                    <label htmlFor="agree" className="text-sm text-gray-600">
                      Tôi đồng ý cho SVR Law Firm liên hệ với tôi qua các phương thức liên lạc đã cung cấp trong biểu mẫu này.
                    </label>
                  </div>
                  <Button className="w-full bg-law-gold hover:bg-law-gold-dark text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Yêu Cầu Tư Vấn Miễn Phí
                  </Button>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Thông Tin Liên Hệ</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Sẵn sàng thảo luận về vụ án của bạn? Luật sư có kinh nghiệm của chúng tôi ở đây để cung cấp cho bạn sự hướng dẫn và hỗ trợ mà bạn cần.
                  </p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <MapPin className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">Địa chỉ:</h4>
                      <p className="text-gray-600">2100 West Loop South Suite 1410 Houston, TX 77027</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">E-mail:</h4>
                      <p className="text-gray-600">info@svrlawfirm.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">Điện thoại:</h4>
                      <p className="text-gray-600">(281) 249-9835</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-law-gold to-yellow-600 p-6 rounded-xl text-white">
                  <h4 className="text-xl font-bold mb-4">Tại sao chọn Văn phòng Luật SVR?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Tư vấn miễn phí không ràng buộc</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Không thắng, không phí cho các vụ án chấn thương cá nhân</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Luật sư có kinh nghiệm với kết quả đã được chứng minh</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Có sẵn 24/7 cho các vấn đề khẩn cấp</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Câu Hỏi Thường Gặp
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nhận câu trả lời cho những câu hỏi phổ biến nhất về quy trình tư vấn miễn phí của chúng tôi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Plus className="w-6 h-6 text-law-gold mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">Tôi có thể mong đợi gì trong buổi tư vấn miễn phí?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Trong buổi tư vấn miễn phí, chúng tôi sẽ xem xét chi tiết vụ án của bạn, trả lời bất kỳ câu hỏi nào bạn có thể có và giải thích các lựa chọn pháp lý của bạn. Chúng tôi sẽ đánh giá con đường tốt nhất phía trước và cách chúng tôi có thể giúp bạn đạt được mục tiêu.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Plus className="w-6 h-6 text-law-gold mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">Buổi tư vấn sẽ mất bao lâu?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Buổi tư vấn miễn phí của chúng tôi thường kéo dài từ 30 phút đến một giờ, tùy thuộc vào độ phức tạp của vụ án. Chúng tôi nhằm mục đích cung cấp cho bạn sự hiểu biết rõ ràng về quyền pháp lý của bạn.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Plus className="w-6 h-6 text-law-gold mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">Có bất kỳ nghĩa vụ nào sau buổi tư vấn không?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Không, không có nghĩa vụ nào phải thuê chúng tôi sau buổi tư vấn miễn phí. Chúng tôi cung cấp buổi tư vấn để giúp bạn hiểu các lựa chọn của mình, và hoàn toàn tùy thuộc vào bạn có muốn tiếp tục hay không.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Plus className="w-6 h-6 text-law-gold mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">Bạn sẽ phản hồi nhanh như thế nào?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Chúng tôi thường phản hồi các yêu cầu tư vấn trong vòng 24 giờ, thường sớm hơn nhiều. Đối với các vấn đề khẩn cấp, chúng tôi có sẵn 24/7 qua điện thoại tại (281) 249-9835.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Section - Full Width */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Luật sư Sanah Roopani của Văn phòng Luật SVR</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Người bảo vệ pháp lý đáng tin cậy của bạn với kinh nghiệm rộng rãi trong lĩnh vực luật chấn thương cá nhân và bào chữa hình sự.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Gavel className="w-16 h-16 text-law-gold mx-auto mb-6" />
                <h3 className="text-xl font-bold text-black mb-4">Người Bảo Vệ Có Kinh Nghiệm</h3>
                <p className="text-gray-600 leading-relaxed">Tận tâm bảo vệ quyền lợi của bạn và đảm bảo kết quả tốt nhất có thể</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Shield className="w-16 h-16 text-law-gold mx-auto mb-6" />
                <h3 className="text-xl font-bold text-black mb-4">Không Thắng, Không Phí</h3>
                <p className="text-gray-600 leading-relaxed">Các vụ án chấn thương cá nhân được xử lý theo cơ chế phí tùy thuộc vào kết quả</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Clock className="w-16 h-16 text-law-gold mx-auto mb-6" />
                <h3 className="text-xl font-bold text-black mb-4">Hỗ Trợ 24/7</h3>
                <p className="text-gray-600 leading-relaxed">Có sẵn cho các vấn đề pháp lý khẩn cấp và tư vấn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-law-gold to-yellow-600">
        <div className="w-full px-4 text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Sẵn Sàng Bắt Đầu?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và để chúng tôi giúp bạn hiểu các lựa chọn pháp lý của mình.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:281-249-9835">
                <Button className="bg-white text-law-gold hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-6 h-6 mr-3" />
                  Gọi (281) 249-9835
                </Button>
              </a>
              <Link to="/vietnamese/lien-he">
                <Button className="bg-white text-law-gold hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Gửi Tin Nhắn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VietnameseFreeConsultation; 