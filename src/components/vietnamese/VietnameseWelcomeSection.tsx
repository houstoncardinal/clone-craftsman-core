import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VietnameseWelcomeSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-gray-400 mb-2 tracking-wider">
              CHÀO MỪNG ĐẾN VĂN PHÒNG LUẬT SVR
            </p>
            <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
              Đại Diện Pháp Lý Có Kinh Nghiệm<br />
              Mà Bạn Có Thể Tin Tưởng
            </h2>
          </div>
          
          {/* Right Content */}
          <div className="text-black">
            <p className="mb-6 leading-relaxed">
              Tại Văn Phòng Luật SVR, chúng tôi tập trung vào việc cung cấp các chiến lược pháp lý được tùy chỉnh cho <u>nạn nhân chấn thương cá nhân</u> và <u>cá nhân đối mặt với cáo buộc hình sự</u> tại Houston hoặc bất kỳ đâu trong tiểu bang Texas. Với nhiều năm kinh nghiệm xét xử và cam kết đạt được kết quả tốt nhất có thể, chúng tôi đã có được danh tiếng về sự xuất sắc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link to="/vietnamese/about">
                <Button className="bg-law-gold hover:bg-law-gold-dark text-white px-6 py-3 font-semibold">
                  VỀ CHÚNG TÔI
                </Button>
              </Link>
              <Link to="/vietnamese/linh-vuc-thuc-hanh">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-6 py-3 font-semibold">
                  LĨNH VỰC THỰC HÀNH
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Xin lưu ý, phần dưới đây là bản xem trước chung về một số lĩnh vực thực hành của chúng tôi. <Link to="/vietnamese/linh-vuc-thuc-hanh" className="underline hover:text-law-gold">Nhấp vào đây</Link> để xem trang lĩnh vực thực hành đầy đủ của chúng tôi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VietnameseWelcomeSection; 