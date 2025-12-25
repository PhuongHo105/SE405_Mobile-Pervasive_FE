# BadmintonGear App 🏸

Mobile application for Badminton Gear shop built with React Native and Expo.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/) (LTS recommended).
- **Expo Go**: Install the Expo Go app on your iOS or Android device.
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS App Store](https://apps.apple.com/us/app/expo-go/id982107779)

## 🚀 Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/PhuongHo105/SE405_Mobile-Pervasive_FE.git
    cd BadmintonGearApp
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Configuration**:
    Create a `.env` file in the root directory by copying the example:
    ```bash
    cp .env.
    ```
    Then, open `.env` and update the variables if necessary:
    - `EXPO_PUBLIC_API_URL`: The URL of your backend API.
    > **Note**: If testing on a physical device, use your computer's local IP address instead of `localhost`.

    -`EXPO_PUBLIC_API_BASE_URL`: The base URL of your backend API.

## 🏃 Running the App

Start the development server:

```bash
npx expo start
```

Once the server is running, you can:

- **Run on Android**: Press `a` in the terminal (requires Android Emulator) or scan the QR code with Expo Go on Android.
- **Run on iOS**: Press `i` in the terminal (requires Xcode Simulator) or scan the QR code with any QR scanner on iOS (which will open Expo Go).
- **Run on Web**: Press `w`.

## 📂 Project Structure

- `app/`: Source code for the application (Expo Router file-based routing).
- `assets/`: Images, fonts, and other static assets.
- `components/`: Reusable UI components.
- `constants/`: Configuration constants and themes.
- `services/`: API services and business logic.
- `hooks/`: Custom React hooks.
- `locales/`: i18n localization files.

## 🛠 Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Styling**: Native styles
- **State/Networking**: [Socket.io](https://socket.io/) (for real-time features)

