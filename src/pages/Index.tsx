import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
        <BookingForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
