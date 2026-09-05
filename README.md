# Amazon Clone

A front-end clone of the Amazon website, built as a personal/training project to practice web development concepts such as product listings, cart functionality, and working with a mock backend.

## Project Structure

- **`amazon-clone/`** - Main application source code (front-end).
- **`JSON Server/`** - Mock backend/API used to serve data (products, etc.) via [json-server](https://github.com/typicode/json-server).
- **`FinalProject.zip`** - Packaged/archived version of the completed project.

## Features

- Amazon-inspired UI layout
- Product listing and browsing
- Shopping cart functionality
- Data served through a local JSON Server mock API

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- npm (comes bundled with Node.js)

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/janaggar/Amazon-clone.git
```
2. Navigate into the project folder:
```bash
   cd Amazon-clone/amazon-clone
```
3. Install dependencies:
```bash
   npm install
```

### Running the Mock API

1. Navigate to the JSON Server folder:
```bash
   cd "../JSON Server"
```
2. Start the JSON server (adjust command based on your setup, e.g.):
```bash
   npx json-server --watch db.json --port 3001
```

### Running the App

From the `amazon-clone` folder:
```bash
npm start
```
Then open `http://localhost:3000` in your browser.

## Purpose

This project was built for training purposes, to practice front-end development and connecting a UI to a mock REST API.

## License

No license specified. Feel free to reach out to the repository owner regarding usage.
