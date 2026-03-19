import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 97, suffix: "%", label: "Customer Satisfaction" },
  { value: 94, suffix: "%", label: "Positive Usage Experience" },
  { value: 89, suffix: "%", label: "Repeat Customers" },
  { value: 96, suffix: "%", label: "Customer Recommendations" },
];

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [isVisible, target, duration]);
  return count;
}

export const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground text-center mb-8 md:mb-12">
          The Numbers Speak For Themselves
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

function StatItem({ stat, isVisible }: { stat: typeof stats[number]; isVisible: boolean }) {
  const count = useCountUp(stat.value, isVisible);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
        {count}{stat.suffix}
      </p>
      <p className="text-primary-foreground/70 text-sm font-body mt-2">{stat.label}</p>
    </div>
  );
}
