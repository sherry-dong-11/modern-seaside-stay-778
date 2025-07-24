import { useLanguage } from "@/contexts/LanguageContext";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeInSection from "@/components/FadeInSection";
import { useState, useEffect } from "react";
import { ChevronUp, HelpCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <ModernNavbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.contact.faq}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.contact.faqSubtitle}
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                <div className="grid gap-4">
                  {Object.values(t.contact.questions).map((faq, index) => (
                    <FadeInSection key={index} delay={0.1 * index}>
                      <AccordionItem 
                        value={`item-${index}`}
                        className="border border-border rounded-xl px-6 bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary group">
                          <div className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-primary mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2 ml-8">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </FadeInSection>
                  ))}
                </div>
              </Accordion>
            </FadeInSection>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection delay={0.4}>
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our friendly team is here to help you with any questions about our accommodations and services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <a href="/contact">
                      Contact Us
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="text-base" asChild>
                    <a href="tel:+39-123-456-789">
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Back to Top Button */}
        {showBackToTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            size="icon"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        )}
      </main>
      
      <ModernFooter />
    </div>
  );
}