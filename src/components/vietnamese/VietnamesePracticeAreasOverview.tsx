import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VietnamesePracticeAreasOverview = () => {
  return (
    <section id="practice-areas-overview" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Injury Law */}
          <Link to="/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan" className="text-white hover:text-law-gold transition-colors group">
            <div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-law-gold transition-colors">Luật Chấn Thương Cá Nhân</h2>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                Chúng tôi bảo vệ cho những cá nhân bị thương do sự cẩu thả hoặc hành vi cố ý của người khác. Luật sư có kinh nghiệm của chúng tôi xử lý nhiều loại vụ án chấn thương cá nhân bao gồm tai nạn xe hơi, tai nạn xe tải, tai nạn trượt ngã, sơ suất y tế, và nhiều hơn nữa. Chúng tôi chiến đấu để đảm bảo bạn nhận được khoản bồi thường xứng đáng cho chấn thương, chi phí y tế, mất lương, và đau đớn và khổ sở.
              </p>
              <div className="flex justify-end">
                <ArrowRight className="w-6 h-6 text-white group-hover:text-law-gold group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </Link>

          {/* Criminal Defense Law */}
          <Link to="/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su" className="text-white hover:text-law-gold transition-colors group">
            <div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-law-gold transition-colors">Luật Bảo Chữa Hình Sự</h2>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                Nếu bạn đang đối mặt với cáo buộc hình sự, bạn cần sự đại diện pháp lý có kinh nghiệm. Luật sư bảo chữa hình sự của chúng tôi cung cấp sự đại diện chiến lược cho tất cả các loại cáo buộc hình sự bao gồm lái xe khi say rượu, tội phạm ma túy, tấn công, bạo lực gia đình, trộm cắp, và nhiều hơn nữa. Chúng tôi làm việc không mệt mỏi để bảo vệ quyền lợi của bạn và đạt được kết quả tốt nhất có thể cho vụ án của bạn.
              </p>
              <div className="flex justify-end">
                <ArrowRight className="w-6 h-6 text-white group-hover:text-law-gold group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VietnamesePracticeAreasOverview; 