import AboutUsSection from "../components/about-us-components/AboutUsSection";
import ChangingThingsSection from "../components/about-us-components/ChangingThingsSection";
import RelatedPostsSection from "../components/about-us-components/RelatedPostsSection";
import StatusQuoSection from "../components/about-us-components/StatusQuoSection";
import TimelineSection from "../components/about-us-components/TimelineSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Our Company | Better Mortgage",
  icons: {
    icon: "/betterdotcom_logo.jpeg",
  },
};

export default function AboutUsPage() {
  return (
    <main>
      <Navbar theme="light" />
      <AboutUsSection />
      <StatusQuoSection />
      <ChangingThingsSection />
      <TimelineSection />
      <RelatedPostsSection />
      <Footer />
    </main>
  );
}
