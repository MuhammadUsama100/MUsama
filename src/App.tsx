import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Publications from "./pages/Publications";
import PublicationDetail from "./pages/PublicationDetail";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blogs from "./pages/Blogs";
import Education from "./pages/Education";
import Collaborate from "./pages/Collaborate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename="/MUsama">
        <Toaster />
        <Sonner />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/publications/:id" element={<PublicationDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/articles" element={<Blogs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
