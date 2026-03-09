import { Shield, Leaf, Moon, Heart, Droplets, Zap } from "lucide-react";

const benefits = [
{ icon: Shield, title: "Prostate Health", desc: "Supports normal prostate function and healthy urinary flow." },
{ icon: Leaf, title: "Natural Ingredients", desc: "Formulated with clinically-studied botanical extracts." },
{ icon: Moon, title: "Restful Nights", desc: "Helps reduce nighttime bathroom trips for better sleep." },
{ icon: Heart, title: "Overall Wellness", desc: "Promotes overall vitality and daily comfort." },
{ icon: Droplets, title: "Urinary Comfort", desc: "Supports healthy bladder function and urinary flow." },
{ icon: Zap, title: "Daily Energy", desc: "Helps maintain energy levels throughout the day." }];


export const BenefitsSection = () =>
<section id="benefits" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Why Choose Prostate Miracle
        <span className="text-primary">Prostate Miracle</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((b) =>
      <div key={b.title} className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] border border-border/50 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
              <b.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{b.title}</h3>
            <p className="text-muted-foreground font-body text-sm">{b.desc}</p>
          </div>
      )}
      </div>
    </div>
  </section>;