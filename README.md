# 🎬 YouTube Clone

A fully responsive YouTube clone built with React.js that replicates the core features of YouTube, including video browsing, playback, channel information, and comments section using the YouTube Data API v3.

![YouTube Clone Banner](https://img.shields.io/badge/YouTube-Clone-red?style=for-the-badge&logo=youtube&logoColor=white)

## 📺 Demo

🔗 **Live Demo:** [View Demo](#) <!-- Add your deployed link here -->

![Screenshot](./screenshots/home.png) <!-- Add screenshots later -->

---

## ✨ Features

- 🎥 **Video Playback** - Watch videos with embedded YouTube player
- 🔍 **Browse Videos** - Explore trending and popular videos
- 📂 **Category Filtering** - Filter videos by categories
- 💬 **Comments Section** - View video comments in real-time
- 📊 **Video Statistics** - View count, likes, and publish date
- 👤 **Channel Info** - Channel details with subscriber count
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎯 **Recommended Videos** - Related video suggestions

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | Frontend Framework |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | Navigation |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Programming Language |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling |
| ![YouTube API](https://img.shields.io/badge/YouTube-API-red?style=flat&logo=youtube&logoColor=white) | Data Source |
| ![Moment.js](https://img.shields.io/badge/Moment.js-000000?style=flat) | Date Formatting |

---

## 📁 Project Structure
Youtube-Clone/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ └── assets.js
│ ├── components/
│ │ ├── Feed/
│ │ │ ├── Feed.jsx
│ │ │ └── Feed.css
│ │ ├── Navbar/
│ │ │ ├── Navbar.jsx
│ │ │ └── Navbar.css
│ │ ├── PlayVideo/
│ │ │ ├── PlayVideo.jsx
│ │ │ └── PlayVideo.css
│ │ ├── Recommended/
│ │ │ ├── Recommended.jsx
│ │ │ └── Recommended.css
│ │ └── Sidebar/
│ │ ├── Sidebar.jsx
│ │ └── Sidebar.css
│ ├── hooks/
│ │ └── useFetch.js
│ ├── pages/
│ │ ├── Home/
│ │ │ └── Home.jsx
│ │ └── Video/
│ │ └── Video.jsx
│ ├── utils/
│ │ └── format.js
│ ├── data.js
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── .gitignore
├── package.json
└── README.md


---

## 🚀 Getting Started

### Prerequisites

- npm or yarn
- YouTube Data API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lobisloby/Youtube-Clone.git

Navigate to project directory

Bash

cd Youtube-Clone
Install dependencies

Bash

npm install
Create API Key

Go to Google Cloud Console
Create a new project
Enable YouTube Data API v3
Create credentials (API Key)
Configure API Key

Create or update src/data.js:

JavaScript

export const API_KEY = 'YOUR_YOUTUBE_API_KEY'
Run the application

Bash

npm run dev
Open in browser

text

http://localhost:5173
🔑 API Configuration
This project uses the YouTube Data API v3. You need to:

Get your API key from Google Cloud Console
Enable the YouTube Data API v3
Add your API key to src/data.js
⚠️ Note: Never commit your API key to GitHub. Use environment variables in production.

Using Environment Variables (Recommended)
Create a .env file:

env

VITE_YOUTUBE_API_KEY=your_api_key_here
Update src/data.js:

JavaScript

export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
📸 Screenshots
Home Page
Home Page

Video Player
Video Player

Mobile View
Mobile View

🎯 Key Features Explained
Custom useFetch Hook
JavaScript

// Reusable hook for API calls
const { data, loading, error } = useFetch(url, [dependencies])
View Count Formatter
JavaScript

// Converts 1000000 to "1M"
formatViews(1000000) // Returns "1M"
Responsive Sidebar
Collapsible on smaller screens
Smooth animations
Category filtering
🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository
Create a feature branch
Bash

git checkout -b feature/AmazingFeature
Commit your changes
Bash

git commit -m "Add some AmazingFeature"
Push to the branch
Bash

git push origin feature/AmazingFeature
Open a Pull Request
📝 Future Improvements
 Search functionality
 User authentication
 Like/Dislike feature
 Save to playlist
 Dark/Light theme toggle
 Video upload simulation
 Channel subscription
 Watch history
🐛 Known Issues
Comments may not load for some videos (API restrictions)
Some video thumbnails may not display (referrer policy)
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text

MIT License

Copyright (c) 2024 lobisloby

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
👤 Author
lobisloby

GitHub: @lobisloby
🙏 Acknowledgments
YouTube Data API
React.js
Moment.js
React Router
⭐ Show Your Support
Give a ⭐️ if you like this project!

<p align="center"> Made with ❤️ by <a href="https://github.com/lobisloby">lobisloby</a> </p> ```
📌 How to Use This README
Copy the content above

Replace your current README.md

Add screenshots (optional):

PowerShell

mkdir screenshots
Then add images: home.png, video.png, mobile.png

Push to GitHub:

PowerShell

git add .; git commit -m "update README"; git push
