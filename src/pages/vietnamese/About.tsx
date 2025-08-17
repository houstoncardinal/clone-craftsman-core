import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Shield, Clock, GraduationCap, Gavel, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const VietnameseAbout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Về Văn Phòng Luật SVR
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Luật sư xét xử đáng tin cậy của bạn tại Texas với thành tích đã được chứng minh
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Đại Diện Pháp Lý Có Kinh Nghiệm Mà Bạn Có Thể Tin Tưởng
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tại Văn Phòng Luật SVR, chúng tôi tập trung vào việc cung cấp các chiến lược pháp lý được tùy chỉnh cho nạn nhân chấn thương cá nhân và cá nhân đối mặt với cáo buộc hình sự tại Houston hoặc bất kỳ đâu trong tiểu bang Texas. Với nhiều năm kinh nghiệm xét xử và cam kết đạt được kết quả tốt nhất có thể, văn phòng của chúng tôi đã có được danh tiếng về sự xuất sắc.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Đội ngũ luật sư có kinh nghiệm của chúng tôi hiểu rõ sự phức tạp của cả các vụ kiện chấn thương cá nhân và bào chữa hình sự. Chúng tôi làm việc không mệt mỏi để bảo vệ quyền lợi của bạn và đảm bảo khoản bồi thường hoặc kết quả mà bạn xứng đáng.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/vietnamese/linh-vuc-thuc-hanh">
                  <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                    Lĩnh Vực Thực Hành
                  </Button>
                </Link>
                <Link to="/vietnamese/lien-he">
                  <Button variant="outline" className="border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-white px-6 py-3 font-semibold">
                    Liên Hệ Chúng Tôi
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Tại Sao Chọn Văn Phòng Luật SVR?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Thành Tích Đã Được Chứng Minh</h4>
                    <p className="text-gray-600">Đã đại diện thành công cho hàng nghìn khách hàng trên toàn Texas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Phương Pháp Tập Trung Vào Khách Hàng</h4>
                    <p className="text-gray-600">Sự chú ý cá nhân và đại diện tận tâm cho mọi khách hàng</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Không Thắng, Không Phí</h4>
                    <p className="text-gray-600">Các vụ kiện chấn thương cá nhân được xử lý theo cơ chế phí tùy thuộc kết quả</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black mb-2">Hỗ Trợ 24/7</h4>
                    <p className="text-gray-600">Hỗ trợ suốt ngày đêm cho các vấn đề pháp lý khẩn cấp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Bio Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Gặp Gỡ Luật Sư Chính Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sanah Roopani mang đến kinh nghiệm xét xử sâu rộng và cam kết sâu sắc với việc bảo vệ quyền lợi khách hàng
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Attorney Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <img 
                  src="/sanah.jpg" 
                  alt="Sanah Roopani"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
                <div className="absolute inset-0 border-4 border-law-gold opacity-20"></div>
              </div>
            </div>
            
            {/* Attorney Bio */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Sanah Roopani
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sanah Roopani tự hào tốt nghiệp từ Đại học Texas và Trung tâm Luật Đại học Houston, nơi cô khám phá ra niềm đam mê bảo vệ quyền lợi khách hàng tại tòa án. Trong thời gian học luật, Sanah đã làm thực tập sinh tư pháp cho Thẩm phán Jeff Bohm của Tòa Phá sản Hoa Kỳ cho Quận Nam Texas. Cô cũng có được kinh nghiệm quý báu khi làm việc với một văn phòng luật chấn thương cá nhân và thực tập tại Văn phòng Công tố Quận Harris. Niềm đam mê về kiện tụng của cô được củng cố thêm khi cô quan sát một phiên tòa về Tấn công Tình dục Liên tục với một văn phòng bào chữa hình sự địa phương.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Để nâng cao kinh nghiệm xét xử, Sanah đã làm việc tại Văn phòng Công tố Quận Fort Bend sau khi tốt nghiệp trường luật. Là một công tố viên, cô quản lý khối lượng công việc từ 200 đến 250 vụ án cùng lúc, thu nhận các kỹ năng xét xử cần thiết. Những kinh nghiệm trước đây của cô đã cung cấp cho cô những hiểu biết quý báu về những nguyên tắc cơ bản của hệ thống tư pháp hình sự, và cô cam kết bảo vệ không mệt mỏi cho khách hàng của mình.
              </p>
              
              {/* Key Experience Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <GraduationCap className="w-8 h-8 text-law-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black mb-1">Học Vấn</h4>
                  <p className="text-sm text-gray-600">Đại học Texas & Trung tâm Luật UH</p>
                </div>
                <div className="text-center">
                  <Gavel className="w-8 h-8 text-law-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black mb-1">Kinh Nghiệm Xét Xử</h4>
                  <p className="text-sm text-gray-600">200+ Vụ Án Làm Công Tố Viên</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-8 h-8 text-law-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black mb-1">Chuyên Môn</h4>
                  <p className="text-sm text-gray-600">Chấn Thương Cá Nhân & Bào Chữa Hình Sự</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Cung cấp đại diện pháp lý xuất sắc với sự liêm chính, tận tâm và cam kết đạt được kết quả tốt nhất có thể cho khách hàng của chúng tôi. Chúng tôi tin rằng mọi người đều xứng đáng được tiếp cận đại diện pháp lý chất lượng, bất kể hoàn cảnh của họ.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-law-gold mb-2">Chấn Thương Cá Nhân</div>
                <p className="text-gray-600">Đấu tranh cho nạn nhân tai nạn để đòi bồi thường công bằng</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-law-gold mb-2">Bào Chữa Hình Sự</div>
                <p className="text-gray-600">Bảo vệ quyền lợi và tự do của bạn trong các vụ án hình sự</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-law-gold mb-2">Bảo Vệ Khách Hàng</div>
                <p className="text-gray-600">Tận tâm với thành công và hạnh phúc của bạn</p>
              </div>
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
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí. Hãy để chúng tôi giúp bạn hiểu các lựa chọn pháp lý của mình và đấu tranh cho quyền lợi của bạn.
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

export default VietnameseAbout; 