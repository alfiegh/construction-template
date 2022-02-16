# Interior Design Template

This website was created with React. It is a multiple pages mockup for a construction company, buttons and links are functional they will redirect to other pages. The pages are not new HTML files rather than rendered components using react-router-dom, feel free to implement other functionality according to your needs.

The CSS for the Navbar is done with _Styled Components_ everything else is both _Bootstrap_ and _inline Style_, some CSS is inside **App.css file** organised in the same order the sections are.

## Features

- Parallax banner
- Hoverable cards
- Components rendering with React-Router-Dom
- Responsive Navbar with dropdown on media query
- Fully responsive.

### Components

The following are standalone and reusable components with their props that are being used in other sections:

- Navbar
- Sidebar
- Footer
- ReturnHome button
- ScrollToTop functionality

### Sections

The site is divided into two main parts:

_landingSections (everything that is inside 'MainPage' component):_

- Parallax
- OurServices
- AboutUs
- GalleryMain

_pages (every component that is being routed):_

- MainPage
- ServicesPage
- AboutTeam
- ProjectsPage
- ContactPage

#### Recommended Improvements

1. Each card in Our Services section on MainPage could be rendered using a component and mapping an array.
2. If requested, each photo on ProjectsPage could be more specific.
3. Add clients review section in MainPage.

#### If you plan to use this template

Feel free to use it and change to your needs, acknowledgement is appreciated.

#### Images and Logo

**Logo:** credits to ClipartMax
**Images:** credits to their authors in Unsplash

# To run the app:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### For all other scripts please refer to ReactJs documentation.
