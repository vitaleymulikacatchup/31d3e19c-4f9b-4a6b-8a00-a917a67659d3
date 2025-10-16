use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { PieChart, Cloud } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-bg", "url": "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Light bulb laying on chalkboard with drawn thought bubble, symbolizing creative ideas." },
  { "id": "feature-1", "url": "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk." },
  { "id": "feature-2", "url": "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Detailed image of a server rack with glowing lights in a modern data center." },
  { "id": "team-member", "url": "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight." },
  { "id": "testimonial-bg", "url": "https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Woman enjoying remote work at a café, using a laptop and smartphone." },
  { "id": "contact-bg", "url": "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman working at a desk using a laptop and smartphone, exemplifying remote work." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          brandName="SaaSApp"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to SaaSApp"
            description="Revolutionizing your workflow with cutting-edge technology."
            buttons={[
              { text: "Get Started", href: "features" },
              { text: "Learn More", href: "about" }
            ]}
            imageSrc={assetMap.find(a => a.id === 'hero-bg')?.url ?? '/public/images/placeholder.webp'}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Empowering teams to innovate with ease."
            buttons={[
              { text: "Our Story", href: "about" }
            ]}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Advanced Analytics", description: "Gain insights with our analytics tools.", icon: PieChart },
              { title: "Cloud Solutions", description: "Secure and scalable cloud infrastructure.", icon: Cloud }
            ]}
          />
        </div>
      </div>

      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardTwo
            title="Choose Your Plan"
            plans={[
              { id: "basic", badge: "Best Value", price: "$19/mo", subtitle: "For small teams", features: ["10 users", "Basic support", "100GB storage"], buttons: [{ text: "Subscribe", href: "https://example.com" }, { text: "Contact Sales", href: "contact" }] },
              { id: "premium", badge: "Most Popular", price: "$49/mo", subtitle: "For growing teams", features: ["Unlimited users", "Priority support", "1TB storage"], buttons: [{ text: "Subscribe", href: "https://example.com" }, { text: "Contact Sales", href: "contact" }] }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "Alex Johnson", role: "CEO, TechCorp", testimonial: "SaaSApp transformed our business operations." },
              { id: "2", name: "Maria Lee", role: "Product Manager, InnovateX", testimonial: "A seamless experience with great results." }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Join Us"
            title="Stay Connected with SaaSApp"
            description="Subscribe to our newsletter for updates and insights."
            inputPlaceholder="Enter your email"
            buttonText="Subscribe"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            logoText="SaaSApp"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
