/** @type {import('tailwindcss').Config} */
module.exports =
{
  content:
    [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme:
  {
    colors:
    {
      'main': "#71afdd",
      'text': "#222831",
    },
    container:
    {
      center: true,
    },
    extend:
      {},
  },
  plugins:
    [],
};
