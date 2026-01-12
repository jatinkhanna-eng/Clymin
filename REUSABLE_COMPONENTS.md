# Reusable Components Documentation

This document describes the reusable components created to reduce code duplication across the application.

## Created Components

### 1. SectionHeader
**Location:** `src/components/SectionHeader/`

A reusable component for section headers that include a line, label, and heading.

**Usage:**
```tsx
import { SectionHeader } from '@/components/SectionHeader'

<SectionHeader
  label="Data intelligence"
  heading="What sets us apart"
  containerClassName="home-three-future-text-section-one"
  lineClassName="home-three-future-section-line"
  labelClassName="home-three-future-text-one"
  headingClassName="about-one-applycation-head"
  showLine={true} // optional, defaults to true
/>
```

**Props:**
- `label`: string - The label text (e.g., "Data intelligence")
- `heading`: string | React.ReactNode - The main heading
- `labelClassName`: string (optional) - Additional CSS classes for the label
- `headingClassName`: string (optional) - Additional CSS classes for the heading
- `containerClassName`: string (optional) - Additional CSS classes for the container
- `lineClassName`: string (optional) - Additional CSS classes for the line
- `showLine`: boolean (optional) - Whether to show the line, defaults to true

**Used in:**
- WhatSetsUsApartSection ✅ (refactored)
- HowItWorksSection ✅ (refactored)
- IndustriesSection (can be refactored)
- ApplicationSection (can be refactored)
- StrategicPartnerSection (can be refactored)
- BusinessSection (can be refactored)
- TestimonialsSection (can be refactored)

---

### 2. FeatureCard
**Location:** `src/components/FeatureCard/`

A reusable component for feature cards with an icon, heading, and description.

**Usage:**
```tsx
import { FeatureCard } from '@/components/FeatureCard'

<FeatureCard
  iconSrc="https://example.com/icon.webp"
  iconAlt="Feature icon"
  iconWidth="85"
  iconHeight="78"
  heading="Scalable for Your Needs"
  description="Our robust infrastructure is designed to grow with your business..."
  cardClassName="about-one-manage-card-one style-none"
  descriptionClassName="about-one-card-one-paragraph"
/>
```

**Props:**
- `iconSrc`: string - URL of the icon image
- `iconAlt`: string - Alt text for the icon
- `iconWidth`: string | number (optional) - Icon width
- `iconHeight`: string | number (optional) - Icon height
- `heading`: string - Card heading
- `description`: string | React.ReactNode - Card description
- `cardClassName`: string (optional) - Additional CSS classes for the card
- `iconClassName`: string (optional) - Additional CSS classes for the icon
- `headingClassName`: string (optional) - Additional CSS classes for the heading
- `descriptionClassName`: string (optional) - Additional CSS classes for the description
- `innerClassName`: string (optional) - Additional CSS classes for the inner container

**Used in:**
- WhatSetsUsApartSection ✅ (refactored)
- IndustriesSection (can be refactored - 9 cards)
- StrategicPartnerSection (can be refactored - 2 cards with arrow icons)

---

### 3. TestimonialCard
**Location:** `src/components/TestimonialCard/`

A reusable component for testimonial cards with user information and a quote.

**Usage:**
```tsx
import { TestimonialCard } from '@/components/TestimonialCard'

<TestimonialCard
  name="Sarah T"
  role="Marketing Manager"
  quote="Working with Clymin has transformed our e-commerce business..."
  commaOrder="right" // or "left"
/>
```

**Props:**
- `name`: string - Name of the testimonial author
- `role`: string - Role/title of the author
- `quote`: string | React.ReactNode - The testimonial quote
- `commaImageSrc`: string (optional) - URL of the comma image, defaults to standard comma image
- `commaImageAlt`: string (optional) - Alt text for comma image
- `cardClassName`: string (optional) - Additional CSS classes for the card
- `nameClassName`: string (optional) - Additional CSS classes for the name
- `roleClassName`: string (optional) - Additional CSS classes for the role
- `quoteClassName`: string (optional) - Additional CSS classes for the quote
- `commaOrder`: 'left' | 'right' (optional) - Position of comma image, defaults to 'right'

**Used in:**
- TestimonialsSection (can be refactored - multiple cards)

---

### 4. StepItem
**Location:** `src/components/StepItem/`

A reusable component for numbered step items.

**Usage:**
```tsx
import { StepItem } from '@/components/StepItem'

<StepItem
  number="01"
  heading="Initial Consultation"
  description="Consult with our experts to define key data sources..."
/>
```

**Props:**
- `number`: string - Step number (e.g., "01", "02")
- `heading`: string | React.ReactNode - Step heading
- `description`: string | React.ReactNode - Step description
- `numberClassName`: string (optional) - Additional CSS classes for the number
- `headingClassName`: string (optional) - Additional CSS classes for the heading
- `descriptionClassName`: string (optional) - Additional CSS classes for the description
- `containerClassName`: string (optional) - Additional CSS classes for the container

**Used in:**
- HowItWorksSection ✅ (refactored)

---

### 5. ContactButton
**Location:** `src/components/ContactButton/`

A reusable component for the "Contact Us" button.

**Usage:**
```tsx
import { ContactButton } from '@/components/ContactButton'

<ContactButton
  onClick={handleContactClick}
  href="/contact-us"
  text="Contact Us"
  className="button-width"
/>
```

**Props:**
- `onClick`: () => void (optional) - Click handler function
- `href`: string (optional) - Link URL, defaults to '/contact-us'
- `text`: string (optional) - Button text, defaults to 'Contact Us'
- `className`: string (optional) - Additional CSS classes

**Used in:**
- BusinessSection (can be refactored)
- ProjectSection (can be refactored)
- Hero (can be refactored)

---

## Refactoring Examples

### Example 1: WhatSetsUsApartSection
**Before:** 70 lines with duplicated card structure
**After:** 50 lines using FeatureCard component

### Example 2: HowItWorksSection
**Before:** 60 lines with duplicated step structure
**After:** 45 lines using StepItem component

---

## Next Steps for Full Refactoring

1. **IndustriesSection**: Refactor to use `SectionHeader` and `FeatureCard` (9 cards)
2. **TestimonialsSection**: Refactor to use `SectionHeader` and `TestimonialCard` (multiple cards)
3. **StrategicPartnerSection**: Refactor to use `SectionHeader` and `FeatureCard` (2 cards)
4. **ApplicationSection**: Refactor to use `SectionHeader`
5. **BusinessSection**: Refactor to use `SectionHeader` and `ContactButton`
6. **ProjectSection**: Refactor to use `ContactButton`

---

## Benefits

1. **Reduced Code Duplication**: Common patterns are now reusable
2. **Easier Maintenance**: Changes to common patterns only need to be made in one place
3. **Consistency**: Ensures consistent styling and structure across sections
4. **Type Safety**: All components have TypeScript interfaces
5. **Flexibility**: Components accept className props for custom styling

---

## Notes

- All components maintain backward compatibility with existing CSS classes
- Components accept optional className props for section-specific styling
- The original CSS files remain unchanged - components use existing global styles
- Components are exported from `src/components/index.ts` for easy importing


