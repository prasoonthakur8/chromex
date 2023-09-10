# ChromeX

ChromeX is a base template for building Chrome Extensions using Tailwind CSS, Webpack, and jQuery.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Importing into Chrome](#importing-into-chrome)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Getting Started

Clone the repository to your local machine.

```bash
git clone https://github.com/anuragdeepxon/chromex.git
cd chromex
```

## Prerequisites

Make sure you have Node.js and npm installed. The project primarily uses the following technologies:

- Webpack
- Tailwind CSS
- jQuery

## Installation

Install the required packages using npm.

```bash
npm install
```

This will install all the dependencies defined in `package.json`.

## Development

Start the development server.

```bash
npm run dev
```

This will watch for changes in the `src` directory and automatically compile the code into the `dist` folder.

## Building

To build the extension for production, run:

```bash
npm run build
```

This will create optimized files in the `dist` directory.

## Importing into Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable Developer Mode by clicking the toggle switch.
3. Click on "Load Unpacked."
4. Navigate to the `dist` directory of this project and click "Select."

You should now see the Chromex extension icon in your Chrome toolbar.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Author

- Anurag Deep
  - [Website](https://anuragdeep.com)
  - [LinkedIn](https://www.linkedin.com/in/anuragdeepxon/)

