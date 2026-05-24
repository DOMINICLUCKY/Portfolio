# Adarsh Mund - 3D Interactive Portfolio

A production-ready 3D portfolio website built with Next.js, Framer Motion, and React Three Fiber. Features immersive animations, floating project cards, and a sleek sidebar navigation.

## 🚀 Live Features

- **3D Hero Section** with animated particle background and floating geometry
- **Floating Project Cards** with 3D tilt effect on hover
- **Smooth Animations** powered by Framer Motion with spring physics
- **Sidebar Navigation** anchored to the right with smooth transitions
- **About Section** with skills, technologies, and achievements
- **Interactive Contact Form** with social media integration
- **Fully Responsive** design optimized for mobile and desktop
- **Dark Mode** by default with cyan and green gradient theme

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroSection.tsx          # 3D hero with particles
│   │   │   └── ProjectCards.tsx         # Floating 3D cards
│   │   └── ui/
│   │       ├── Sidebar.tsx              # Right-side navigation
│   │       ├── AboutSection.tsx         # Skills & achievements
│   │       └── ContactSection.tsx       # Contact form & social
│   ├── data/
│   │   └── projects.ts                  # Project & social data
│   ├── globals.css                      # Global styles & animations
│   ├── layout.tsx                       # Root layout with sidebar
│   ├── page.tsx                         # Main page combining sections
│   └── favicon.ico
├── public/
│   └── fonts/                           # Custom fonts directory
├── next.config.ts                       # Next.js configuration
├── tsconfig.json                        # TypeScript configuration
├── tailwind.config.ts                   # Tailwind CSS config
├── package.json                         # Dependencies
└── README.md                            # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion with spring physics
- **3D Graphics**: Three.js + React Three Fiber
- **Particle System**: react-tsparticles
- **UI Components**: Custom React components
- **Icons**: Inline SVG components
- **Development**: Next.js dev server with hot reload

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Running Locally

```bash
# Navigate to project
cd d:\portfolio

# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

The portfolio is now running at **http://localhost:3000**

### Build for Production
```bash
npm run build
npm run start
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `app/data/projects.ts`:

```typescript
export const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/YOUR_GITHUB",  // Update this
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/YOUR_LINKEDIN",  // Update this
  },
  {
    name: "Email",
    icon: "mail",
    url: "mailto:YOUR_EMAIL@example.com",  // Update this
  },
];
```

### 2. Update Projects

Edit the `projects` array in `app/data/projects.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Your project description here",
    technologies: ["Tech1", "Tech2", "Tech3"],
    image: "/projects/your-project.jpg",
    link: "https://your-project.com",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // Add more projects...
];
```

### 3. Update About Section Content

Edit `app/components/ui/AboutSection.tsx`:

```typescript
// Update the bio text in the left column
// Update the skills array with your technologies
const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', ...] },
  // ...
];
```

### 4. Update Contact Information

Edit `app/components/ui/ContactSection.tsx`:

```typescript
// Update email in the contact form
// Update location
// Update social links
```

### 5. Update Hero Section Name

Edit `app/components/3d/HeroSection.tsx`:

```typescript
<h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-green-400 mb-4 drop-shadow-lg">
  Your Name Here  {/* Update this */}
</h1>
```

### 6. Change Color Theme

The primary colors are defined in Tailwind classes. To change the cyan/green theme:

1. Search for `cyan-400`, `cyan-500`, `green-400` in component files
2. Replace with your desired colors (e.g., `blue-400`, `purple-400`)
3. Update `app/globals.css` custom animations if needed

Files to update:
- `app/components/3d/HeroSection.tsx`
- `app/components/3d/ProjectCards.tsx`
- `app/components/ui/Sidebar.tsx`
- `app/components/ui/AboutSection.tsx`
- `app/components/ui/ContactSection.tsx`

### 7. Add Project Images

1. Create project images or screenshots
2. Place them in `public/projects/` directory
3. Reference in `app/data/projects.ts`:

```typescript
image: "/projects/your-project.jpg",
```

## 📱 Responsive Design

- **Desktop** (1024px+): Full sidebar, 3-column project grid
- **Tablet** (768px - 1023px): Sidebar visible, 2-column project grid  
- **Mobile** (< 768px): Mobile menu with responsive layout

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import at https://vercel.com
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 🎯 Performance Optimization

- Tree-shaking removes unused code
- Server-side rendering for faster initial load
- Image optimization ready for production
- Lazy-loaded components
- CSS-in-JS is minimized and optimized

## ⚙️ Environment Variables

No required env vars for basic setup. Create `.env.local` if you add backend:

```bash
NEXT_PUBLIC_API_URL=your_api_url
```

## 📝 Animation Fine-tuning

### Adjust Spring Physics

In `app/components/3d/ProjectCards.tsx`:

```typescript
transition={{ 
  duration: 0.6,        // Slower/faster
  type: 'spring',
  bounce: 0.5           // More/less bounce
}}
```

### Change Particle Speed

In `app/components/3d/HeroSection.tsx`:

```typescript
meshRef.current.rotation.x += 0.001;  // Increase for faster
```

## 🐛 Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**3D not rendering?**
- Check browser console for WebGL errors
- Try different browser or hardware acceleration

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)

---

Built with ❤️ using Next.js, React Three Fiber, and Framer Motion

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
