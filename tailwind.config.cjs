/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "midnight-green": "#014E56",
      "light-coral": "#F67E7E",
      white: "#FFFFFF",
      "rapture-blue": "#79C8C7",
      "police-blue": "#2C6269",
      "deep-jungle-green": "#004047",
      "sac-state-green": "#012f34",
      "dark-green": "#002529",
    },

    fontSize: {
      "h1-lg": ["100px", "100px"],
      "h1-sm": ["64px", "56px"],
      h2: ["48px", "48px"],
      h3: ["18px", "28px"],
      "body-1": ["18px", "28px"],
      "body-2": ["15px", "25px"],
      "mobile-h1": ["40px", "40px"],
      "mobile-h2": ["32px", "32px"],
    },

    backgroundImage: {
      "mobile-nav": "url('assets/bg-pattern-about-1-mobile-nav-1.svg')",
      "home-pattern-1": "url('assets/bg-pattern-home-1.svg')",
      "home-pattern-2": "url('assets/bg-pattern-home-2.svg')",
      "home-pattern-3": "url('assets/bg-pattern-home-3.svg')",
      "home-pattern-4": "url('assets/bg-pattern-home-4-about-3.svg')",
      "home-pattern-5": "url('assets/bg-pattern-home-5.svg')",
      "home-pattern-6": "url('assets/bg-pattern-home-3.svg')",
      "banner-pattern": "url('assets/bg-pattern-home-6-about-5.svg')",
      "contact-pattern": "url('assets/bg-pattern-about-2-contact-1.svg')",
      quotes: "url('assets/icon-quotes.svg')",
    },
  },
  plugins: [],
};
