import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SalonService, BookingRecord } from './types';
import { SERVICES_DATA } from './data/salonData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [specialNote, setSpecialNote] = useState<string>('');
  const [activeServiceDetail, setActiveServiceDetail] = useState<SalonService | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    scrollToSection('booking');
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToSection('booking');
  };

  const handleBookLook = (lookTitle: string) => {
    setSpecialNote(`Interested in Portfolio Look: ${lookTitle}`);
    scrollToSection('booking');
  };

  const handleOpenServiceDetails = (service: SalonService) => {
    setActiveServiceDetail(service);
  };

  const handleBookingSuccess = (bookingRecord: any) => {
    setConfirmedBooking(bookingRecord);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#1C1B19] font-sans selection:bg-[#C49376]/25 selection:text-[#1C1B19]">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 1. Hero Section (Charcoal Black) */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Our Story Section (Warm Ivory) */}
        <OurStory onExploreServices={handleExploreServices} />

        {/* 3. Services Section: Curated for you (Charcoal Black) */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
          onOpenServiceDetails={handleOpenServiceDetails}
        />

        {/* 4. Why Choose Us (Warm Ivory) */}
        <WhyChooseUs />

        {/* 5. Editorial Gallery Section (Charcoal Black) */}
        <GallerySection onBookLook={handleBookLook} />

        {/* 6. Testimonials Section (Warm Ivory) */}
        <TestimonialsSection />

        {/* 7. Appointment Booking Section (Charcoal Black) */}
        <AppointmentSection
          selectedServiceId={selectedServiceId}
          specialNote={specialNote}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* 8. Contact & Location Section (Warm Ivory) */}
        <ContactSection />
      </main>

      {/* Footer (Deep Charcoal) */}
      <Footer />

      {/* Interactive Floating Shortcuts */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onBookService={(serviceId) => handleSelectServiceForBooking(serviceId)}
      />

      {/* Booking Confirmation Voucher Modal */}
      <BookingConfirmationModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />
    </div>
  );
}
