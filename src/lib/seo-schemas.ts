export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Why no saw palmetto?", "acceptedAnswer": { "@type": "Answer", "text": "Saw palmetto contains almost no beta-sitosterol — the one ingredient clinical research validates for prostate health. You'd need 3,000 capsules of saw palmetto to match one capsule of Prostate Miracle®." } },
    { "@type": "Question", "name": "How is this different from other prostate supplements?", "acceptedAnswer": { "@type": "Answer", "text": "Prostate Miracle® delivers 300mg of pure beta-sitosterol per capsule, sourced from non-GMO European pine and guaranteed 99% pure. Most supplements use low-potency herb blends with a fraction of that concentration." } },
    { "@type": "Question", "name": "How long does it take to work?", "acceptedAnswer": { "@type": "Answer", "text": "Many men report noticing improvement within the first 2–4 weeks. Some notice changes as early as 4 days. Results vary by individual." } },
    { "@type": "Question", "name": "Is this safe to take with my current medications?", "acceptedAnswer": { "@type": "Answer", "text": "Prostate Miracle® is a natural dietary supplement. As with any supplement, consult your physician before use if you are taking prescription medications." } },
    { "@type": "Question", "name": "Why is it more expensive than drugstore brands?", "acceptedAnswer": { "@type": "Answer", "text": "The purity and concentration of our beta-sitosterol — 99% pure, sourced from non-GMO European pine, manufactured in a GMP-certified US facility — costs more to produce than generic herb blends. You're paying for potency that actually works." } },
    { "@type": "Question", "name": "What if it doesn't work for me?", "acceptedAnswer": { "@type": "Answer", "text": "Every order is protected by our 60-day money-back guarantee. If you're not satisfied for any reason, contact us for a full refund." } }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prostate Miracle",
  "url": "https://prostatemiracle.com",
  "logo": "https://prostatemiracle.com/favicon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-877-965-2140",
    "contactType": "customer service"
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Prostate Miracle® Advanced Formula",
  "description": "300mg pure beta-sitosterol per capsule, sourced from non-GMO European pine. Supports healthy urinary flow and prostate health.",
  "brand": { "@type": "Brand", "name": "Prostate Miracle" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  },
  "offers": {
    "@type": "Offer",
    "price": "33.95",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://prostatemiracle.com/prostate-miracle"
  }
};

export const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Prostate Miracle® Advanced Formula",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  }
};
