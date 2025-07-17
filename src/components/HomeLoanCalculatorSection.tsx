import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const HomeLoanCalculatorSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Find out how much home you can afford
            </h2>
            <p className="text-lg text-muted-foreground">
              Estimate your buying power in seconds.
            </p>
          </div>

          {/* Calculator Card - 50% width on desktop, full width on mobile */}
          <div className="lg:w-1/2">
            <Card className="bg-card border border-border/20 shadow-lg rounded-xl">
              <CardContent className="p-6 lg:p-8">
                {/* Zillow Home Loans branding */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                    <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-bold">Z</span>
                    </div>
                    Home Loans
                  </div>
                </div>

                {/* Calculator Fields Grid */}
                <div className="space-y-6">
                  {/* Top Row - Two columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">$ --</div>
                      <div className="text-sm text-muted-foreground">Suggested target price</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        $ --
                        <span className="text-xs align-super ml-1">SM</span>
                      </div>
                      <div className="text-sm text-muted-foreground">BuyAbility</div>
                    </div>
                  </div>

                  {/* Bottom Row - Three columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">$ --</div>
                      <div className="text-sm text-muted-foreground">Mo. payment</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">-- %</div>
                      <div className="text-sm text-muted-foreground">Today's rate</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">-- %</div>
                      <div className="text-sm text-muted-foreground">APR</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg text-lg transition-colors duration-200"
                    size="lg"
                  >
                    Let's get started
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};