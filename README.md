# Servio — Restaurant Ordering Management System

A modern, real-time restaurant ordering and management system that streamlines operations from table to kitchen to checkout.

## 🌟 Features

- **Real-Time Updates** - WebSocket-powered live updates ensure all staff see order changes instantly
- **Multi-Role Support** - 5 distinct user roles (Manager, Server, Chef, Host, Cashier) with tailored interfaces
- **Responsive Design** - 100% responsive layout that works seamlessly across all devices
- **Inventory Management** - Track stock and manage menu items efficiently
- **Order Tracking** - Real-time order status from placement to completion
- **Animated UI** - Beautiful gradient animations and smooth scroll interactions
- **Mobile Optimized** - Touch-friendly interface for servers on the floor

## 🛠️ Tech Stack

- **Frontend**
  - HTML5
  - CSS3 (with CSS variables and animations)
  - Vanilla JavaScript (ES6+)
  - Canvas API for animated backgrounds

- **Backend**
  - Node.js
  - Express.js

- **Additional**
  - WebSockets for real-time updates
  - Responsive design (mobile-first approach)

## 📋 Project Structure

```
servio_website/
├── index.html          # Main landing page
├── style.css           # Styling (animations, responsive design)
├── script.js           # Interactive features and animations
├── server.js           # Express server configuration
├── package.json        # Project dependencies
├── Procfile            # Deployment configuration
├── public/             # Static assets
│   ├── servio.png      # Logo
│   └── favicon.png     # Favicon
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Nurlanbcg/servio_website.git
cd servio_website
```

2. Install dependencies
```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

For development with auto-reload:
```bash
npm run dev
```

## 🌐 Deployment

This project is configured for deployment on **Render**.

### Deploy to Render

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set the build command: `npm install`
4. Set the start command: `npm start`
5. Ensure the publish directory is empty or set to root (`.`)

The server will automatically:
- Install dependencies
- Serve static files (HTML, CSS, JavaScript, images)
- Handle routing for SPA-style navigation

## 📱 Usage

### Navigation
- Click navigation links to scroll to sections
- Mobile menu available on smaller screens
- Smooth scroll behavior enabled

### Sections
- **Features** - Overview of Servio's capabilities
- **Roles** - Details about the 5 user roles
- **Tech Stack** - Technologies used
- **Workflow** - System workflow diagram
- **Contact** - Get in touch

## 🎨 Design

The design features:
- Dark theme with orange accent colors
- Animated gradient background canvas
- Responsive typography using `clamp()`
- Smooth scroll animations
- Accessible button and link styling

## 📝 File Details

### server.js
Express server that serves static files and handles routing:
- Serves CSS, JavaScript, PNG, and JPEG with correct MIME types
- Serves the public directory for images and assets
- Routes all requests to index.html for SPA functionality
- Runs on PORT environment variable or 3000

### script.js
Client-side functionality including:
- Animated gradient canvas background
- Mobile navigation toggle
- Smooth scroll animations
- Intersection Observer for scroll reveals
- Smooth anchor link scrolling
- Contact form handling

### style.css
Comprehensive styling with:
- CSS custom properties (variables) for theming
- Responsive grid layouts
- Animations and transitions
- Mobile-first approach with media queries
- Dark mode styling

## 🔧 Configuration

### Environment Variables
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

### MIME Types
The server automatically sets correct MIME types for:
- `.css` → text/css
- `.js` → application/javascript
- `.png` → image/png
- `.jpg/.jpeg` → image/jpeg

## 🐛 Troubleshooting

### Files not loading
- Ensure the `public` directory exists with necessary assets
- Check that `server.js` is running on the correct port
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Deploy failures
- Check Render logs for specific errors
- Verify all static files are committed to Git
- Ensure package.json has correct build and start scripts

## 📄 License

ISC

## 👨‍💻 Author

Nurlan - [GitHub](https://github.com/Nurlanbcg)

## 📞 Contact

For inquiries or support, reach out through the contact form on the website or via GitHub.