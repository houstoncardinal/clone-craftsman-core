import { ArrowRight } from "lucide-react";

const VietnamesePracticeAreasOverview = () => {
  return (
    <section id="practice-areas-overview" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Injury Law */}
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Luật Chấn Thương Cá Nhân</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Chúng tôi bảo vệ cho những cá nhân bị thương do sự cẩu thả hoặc hành vi cố ý của người khác. Các luật sư có kinh nghiệm của chúng tôi xử lý nhiều loại vụ án chấn thương cá nhân bao gồm tai nạn xe hơi, tai nạn xe tải, tai nạn trượt ngã, sơ suất y tế, và nhiều hơn nữa. Chúng tôi chiến đấu để đảm bảo bạn nhận được khoản bồi thường xứng đáng cho chấn thương, chi phí y tế, mất lương, và đau đớn và khổ sở.
            </p>
            <div className="flex justify-end">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Criminal Defense Law */}
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Luật Bảo Chữa Hình Sự</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nếu bạn đang đối mặt với cáo buộc hình sự, bạn cần sự đại diện pháp lý có kinh nghiệm. Các luật sư bảo chữa hình sự của chúng tôi cung cấp sự đại diện chiến lược cho tất cả các loại cáo buộc hình sự bao gồm lái xe khi say rượu, tội phạm ma túy, tấn công, bạo lực gia đình, trộm cắp, và nhiều hơn nữa. Chúng tôi làm việc không mệt mỏi để bảo vệ quyền lợi của bạn và đạt được kết quả tốt nhất có thể cho vụ án của bạn.
            </p>
            <div className="flex justify-end">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VietnamesePracticeAreasOverview; 