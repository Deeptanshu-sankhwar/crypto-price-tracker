# Crypto Price Tracker  

**Live App:** [Crypto Price Tracker](https://crypto-price-tracker-nu.vercel.app/)  
**Documentation:** [Crypto Tracker Docs](https://docscrypto-price-tracker.vercel.app/)  

![Screenshot 2025-03-02 at 8 00 35 AM](https://github.com/user-attachments/assets/b624d693-6f8b-460d-866f-9f7680bfe665)

![Screenshot 2025-03-02 at 8 01 28 AM](https://github.com/user-attachments/assets/f0901b26-e398-44c3-a510-2e40d0fa92b3)

![Screenshot 2025-03-02 at 8 02 21 AM](https://github.com/user-attachments/assets/20247973-5208-4770-ad03-4e6a3bc868b0)

![Screenshot 2025-03-02 at 8 02 45 AM](https://github.com/user-attachments/assets/162bb602-a6d1-466b-89db-fefb17f80ab6)

## About  
Crypto Price Tracker is a **responsive web application** that allows users to **track live cryptocurrency prices** and **analyze historical market trends**. It is built using **Next.js, TypeScript, Tailwind CSS**, and the **CoinCap API** for fetching real-time market data.  

## Features  
- **Live price updates** – Fetch the latest cryptocurrency prices.  
- **Market trends visualization** – View historical price trends with interactive charts.  
- **Search functionality** – Easily find and track specific cryptocurrencies.  
- **Dark-themed UI** – Styled with Tailwind CSS for a clean and modern design.  
- **Fully responsive** – Works well on mobile, tablet, and desktop.  
- **Manual refresh button** – Avoids unnecessary API calls by fetching data only when requested.  
- **Deployed on Vercel** – Ensures fast and scalable hosting.  

---

## Getting Started  

### 1. Clone the Repository  
```sh
git clone https://github.com/Deeptanshu-sankhwar/crypto-price-tracker.git
cd crypto-price-tracker
```

### 2. Install Dependencies  
Ensure you have **Node.js** (v18+) installed. Then, run:  
```sh
cd web-app
npm install
```

### 3. Run the App Locally  
```sh
npm run dev
```
This will start the app at **`http://localhost:3000`**.  

---

## Running Tests & Checking Coverage  
This project includes **unit tests** written using **Jest and React Testing Library** to ensure correctness of the core functionalities.  

To run the tests:  
```sh
npm test
```
To check test coverage:  
```sh
npm test -- --coverage
```
This will generate a report showing how much of the codebase is covered by tests.

---

## Project Structure  

```
crypto-price-tracker/
│── web-app/         # Next.js application
│   ├── components/  # UI components
|   │   ├── tests/       # Unit tests
│   ├── context/     # State management using Context API
│   ├── hooks/       # Custom React hooks
│── docs/            # Docusaurus documentation
│── .github/         # GitHub Actions workflows
│── .gitignore       # Ignored files
│── README.md        # Project documentation
```

---

## Deployment  
This project is deployed on **Vercel**. To deploy manually, use:  
```sh
vercel deploy
```
The latest version can be accessed at **[Crypto Price Tracker](https://crypto-price-tracker-nu.vercel.app/)**.

---

## Documentation  
For setup guides, API details, and project structure, refer to the full documentation:  
**[Crypto Tracker Docs](https://docscrypto-price-tracker.vercel.app/)**  

---

## Contact  
For any questions, please contact: **desa4692@colorado.edu**
