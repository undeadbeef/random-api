# Random Number Generator API

## Overview
The Random Number Generator API provides a simple and efficient way to generate random numbers. This API can be used in various applications where random number generation is required, such as in gaming, simulations, security, and more. 123

## Features
- Generate random integers within a specified range.
- Generate random floating-point numbers.
- Support for generating multiple random numbers in a single request.
- Lightweight and easy to integrate.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/random-number-generator-api.git
    ```
2. Navigate to the project directory:
    ```sh
    cd random-number-generator-api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Usage
1. Start the server:
    ```sh
    npm start
    ```
2. The API will be available at `http://localhost:3000`.

### API Endpoints

#### Generate Random Integer
- **Endpoint:** `/api/random/int`
- **Method:** `GET`
- **Parameters:**
  - `min` (optional): Minimum value (default: 0)
  - `max` (optional): Maximum value (default: 100)
- **Response:**
    ```json
    {
      "randomNumber": 42
    }
    ```

#### Generate Random Float
- **Endpoint:** `/api/random/float`
- **Method:** `GET`
- **Parameters:**
  - `min` (optional): Minimum value (default: 0.0)
  - `max` (optional): Maximum value (default: 1.0)
- **Response:**
    ```json
    {
      "randomNumber": 0.123456789
    }
    ```

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
