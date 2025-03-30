
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eagerly load the index page for faster initial loading
import Index from "@/pages/index";

// Lazy load all other pages
const WorkerDetails = lazy(() => import("@/pages/WorkerDetails"));
const Company = lazy(() => import("@/pages/Company"));
const UseCases = lazy(() => import("@/pages/UseCases"));
const Integrations = lazy(() => import("@/pages/Integrations"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const AcceptableUsePolicy = lazy(() => import("@/pages/AcceptableUsePolicy"));
const LeadQualification = lazy(() => import("@/pages/use-cases/LeadQualification"));
const CustomerSupport = lazy(() => import("@/pages/use-cases/CustomerSupport"));
const Receptionists = lazy(() => import("@/pages/use-cases/Receptionists"));
const DispatchService = lazy(() => import("@/pages/use-cases/DispatchService"));

// Loading component for suspense fallback
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          {/* Eagerly loaded route */}
          <Route path="/" element={<Index />} />
          
          {/* Lazy loaded routes */}
          <Route path="/workers/:workerId" element={
            <Suspense fallback={<PageLoading />}>
              <WorkerDetails />
            </Suspense>
          } />
          <Route path="/company" element={
            <Suspense fallback={<PageLoading />}>
              <Company />
            </Suspense>
          } />
          <Route path="/integrations" element={
            <Suspense fallback={<PageLoading />}>
              <Integrations />
            </Suspense>
          } />
          <Route path="/use-cases" element={
            <Suspense fallback={<PageLoading />}>
              <UseCases />
            </Suspense>
          } />
          <Route path="/use-cases/lead-qualification" element={
            <Suspense fallback={<PageLoading />}>
              <LeadQualification />
            </Suspense>
          } />
          <Route path="/use-cases/customer-support" element={
            <Suspense fallback={<PageLoading />}>
              <CustomerSupport />
            </Suspense>
          } />
          <Route path="/use-cases/receptionists" element={
            <Suspense fallback={<PageLoading />}>
              <Receptionists />
            </Suspense>
          } />
          <Route path="/use-cases/dispatch-service" element={
            <Suspense fallback={<PageLoading />}>
              <DispatchService />
            </Suspense>
          } />
          <Route path="/terms" element={
            <Suspense fallback={<PageLoading />}>
              <TermsOfService />
            </Suspense>
          } />
          <Route path="/privacy" element={
            <Suspense fallback={<PageLoading />}>
              <PrivacyPolicy />
            </Suspense>
          } />
          <Route path="/acceptable-use" element={
            <Suspense fallback={<PageLoading />}>
              <AcceptableUsePolicy />
            </Suspense>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
