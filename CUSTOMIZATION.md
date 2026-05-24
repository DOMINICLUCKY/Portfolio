# Portfolio Customization Guide

Complete guide to customize your 3D portfolio website with examples.

## 📝 Step-by-Step Customization

### Step 1: Update Your Projects

**File**: `app/data/projects.ts`

Replace the default projects with your own:

```typescript
export const projects = [
  {
    id: 1,
    title: "AI Stock Analyzer",
    description:
      "Machine learning model that predicts stock prices using historical data and sentiment analysis from financial news.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
    image: "/projects/stock-analyzer.jpg",
    link: "https://stock-analyzer.com",
    features: ["Price Prediction", "Sentiment Analysis", "Real-time Charts"],
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "Collaborative project management tool with real-time updates, team assignments, and automated workflows.",
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    image: "/projects/task-manager.jpg",
    link: "https://task-manager.com",
    features: ["Real-time Sync", "Team Collaboration", "Auto Workflows"],
  },
  // Add 3-5 projects maximum for better performance
];
```

**Tips**:
- Keep descriptions under 150 characters
- Use 3-5 technologies per project
- Provide 2-3 key features
- Store project images in `public/projects/` folder

---

### Step 2: Update Your Profile Information

**File**: `app/components/3d/HeroSection.tsx`

Change your name in the hero section:

```typescript
<h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-green-400 mb-4 drop-shadow-lg">
  Adarsh Mund  {/* Replace with your name */}
</h1>
<p className="text-xl md:text-2xl text-cyan-300 font-light tracking-widest">
  Full-Stack Developer  {/* Update your title */}
</p>
```

---

### Step 3: Update Social Links

**File**: `app/data/projects.ts`

Update your social media URLs:

```typescript
export const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/yourusername",  // Replace with YOUR GitHub
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/yourprofile",  // Replace with YOUR LinkedIn
  },
  {
    name: "Email",
    icon: "mail",
    url: "mailto:youremail@example.com",  // Replace with YOUR email
  },
];
```

Also update in these files:
- `app/components/ui/Sidebar.tsx` - Social icons at bottom
- `app/components/ui/ContactSection.tsx` - Social icons in contact

---

### Step 4: Update About Section

**File**: `app/components/ui/AboutSection.tsx`

Update the bio paragraph:

```typescript
<p className="text-gray-300 leading-relaxed mb-4">
  I'm a passionate developer currently studying at [Your School/University],
  specializing in building scalable, intelligent web applications. 
  I thrive in fast-paced environments like hackathons, where I've built 
  innovative solutions with teams.
</p>
<p className="text-gray-300 leading-relaxed">
  My journey spans from frontend magic with React and Next.js to robust 
  backend systems using Node.js and MongoDB. I'm particularly passionate 
  about [Your Passion Area - e.g., AI Integration, 3D Web, etc.].
</p>
```

Update the statistics:

```typescript
{[
  { label: 'Hackathons', value: '5+' },      // Change these numbers
  { label: 'Projects', value: '20+' },
  { label: 'Technologies', value: '25+' },
  { label: 'Experience', value: '3+ Years' },
].map((stat, idx) => (
  // Component renders here
))}
```

Update your skills:

```typescript
const skills = [
  { 
    category: 'Frontend', 
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'] 
  },
  { 
    category: 'Backend', 
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Firebase'] 
  },
  { 
    category: 'Tools & Platforms', 
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Figma'] 
  },
  { 
    category: 'Specializations', 
    items: ['Full-Stack Development', 'AI/ML Integration', '3D Web', 'DevOps', 'System Design'] 
  },
];
```

---

### Step 5: Update Contact Section

**File**: `app/components/ui/ContactSection.tsx`

Update contact information:

```typescript
// In the contact info section, update:
<p className="text-cyan-400 font-semibold">
  your.email@example.com  {/* Replace with YOUR email */}
</p>
<p className="text-cyan-400 font-semibold">
  Bhubaneswar, India  {/* Replace with YOUR location */}
</p>
```

Update email form submission:

```typescript
// Currently it just shows a success message. To add backend:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    // Send to your backend or email service
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    setIsSubmitted(true);
  } catch (error) {
    console.error(error);
  }
};
```

---

## 🎨 Design Customization

### Change Color Theme

**Colors used throughout**:
- Cyan: `cyan-400`, `cyan-500`
- Green: `green-400`, `green-500`
- Gray: `gray-300`, `gray-400`

**To change cyan to blue**:
1. Open `app/globals.css` and search for cyan
2. In each component file, replace:
   - `from-cyan-400` → `from-blue-400`
   - `to-cyan-300` → `to-blue-300`
   - `cyan-500` → `blue-500`

**Example - Update HeroSection.tsx**:
```typescript
// OLD
bg-gradient-to-r from-cyan-400 via-cyan-300 to-green-400

// NEW (for purple theme)
bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400
```

### Adjust Typography

**In `app/components/3d/HeroSection.tsx`**:
```typescript
// Larger hero text
<h1 className="text-7xl md:text-8xl font-bold ...">

// Smaller hero text
<h1 className="text-5xl md:text-6xl font-bold ...">
```

---

## 🎬 Animation Customization

### Speed Up/Slow Down Animations

**Project Cards - Floating effect**:
```typescript
// app/components/3d/ProjectCards.tsx
whileInView={{ opacity: 1, y: 0 }}
transition={{ 
  duration: 0.3,      // Faster (was 0.6)
  delay: index * 0.1, // Less stagger (was 0.2)
}}
```

### Add Spring Bounce

```typescript
transition={{ 
  duration: 0.6,
  type: 'spring',      // Add this
  bounce: 0.6,         // Add this
  delay: index * 0.2,
}}
```

### Particle Animation Speed

**File: `app/components/3d/HeroSection.tsx`**

```typescript
useFrame(() => {
  if (meshRef.current) {
    meshRef.current.rotation.x += 0.001;  // Increase for faster rotation
    meshRef.current.rotation.y += 0.002;  // More rotation
    meshRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.01;
  }
});
```

---

## 📸 Add Project Images

1. **Create/Screenshot** your project images
2. **Optimize** images (recommended: 1200x800px, < 500KB)
3. **Place** in `public/projects/` folder
4. **Reference** in `app/data/projects.ts`:

```typescript
{
  title: "My Project",
  image: "/projects/my-project.jpg",  // Path to your image
}
```

---

## 🔗 Add More Projects

The portfolio displays 3 columns on desktop. You can add more:

```typescript
export const projects = [
  // ... existing projects
  {
    id: 4,
    title: "New Project",
    description: "Description here",
    technologies: ["Tech1", "Tech2"],
    image: "/projects/new-project.jpg",
    link: "https://...",
    features: ["Feature 1", "Feature 2"],
  },
];
```

**Note**: Grid adjusts automatically based on screen size.

---

## 🚀 Responsive Design Tweaks

### Adjust Mobile Menu (Sidebar)

**File: `app/components/ui/Sidebar.tsx`**

```typescript
// Currently hidden on mobile (<1024px)
// To show on all devices:
className="fixed right-0 top-0 h-full w-20 ..."

// To make wider on mobile:
<div className="flex flex-col gap-6 md:gap-8">
```

### Change Grid Layout

**File: `app/components/3d/ProjectCards.tsx`**

```typescript
// Currently: 3 cols on desktop, 2 on tablet, 1 on mobile
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// To make: 2 cols on all devices
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// To make: 4 cols on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

---

## 📝 FAQ & Common Edits

**Q: How do I change the page title?**
A: Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your portfolio description",
};
```

**Q: How do I add more sections?**
A: Create a new component in `app/components/ui/` and import in `app/page.tsx`.

**Q: How do I disable 3D on mobile?**
A: In `app/components/3d/HeroSection.tsx`, add:
```typescript
{isMobile ? <div className="h-screen bg-black" /> : <HeroScene />}
```

**Q: Can I add a blog section?**
A: Yes! Create `app/components/ui/BlogSection.tsx` and add to page.

---

## ✅ Before Deploying

- [ ] Update all personal information
- [ ] Add project images
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify email contact form (if backend added)
- [ ] Test animations on slower devices

---

## 🎓 Next Steps

1. **Customize** all sections with your information
2. **Test** locally: `npm run dev`
3. **Build**: `npm run build`
4. **Deploy** to Vercel or your hosting provider
5. **Share** with potential employers/clients!

Good luck with your portfolio! 🚀
