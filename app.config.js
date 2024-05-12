const IS_DEV = process.env.APP_VARIANT === "development";

export default {
  name: IS_DEV ? "FoodNet-DEV" : "FoodNet",
  slug: "FoodNet-App",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./app/assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./app/assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#CC7638",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: IS_DEV ? "com.foodnet.dev" : "com.foodnet",
  },
  android: {
    package: IS_DEV ? "com.foodnet.dev" : "com.foodnet",
    adaptiveIcon: {
      foregroundImage: "./app/assets/adaptive-icon.png",
      backgroundColor: "#CC7638",
    },
    icon: "./app/assets/icon.png",
  },
  web: {
    favicon: "./app/assets/favicon.png",
  },
  plugins: [],
  extra: {
    eas: {
      projectId: "b8b8bcc5-e112-4af1-9651-f72d1cc03c75",
    },
  },
};
