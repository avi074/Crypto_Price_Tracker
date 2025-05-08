# Real-Time Crypto Price Tracker

A responsive React app that tracks real-time cryptocurrency prices using the [CoinGecko API](https://www.coingecko.com/en/api). The app displays live updates for crypto assets and includes interactive charts using [Recharts](https://recharts.org/). The app allows sorting by different percentage change timeframes and is built using **Redux Toolkit** for state management.

🎯 **Objective**  
Build a responsive React app to track real-time cryptocurrency prices. The app uses the CoinGecko API to fetch live data, displays it in a sortable table, and shows 7-day price trends with interactive charts.

---

## 🛠️ **Tech Stack**

- **React** – Frontend library for building the user interface
- **Redux Toolkit** – For state management using `createSlice` and `configureStore`
- **TypeScript** – For static typing and better code maintainability
- **CoinGecko API** – For fetching real-time cryptocurrency data
- **Recharts** – For displaying interactive 7-day price trend charts
- **CSS / TailwindCSS** – For styling and responsive design
- **Mocked WebSocket Simulation** – Simulating real-time updates for price changes

---

## 📊 **Features**

### UI Table:

- **Display 5 crypto assets** (e.g., BTC, ETH, USDT) with the following data:
  - **#** | Logo | Name | Symbol | Price | 1h % | 24h % | 7d % | Market Cap | 24h Volume | Circulating Supply | Max Supply | 7D Chart
- **Sorting Feature**: By default, the table is sorted by **24h % change** (descending). You can click on **1h**, **24h**, or **7d %** to sort by these metrics.
- **Color-coded percentage changes**: Green (positive) and Red (negative).
- The **7D chart** is generated using Recharts, displaying a 7-day price trend for each asset.

### Real-Time Updates:

- Integrated with **CoinGecko API** for fetching live crypto data.
- Real-time updates for:
  - **Price**
  - **1h %**
  - **24h %**
  - **7d %**
  - **Market Cap**
  - **24h Volume**
- The app simulates WebSocket-like behavior by periodically updating the displayed data.

### Redux State Management:

- **Redux Toolkit** is used to manage global state:
  - **createSlice** for reducers and actions.
  - **Selectors** for optimized re-renders.
  - Store all asset data in **Redux** for global management and efficient updates.

---

## 🌟 **Bonus Features**

- **Sorting**: Users can sort crypto assets by **1h**, **24h**, or **7d** percentage changes.
- **Responsive Design**: The table layout is responsive and adapts to various screen sizes.
- **Recharts**: Integrated charts for visualizing the 7-day price trends of crypto assets.
- **TypeScript Support**: Built with TypeScript for better maintainability and static type checking.

---

## 📁 **Project Setup**

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system. You can download Node.js from [here](https://nodejs.org/).

### Installation Steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/avi074/Crypto_Price_Tracker.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Crypto_Price_Tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## 🌟 **Bonus Features**

- **Sorting**: Users can sort the table by **1h %**, **24h %**, or **7d %**.
- **Recharts Integration**: Interactive charts show the 7-day price trend for each asset.
- **Responsive Layout**: The table layout is mobile-friendly and adjusts to different screen sizes.
- **LocalStorage Support**: Users’ preferences for selected assets are stored in localStorage to retain their view on refresh.

---

## 🚀 **Next Steps**

- **WebSocket Integration**: Consider adding a real WebSocket connection for live updates.
- **Advanced Sorting and Filtering**: Implement more complex sorting/filtering mechanisms like top gainers, top losers, etc.

---

## 📌 **Notes**

- The 7D chart is rendered using static data, but it can be enhanced by fetching real-time data from the API for dynamic updates.
- The app relies on **CoinGecko API** to fetch cryptocurrency data, which provides accurate, real-time information.

---

Happy coding! 🚀
