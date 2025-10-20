"use client"
const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Warm and inviting Italian cafe with a variety of pizzas and drinks displayed on a counter." }
];

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/brand/logowhite.svg"
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Pizzeria"
            description="Experience the finest pizzas crafted with love."
            imageSrc="https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "View Menu", href: "menu" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Fresh Ingredients", description: "Only the freshest local ingredients." },
              { title: "Authentic Recipes", description: "Inspired by traditional Italian cuisine." }
            ]}
            imageSrc="https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Margherita Pizza", price: "$12", imageSrc: "/product-1.jpg" },
              { id: "2", name: "Pepperoni Pizza", price: "$15", imageSrc: "/product-2.jpg" },
              { id: "3", name: "Veggie Delight", price: "$13", imageSrc: "/product-3.jpg" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "Emily R.", role: "Food Blogger", testimonial: "Best pizza in town! Loved the ambiance and the service.", icon: "Package" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="We're here for you"
            description="Contact us for reservations or inquiries."
            inputPlaceholder="Your email address"
            buttonText="Send Message"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "About", href: "about" }] },
              { items: [{ label: "Menu", href: "menu" }] }
            ]}
            logoText="Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
