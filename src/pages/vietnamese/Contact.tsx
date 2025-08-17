import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const VietnameseContact = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Liên Hệ Chúng Tôi
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Liên hệ với đội ngũ pháp lý có kinh nghiệm của chúng tôi để được tư vấn miễn phí
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tên</label>
                    <Input 
                      type="text" 
                      placeholder="Tên của bạn"
                      className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ</label>
                    <Input 
                      type="text" 
                      placeholder="Họ của bạn"
                      className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="email.cua.ban@example.com"
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Điện Thoại</label>
                  <Input 
                    type="tel" 
                    placeholder="(281) 249-9835"
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lĩnh Vực Thực Hành</label>
                  <select className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent">
                    <option>Chọn lĩnh vực thực hành</option>
                    <option>Chấn Thương Cá Nhân - Tai Nạn Xe Hơi</option>
                    <option>Chấn Thương Cá Nhân - Tai Nạn Xe Tải 18 Bánh</option>
                    <option>Chấn Thương Cá Nhân - Trượt Ngã</option>
                    <option>Chấn Thương Cá Nhân - Tử Vong Do Sai Sót</option>
                    <option>Bào Chữa Hình Sự - Lái Xe Say Rượu</option>
                    <option>Bào Chữa Hình Sự - Sở Hữu Ma Túy</option>
                    <option>Bào Chữa Hình Sự - Bạo Lực Gia Đình</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tin Nhắn</label>
                  <Textarea 
                    placeholder="Hãy cho chúng tôi biết về vụ án của bạn..."
                    rows={5}
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-law-gold focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-law-gold hover:bg-law-gold-dark text-white py-3 text-lg font-semibold">
                  Gửi Tin Nhắn
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Liên Hệ</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Điện Thoại</h3>
                    <p className="text-gray-600">(281) 249-9835</p>
                    <p className="text-sm text-gray-500">Có sẵn 24/7 cho các vấn đề khẩn cấp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Email</h3>
                    <p className="text-gray-600">info@svrlawfirm.com</p>
                    <p className="text-sm text-gray-500">Chúng tôi phản hồi trong vòng 24 giờ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Văn Phòng</h3>
                    <p className="text-gray-600">2100 West Loop South Suite 1510</p>
                    <p className="text-gray-600">Houston, TX 77027</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Giờ Làm Việc</h3>
                    <p className="text-gray-600">Thứ Hai - Thứ Sáu: 9:00 - 17:00</p>
                    <p className="text-gray-600">Thứ Bảy: 9:00 - 17:00</p>
                    <p className="text-gray-600">Chủ Nhật: Đóng cửa</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Hỗ Trợ Pháp Lý Khẩn Cấp</h3>
                <p className="text-red-700 mb-4">
                  Nếu bạn đang đối mặt với tình huống pháp lý khẩn cấp, hãy gọi cho chúng tôi ngay lập tức tại (281) 249-9835. Chúng tôi có sẵn 24/7 cho các vấn đề pháp lý khẩn cấp.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Gọi Ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Thăm Văn Phòng Của Chúng Tôi</h2>
            <p className="text-gray-600">Tọa lạc tại trung tâm Houston, Texas</p>
          </div>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <p className="text-gray-600">Bản Đồ Tương Tác Sắp Có</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-law-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn Sàng Bắt Đầu?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Đừng chờ đợi để nhận được sự hỗ trợ pháp lý mà bạn cần. Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vietnamese/len-lich-tu-van-mien-phi">
              <Button className="bg-white text-law-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                Nhận Tư Vấn Miễn Phí
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

export default VietnameseContact; 