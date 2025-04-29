# 🌴 Normadize - Tropical Resort Landing Page

![Screenshot 2025-04-29 143458](https://github.com/user-attachments/assets/fd01c98a-ea44-417c-a0ac-1d1145ee0560)![Screenshot 2025-04-29 143450](https://github.com/user-attachments/assets/cb555313-66ff-4e48-a444-aad44327a770)
A luxurious tropical resort landing page with elegant animations and responsive design.
## ✨ Features

| Feature | Description |
|---------|-------------|
| **Dynamic Header** | Transparent header that elegantly transforms on scroll |
| **Clean navigation**| Neat navigation bar with hover effects
| **Interactive UI** | Animated buttons and social icons with platform-specific effects |
| **Responsive Design** | Optimized for all device sizes |
| **Performance Optimized** | Smooth animations with efficient rendering |

## 🌊 Dynamic Scroll Effects
Smooth UI transformations triggered by scroll position
// In Header.jsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Activates after 50px scroll
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

## Visual Transformations
When scrolled (isScrolled = true), these elements transform:

Element	Change	CSS Snippet
Header Background	Transparent → Opaque white	background: rgba(255,255,255,0.98);
Navigation Links	White → Deep blue	color: #2c3e50;
Search Box	Light overlay → Solid white	background: white;
Sign-Up Button	Flat → Subtle shadow	box-shadow: 0 4px 8px rgba(0,0,0,0.1);
Logo Text	Light → Dark	color: #2c3e50;

This provides a:
-Seamless UX: Maintains visibility while feeling lightweight
-Easy to Extend: Add more effects by expanding the .scrolled class

## 🛠️ Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Michael99-alt/normadize.git
   cd normadize
## Install dependencies
npm install
## Run the development server
npm run dev
## Open in browser
http://localhost:3000
## 📂 Project Structure
src/
├── components/
│   ├── Header/          # Dynamic scroll-responsive header
│   │   ├── Header.jsx
│   │   └── Header.css
├── App.jsx             # Main application component
├── App.css             # Global styles
└── assets/             # Image resources
## 📜 License
Distributed under the MIT License. See LICENSE for more information.
