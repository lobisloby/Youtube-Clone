# 🎬 YouTube Clone

A fully responsive YouTube clone built with React.js that replicates the core features of YouTube, including video browsing, playback, channel information, and comments section using the YouTube Data API v3.

![YouTube Clone Banner](./screenshots/home.png)

---

## 📺 Demo

🔗 **Live Demo:** [View Demo](#) <!-- Add your deployed link here -->

![Screenshot](./screenshots/home2.png) <!-- Add screenshots later -->

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎥 **Video Playback** | Watch videos with embedded YouTube player |
| 🔍 **Browse Videos** | Explore trending and popular videos |
| 📂 **Category Filtering** | Filter videos by categories |
| 💬 **Comments Section** | View video comments in real-time |
| 📊 **Video Statistics** | View count, likes, and publish date |
| 👤 **Channel Info** | Channel details with subscriber count |
| 📱 **Responsive Design** | Works on desktop, tablet, and mobile |
| 🎯 **Recommended Videos** | Related video suggestions |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Frontend Framework |
| React Router | Navigation |
| JavaScript | Programming Language |
| CSS3 | Styling |
| YouTube API | Data Source |
| Moment.js | Date Formatting |

---

## 📁 Project Structure

    Youtube-Clone/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   │   └── assets.js
    │   ├── components/
    │   │   ├── Feed/
    │   │   │   ├── Feed.jsx
    │   │   │   └── Feed.css
    │   │   ├── Navbar/
    │   │   │   ├── Navbar.jsx
    │   │   │   └── Navbar.css
    │   │   ├── PlayVideo/
    │   │   │   ├── PlayVideo.jsx
    │   │   │   └── PlayVideo.css
    │   │   ├── Recommended/
    │   │   │   ├── Recommended.jsx
    │   │   │   └── Recommended.css
    │   │   └── Sidebar/
    │   │       ├── Sidebar.jsx
    │   │       └── Sidebar.css
    │   ├── hooks/
    │   │   └── useFetch.js
    │   ├── pages/
    │   │   ├── Home/
    │   │   │   └── Home.jsx
    │   │   └── Video/
    │   │       └── Video.jsx
    │   ├── utils/
    │   │   └── format.js
    │   ├── data.js
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── .gitignore
    ├── package.json
    └── README.md

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- npm or yarn
- YouTube Data API Key

### Installation

**1. Clone the repository**

    git clone https://github.com/lobisloby/Youtube-Clone.git

**2. Navigate to project directory**

    cd Youtube-Clone

**3. Install dependencies**

    npm install

**4. Create API Key**

- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a new project
- Enable YouTube Data API v3
- Create credentials (API Key)

**5. Configure API Key**

Create or update `src/data.js`:

    export const API_KEY = 'YOUR_YOUTUBE_API_KEY'

**6. Run the application**

    npm run dev

**7. Open in browser**

    http://localhost:5173

---

## 🔑 API Configuration

This project uses the **YouTube Data API v3**. You need to:

1. Get your API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the YouTube Data API v3
3. Add your API key to `src/data.js`

> ⚠️ **Note:** Never commit your API key to GitHub. Use environment variables in production.

### Using Environment Variables (Recommended)

**1. Create a `.env` file:**

    VITE_YOUTUBE_API_KEY=your_api_key_here

**2. Update `src/data.js`:**

    export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

---

## 📸 Screenshots

### Home Page
![Home Page](./screenshots/home.png)

### Video Player
![Video Player](./screenshots/video.png)

### Mobile View
![Mobile View](./screenshots/mobile.png)

---

## 🎯 Key Features Explained

### Custom useFetch Hook

    // Reusable hook for API calls
    const { data, loading, error } = useFetch(url, [dependencies])

### View Count Formatter

    // Converts 1000000 to "1M"
    formatViews(1000000) // Returns "1M"

### Responsive Sidebar

- Collapsible on smaller screens
- Smooth animations
- Category filtering

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

**1. Fork the repository**

**2. Create a feature branch**

    git checkout -b feature/AmazingFeature

**3. Commit your changes**

    git commit -m "Add some AmazingFeature"

**4. Push to the branch**

    git push origin feature/AmazingFeature

**5. Open a Pull Request**

---

## 📝 Future Improvements

- [ ] Search functionality
- [ ] User authentication
- [ ] Like/Dislike feature
- [ ] Save to playlist
- [ ] Dark/Light theme toggle
- [ ] Video upload simulation
- [ ] Channel subscription
- [ ] Watch history

---

## 🐛 Known Issues

- Comments may not load for some videos (API restrictions)
- Some video thumbnails may not display (referrer policy)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

---

## 👤 Author

**lobisloby**

- GitHub: [@lobisloby](https://github.com/lobisloby)

---

## 🙏 Acknowledgments

- [YouTube Data API](https://developers.google.com/youtube/v3)
- [React.js](https://reactjs.org/)
- [Moment.js](https://momentjs.com/)
- [React Router](https://reactrouter.com/)

---

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/lobisloby">lobisloby</a>
</p>
