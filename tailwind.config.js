module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,jsx,js}",
    "./components/**/*.{ts,tsx,jsx,js}",
    "./app/**/*.{ts,tsx,jsx,js}",
    "./src/**/*.{ts,tsx,jsx,js}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: { 
        customColor: "#417f56",
        primaryDark: "#183020",
        primaryLight: "#cae4d3",

        grayLight: "#e1e1e1",
        garyMid: "#cbcbcb",
        grayDark: "#353535",

        error: " #c30000",
        errorLight: "#ed2e2e",
        erorExteraLight: "#fff2f2",

        success: "#00966d",
        successLight: "#00ba88",
        successExtraLight: "#f3fdfa",

        warning: "#a9791c",
        warninglight: "#f4b740",
        warningExtraLight: "#fff8e1",
      },
      fontFamily: {
        roboto: "Roboto-Medium",
        "roboto-regular": "Roboto-Regular",
        "roboto-bold": "Roboto-Bold",
        "roboto-thin": "Roboto-Thin",
      },
      boxShadow: {
        "boxShadow-2": " 0px 2px 2px 0px #00000040",
        "boxShadow-4": " 0px 4px 4px 0px #00000040",
        "boxShadow-6": " 0px 6px 6px 0px #00000040",
        "boxShadow-8": " 0px 8px 8px 0px #00000040",
        "boxShadow-12": " 0px 12px 12px 0px #00000040",
        "boxShadow-16": " 0px 16px 16px 0px #00000040",
        "cards-shadow":
          " 0px 0px 0px 0px #0000001A , 0px 1px 2px 0px #0000001A, 0px 4px 4px 0px #00000017,0px 9px 5px 0px #0000000D, 0px 16px 6px 0px #00000003,0px 25px 7px 0px #00000000",
        "contactCards-shadow":
          "0px 0px 0px 0px #0000001A,0px 3px 6px 0px #0000001A,0px 11px 11px 0px #00000017,0px 24px 14px 0px #0000000D,0px 42px 17px 0px #00000003,0px 66px 18px 0px #00000000",
      },
      borderRadius: {
        "radius-4": "4px",
        "radius-8": "8px",
        "radius-16": "16px",
        "radius-24": "24px",
        "radius-32": "32px",
        "radius-64": "64px",
      },
      padding: {
        "padding-8": "8px",
        "padding-16": "16px",
        "padding-24": "24px",
        "padding-32": "32px",
      },
      fontSize: {
        extraBold: "64px",
        bold: "56px",
        h1: "44px",
        h2: "40px",
        h3: "36px",
        h4: "24px",
        "body-xL": "20px",
        "body-LG": "18px",
        "body-MD": "16px",
        "body-sM": "14px",
        "caption-LG": "14px",
        "caption-MD": "12px",
        "caption-SM": "10px",
        "button-LG": "16px",
        "button-SM": "14px",
        "overLine-LG": "16px",
        "overLine-SM": "12px",
      },
  
    },
  },
  plugin: "daisyui",
};
