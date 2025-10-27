# Northeast India Tourism Website

## Project Overview
A comprehensive tourism booking platform for Northeast India, built with Next.js 14, TypeScript, and Tailwind CSS. The website allows users to browse tour packages, view detailed itineraries, and book tours with integrated Razorpay payment processing.

## Features
- **Homepage**: Hero section with featured destinations and tour packages
- **Tour Packages**: Browse and filter packages by state, category, and search
- **Package Details**: Complete itineraries, inclusions/exclusions, photo galleries
- **Booking System**: Full booking form with traveler details collection
- **Payment Integration**: Razorpay payment gateway for secure transactions
- **Google Maps**: Integration for showing destinations (configured)
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Contact & About Pages**: Information and inquiry forms

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI, Heroicons, FontAwesome
- **Notifications**: React Hot Toast
- **Payment**: Razorpay
- **Maps**: Google Maps API (configured)

## Project Structure
```
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── page.tsx           # Homepage
│   │   ├── packages/          # Tour packages
│   │   │   ├── page.tsx       # Packages listing
│   │   │   └── [id]/page.tsx  # Package detail
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── about/page.tsx     # About page
│   │   └── api/               # API routes
│   │       └── create-order/  # Razorpay order creation
│   ├── components/            # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── BookingForm.tsx
│   ├── data/                  # Mock data
│   │   └── packages.ts        # Tour package data
│   ├── types/                 # TypeScript types
│   │   └── index.ts
│   └── lib/                   # Utilities
├── public/                    # Static assets
└── Configuration files

## Available Tour Packages
1. **Meghalaya** - Living Root Bridges (5D/4N)
2. **Assam** - Kaziranga Wildlife Safari (4D/3N)
3. **Arunachal Pradesh** - Tawang Monastery & Sela Pass (6D/5N)
4. **Sikkim** - Dzongri Trek (8D/7N)
5. **Nagaland** - Hornbill Festival Experience (5D/4N)
6. **Manipur** - Loktak Lake & Imphal Heritage (4D/3N)

## Environment Variables
The following environment variables need to be configured in `.env.local`:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## Getting Started

### Development
```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## Key Features Details

### Booking Flow
1. User selects a tour package
2. Clicks "Book This Package"
3. Fills in traveler details (name, email, phone, number of travelers, travel date)
4. Reviews total amount
5. Proceeds to Razorpay payment gateway
6. Receives confirmation after successful payment

### Package Filtering
- Search by keywords (destination, activity)
- Filter by state (all 8 NE states)
- Filter by category (Adventure, Wildlife, Cultural, etc.)

### Responsive Design
- Mobile-optimized navigation with hamburger menu
- Card-based layout adapts to all screen sizes
- Touch-friendly interface elements

## API Routes
- `/api/create-order` - POST endpoint for creating Razorpay payment orders

## Future Enhancements (Next Phase)
- User authentication and account management
- Admin dashboard for managing packages
- Review and rating system
- Blog section for travel tips
- Multi-language support
- Email notification system
- Advanced booking management
- Integration with travel insurance providers

## Development Notes
- Uses Next.js 14 App Router for improved performance
- Implements Server Components where possible
- Client components used for interactivity (forms, modals)
- Mock data structure allows easy database integration
- Follows TypeScript best practices with proper typing
- Accessible design with ARIA labels where needed

## Contact
- Email: info@netourism.com
- Phone: +91-1234567890
- Location: GS Road, Guwahati, Assam, India

## Last Updated
October 27, 2025
