# Components Overview

Complete guide to all components in the portfolio.

## 📦 Components Structure

### 🎬 3D Components (`app/components/3d/`)

#### `HeroSection.tsx`
**Purpose**: Immersive hero section with 3D background

**Key Features**:
- Animated 3D icosahedron (floating geometry)
- Particle system background (500+ particles)
- Auto-rotating particles
- Glowing geometry with emissive effect
- Hero text with gradient
- CTA buttons (Explore Work, Get In Touch)
- Scroll indicator with bounce animation

**Customizable Parts**:
```typescript
// Hero Title (Line ~62)
<h1>Adarsh Mund</h1>

// Hero Subtitle
<p>Full-Stack Developer</p>

// Hero Description
<p>Building intelligent, immersive web experiences...</p>

// Button Text
<button>Explore Work</button>

// 3D Colors (Line ~25)
color="#00ff88"  // Change geometry color
emissive="#00ff88"  // Change glow
```

**How It Works**:
- Uses React Three Fiber for 3D rendering
- Canvas renders at full viewport height
- Particle system creates ambient effect
- Auto-rotate controlled by `useFrame` hook

---

#### `ProjectCards.tsx`
**Purpose**: Display projects with 3D tilt effect

**Key Features**:
- 3 floating cards (responsive: 1 mobile, 2 tablet, 3 desktop)
- 3D tilt on hover (calculated from mouse position)
- Gradient borders with glow effect
- Feature badges
- Technology badges
- View Project button
- Smooth enter animations with stagger

**Customizable Parts**:
```typescript
// Card styling
className="border border-cyan-500/30"  // Border color

// Feature badges
className="bg-cyan-500/20 text-cyan-300"  // Colors

// Tech badges
className="bg-green-500/10 text-green-400"  // Colors

// Button
className="bg-gradient-to-r from-cyan-500 to-green-500"
```

**How It Works**:
- Maps over projects from `app/data/projects.ts`
- Calculates 3D rotation from mouse coordinates
- Uses Framer Motion for scroll animations
- Cards fade in with staggered timing

---

### 🎨 UI Components (`app/components/ui/`)

#### `Sidebar.tsx`
**Purpose**: Fixed right-side navigation menu

**Key Features**:
- Fixed position on right edge
- 4 main navigation items (Home, About, Projects, Contact)
- Social links at bottom (GitHub, LinkedIn, Email)
- Hover tooltips
- Mobile hamburger menu
- Smooth slide-in animation on load
- Glowing hover effects

**Navigation Items**:
1. Home - Scrolls to hero
2. About - Scrolls to about section
3. Projects - Scrolls to projects section
4. Contact - Scrolls to contact section

**Customization**:
```typescript
// Add more nav items
const navItems: NavItem[] = [
  {
    label: 'Blog',
    href: '#blog',
    icon: <svg>...</svg>,
  },
];
```

**Position Change**:
```typescript
// Move to left side
className="fixed left-0 top-0"  // was: right-0
```

---

#### `AboutSection.tsx`
**Purpose**: About me, skills, and achievements

**Key Features**:
- Bio section with personal description
- 4 statistics cards (Hackathons, Projects, Technologies, Experience)
- Skills organized by category (4 categories):
  - Frontend
  - Backend
  - Tools & Platforms
  - Specializations
- Hover effects on skill cards
- Gradient background effects

**Sections**:

1. **Bio** (Left side)
   - Personal description
   - 4 stats with hover effects
   
2. **Image Placeholder** (Right side)
   - Gradient border
   - Ready for profile image

3. **Skills Grid** (Bottom)
   - 4 columns of skill categories
   - Skill tags with hover scale

**Customize**:
```typescript
// Update bio text (Line ~65)
<p>I'm a passionate developer...</p>

// Update stats (Line ~85)
{ label: 'Hackathons', value: '3+' }

// Update skills (Line ~112)
const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', ...] }
]
```

---

#### `ContactSection.tsx`
**Purpose**: Contact form and social integration

**Key Features**:
- Contact form (Name, Email, Message)
- Form validation
- Success message display
- Social media links (GitHub, LinkedIn, Email)
- Contact information box
- Current availability indicator
- Animated buttons

**Form Fields**:
1. **Name** - Text input
2. **Email** - Email input with validation
3. **Message** - Textarea (5 rows)
4. **Submit** - Gradient button

**Contact Info Box**:
- Email address (clickable)
- Location
- Availability status (green pulse effect)
- Quick facts about you

**Customize**:
```typescript
// Update email (Line ~135)
placeholder="your.email@example.com"

// Update location (Line ~215)
<p>Your City, Country</p>

// Add form submission backend
const handleSubmit = async (e) => {
  // Send to your backend
}
```

---

## 📊 Data Structure

### `app/data/projects.ts`

**Projects Array**:
```typescript
interface Project {
  id: number;
  title: string;
  description: string;  // 150 chars max
  technologies: string[];  // 3-5 tech stack
  image: string;  // Path to /public/projects/
  link: string;  // Project URL
  features: string[];  // 2-3 key features
}
```

**Social Links Array**:
```typescript
interface SocialLink {
  name: string;  // Display name
  icon: string;  // Icon identifier
  url: string;  // Link URL
}
```

---

## 🎯 Component Hierarchy

```
RootLayout (app/layout.tsx)
├── Sidebar (sticky right)
└── page.tsx (main content)
    ├── HeroSection
    ├── ProjectCards
    ├── AboutSection
    └── ContactSection
```

---

## 🔄 Data Flow

```
app/data/projects.ts
        ↓
   (exported data)
        ↓
┌───────┴────────┐
│                │
ProjectCards    ContactSection
     ↓
renders each project
as FloatingCard
```

---

## 🎨 Styling System

### Tailwind Classes Used

**Colors**:
- `cyan-400`, `cyan-500`, `cyan-300` - Primary
- `green-400`, `green-500`, `green-300` - Accent
- `gray-400`, `gray-300`, `gray-900` - Neutral
- `black` - Background

**Responsive**:
- `md:` - Tablet breakpoint
- `lg:` - Desktop breakpoint
- `sm:` - Small mobile breakpoint

**Effects**:
- `bg-clip-text` - Text gradient
- `backdrop-blur-md` - Frosted glass effect
- `drop-shadow-lg` - Text shadow
- `hover:shadow-lg` - Hover shadow

---

## 🎬 Animation System

### Framer Motion Hooks Used

- `motion.div` - Animated container
- `initial` - Starting state
- `whileInView` - Animation on scroll
- `transition` - Animation timing
- `whileHover` - Hover state
- `whileTap` - Click state

### Custom Animations (CSS)

In `app/globals.css`:
- `glow` - Text glow effect
- `float` - Vertical floating
- `slideInUp` - Slide up entrance
- `slideInDown` - Slide down entrance

---

## 📱 Responsive Breakpoints

All components adapt to:
- **Mobile** (< 768px) - Single column, stacked
- **Tablet** (768px - 1023px) - Two columns
- **Desktop** (1024px+) - Three columns + sidebar

---

## ✅ Component Checklist

- [ ] HeroSection renders 3D with particles
- [ ] ProjectCards display 3 projects
- [ ] Sidebar navigation shows on right
- [ ] About section has skills
- [ ] Contact form shows
- [ ] All colors are consistent
- [ ] Animations are smooth
- [ ] Links are clickable
- [ ] Mobile responsive
- [ ] No console errors

---

## 🚀 Performance Tips

1. **Lazy Load Images**: Use Next.js Image component
2. **Memoize Components**: Use `React.memo()` for static cards
3. **Optimize 3D**: Reduce particle count on mobile
4. **Code Split**: Components are already split
5. **Cache**: Static assets cached by Next.js

---

## 🔗 Inter-Component Communication

Components communicate via:
1. **Data from `projects.ts`** - Projects and social links
2. **URL anchors** - Sidebar links to sections
3. **CSS classes** - Shared Tailwind styling
4. **Context** - Not yet implemented (optional)

---

Need more details? Check specific component files in your editor!
