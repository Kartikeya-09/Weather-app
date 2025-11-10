# Weather Dashboard (React + Node proxy)

A simple weather dashboard that fetches data from the OpenWeatherMap API. This project includes:

- A React frontend (client) that shows current weather + 5-day forecast and supports:
  - city search
  - current location (geolocation)
  - error and loading states
- A minimal Node/Express proxy (server) to keep your OpenWeatherMap API key out of client bundle

You can run only the client (using your own API key directly) or the client + server proxy (recommended for security).

Quick start (recommended: client + server)
1. Create an OpenWeatherMap account and get an API key: https://openweathermap.org/api
2. Start the server:
   - cd server
   - create a .env file (see .env.example) with OPENWEATHER_API_KEY
   - npm install
   - npm start
3. Start the client:
   - cd client
   - npm install
   - npm start
4. Open http://localhost:3000

If you prefer no server, set RE
