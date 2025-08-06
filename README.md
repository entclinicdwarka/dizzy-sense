![License: Proprietary](https://img.shields.io/badge/license-Proprietary-red)

# 🌀 DizzySense

> ⚠️ This project is licensed under a **proprietary license**.  
> You may view the code, but **reproduction, modification, or commercial use is not allowed** without written permission from the author.

**DizzySense** is a mobile app that helps users understand the possible causes of dizziness and guides them toward the appropriate medical specialist—ENT, Neurologist, Cardiologist, or General Physician—based on their symptoms.

Built using [React Native](https://reactnative.dev) and [Expo](https://expo.dev), DizzySense is fully offline and privacy-friendly.

---

## 📱 Features

- Symptom-based interactive quiz
- Summary of selected symptoms and red flags
- Personalized specialist recommendation
- No internet needed — everything runs locally
- No data collection, ads, or tracking

---

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

You can then test the app on:

- **Android Emulator**
- **iOS Simulator**
- **Expo Go** on your mobile device

---

## 📂 Project Structure

```
app/
├── components/
│   ├── CustomHeader.tsx
│   ├── FloatingWhatsAppButton.tsx
│   └── QuestionEngine.tsx
├── quiz/
│   ├── data/
│   ├── index.tsx
│   └── result.tsx
├── _layout.tsx
├── about.tsx
├── index.tsx
├── privacy.tsx
├── specialist.tsx
└── terms.tsx

assets/
├── animations/
│   └── dizzy.json
├── fonts/
│   └── SpaceMono-Regular.ttf
└── images/
    ├── DizzySense-689060fbb390e
    ├── FeatureGraphic.png
    ├── favicon.png
    ├── icon.png
    ├── logo-512px.png
    ├── mypic.jpg
    ├── playstore-icon.png
    ├── splash.png
    └── whatsapp.png

```

> Routing is handled using [`expo-router`](https://expo.github.io/router/docs/).

---

## 🔐 Privacy & Terms

- [Privacy Policy](/app/privacy.tsx)
- [Terms & Conditions](/app/terms.tsx)

The app collects **no** personal data. All logic and quiz results are processed locally on your device.

---

## 🧪 Technologies Used

- React Native with Expo
- TypeScript
- `expo-router` for file-based routing
- Fully offline-first architecture
- Minimalist and accessible UI

---

## 👨‍⚕️ Author

**Dr. Rahul Kapahi**  
ENT Consultant  
📍 India  
📧 entclinicdwarka@gmail.com

---

## 📦 Version

**1.0** – August 2025

---

## 📝 License

**Proprietary – All rights reserved**  
© 2025 Dr. Rahul Kapahi – DizzySense

This codebase is the intellectual property of Dr. Rahul Kapahi.  
You may not copy, modify, distribute, or use it for commercial purposes without written permission.
