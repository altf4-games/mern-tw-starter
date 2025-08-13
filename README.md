# MERN Stack Starter with Tailwind CSS

A clean MERN (MongoDB, Express.js, React, Node.js) stack starter template with Tailwind CSS, featuring a beautiful UI and organized folder structure ready for expansion.

## 🚀 Features

- **Frontend**: React 19 + Vite + Tailwind CSS 4
- **Backend**: Simple Express.js server ready for expansion
- **UI Components**: Beautiful, reusable components
- **Responsive Design**: Mobile-first approach
- **Modern Styling**: Tailwind CSS with custom animations
- **Development**: Hot reload, ESLint, Nodemon
- **Clean Structure**: Organized folders with .gitkeep files
- **Template Focus**: Showcases modern web development practices

## 📁 Project Structure

```
mern-tw-starter/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── ui/          # Basic UI components
│   │   │   ├── layout/      # Layout components
│   │   │   └── sections/    # Page sections
│   │   ├── hooks/           # Custom React hooks (.gitkeep)
│   │   ├── services/        # API services (.gitkeep)
│   │   ├── utils/           # Utility functions (.gitkeep)
│   │   ├── pages/           # Page components (.gitkeep)
│   │   └── assets/          # Static assets
│   └── package.json
├── backend/                  # Node.js backend
│   ├── config/              # Database & app config (.gitkeep)
│   ├── controllers/         # Route controllers (.gitkeep)
│   ├── middleware/          # Custom middleware (.gitkeep)
│   ├── models/              # MongoDB models (.gitkeep)
│   ├── routes/              # API routes (.gitkeep)
│   ├── app.js               # Simple Express server
│   └── package.json
└── package.json             # Root package.json
```

## 🛠️ Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd mern-tw-starter
   ```

2. **Install dependencies**

   ```bash
   npm run install-deps
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

This will start both frontend (http://localhost:5173) and backend (http://localhost:5000) servers.

## 📝 Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run client` - Start only frontend development server
- `npm run server` - Start only backend development server
- `npm run build` - Build frontend for production
- `npm run start` - Start backend in production mode

## 🎨 UI Components

The template includes pre-built, customizable components:

- **Button**: Multiple variants and sizes
- **Card**: Flexible card layouts
- **Header**: Responsive navigation with mobile menu
- **Footer**: Professional footer with social links
- **Hero**: Eye-catching landing section
- **Features**: Feature showcase grid

## � Getting Started

The template includes:

- **Beautiful Landing Page**: Modern hero section with animations
- **Responsive Components**: Header, footer, and feature sections
- **Clean Architecture**: Organized folder structure ready for expansion
- **Development Ready**: Both frontend and backend servers configured

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Render/Heroku)

```bash
cd backend
# Set environment variables in your hosting platform
# Deploy with start script: npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
