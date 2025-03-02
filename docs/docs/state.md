# State Management  

## Why Context API?  
Using `useState` everywhere led to:  
- Duplicate API calls  
- Inconsistent data  
- Difficult state sharing  

## Solution: CryptoContext  
A centralized store for crypto data.  

## How It Works  
1. **`CryptoProvider`** wraps the app and fetches prices.  
2. **Dashboard** consume this data.  
3. Calling **`refresh()`** updates all components at once.  

## Benefits  
- Avoids unnecessary API calls  
- Keeps data consistent across components  
- Easier to maintain & scale  