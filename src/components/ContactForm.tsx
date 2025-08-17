import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, Clock, AlertCircle, CheckCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().min(10, "Please provide a brief description of your case"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const practiceAreas = [
  { value: "car-accidents", label: "Car Accidents" },
  { value: "truck-accidents", label: "18-Wheeler Accidents" },
  { value: "slip-fall", label: "Slip and Fall" },
  { value: "wrongful-death", label: "Wrongful Death" },
  { value: "dwi-dui", label: "DWI/DUI" },
  { value: "domestic-violence", label: "Domestic Violence" },
  { value: "drug-possession", label: "Drug Possession" },
  { value: "weapon-cases", label: "Weapon Cases" },
  { value: "theft-robbery", label: "Theft & Robbery" },
  { value: "assault", label: "Assault" },
  { value: "dog-bites", label: "Dog Bites" },
  { value: "catastrophic-injury", label: "Catastrophic Injury" },
  { value: "non-disclosure-expunctions", label: "Non-Disclosure & Expunctions" },
  { value: "other", label: "Other" },
];



interface ContactFormProps {
  language?: "en" | "vi";
}

export const ContactForm = ({ language = "en" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isVietnamese = language === "vi";

  if (submitStatus === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          {isVietnamese ? "Tin Nhắn Đã Gửi Thành Công!" : "Message Sent Successfully!"}
        </h3>
        <p className="text-green-700 mb-4">
          {isVietnamese 
            ? "Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ. Cảm ơn bạn đã tin tưởng SVR Law Firm."
            : "We will contact you within 24 hours. Thank you for trusting SVR Law Firm."
          }
        </p>
        <Button 
          onClick={() => setSubmitStatus("idle")}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          {isVietnamese ? "Gửi Tin Nhắn Khác" : "Send Another Message"}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">
          {isVietnamese ? "Gửi Tin Nhắn Cho Chúng Tôi" : "Send Us a Message"}
        </h2>
        <p className="text-gray-600">
          {isVietnamese 
            ? "Điền vào biểu mẫu bên dưới và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ."
            : "Fill out the form below and we'll contact you within 24 hours."
          }
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isVietnamese ? "Họ Tên" : "Full Name"} *
            </label>
            <Input
              {...register("name")}
              placeholder={isVietnamese ? "Họ tên của bạn" : "Your full name"}
              className={`w-full ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder={isVietnamese ? "email.cua.ban@example.com" : "your.email@example.com"}
              className={`w-full ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone and Practice Area - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isVietnamese ? "Điện Thoại" : "Phone Number"} *
            </label>
            <Input
              {...register("phone")}
              type="tel"
              placeholder="(281) 249-9835"
              className={`w-full ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isVietnamese ? "Lĩnh Vực Thực Hành" : "Practice Area"} *
            </label>
            <Select onValueChange={(value) => setValue("practiceArea", value)}>
              <SelectTrigger className={`w-full ${errors.practiceArea ? "border-red-500" : ""}`}>
                <SelectValue placeholder={isVietnamese ? "Chọn lĩnh vực thực hành" : "Select a practice area"} />
              </SelectTrigger>
              <SelectContent>
                {practiceAreas.map((area) => (
                  <SelectItem key={area.value} value={area.value}>
                    {area.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.practiceArea && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.practiceArea.message}
              </p>
            )}
          </div>
        </div>

        {/* Message - Full Width */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isVietnamese ? "Mô Tả Vụ Án" : "Case Description"} *
          </label>
          <Textarea
            {...register("message")}
            placeholder={isVietnamese 
              ? "Hãy mô tả ngắn gọn về vụ án của bạn..."
              : "Please briefly describe your case..."
            }
            rows={4}
            className={`w-full ${errors.message ? "border-red-500" : ""}`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Terms Agreement */}
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={watch("agreeToTerms")}
            onCheckedChange={(checked) => setValue("agreeToTerms", checked as boolean)}
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            {isVietnamese 
              ? "Tôi đồng ý cho SVR Law Firm liên hệ với tôi qua các phương thức liên lạc đã cung cấp trong biểu mẫu này."
              : "I agree for SVR Law Firm to contact me at the provided contact methods in my form submission."
            } *
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.agreeToTerms.message}
          </p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-law-gold hover:bg-law-gold-dark text-white py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              {isVietnamese ? "Đang Gửi..." : "Sending..."}
            </div>
          ) : (
            isVietnamese ? "Gửi Tin Nhắn" : "Send Message"
          )}
        </Button>

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {isVietnamese 
                ? "Có lỗi xảy ra. Vui lòng thử lại hoặc gọi cho chúng tôi trực tiếp."
                : "An error occurred. Please try again or call us directly."
              }
            </p>
          </div>
        )}
      </form>
    </div>
  );
}; 