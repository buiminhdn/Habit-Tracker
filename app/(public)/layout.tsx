import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
