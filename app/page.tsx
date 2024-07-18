import Testimonials from "./components/shared/testimonials";
import Clients from "./components/shared/clients";
import Team from "./components/team";
import { testimonialsData, faqData } from "./utils/data";
import Faq from "./components/shared/faq";
import Services from "./components/services";
import HeroHome from "./components/home/hero";
import AboutUs from "./components/home/about-us";
import ContactForm from "./components/shared/contact-form";

export default function Home() {
  return (
    <>
      <HeroHome />
      <AboutUs />
      <Services />
      <Clients />
      <Team />
      <Testimonials testimonials={testimonialsData} />
      <Faq faqs={faqData} />

      <section
        id="contact"
        className="bg-swirls bg-cover bg-no-repeat py-20 lg:py-[7.063rem]"
      >
        <ContactForm />
      </section>
    </>
  );
}
