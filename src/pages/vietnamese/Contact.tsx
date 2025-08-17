import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";

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
            <ContactForm language="vi" />

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Liên Hệ</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Điện Thoại</h3>
                    <p className="text-gray-600">(281) 249-9835</p>
                    <p className="text-sm text-gray-500">Có sẵn cho các vấn đề khẩn cấp</p>
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
                    <p className="text-gray-600">2100 West Loop South Suite 1410</p>
                    <p className="text-gray-600">Houston, TX 77027</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black mb-2">Giờ Làm Việc</h3>
                    <p className="text-gray-600">Thứ Hai - Thứ Sáu: 9:00 - 17:00</p>
                    <p className="text-gray-600">Thứ Bảy: Đóng cửa</p>
                    <p className="text-gray-600">Chủ Nhật: Đóng cửa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-law-gold mt-1 flex-shrink-0 flex items-center justify-center">
                    <span className="text-lg font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Thông Tin Luật Sư</h3>
                    <p className="text-gray-600">Sanah Roopani</p>
                    <p className="text-law-gold font-semibold">Texas Bar Card #24116990</p>
                  </div>
                </div>
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
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-law-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4681.9409992016335!2d-95.4581196!3d29.7459615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e925b06e982b%3A0x91549cda5cdc8e38!2sSVR%20Law!5e1!3m2!1sen!2sus!4v1755435050015!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SVR Law Firm Location"
                className="w-full"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://maps.app.goo.gl/CTcKGeaSFdNFLBBL7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-law-gold hover:text-law-gold-dark font-semibold transition-colors duration-200"
              >
                <MapPin className="w-5 h-5" />
                <span>Mở trong Google Maps</span>
              </a>
            </div>
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