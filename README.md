# Next.js Blog Application

## Overview

This project is a blog application built using **Next.js**, **Material UI**, and \*MongoDB\*\* for data storage. The application features a landing page to display all blog posts, a detailed view for individual posts, and a form to add new blog posts with an image upload feature.

## Features

### 1. Landing Page

- Displays a list of all blog posts in a **card layout**.
- Each post card contains:
  - A blog post image.
  - A brief summary of the post.
- Design utilizes **Material UI** components for aesthetic appeal and responsiveness.
- The page is easy to navigate and visually balanced.

### 2. Single Blog View

- Provides a detailed view of each blog post.
- A featured image is displayed at the top of the page.
- **Lazy loading** is implemented for the image to enhance performance.
- Blog content is displayed in a clean and readable layout.

### 3. New Blog Page

- Users can add new blog posts via a form.
- The form includes fields for:
  - Title
  - Content
  - Image upload (supports common formats such as JPEG, PNG).
- Upon submission, the new blog post is added to the landing page.

## Design

### Framework

- The frontend is built using **Material UI** for components and layout.

### Theme Customization

- A custom theme is created using Material UI’s theming capabilities.
  - Custom colors, typography, and spacing are defined to ensure a consistent look and feel.

### Customization & Layout

- Minimal reliance on default Material UI styles; instead, subtle customizations are applied to give the blog a unique and professional look.
- The layout is structured to ensure consistency in padding, whitespace, and balance.

### Responsiveness

- The application is fully responsive, providing a smooth user experience on both desktop and mobile devices.

## Optimization

- **Image Loading**: Images are optimized for faster loading using Next.js’s image optimization and responsive image techniques (e.g., `srcset`).
- **Placeholder Images**: Meaningful placeholders or icons are displayed while images are loading or if they are unavailable.

## Database

- The project use **MongoDB** for data storage, depending on the developer’s preference.
- Blog posts, including text and image data, are stored in the database.
- Proper connection and interaction between the database and the Next.js app are established for seamless data management.

## Deployment

- The project is deployed on **Vercel**.
- The complete codebase is hosted on a public **GitHub** repository.
- The repository includes clear instructions on how to run the project locally.

## Running Locally

### Prerequisites

- **Node.js** and **npm** installed.
- A **MongoDB** instance set up.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/roidesrois/nextjs-blog-project
   cd nextjs-blog
   ```
