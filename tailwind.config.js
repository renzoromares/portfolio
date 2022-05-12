module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      krona: ["Krona One", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
    colors: {
      wht: "#f8f8f8",
      whtOne: "#FFFFFF",
      blk: "#141414",
      blkOne: "#333333",
    },
    extend: {
      screens: {
        'pclg': { 'max': '1920px' },
        'pcmd': { 'max': '1536px' },
        'pcsm': { 'max': '1366px' },
        'tblg': { 'max': '1024px' },
        'tbmd': { 'max': '834px' },
        'tb': { 'max': '800px' },
        'slg': { 'max': '480px' },
        'smd': { 'max': '428px' },
        'ssm': { 'max': '412px' },
        'sp': { 'max': '414px' },
        'xs': { 'max': '390px' },
        'xxs': { 'max': '375px' }, 
      },
      width: {
        23: "23%",
        28: "28%",
        30: "30%",
        32: "32%",
        48: "48%",
      },
    },
  },
  plugins: [],
}