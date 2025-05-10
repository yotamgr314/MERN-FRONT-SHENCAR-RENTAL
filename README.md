````markdown
# React Car Rental front Application

A responsive front-end application for a car rental agency, built with React, React Router, CSS Modules, and Material UI. Data is currently served from a local JSON file for demonstration purposes. Deployed via Netlify.

## Features

- **Car Catalog** – Browse available cars with images, specs, and pricing  
- **Filtering & Search** – Quickly find cars by type, price range, or availability  
- **Booking Simulation** – “Book” a car and see a confirmation (data resets on refresh)  
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile

## Tech Stack

- **React** (functional components & hooks)  
- **React Router DOM** for client-side routing  
- **CSS Modules** for scoped, maintainable styles  
- **Material UI** for ready-made UI components  
- **Netlify** for continuous deployment  
- **Local JSON** as a mock “backend” data source  

## Prerequisites

- **Node.js** v14 or higher  
- **npm** or **yarn**

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yotamgr314/MERN-FRONT-SHENCAR-RENTAL.git
   cd react-car-rental-app
````

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```
3. **Start the dev server**

   ```bash
   npm start
   ```
4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is deployed to Netlify.

*Deployed URL:*
https://rentalsystemforcars.netlify.app/

## Project Structure

```
/frontend
  /public
  /src
    /assets
    /components
    /pages
    data.json         # mock dataset
.gitignore
package.json
README.md
```
