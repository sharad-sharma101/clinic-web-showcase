import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UdetiPlatform from "./pages/UdetiPlatform";
import DentalClinicBlue from "./pages/DentalClinicBlue";
import DentalClinicBrown from "./pages/DentalClinicBrown";
import MedicalClinicBlue from "./pages/MedicalClinicBlue";
import MedicalClinicOrange from "./pages/MedicalClinicOrange";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/udeti" element={<UdetiPlatform />} />
          <Route path="/clinic/dental-blue" element={<DentalClinicBlue />} />
          <Route path="/clinic/dental-brown" element={<DentalClinicBrown />} />
          <Route path="/clinic/medical-blue" element={<MedicalClinicBlue />} />
          <Route path="/clinic/medical-orange" element={<MedicalClinicOrange />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
