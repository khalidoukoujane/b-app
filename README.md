# B-App - Modern Blog Application

A sleek and modern blog application built with Next.js, featuring a clean design and smooth user experience.

![B-App Preview](/Futuristic%20Brain%20Art.png)

## ✨ Features

- **Modern Design** - Clean, minimalist interface with smooth animations
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance** - Built with Next.js for optimal loading speeds
- **Hero Icons** - Beautiful iconography throughout the application
- **Custom Styling** - Tailwind CSS with custom components and animations
- **Article System** - Well-structured blog posts with enhanced typography
- **Social Integration** - Easy links to GitHub, Instagram, and other platforms

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Fonts**: Custom Mona Sans and Poppins typography
- **Language**: JavaScript/JSX

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/b-app.git
   cd b-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Install Hero Icons**

   ```bash
   npm install @heroicons/react
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
b-app/
├── app/
│   ├── globals.css          # Global styles and article styling
│   ├── layout.js           # Root layout component
│   └── page.js             # Main page
├── components/
│   ├── Footer/
│   │   └── Footer.jsx      # Footer component with social links
│   └── Post/
│       └── Post.jsx        # Blog post component
├── public/                 # Static assets
└── README.md
```


### Adding New Posts

Posts are passed as props to the `Post` component with the following structure:

```javascript
{
  id: "post-id",
  title: "Post Title",
  img: "/path/to/image.jpg"
}
```

### Updating Social Links

Edit the links in `components/Footer/Footer.jsx`:

```jsx
<a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
