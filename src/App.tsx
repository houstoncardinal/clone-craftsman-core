import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TranslationProvider } from "./contexts/TranslationContext";
import ScrollToTop from "./components/ScrollToTop";
import { preloadCriticalImages } from "./components/ImageOptimizer";
import Index from "./pages/Index";
import PracticeAreas from "./pages/PracticeAreas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FreeConsultation from "./pages/FreeConsultation";
import PersonalInjury from "./pages/practice-areas/PersonalInjury";
import CriminalDefense from "./pages/practice-areas/CriminalDefense";
import CarAccidents from "./pages/practice-areas/CarAccidents";
import TruckAccidents from "./pages/practice-areas/TruckAccidents";
import SlipFall from "./pages/practice-areas/SlipFall";
import WrongfulDeath from "./pages/practice-areas/WrongfulDeath";
import CatastrophicInjury from "./pages/practice-areas/CatastrophicInjury";
import DogBites from "./pages/practice-areas/DogBites";
import DWIDUI from "./pages/practice-areas/DWIDUI";
import DrugPossession from "./pages/practice-areas/DrugPossession";
import WeaponCases from "./pages/practice-areas/WeaponCases";
import TheftRobbery from "./pages/practice-areas/TheftRobbery";
import DomesticViolence from "./pages/practice-areas/DomesticViolence";
import Assault from "./pages/practice-areas/Assault";
import NonDisclosureExpunctions from "./pages/practice-areas/NonDisclosureExpunctions";
import VietnameseIndex from "./pages/vietnamese/Index";
import VietnamesePracticeAreas from "./pages/vietnamese/PracticeAreas";
import VietnamesePersonalInjury from "./pages/vietnamese/PersonalInjury";
import VietnameseCriminalDefense from "./pages/vietnamese/CriminalDefense";
import VietnameseFreeConsultation from "./pages/vietnamese/FreeConsultation";
import VietnameseAbout from "./pages/vietnamese/About";
import VietnameseContact from "./pages/vietnamese/Contact";
import VietnameseTaiNanXeHoi from "./pages/vietnamese/practice-areas/TaiNanXeHoi";
import VietnameseTaiNanXeTai from "./pages/vietnamese/practice-areas/TaiNanXeTai";
import VietnameseTruotNga from "./pages/vietnamese/practice-areas/TruotNga";
import VietnameseTuVongDoSaiSot from "./pages/vietnamese/practice-areas/TuVongDoSaiSot";
import VietnameseChanThuongThamKhoc from "./pages/vietnamese/practice-areas/ChanThuongThamKhoc";
import VietnameseCanCho from "./pages/vietnamese/practice-areas/CanCho";
import VietnameseLaiXeSayRuou from "./pages/vietnamese/practice-areas/LaiXeSayRuou";
import VietnameseSoHuuMaTuy from "./pages/vietnamese/practice-areas/SoHuuMaTuy";
import VietnameseCaoBuocVuKhi from "./pages/vietnamese/practice-areas/CaoBuocVuKhi";
import VietnameseTromCapCuopGiat from "./pages/vietnamese/practice-areas/TromCapCuopGiat";
import VietnameseBaoLucGiaDinh from "./pages/vietnamese/practice-areas/BaoLucGiaDinh";
import VietnameseTanCong from "./pages/vietnamese/practice-areas/TanCong";
import VietnameseKhongTietLoXoaBo from "./pages/vietnamese/practice-areas/KhongTietLoXoaBo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Preload critical images on app start
  useEffect(() => {
    preloadCriticalImages();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <TranslationProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
            <Routes>
          {/* English Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          
          {/* Practice Area Sub-pages */}
          <Route path="/practice-areas/personal-injury" element={<PersonalInjury />} />
          <Route path="/practice-areas/criminal-defense" element={<CriminalDefense />} />
          
          {/* Individual Personal Injury Practice Areas */}
          <Route path="/practice-areas/car-accidents" element={<CarAccidents />} />
          <Route path="/practice-areas/truck-accidents" element={<TruckAccidents />} />
          <Route path="/practice-areas/slip-fall" element={<SlipFall />} />
          <Route path="/practice-areas/wrongful-death" element={<WrongfulDeath />} />
          <Route path="/practice-areas/catastrophic-injury" element={<CatastrophicInjury />} />
          <Route path="/practice-areas/dog-bites" element={<DogBites />} />
          
                           {/* Individual Criminal Defense Practice Areas */}
                 <Route path="/practice-areas/dwi-dui" element={<DWIDUI />} />
                 <Route path="/practice-areas/drug-possession" element={<DrugPossession />} />
                 <Route path="/practice-areas/weapon-cases" element={<WeaponCases />} />
                 <Route path="/practice-areas/theft-robbery" element={<TheftRobbery />} />
                 <Route path="/practice-areas/domestic-violence" element={<DomesticViolence />} />
                 <Route path="/practice-areas/assault" element={<Assault />} />
                 <Route path="/practice-areas/non-disclosure-expunctions" element={<NonDisclosureExpunctions />} />
          
          {/* Vietnamese Routes */}
          <Route path="/vietnamese" element={<VietnameseIndex />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh" element={<VietnamesePracticeAreas />} />
          <Route path="/vietnamese/ve-chung-toi" element={<VietnameseAbout />} />
          <Route path="/vietnamese/lien-he" element={<VietnameseContact />} />
          <Route path="/vietnamese/len-lich-tu-van-mien-phi" element={<VietnameseFreeConsultation />} />
          
          {/* Vietnamese Practice Area Sub-pages */}
          <Route path="/vietnamese/linh-vuc-thuc-hanh/chan-thuong-ca-nhan" element={<VietnamesePersonalInjury />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/bao-chua-hinh-su" element={<VietnameseCriminalDefense />} />
          
          {/* Vietnamese Individual Personal Injury Practice Areas */}
          <Route path="/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-hoi" element={<VietnameseTaiNanXeHoi />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/tai-nan-xe-tai" element={<VietnameseTaiNanXeTai />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/truot-nga" element={<VietnameseTruotNga />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/tu-vong-do-sai-sot" element={<VietnameseTuVongDoSaiSot />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/chan-thuong-tham-khoc" element={<VietnameseChanThuongThamKhoc />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/can-cho" element={<VietnameseCanCho />} />
          
          {/* Vietnamese Individual Criminal Defense Practice Areas */}
          <Route path="/vietnamese/linh-vuc-thuc-hanh/lai-xe-say-ruou" element={<VietnameseLaiXeSayRuou />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/so-huu-ma-tuy" element={<VietnameseSoHuuMaTuy />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/cao-buoc-vu-khi" element={<VietnameseCaoBuocVuKhi />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/trom-cap-cuop-giat" element={<VietnameseTromCapCuopGiat />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/bao-luc-gia-dinh" element={<VietnameseBaoLucGiaDinh />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/tan-cong" element={<VietnameseTanCong />} />
          <Route path="/vietnamese/linh-vuc-thuc-hanh/khong-tiet-lo-xoa-bo" element={<VietnameseKhongTietLoXoaBo />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
        </TranslationProvider>
    </TooltipProvider>
        </HelmetProvider>
  </QueryClientProvider>
  );
};

export default App;
