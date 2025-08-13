# MERN Stack Starter with Tailwind CSS

A clean MERN (MongoDB, Express.js, React, Node.js) stack starter template with Tailwind CSS, featuring a beautiful UI and organized folder structure ready for expansion.

## 🚀 Features

- **Frontend**: React 19 + Vite + Tailwind CSS 4
- **Backend**: Express.js server ready for expansion  
- **UI Components**: Beautiful, reusable components with modern styling
- **Responsive Design**: Mobile-first approach with custom animations
- **Development Tools**: Hot reload, ESLint, Nodemon for smooth development
- **Clean Architecture**: Organized folder structure with placeholder files
- **Production Ready**: Build scripts and deployment configurations

## 🎯 Using This Template

### Method 1: Use GitHub Template (Recommended)

1. **Create from template**
   - Go to [mern-tw-starter](https://github.com/altf4-games/mern-tw-starter)
   - Click the green "Use this template" button
   - Choose "Create a new repository"
   - Name your new repository and create it

2. **Clone your new repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

### Method 2: Clone Directly

1. **Clone the template**
   ```bash
   git clone https://github.com/altf4-games/mern-tw-starter.git
   cd mern-tw-starter
   ```

2. **Remove original git history (optional)**
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit"
   ```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Quick Start

1. **Install all dependencies**
   ```bash
   npm run install-deps
   ```
   This installs dependencies for both frontend and backend.

2. **Start development servers**
   ```bash
   npm run dev
   ```
   This starts both servers concurrently:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

3. **Open your browser**
   Navigate to http://localhost:5173 to see your application running!

## 📁 Project Structure

```
your-project-name/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── ui/          # Basic UI components (Button, Card, etc.)
│   │   │   ├── layout/      # Layout components (Header, Footer)
│   │   │   └── sections/    # Page sections (Hero, Features)
│   │   ├── hooks/           # Custom React hooks (ready for expansion)
│   │   ├── services/        # API service functions (ready for expansion)
│   │   ├── utils/           # Utility functions (ready for expansion)
│   │   ├── pages/           # Page components (ready for expansion)
│   │   └── assets/          # Static assets (images, icons)
│   ├── public/              # Public static files
│   ├── package.json
│   └── vite.config.js       # Vite configuration
├── backend/                  # Node.js backend application
│   ├── config/              # Database & app configuration (ready for expansion)
│   ├── controllers/         # Route controllers (ready for expansion)
│   ├── middleware/          # Custom middleware (ready for expansion)
│   ├── models/              # MongoDB models (ready for expansion)
│   ├── routes/              # API routes (ready for expansion)
│   ├── app.js               # Express server setup
│   └── package.json
├── package.json             # Root package.json with scripts
└── README.md                # This file
```

## 📝 Available Scripts

Run these commands from the project root:

- `npm run install-deps` - Install dependencies for both frontend and backend
- `npm run dev` - Start both frontend and backend in development mode
- `npm run client` - Start only frontend development server
- `npm run server` - Start only backend development server  
- `npm run build` - Build frontend for production
- `npm start` - Start backend in production mode

## 🎨 What's Included

### Pre-built UI Components
- **Button**: Multiple variants (primary, secondary, outline) and sizes
- **Card**: Flexible card layouts with hover effects
- **Header**: Responsive navigation with mobile hamburger menu
- **Footer**: Professional footer with social links and company info
- **Hero**: Eye-catching landing section with animations
- **Features**: Feature showcase grid with icons and descriptions

### Ready-to-Use Pages
- **Landing Page**: Complete homepage with hero, features, and call-to-action sections
- **Component Showcase**: Demonstrates all available UI components

### Development Features
- **Hot Reload**: Instant updates during development
- **ESLint**: Code linting for consistent code quality
- **Tailwind CSS**: Utility-first styling with custom configurations
- **Responsive Design**: Mobile-first approach with breakpoint utilities

## 🔧 Customization

### Frontend Customization
1. **Update branding** in `frontend/src/components/layout/Header.jsx` and `Footer.jsx`
2. **Modify colors** in `frontend/tailwind.config.js`
3. **Add pages** in `frontend/src/pages/` directory
4. **Create new components** in `frontend/src/components/`

### Backend Customization
1. **Add database models** in `backend/models/`
2. **Create API routes** in `backend/routes/`
3. **Add controllers** in `backend/controllers/`
4. **Configure middleware** in `backend/middleware/`

### Environment Variables
Create `.env` files in both frontend and backend directories as needed:

**Backend `.env` example:**
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/yourapp
JWT_SECRET=your-jwt-secret
```

**Frontend `.env` example:**
```
VITE_API_URL=http://localhost:5000
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist/ folder to your hosting service
```

### Backend (Railway/Render/Heroku)
```bash
cd backend
# Configure environment variables in your hosting platform
# Deploy with start script: npm start
```

## 📚 Next Steps

After setting up the template:

1. **Configure your database** - Add MongoDB connection in `backend/config/`
2. **Create your data models** - Add Mongoose schemas in `backend/models/`
3. **Build your API** - Add routes and controllers for your application logic
4. **Design your pages** - Create new React components and pages
5. **Style your app** - Customize Tailwind config and add your brand colors
6. **Add authentication** - Implement user login/register functionality
7. **Deploy your app** - Choose your hosting providers and deploy

## 🤝 Contributing

If you'd like to contribute to the template:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Template Repository**: https://github.com/altf4-games/mern-tw-starter
- **Issues & Support**: https://github.com/altf4-games/mern-tw-starter/issues
- **Discussions**: https://github.com/altf4-games/mern-tw-starter/discussions

---
