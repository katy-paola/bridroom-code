/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        opacity: 'var(--opacity)',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
        primary: {
          default: 'var(--primary-default)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)',
          disabled: 'var(--primary-disabled)',
        },
        secondary: {
          default: 'var(--secondary-default)',
          hover: 'var(--secondary-hover)',
          active: 'var(--secondary-active)',
          disabled: 'var(--secondary-disabled)',
        },
        tertiary: {
          default: 'var(--tertiary-default)',
          hover: 'var(--tertiary-hover)',
          active: 'var(--tertiary-active)',
          disabled: 'var(--tertiary-disabled)',
        },
        neutral: {
          'main-bg': 'var(--main-bg)',
          'secondary-bg': 'var(--secondary-bg)',
          active: 'var(--active)',
          hover: 'var(--hover)',
          placeholder: 'var(--placeholder)',
          paragraph: 'var(--paragraph)',
          title: 'var(--title)',
        },
        functional: {
          error: 'var(--error)',
          success: 'var(--success)',
          warning: 'var(--warning)',
          info: 'var(--info)',
          help: 'var(--help)',
        },
      },
      fontSize: {
        'heading-xlarge': 'var(--heading-xlarge)',
        'heading-large': 'var(--heading-large)',
        'heading-medium': 'var(--heading-medium)',
        'heading-small': 'var(--heading-small)',
        'paragraph-xlarge': 'var(--paragraph-xlarge)',
        'paragraph-large': 'var(--paragraph-large)',
        'paragraph-medium': 'var(--paragraph-medium)',
        'paragraph-regular': 'var(--paragraph-regular)',
        'paragraph-small': 'var(--paragraph-small)',
        'paragraph-xsmall': 'var(--paragraph-xsmall)',
      },
      padding: {
        22: '5.5rem',
        42: '10.5rem',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(260px, 1fr))',
        'auto-fill-sm': 'repeat(auto-fill, 80px)',
        layout: 'repeat(4, 1fr)',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(min-content, 1fr))',
      },
      gridTemplateAreas: {
        layout: [
          'title    title     description description',
          'neigh address      price  price',
          'map   map map         map',
          'photos  photos photos       photos',
          'button   button button      button',
        ],
      },
      fontFamily: {
        'body-font': ['var(--font-poppins)'],
        'title-font': ['var(--font-righteous)'],
      },
      maxWidth: {
        paragraph: '32ch',
      },
      minHeight: {
        main: 'calc(100vh - 4rem)',
        'main-responsive': 'calc(100vh - 3.5rem)',
      },
      height: {
        main: 'calc(100vh - 4rem)',
        'main-responsive': 'calc(100vh - 56px)',
      },
      screens: {
        xs: '430px',
        sm: '744px',
        md: '1024px',
        lg: '1280px',
        xl: '1440px',
      },
      backgroundImage: {
        profile: 'url("/bg-profile.svg")',
      },
      backdropBlur: {
        10: '10px',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
