# Blog Management Guide

## Quick Start: Adding a New Blog Post

### 1. Add Blog Post Data

Edit `src/data/blogPosts.ts` and add a new blog object to the `blogPosts` array:

```typescript
{
  id: "007", // Unique ID (increment from last post)
  title: "Your Blog Post Title",
  category: "Category Name", // e.g., "Web Development", "Startup Tips"
  author: "A4 Technologies Team",
  readTime: "5 mins", // Estimate based on content length
  date: "Feb 10, 2026", // Publication date
  excerpt: "A brief summary of your blog post (2-3 sentences). This appears on blog cards.",

  // Optional: Add featured image
  featuredImage: "/images/blog/post-007.jpg", // Large image for post header
  thumbnail: "/images/blog/post-007-thumb.jpg", // Optional: smaller version for cards (defaults to featuredImage)

  // Full HTML content (see Content section below)
  content: `
    <h2>Your First Heading</h2>
    <p>Your paragraph text here...</p>

    <h3>Subheading</h3>
    <p>More content...</p>

    <ul>
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
  `,

  // Optional: SEO metadata
  seo: {
    metaTitle: "SEO-optimized title for search engines",
    metaDescription: "Meta description for search results"
  }
}
```

---

## 2. Adding Blog Images

### Option A: Using Local Images (Recommended)

**Step 1:** Create blog images folder (if it doesn't exist)
```
src/assets/images/blog/
```

**Step 2:** Add your image files
```
src/assets/images/blog/
  ├── post-001.jpg          (featured image)
  ├── post-001-thumb.jpg    (optional thumbnail)
  ├── post-002.jpg
  └── ...
```

**Step 3:** Import and use in blogPosts.ts

```typescript
// At the top of blogPosts.ts
import post001Image from "@/assets/images/blog/post-001.jpg";
import post001Thumb from "@/assets/images/blog/post-001-thumb.jpg";

// In your blog post object
{
  id: "001",
  title: "...",
  featuredImage: post001Image,
  thumbnail: post001Thumb, // Optional
  // ... rest of post
}
```

### Option B: Using Public Folder

**Step 1:** Add images to public folder
```
public/
  └── images/
      └── blog/
          ├── post-001.jpg
          ├── post-002.jpg
          └── ...
```

**Step 2:** Reference in blogPosts.ts with path strings
```typescript
{
  id: "001",
  title: "...",
  featuredImage: "/images/blog/post-001.jpg",
  thumbnail: "/images/blog/post-001-thumb.jpg", // Optional
  // ... rest of post
}
```

### Option C: Using External URLs

```typescript
{
  id: "001",
  title: "...",
  featuredImage: "https://your-cdn.com/blog/post-001.jpg",
  // ... rest of post
}
```

---

## 3. Writing Blog Content (HTML)

The `content` field uses HTML. Here's a template:

```typescript
content: `
  <h2>Main Section Heading</h2>
  <p>Your paragraph text with <strong>bold text</strong> and <em>italic text</em>.</p>

  <h3>Subsection</h3>
  <p>More detailed content here. You can write multiple paragraphs.</p>

  <ul>
    <li>Bullet point 1</li>
    <li>Bullet point 2</li>
    <li>Bullet point 3</li>
  </ul>

  <h3>Another Subsection</h3>
  <p>Keep writing your content. For <a href="https://example.com" target="_blank">links to external sites</a>.</p>

  <blockquote>
    <p>Important quote or callout text goes here.</p>
  </blockquote>

  <h2>Second Main Section</h2>
  <p>Continue your blog post...</p>
`
```

### Adding Images Inside Blog Content

```html
<h2>Section with Image</h2>
<p>Here's some text before the image.</p>

<img src="/images/blog/diagram-01.jpg" alt="Description of image" />

<p>Text continues after the image.</p>
```

---

## 4. Image Specifications

### Recommended Sizes:
- **Featured Image:** 1200 x 675px (16:9 aspect ratio)
- **Thumbnail:** 600 x 338px (16:9 aspect ratio) - optional, will use featuredImage if not provided
- **Content Images:** 800-1200px width

### Supported Formats:
- JPG/JPEG (best for photos)
- PNG (best for graphics with transparency)
- WebP (modern format, smaller file size)

### Optimization Tips:
- Compress images before uploading (use tools like TinyPNG, ImageOptim)
- Keep file sizes under 500KB for featured images
- Use descriptive file names: `mvp-development-guide.jpg` instead of `IMG_001.jpg`

---

## 5. Complete Example

Here's a full example of adding a new blog post with images:

```typescript
// src/data/blogPosts.ts

// Import image if using local assets
import webDevImage from "@/assets/images/blog/web-development-2026.jpg";

export const blogPosts: BlogPost[] = [
  // ... existing posts

  {
    id: "007",
    title: "Web Development Trends in 2026",
    category: "Web Development",
    author: "A4 Technologies Team",
    readTime: "7 mins",
    date: "Feb 10, 2026",
    excerpt: "Explore the latest web development trends shaping the industry in 2026, from AI integration to edge computing.",

    featuredImage: webDevImage, // or "/images/blog/web-dev-2026.jpg"

    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is evolving rapidly. In 2026, we're seeing exciting trends that are transforming how we build applications.</p>

      <h2>Top 5 Trends</h2>

      <h3>1. AI-Powered Development</h3>
      <p>Artificial intelligence is revolutionizing how developers write code, with AI assistants becoming an integral part of the development workflow.</p>

      <ul>
        <li>Automated code generation</li>
        <li>Intelligent debugging</li>
        <li>Smart code completion</li>
      </ul>

      <h3>2. Edge Computing</h3>
      <p>Edge computing brings computation closer to users, reducing latency and improving performance for web applications.</p>

      <h2>Conclusion</h2>
      <p>Staying current with these trends will help you build better, faster applications that meet modern user expectations.</p>
    `,

    seo: {
      metaTitle: "Top Web Development Trends 2026 | A4 Technologies",
      metaDescription: "Discover the latest web development trends in 2026, including AI integration, edge computing, and more."
    }
  }
];
```

---

## 6. Workflow Summary

1. **Create/prepare your images** → Save to `src/assets/images/blog/` or `public/images/blog/`
2. **Open** `src/data/blogPosts.ts`
3. **Add new blog object** to the array with all required fields
4. **Write HTML content** in the `content` field
5. **Save the file** - changes appear immediately in development
6. **Test** by visiting `/blog` and clicking your new post

---

## 7. Tips & Best Practices

### Content Writing:
- **Use clear headings:** Structure with H2 for main sections, H3 for subsections
- **Keep paragraphs short:** 2-4 sentences per paragraph for readability
- **Add bullet points:** Break down complex information into lists
- **Include links:** Add external references and internal links to other blog posts

### SEO:
- **Optimize titles:** Keep under 60 characters
- **Write meta descriptions:** 150-160 characters, include key information
- **Use descriptive URLs:** The post `id` becomes part of the URL (`/blog/web-dev-trends-2026`)

### Images:
- **Always add alt text:** Describe images for accessibility
- **Optimize file size:** Compress images to improve page load speed
- **Consistent aspect ratio:** Use 16:9 for featured images and thumbnails

---

## Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify image paths are correct
3. Ensure all required fields (`id`, `title`, `category`, etc.) are filled
4. Make sure commas are correctly placed between blog objects in the array
