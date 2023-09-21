/**
 * Generates a set regular, medium and bold texts, not finnished work in progress.
 */
export function osloTextSizePlugin({ addUtilities, theme, addBase }) {
    const pre = "text-";
  
    const presets = {
      64: {
        fontSize: "4rem",
        lineHeight: "4.75rem",
        letterSpacing: "-0.4px"
      },
      54: {
        fontSize: "3.375rem",
        lineHeight: "4.75rem",
        letterSpacing: "-0.4px"
      },
      46: {
        fontSize: "2.875rem",
        lineHeight: "3.375rem",
        letterSpacing: "-0.2px"
      },
      40: {
        fontSize: "2.5rem",
        lineHeight: "3.75rem",
        letterSpacing: "-0.2px"
      },
      36: {
        fontSize: "2.25rem",
        lineHeight: "3rem",
        letterSpacing: "-0.2px"
      },
      32: {
        fontSize: "2rem",
        lineHeight: "2.75rem",
        letterSpacing: "-0.2px"
      },
      30: {
        fontSize: "1.875rem",
        lineHeight: "2.75rem",
        letterSpacing: "-0.2px"
      },
      28: {
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
        letterSpacing: "-0.2px"
      },
      26: {
        fontSize: "1.625rem",
        lineHeight: "2.5rem",
        letterSpacing: "-0.2px"
      },
      24: {
        fontSize: "1.5rem",
        lineHeight: "2.25rem",
        letterSpacing: "-0.2px"
      },
      22: {
        fontSize: "1.375rem",
        lineHeight: "2.25rem",
        letterSpacing: "-0.2px"
      },
      20: {
        fontSize: "1.25rem",
        lineHeight: "2rem",
        letterSpacing: "-0.2px"
      },
      18: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        letterSpacing: "-0.2px"
      },
      16: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        letterSpacing: "-0.2px"
      },
      14: {
        fontSize: "0.875rem",
        lineHeight: "1.375rem",
        letterSpacing: "-0.2px"
      },
      12: {
        fontSize: "0.75rem",
        lineHeight: "1.25rem",
        letterSpacing: "-0.2px"
      },
      10: {
        fontSize: "0.625rem",
        lineHeight: "1.125rem",
        letterSpacing: "-0.2px"
      }
    };
  
    /**
     * Add responsive base texts here.
     */
    const responsiveBase = {
      h1: {
        mobile: { preset: 46, cssStyles: { fontWeight: theme("fontWeight.light") } },
        "tablet-big": { preset: 64, cssStyles: { fontWeight: theme("fontWeight.regular") } }
      },
      h2: {
        mobile: { preset: 30 },
        "tablet-big": { preset: 46 },
        cssStyles: { fontWeight: theme("fontWeight.light") }
      },
      h3: {
        mobile: { preset: 24 },
        "tablet-big": { preset: 36 },
        cssStyles: { fontWeight: theme("fontWeight.regular") }
      },
      h4: {
        mobile: { preset: 20 },
        "tablet-big": { preset: 26 }
      },
      h5: {
        mobile: { preset: 16 },
        "tablet-big": { preset: 18 },
        cssStyles: { fontWeight: theme("fontWeight.medium") }
      },
      body: { mobile: { preset: 16, cssStyles: { fontWeight: theme("fontWeight.light") } } }
    };
  
    /**
     * Add custom utils texts here.
     */
    const responsiveUtilTextClasses = {
      "p-small": {
        mobile: { preset: 12 },
        "tablet-big": { preset: 14 },
        cssStyles: { fontWeight: theme("fontWeight.regular") }
      },
      "p-regular": {
        mobile: { preset: 14 },
        "tablet-big": { preset: 16 },
        cssStyles: { fontWeight: theme("fontWeight.regular") }
      },
      "p-medium": {
        mobile: { preset: 16 },
        "tablet-big": { preset: 18 },
        cssStyles: { fontWeight: theme("fontWeight.regular") }
      },
      "text-xsmall": {
        mobile: { preset: 10 },
        "tablet-big": { preset: 12 },
        cssStyles: { fontWeight: theme("fontWeight.regular") }
      },
      "uppercase-small": {
        mobile: {
          preset: 14,
          cssStyles: { lineHeight: "0.875rem" }
        },
        "tablet-big": {
          preset: 16,
          cssStyles: { lineHeight: "1rem" }
        },
        cssStyles: { fontWeight: theme("fontWeight.regular"), textTransform: "uppercase" }
      },
      "uppercase-regular": {
        mobile: { preset: 16, cssStyles: { lineHeight: "1rem" } },
        "tablet-big": { preset: 18, cssStyles: { lineHeight: "1.25rem" } },
        cssStyles: { fontWeight: theme("fontWeight.regular"), textTransform: "uppercase" }
      }
    };
  
    // Add preset as util class
    for (const [key, preset] of Object.entries(presets)) {
      addUtilities(
        {
          [`.${pre}${String(key)}-light`]: {
            "font-size": String(preset.fontSize),
            "line-height": preset.lineHeight,
            "letter-spacing": preset.letterSpacing,
            "font-weight": "300"
          },
          [`.${pre}${String(key)}-regular`]: {
            "font-size": preset.fontSize,
            "line-height": preset.lineHeight,
            "letter-spacing": preset.letterSpacing,
            "font-weight": "400"
          },
          [`.${pre}${String(key)}-medium`]: {
            "font-size": preset.fontSize,
            "line-height": preset.lineHeight,
            "letter-spacing": preset.letterSpacing,
            "font-weight": "500"
          },
          [`.${pre}${String(key)}-bold`]: {
            "font-size": preset.fontSize,
            "line-height": preset.lineHeight,
            "letter-spacing": preset.letterSpacing,
            "font-weight": "700"
          }
        },
        ["responsive", "hover"]
      );
    }
  
    // Add responsive helper base (h1, h2, body...)
    for (const [key, t] of Object.entries(responsiveBase)) {
      for (const [screen, value] of Object.entries(t)) {
        if (screen === "cssStyles") continue;
        const cssValues = { ...(t?.cssStyles ?? {}), ...(value?.cssStyles ?? {}) };
        const preset = presets[value.preset];
  
        const fontStyle = {
          fontSize: String(preset.fontSize),
          lineHeight: preset.lineHeight,
          letterSpacing: preset.letterSpacing,
          ...cssValues
        };
        addBase({
          [`@screen ${screen}`]: { [`${String(key)}`]: { ...fontStyle } }
        });
        if (key !== "body")
          addUtilities({
            [`@screen ${screen}`]: { [`.${pre}${String(key)}`]: { ...fontStyle } }
          });
      }
    }
  
    // Add responsive helper texts
    for (const [key, t] of Object.entries(responsiveUtilTextClasses)) {
      for (const [screen, value] of Object.entries(t)) {
        if (screen === "cssStyles") continue;
        const cssValues = { ...(t?.cssStyles ?? {}), ...(value?.cssStyles ?? {}) };
        const preset = presets[value.preset];
        const fontStyle = {
          fontSize: String(preset.fontSize),
          lineHeight: preset.lineHeight,
          letterSpacing: preset.letterSpacing,
          ...cssValues
        };
        addUtilities({
          [`@screen ${screen}`]: { [`.${pre}${String(key)}`]: { ...fontStyle } }
        });
      }
    }
  }