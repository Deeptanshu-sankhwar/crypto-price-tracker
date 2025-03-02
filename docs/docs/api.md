# API Documentation

### 1. Get Current Price of a Cryptocurrency  
- **Endpoint:** `GET https://api.coincap.io/v2/assets/{crypto}`  
- **Example Request:** `GET https://api.coincap.io/v2/assets/bitcoin`  
- **Example Response:**  
  ```json
  {
    "data": {
      "id": "bitcoin",
      "rank": "1",
      "symbol": "BTC",
      "name": "Bitcoin",
      "priceUsd": "6931.50",
      "changePercent24Hr": "-0.81"
    }
  }
  ```

### 2. Get Historical Price Data  
- **Endpoint:** `GET https://api.coincap.io/v2/assets/{crypto}/history?interval={timeframe}`  
- **Example Request:** `GET https://api.coincap.io/v2/assets/bitcoin/history?interval=d1`  
- **Example Response:**  
  ```json
  {
    "data": [
      { "priceUsd": "6379.39", "time": 1530403200000 },
      { "priceUsd": "6466.31", "time": 1530489600000 }
    ]
  }
  ```

### Timeframe Options  
- `h1` → Last 1 hour (minute-wise data)  
- `d1` → Last 24 hours (hour-wise data)  
- `m1` → Last 30 days (day-wise data)  

### Usage in the App  
- The **Dashboard** fetches the latest prices.  
- The **Market Trends** page displays historical price changes.  

