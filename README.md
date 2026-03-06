# React Native App 📱

A modern React Native application built with Expo, featuring a clean tab-based navigation and beautiful UI components.

## 🚀 Features

- **Cross-platform**: Runs on iOS, Android, and Web
- **File-based routing**: Using Expo Router for intuitive navigation
- **Tab navigation**: Bottom tabs with index and explore screens
- **Modal support**: Built-in modal functionality
- **Modern styling**: NativeWind (Tailwind CSS for React Native)
- **TypeScript**: Full type safety
- **Animations**: Smooth animations with Reanimated
- **Haptic feedback**: Enhanced user experience with haptic responses

## 🛠️ Tech Stack

- **Framework**: [Expo](https://expo.dev) (~54.0.33)
- **React**: 19.1.0
- **React Native**: 0.81.5
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (~6.0.23)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (^4.2.2)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) (~4.1.1)
- **Icons**: [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (^15.0.3)
- **Language**: TypeScript (~5.9.2)
- **Linting**: ESLint with Expo config

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd react-native-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

## 🏃‍♂️ Running the App

After starting the server, you'll see options to open the app in:

- **Development build**: Custom development client
- **Android emulator**: Requires Android Studio
- **iOS simulator**: Requires Xcode (macOS only)
- **Expo Go**: Limited sandbox for quick testing
- **Web**: Runs in browser

## 📁 Project Structure

```
react-native-app/
├── app/                    # Main app directory (file-based routing)
│   ├── _layout.tsx        # Root layout
│   ├── modal.tsx          # Modal screen
│   └── (tabs)/            # Tab navigation group
│       ├── _layout.tsx    # Tab layout
│       ├── index.tsx      # Home tab
│       └── explore.tsx    # Explore tab
├── assets/                # Static assets
│   └── images/            # Image files
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── ...               # Other components
├── constants/            # App constants
├── hooks/                # Custom hooks
└── scripts/              # Utility scripts
```

## 🎨 Customization

### Styling

This app uses NativeWind for styling. Classes follow Tailwind CSS conventions:

```tsx
<View className="flex-1 bg-white dark:bg-black">
  <Text className="text-lg font-bold text-gray-900 dark:text-white">
    Hello World
  </Text>
</View>
```

### Navigation

Uses Expo Router with file-based routing. Add new screens by creating files in the `app/` directory.

### Environment Variables

Create a `.env` file for environment-specific configuration (already ignored in `.gitignore`).

## 🔧 Development Scripts

- `npm start` - Start Expo development server
- `npm run android` - Start on Android emulator
- `npm run ios` - Start on iOS simulator
- `npm run web` - Start on web browser
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to blank project

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [NativeWind Documentation](https://www.nativewind.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and all rights reserved.

## 🆘 Support

For issues and questions:

- Check the [Issues](https://github.com/yourusername/react-native-app/issues) page
- Join the [Expo Discord](https://chat.expo.dev/)

---

Built with ❤️ using Expo and React Native
