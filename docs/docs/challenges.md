# Challenges Faced  

## 1. State Management  
- Using `useState` in multiple places led to duplicate API calls.  
- **Solution:** Implemented **Context API** for global state management.  

## 2. Responsive UI  
- The sidebar was overlapping the main content on mobile.  
- **Solution:** Made it collapsible using Tailwind CSS.  

## 3. API Rate Limits  
- Too many requests caused failures.  
- **Solution:** Removed polling and added a manual refresh button.  

## 4. Testing Setup Issues  
- Jest was throwing errors related to missing `fetch` in Node.js.  
- **Solution:** Used `jest-fetch-mock` for API mocking.  

## 5. GitHub Actions Failing  
- CI was failing due to missing lock files.  
- **Solution:** Adjusted the workflow to generate a lock file if missing.  
