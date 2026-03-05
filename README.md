🎰 CountBet

A React training application designed to help casino dealers improve their roulette bet counting speed and accuracy.

The app displays real betting table images and allows the user to mentally calculate the total bet amount before revealing the correct answer.

🚀 Live Demo

🔗 Try the app:
👉 Live Demo: [https://my-link.com](https://calculate-dealer-bets.vercel.app/)

📸 Preview
<img width="556" height="627" alt="Image" src="https://github.com/user-attachments/assets/4d981193-b0c5-4f75-839c-96ba548bfc33" />

✨ Features

🎲 Randomized bet images

🧠 Mental calculation training

🔄 Non-repeating shuffled bet deck

👁️ Reveal correct answer

➡️ Navigate through bet scenarios

🎨 Casino-style UI

📱 Fully responsive layout

🧠 How It Works

1. The application loads bet data from bets.json.

2. Each bet contains:
   - an image of the betting layout

   - the correct total bet amount.

3. The bet list is shuffled using the Fisher–Yates algorithm.

4. The user attempts to calculate the bet mentally.

5. Press Show Me Answer to reveal the result.

6. Press Next Bet to move to another bet scenario.

🧱 Project Structure
public
├── api
│ └── bets.json
│
└── assets
└── bets
└── bet images
src
├── components
│ ├── BetCards.jsx
│ ├── FlashCard.jsx
│ └── Button.jsx
│
├── services
│ ├── bets.service.js
│ ├── http.js
│ └── shuffle.js
│
├── App.css
├── App.js
├── background.png
├── index.css
└── index.js

⚙️ Tech Stack

- React

- TailwindCSS

- JavaScript (ES6+)

- Fetch API

📦 Installation

Clone the repository:
</> Bash

git clone (PASTE_YOUR_REPOSITORY_LINK_HERE)

Navigate to the project folder:
</> Bash

cd countbet

Install dependencies:
</> Bash
npm install

Start development server:
</> Bash
npm start

Open the app:
http://localhost:3000

📊 Example Bet Data

Example entry inside bets.json:

{
"id": 7,
"image": "/assets/bets/bet7.webp",
"answer": 364
}

🎯 Purpose of the Project

This project was built as a training tool for casino dealers to improve:

- bet counting speed

- chip value recognition

- mental arithmetic under pressure

🔮 Future Improvements

- ⏱ Timer mode

- 🧮 Score tracking

- 📈 Performance statistics

- 🎯 Difficulty levels

- 🧠 Spaced repetition learning

👩‍💻 Author

Mariami Makhniashvili

Frontend Developer (React)

⭐ Support

# If you like this project, consider giving it a ⭐ on GitHub.

# Calculate-Dealer-Bets
