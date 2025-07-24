import { useLanguage } from "@/contexts/LanguageContext";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeInSection from "@/components/FadeInSection";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <ModernNavbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
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
              <Accordion type="single" collapsible className="w-full space-y-4">
                {Object.values(t.contact.questions).map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInSection>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection delay={0.4}>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our friendly team is here to help you with any questions about our accommodations and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="tel:+39-123-456-789" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Call Now
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      
      <ModernFooter />
    </div>
  );
}