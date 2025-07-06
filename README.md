# BlueQuotes - Quote Generator Web App

A minimal, elegant quote generator built with Next.js 15, ShadCN UI, and MagicUI. It shows motivational quotes by category, rendered with a beautiful particle background and interactive UI.

## About The Project

BlueQuotes is a web app that lets users pick from different categories like _inspirational_, _life_, _success_, etc., and displays 3 random quotes from a local array built into the app. The focus is on delivering a clean, fast user experience with custom UI elements and animations using ShadCN and MagicUI.

This was designed to explore how to build fast client-server hybrid apps using the latest Next.js App Router with smooth animations and component-based design.

## Thought Process

- Design custom UI using **Shadcn** for consistency and component reusability.
- Create a custom array in **Next.js** populated with a limited number of motivational quotes across different categories.
- When the user inputs or selects a **specific category**, the app filters and displays **3 random quotes** from that category using a carousel.

## Built With

- [Next.js 15 (App Router)](https://nextjs.org)
- [ShadCN UI](https://ui.shadcn.com)
- [Magic UI (Particles & Animation)](https://magicui.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Zod + React Hook Form](https://react-hook-form.com)
- [Lucide Icons](https://lucide.dev)

## Getting Started

These instructions will help you set up the project locally.

### Prerequisites

- Node.js ≥ 18
- pnpm or npm or yarn
- Git

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/arham2003/Nexium_Arham_Assign1.git
   cd assignment-1
   ```

2. Install dependencies

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```
4. Open your browser at http://localhost:3000

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository

2. Create a new branch: git checkout -b my-feature

3. Make your changes

4. Commit with Conventional Commits

5. Push the branch: git push origin my-feature

6. Open a Pull Request

## LICENSE

- This project is licensed under the MIT License — feel free to use it for personal or commercial purposes.
