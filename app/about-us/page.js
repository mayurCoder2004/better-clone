// app/about-us/page.tsx or page.js

import AboutUsSection from "../components/about-us-components/AboutUsSection";
import ChangingThingsSection from "../components/about-us-components/ChangingThingsSection";
import RelatedPostsSection from "../components/about-us-components/RelatedPostsSection";
import StatusQuoSection from "../components/about-us-components/StatusQuoSection";
import TimelineSection from "../components/about-us-components/TimelineSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
