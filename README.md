# Doctor Appointment App

A React Native mobile application for booking doctor appointments with a Node.js/Express backend.

## Tech Stack

### Frontend
- React Native 0.82.1
- TypeScript
- React Navigation (Stack & Bottom Tabs)
- React Native SVG

### Backend
- Node.js with Express
- Prisma ORM
- MongoDB
- TypeScript

## Project Structure

```
doctor_Appointment/
├── appFrontend/     # React Native mobile app
│   ├── src/
│   │   ├── screens/     # App screens (auth, home, appointments, etc.)
│   │   ├── navigation/  # Navigation setup
│   │   ├── components/  # Reusable components
│   │   └── assets/      # Icons and images
│   └── android/ios/     # Native platform code
│
└── appBackend/      # Express API server
    ├── src/
    │   ├── routes/      # API routes
    │   └── config/       # Database configuration
    └── prisma/          # Database schema
```

## Features

- User authentication (Login/Register)
- Role selection (Patient/Doctor)
- Doctor profiles and information
- Appointment booking
- Chat functionality
- Favorites/Bookmarks
- Notifications
- Settings

## Setup

### Frontend
```bash
cd appFrontend
npm install
npm start
npm run android  # or npm run ios
```

### Backend
```bash
cd appBackend
npm install
# Setup .env with DATABASE_URL
npx prisma generate
npx prisma migrate dev
npm run dev
```

## Requirements

- Node.js >= 20
- MongoDB database
- React Native development environment

