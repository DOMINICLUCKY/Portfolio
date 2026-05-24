## Quick Reference

### 🚀 Common Commands

```bash
# Start development server
npm run dev

# Production build
npm run build
npm run start

# Fix dependency issues
npm install
npm audit fix

# Check for errors
npm run build
```

### 📍 File Locations to Edit

| What to Change | File |
|---|---|
| Your name & title | `app/components/3d/HeroSection.tsx` |
| Projects | `app/data/projects.ts` |
| About me | `app/components/ui/AboutSection.tsx` |
| Social links | `app/data/projects.ts` |
| Contact info | `app/components/ui/ContactSection.tsx` |
| Color theme | All component `.tsx` files (search `cyan-400`) |
| Animations | Each `.tsx` file (search `transition`, `motion`) |
| Global styles | `app/globals.css` |

### 🎨 Quick Color Changes

**Find & Replace in all files:**
- `cyan-400` → your primary color
- `green-400` → your accent color
- `gray-400` → your secondary color

Example colors:
- `blue-400`, `purple-400`, `pink-400`
- `indigo-400`, `violet-400`, `emerald-400`

### 📂 File Structure

```
app/
├── components/
│   ├── 3d/
│   │   ├── HeroSection.tsx    ← Hero with 3D background
│   │   └── ProjectCards.tsx   ← Project cards
│   └── ui/
│       ├── Sidebar.tsx        ← Navigation
│       ├── AboutSection.tsx   ← About & skills
│       └── ContactSection.tsx ← Contact form
├── data/
│   └── projects.ts           ← All project data
├── globals.css               ← Global styles
├── layout.tsx                ← Root layout
└── page.tsx                  ← Main page
```

### 🔧 Common Tweaks

**Make hero text bigger:**
```typescript
// HeroSection.tsx, line ~60
className="text-8xl md:text-9xl font-bold"  // was text-6xl/7xl
```

**Faster animations:**
```typescript
// Any component
transition={{ duration: 0.3 }}  // was 0.6
```

**More/fewer projects:**
- Add/remove items in `app/data/projects.ts`
- Grid automatically adjusts

**Change sidebar position:**
```typescript
// Sidebar.tsx
className="fixed right-0"  // change to "left-0"
```

### 📦 Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animations
- `three` - 3D graphics
- `@react-three/fiber` - React + Three.js
- `@react-three/drei` - 3D helpers
- `react-tsparticles` - Particle effects
- `tailwindcss` - Styling

### 🌐 Deployment

**Vercel (easiest):**
1. Push to GitHub
2. Go to vercel.com
3. Connect your repo
4. Deploy!

**Manual:**
```bash
npm run build
npm run start
# Visit localhost:3000
```

### 🐛 Quick Fixes

**Port 3000 busy?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next
npm install
npm run dev
```

**Cache issues?**
```bash
npm cache clean --force
npm install
```

### ✨ Popular Customizations

**Dark purple theme:**
- Replace `cyan` with `purple`
- Replace `green` with `pink`

**Professional blue:**
- Replace `cyan` with `blue`
- Replace `green` with `indigo`

**Modern teal:**
- Replace `cyan` with `teal`
- Replace `green` with `emerald`

### 📚 Useful Links

- [Next.js Docs](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Three.js](https://threejs.org)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

**Need help?** Check `CUSTOMIZATION.md` for detailed guides!
