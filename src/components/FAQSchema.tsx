export const HomepageFAQSchema = () => {
  const faqs = [
    {
      question: "What should I do immediately after a car accident?",
      answer: "Contact a personal injury attorney as soon as possible to protect your rights. Avoid making statements to insurance companies until you've spoken with an attorney."
    },
    {
      question: "How do I know if I have a personal injury case?",
      answer: "If you were injured due to someone else's negligence, you may have a case. Contact us for a free consultation, and we'll provide a detailed assessment of your situation."
    },
    {
      question: "How much does it cost to hire an attorney for a personal injury or criminal defense case?",
      answer: "For personal injury cases, we work on a contingency fee basis, meaning you don't pay unless we win. For criminal defense, costs vary depending on case complexity, but we offer flexible payment plans and an initial free consultation."
    },
    {
      question: "What types of personal injury cases do you handle?",
      answer: "We handle car accidents, truck accidents, slip and fall, wrongful death, catastrophic injury, and dog bite cases throughout Texas."
    },
    {
      question: "What criminal defense services do you provide?",
      answer: "We provide defense for DWI/DUI, drug possession, domestic violence, assault, weapon cases, theft and robbery, and non-disclosure expunctions."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free consultations for all personal injury and criminal defense cases. Contact us today to schedule your free consultation."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const VietnameseFAQSchema = () => {
  const faqs = [
    {
      question: "Tôi nên làm gì ngay lập tức sau một vụ tai nạn ô tô?",
      answer: "Liên hệ với một luật sư về tai nạn cá nhân ngay khi có thể để bảo vệ quyền lợi của bạn. Tránh phát biểu với các công ty bảo hiểm cho đến khi bạn đã nói chuyện với một luật sư."
    },
    {
      question: "Làm thế nào để tôi biết nếu tôi có một vụ kiện về tai nạn cá nhân?",
      answer: "Nếu bạn bị thương do sự bất cẩn của người khác, bạn có thể có một vụ kiện. Liên hệ với chúng tôi để được tư vấn miễn phí, và chúng tôi sẽ đánh giá chi tiết về tình huống của bạn."
    },
    {
      question: "Chi phí để thuê một luật sư cho vụ kiện về tai nạn cá nhân hoặc biện hộ hình sự là bao nhiêu?",
      answer: "Đối với các vụ kiện về tai nạn cá nhân, chúng tôi làm việc theo cơ sở phí hoa hồng, có nghĩa là bạn không phải trả tiền trừ khi chúng tôi thắng. Đối với biện hộ hình sự, chi phí khác nhau tùy thuộc vào độ phức tạp của vụ án, nhưng chúng tôi cung cấp các kế hoạch thanh toán linh hoạt và một buổi tư vấn ban đầu miễn phí."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}; 