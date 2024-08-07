import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
// @ts-ignore
import hexToHsl from "hex-to-hsl";

// convert #f5f5f5 to 0 0% 97% using hex-to-hsl
const convertHexToHsl = (hex: string) => {
  const initHsl = hexToHsl(hex);
  // convert [ 0, 0, 97 ] to "0 0% 97%"
  return `${initHsl[0]} ${initHsl[1]}% ${initHsl[2]}%`;
};

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    animatePlugin,
    plugin(
      function ({addBase, addComponents}) {
        addBase({
          // Root Layout
          "*": {"@apply border-border": {}},
          body: {"@apply bg-background text-foreground": {}},
          "html, body, :root": {"@apply h-full font-primary": {}},

          // Page Layout
          main: {"@apply flex items-center justify-start flex-col min-h-[60vh] w-full": {}},

          // Colors
          ":root": {
            "--white": convertHexToHsl(colors.neutral[100]),
            "--black": convertHexToHsl(colors.neutral[900]),

            "--background": convertHexToHsl(colors.neutral[100]),
            "--foreground": convertHexToHsl(colors.neutral[900]),
            "--card": "0 0% 100%",
            "--card-foreground": "0 0% 3.9%",
            "--popover": "0 0% 100%",
            "--popover-foreground": "0 0% 3.9%",
            "--primary": "45.4 93.4% 47.5%",
            "--primary-foreground": "0 0% 98%",
            "--secondary": convertHexToHsl(colors.neutral[100]),
            "--secondary-foreground": convertHexToHsl(colors.neutral[900]),
            "--muted": convertHexToHsl(colors.neutral[300]),
            "--muted-foreground": "0 0% 45.1%",
            "--accent": convertHexToHsl(colors.neutral[200]),
            "--accent-foreground": convertHexToHsl(colors.neutral[900]),
            "--destructive": "0 84.2% 60.2%",
            "--destructive-foreground": "0 0% 98%",
            "--border": convertHexToHsl(colors.neutral[200]),
            "--input": convertHexToHsl(colors.neutral[300]),
            "--ring": "0 0% 3.9%",
            "--radius": "0.5rem",
            "--chart-1": "12 76% 61%",
            "--chart-2": "173 58% 39%",
            "--chart-3": "197 37% 24%",
            "--chart-4": "43 74% 66%",
            "--chart-5": "27 87% 67%",
          },

          ".dark": {
            "--background": convertHexToHsl(colors.neutral[900]),
            "--foreground": convertHexToHsl(colors.neutral[100]),
            "--card": "0 0% 3.9%",
            "--card-foreground": "0 0% 98%",
            "--popover": "0 0% 3.9%",
            "--popover-foreground": "0 0% 98%",
            "--primary": "45.4 93.4% 47.5%",
            "--primary-foreground": convertHexToHsl(colors.neutral[900]),
            "--secondary": convertHexToHsl(colors.neutral[600]),
            "--secondary-foreground": "0 0% 98%",
            "--muted": convertHexToHsl(colors.neutral[600]),
            "--muted-foreground": "0 0% 63.9%",
            "--accent": convertHexToHsl(colors.neutral[600]),
            "--accent-foreground": "0 0% 98%",
            "--destructive": convertHexToHsl(colors.red[600]),
            "--destructive-foreground": "0 0% 98%",
            "--border": convertHexToHsl(colors.neutral[600]),
            "--input": convertHexToHsl(colors.neutral[600]),
            "--ring": "0 0% 83.1%",
            "--chart-1": "220 70% 50%",
            "--chart-2": "160 60% 45%",
            "--chart-3": "30 80% 55%",
            "--chart-4": "280 65% 60%",
            "--chart-5": "340 75% 55%",
          },
          // [HTMLTags] List
          li: {"@apply my-3": {}},

          // [HTMLTags] Typography

          // Headings
          "h1, h2, h3, h4, h5, h6": {"@apply font-secondary": {}},

          // Phone
          "@media only screen and (max-width: 640px)": {
            h1: {[typographySizes.phone.h1]: {}},
            h2: {[typographySizes.phone.h2]: {}},
            h3: {[typographySizes.phone.h3]: {}},
            h4: {[typographySizes.phone.h4]: {}},
            h5: {[typographySizes.phone.h5]: {}},
            h6: {[typographySizes.phone.h6]: {}},
            p: {[typographySizes.phone.p]: {}},
          },
          // Tablet
          "@media screen and (min-width: 641px) and (max-width: 1023px)": {
            h1: {[typographySizes.tablet.h1]: {}},
            h2: {[typographySizes.tablet.h2]: {}},
            h3: {[typographySizes.tablet.h3]: {}},
            h4: {[typographySizes.tablet.h4]: {}},
            h5: {[typographySizes.tablet.h5]: {}},
            h6: {[typographySizes.tablet.h6]: {}},
            p: {[typographySizes.tablet.p]: {}},
          },
          // Desktop
          "@media screen and (min-width: 1024px)": {
            h1: {[typographySizes.desktop.h1]: {}},
            h2: {[typographySizes.desktop.h2]: {}},
            h3: {[typographySizes.desktop.h3]: {}},
            h4: {[typographySizes.desktop.h4]: {}},
            h5: {[typographySizes.desktop.h5]: {}},
            h6: {[typographySizes.desktop.h6]: {}},
            p: {[typographySizes.desktop.p]: {}},
          },
        });

        addComponents({
          // Layout
          // [Classes] Flex
          ".flexi": {"@apply flex items-center justify-center": {}},
          ".flexib": {"@apply flex items-center justify-between": {}},
          ".flexit": {"@apply flex items-center justify-start": {}},
          ".flexi-it": {"@apply flex items-start justify-center": {}},
          ".flexi-ie": {"@apply flex items-end justify-center": {}},
          ".flexit-it": {"@apply flex items-start justify-start": {}},
          ".flexie-ie": {"@apply flex items-end justify-end": {}},

          // [Classes] Typography
          // Phone
          "@media only screen and (max-width: 640px)": {
            ".h1": {[typographySizes.phone.h1]: {}},
            ".h2": {[typographySizes.phone.h2]: {}},
            ".h3": {[typographySizes.phone.h3]: {}},
            ".h4": {[typographySizes.phone.h4]: {}},
            ".h5": {[typographySizes.phone.h5]: {}},
            ".h6": {[typographySizes.phone.h6]: {}},
            ".pp": {[typographySizes.phone.p]: {}},
            ".ppl": {[typographySizes.phone.pl]: {}},
          },
          // Tablet
          "@media screen and (min-width: 641px) and (max-width: 1023px)": {
            ".h1": {[typographySizes.tablet.h1]: {}},
            ".h2": {[typographySizes.tablet.h2]: {}},
            ".h3": {[typographySizes.tablet.h3]: {}},
            ".h4": {[typographySizes.tablet.h4]: {}},
            ".h5": {[typographySizes.tablet.h5]: {}},
            ".h6": {[typographySizes.tablet.h6]: {}},
            ".pp": {[typographySizes.tablet.p]: {}},
            ".ppl": {[typographySizes.tablet.pl]: {}},
          },
          // Desktop
          "@media screen and (min-width: 1024px)": {
            ".h1": {[typographySizes.desktop.h1]: {}},
            ".h2": {[typographySizes.desktop.h2]: {}},
            ".h3": {[typographySizes.desktop.h3]: {}},
            ".h4": {[typographySizes.desktop.h4]: {}},
            ".h5": {[typographySizes.desktop.h5]: {}},
            ".h6": {[typographySizes.desktop.h6]: {}},
            ".pp": {[typographySizes.desktop.p]: {}},
            ".ppl": {[typographySizes.desktop.pl]: {}},
          },
        });
      },
      {
        theme: {
          container: {
            center: true,
            padding: "2rem",
            screens: {
              "2xl": "1400px",
            },
          },
          extend: {
            colors: {
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
              grey: {
                DEFAULT: colors.neutral[500],
                ...colors.neutral,
              },
              primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
                ...colors.yellow,
              },
              secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
                // spread the secondary color
              },
              destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
              },
              muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
              },
              accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
              },
              popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
              },
              card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
              },
            },
            fontFamily: {
              primary: ["var(--font-primary)"],
              secondary: ["var(--font-secondary)"],
            },
            borderRadius: {
              lg: "var(--radius)",
              md: "calc(var(--radius) - 2px)",
              sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
              "slide-in": {
                "0%": {
                  opacity: "0",
                  transform: "translateY(-30px)",
                },
                "100%": {
                  opacity: "1",
                  transform: "translateY(0)",
                },
              },
              wiggle: {
                "0%, 100%": {transform: "rotate(-2deg)"},
                "50%": {transform: "rotate(2deg)"},
              },
              "accordion-down": {
                from: {height: "0"},
                to: {height: "var(--radix-accordion-content-height)"},
              },
              "accordion-up": {
                from: {height: "var(--radix-accordion-content-height)"},
                to: {height: "0"},
              },
            },
            animation: {
              wiggle: "wiggle 1s ease-in-out infinite",
              "slide-in": "slide-in 0.5s ease-out",
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
            },
          },
        },
      },
    ),
  ],
};

export default config;

interface TypographySize {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  p: string;
  pl: string;
}

interface TypographySizes {
  phone: TypographySize;
  tablet: TypographySize;
  desktop: TypographySize;
}

const typographySizes: TypographySizes = {
  phone: {
    h1: "@apply text-2xl font-bold leading-9 !important",
    h2: "@apply text-2xl font-bold leading-9 !important",
    h3: "@apply text-xl font-bold leading-9 !important",
    h4: "@apply text-lg font-bold leading-7 !important",
    h5: "@apply text-base font-bold leading-7 !important",
    h6: "@apply text-sm font-semibold leading-6 !important",
    p: "@apply text-sm font-medium leading-6 !important",
    pl: "@apply text-xs font-light leading-6 !important",
  },
  tablet: {
    h1: "@apply text-3xl font-bold leading-9 !important",
    h2: "@apply text-2xl font-bold leading-9 !important",
    h3: "@apply text-xl font-bold leading-9 !important",
    h4: "@apply text-xl font-bold leading-7 !important",
    h5: "@apply text-base font-bold leading-7 !important",
    h6: "@apply text-sm font-semibold leading-7 !important",
    p: "@apply text-sm font-medium leading-7 !important",
    pl: "@apply text-xs font-light leading-7 !important",
  },
  desktop: {
    h1: "@apply text-4xl font-bold leading-10 !important",
    h2: "@apply text-3xl font-bold leading-9 !important",
    h3: "@apply text-2xl font-bold leading-9 !important",
    h4: "@apply text-lg font-bold leading-7 !important",
    h5: "@apply text-base font-bold leading-7 !important",
    h6: "@apply text-base font-bold leading-7 !important",
    p: "@apply text-base font-medium leading-7 !important",
    pl: "@apply text-sm font-light leading-7 !important",
  },
};
