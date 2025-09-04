# Upland Website Sections

This directory contains modular, reusable components for the Upland website. Each section is designed to be self-contained and easily maintainable.

## Components

### HeroSection
- **Purpose**: Main landing section with company value proposition
- **Features**: Dark blue gradient background, white text, CTA button, business meeting image
- **Props**: None (static content)

### TrustedBySection
- **Purpose**: Display trusted company logos
- **Features**: Clean white background, centered company logos
- **Props**: None (static content)

### WhyTrustSection
- **Purpose**: Three-column content explaining why organizations trust Upland
- **Features**: 
  - Accelerated Market Strategy
  - Independent Executive-level Insight
  - Technology & Project Delivery
- **Props**: None (static content)

### CTASection
- **Purpose**: Bottom call-to-action section
- **Features**: Dark background with laptop image, white text overlay, CTA button
- **Props**: None (static content)

## Usage

```tsx
import { 
  HeroSection, 
  TrustedBySection, 
  WhyTrustSection, 
  CTASection 
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBySection />
      <WhyTrustSection />
      <CTASection />
    </main>
  );
}
```

## Styling

All components use Tailwind CSS classes and follow the design system defined in the project. The components are responsive and work well on both desktop and mobile devices.

## Images

The components use placeholder images that can be replaced with actual images:
- `/hero-meeting.jpg` - Hero section business meeting image
- `/meeting-1.jpg` - First content block image
- `/meeting-2.jpg` - Second content block image  
- `/meeting-3.jpg` - Third content block image

Replace these with actual images for production use.

