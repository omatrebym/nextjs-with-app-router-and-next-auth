import type { Config } from "tailwindcss";
import { osloTextSizePlugin } from "./styles/tw-plugins/typography";

const config: Config = {
  prefix: "tw-",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      // Main colors and corresponding shades
      white: "#FFFFFF",
      black: "#000000",
      "blue-dark": { DEFAULT: "#2A2859", 5: "#F2F9FF", 10: "#D9E9F2" },
      "blue-link": { DEFAULT: "#2860F0" },
      blue: {
        DEFAULT: "#6FE9FF",
        light: "#B3F5FF",
        5: "#F1FDFF",
        10: "#E5FCFF",
        60: "#D1F9FF",
      },
      green: {
        DEFAULT: "#43F8B6",
        light: "#C7F6C9",
        dark: "#034B45",
        10: "#E5FFE6",
        30: "#C7FDE9",
      },
      red: {
        DEFAULT: "#FF8274",
        light: "#FFB4AC",
        5: "#FFF3F2",
        10: "#FFE8E5",
        30: "#FFDFDC",
      },
      yellow: { DEFAULT: "#F9C66B", 50: "#FFE7BC" },
      beige: {
        light: "#F8F0DD",
        dark: "#D0BFAE",
      },
      // Grayscale
      gray: {
        DEFAULT: "#F2F2F2",
        light: "#F9F9F9",
        dark: "#2C2C2C",
        warm: "#D0BFAE",
        0: "#FFFFFF",
        10: "#E6E6E6",
        20: "#CCCCCC",
        30: "#B3B3B3",
        40: "#9A9A9A",
        50: "#808080",
        60: "#666666",
        70: "#4D4D4D",
        80: "#333333",
        90: "#1A1A1A",
        100: "#000000",
      },
      // State colors
      state: {
        hover: {
          default: "#1F42AA",
          light: "#B3F5FF",
        },
        active: {
          default: "#1F42AA",
          light: "#B3F5FF",
        },
        focus: "#10ADFF",
        disabled: {
          default: "#4D4D4D",
          light: "#F9F9F9",
        },
        info: "#2A2859",
        success: "#034B45",
        warning: "#774C01",
        error: "#96281C",
      },
    },
    screens: {
      // min-width
      mobile: "0px",
      phablet: "576px",
      tablet: "768px",
      "tablet-big": "1024px",
      laptop: "1280px",
      desktop: "1600px",
      // max-width
      "phablet-max": { max: "576px" },
      "tablet-max": { max: "768px" },
      "tablet-big-max": { max: "1024px" },
      "laptop-max": { max: "1280px" },
      "desktop-max": { max: "1600px" },
      // target spesific screen size
      "mobile-only": { min: "0px", max: "576px" },
      "phablet-only": { min: "576px", max: "768px" },
      "tablet-only": { min: "768px", max: "1024px" },
      "tablet-big-only": { min: "1024px", max: "1280px" },
      "laptop-only": { min: "1280px", max: "1600px" },
    },
    fontFamily: {
      sans: ["Oslo sans", "arial", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
    },
    letterSpacing: {
      tighter: "-0.4px",
      tight: "-0.2px",
      normal: "normal",
    },
    lineHeight: {
      heading: "1.4em",
      body: "1.5em",
    },
    // Font presets
    fontSize: {},
  },
  plugins: [osloTextSizePlugin],
};
export default config;
