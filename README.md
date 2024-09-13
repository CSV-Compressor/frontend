# CSV Compressor Web App - Frontend

A simple web application that allows users to upload a CSV file, compress it to a ZIP archive, and download the compressed file.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Project Setup](#project-setup)
- [Directory Structure](#directory-structure)

## Features

- CSV file upload
- File compression to ZIP
- Download compressed ZIP file

## Technologies

- Vite + React
- Fetch API
- SCSS

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/monnomutilisateur/csv-compressor-frontend.git
   cd frontend
   
2. Install dependencies:
     ```bash
   npm install
     
3. Run the development server:
     ```bash
   npm run dev
     
4. Create a .env file in the root directory with the following variable:
     ```env
    VITE_API_URL=http://localhost:{API_PORT}/api/v1
  
## Description

- **`README.md`**: Contains project information, including setup instructions, project structure, and usage details.

- **`index.html`**: Main HTML file for the app, located in the public directory.

- **`package.json`**: Lists project dependencies, metadata, and scripts for the app.

- **`package-lock.json`**: Automatically generated file that locks dependency versions to ensure consistent installs.

- **`vite.config.js`**: Vite's configuration file, defining the build and development settings.

- **`eslint.config.js`**: Configuration for ESLint, which ensures code quality and consistency.

- **`index.html`**: Main HTML file served by the application.
- **`public/`**: Contains static assets and the entry point for the application.

- **`src/`**: Contains the core source code for the frontend.
  - **`assets/`**: Stores static assets like images or fonts.
  - **`components/`**: Contains React components used across the application.
  - **`services/`**: Handles API requests and other utility functions.
  - **`styles/`**: Contains SCSS files used for styling the app.
  - **`pages/`**: Includes the main page(s) of the application.
  - **`main.jsx`**: The main entry point for the React application.

This structure separates concerns by organizing code into logical directories, making it easier to maintain and scale the application.
