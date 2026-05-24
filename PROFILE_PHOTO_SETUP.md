# Adding Your Profile Photo

Your portfolio is now set up with your personal information! Here's how to add your profile photo to complete the About section.

## 📸 Steps to Add Your Profile Photo

### 1. **Prepare Your Photo**
   - Choose a professional headshot or portrait photo
   - **Recommended specifications:**
     - Size: 400 × 600 pixels (portrait/vertical orientation)
     - Format: JPG, PNG, or WebP
     - File size: Less than 500 KB (for fast loading)
     - Aspect ratio: Preferably 2:3 (portrait)

### 2. **Save the Photo**
   - Name the file: `profile.jpg`
   - Place it in the `public` folder: `D:\portfolio\public\profile.jpg`

### 3. **File Location**
   ```
   portfolio/
   ├── public/
   │   ├── profile.jpg  ← Place your photo here
   │   ├── projects/
   │   └── ...
   ├── app/
   └── ...
   ```

### 4. **Verify**
   - Refresh your browser (http://localhost:3000)
   - Your photo should appear in the About Me section with a glowing border effect

## 📝 Tips

- **Best format:** JPG for smaller file size and faster loading
- **Lighting:** Use natural, even lighting for a professional look
- **Background:** Neutral backgrounds work best (white, gray, or solid colors)
- **Dimensions:** The photo will be displayed at 400×480px on desktop, scaled responsively on mobile

## 🖼️ Optional Formats
- If you prefer, you can also use:
  - `profile.png` - For transparency support
  - `profile.webp` - Modern format for smaller file sizes

Just rename and replace the file, or update the src in `app/components/ui/AboutSection.tsx` if you use a different filename.

## ❌ If Photo Doesn't Show

1. Check if file is in `D:\portfolio\public\` folder
2. Verify filename is exactly `profile.jpg` (case-sensitive on some systems)
3. Clear browser cache (Ctrl+Shift+Del)
4. Refresh the page (Ctrl+R or Cmd+R)

---

**Your portfolio is now ready!** 🚀  
Just add your profile photo and you're all set to showcase your work!
