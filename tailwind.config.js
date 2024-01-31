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
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, 80px)',
      },
      fontFamily: {
        'body-font': ['var(--font-poppins)'],
        'title-font': ['var(--font-righteous)'],
      },
      maxWidth: {
        paragraph: '32ch',
      },
      screens: {
        xs: '430px',
        sm: '744px',
        md: '1024px',
        lg: '1280px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

// /*primary colors*/
//     --primary-default: #7d0089;
//     --primary-hover: #75167e;
//     --primary-active: #5f0e67;
//     --primary-disabled: #de9ae4;

//     /*secondary colors*/
//     --secondary-default: #3f3d56;
//     --secondary-hover: #312f48;
//     --secondary-active: #2a2840;
//     --secondary-disabled: #898899;

//     /*tertiary colors*/
//     --tertiary-default: #e02525;
//     --tertiary-hover: #e81a1a;
//     --tertiary-active: #c60d0d;
//     --tertiary-disabled: #f6adad;

//     /*neutral colors*/
//     --main-bg: #fffefc;
//     --secondary-bg: #f1f1f1;
//     --hover: #dad7d7;
//     --placeholder: #8b8b87;
//     --paragraph: #555452;
//     --title: #212121;

//     /*functional colors*/
//     --error: #ac1c1c;
//     --success: #2f7c1f;
//     --warning: #ffb800;
//     --info: #1653b4;
//     --help: #8729ae;
