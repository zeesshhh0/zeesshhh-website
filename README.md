# zeesshhh Portfolio Website

This is a modern and customizable portfolio website built to showcase projects, skills, and professional experience, all with a focus on performance and aesthetics.

## Features

* **Responsive Design**: Looks great on all devices, from mobile phones to desktop computers.
* **Customizable Sections**: Easily updateable sections for projects, blog posts, and skills to keep your portfolio current.
* **Smooth Animations**: Page transitions and animations are implemented to provide a better user experience.
* **SEO Optimized**: The website is built with Search Engine Optimization in mind to ensure it ranks well in search results.
* **Performance**: Built with performance as a priority to ensure fast loading times.

## Getting Started

These instructions will help you set up a copy of the project on your local machine for development and testing purposes.

### Prerequisites

You'll need to have the following software installed on your computer:

* [Node.js](https://nodejs.org/) (v14 or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/zeesshhh0/zeesshhh-website.git](https://github.com/zeesshhh0/zeesshhh-website.git)
    cd zeesshhh-website
    ```
   

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```
   

    Or using yarn:

    ```bash
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```
   

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

You can easily customize this portfolio to make it your own.

### Personal Information

To update your personal information, such as your name, title, avatar, and resume link, edit the `app/page.tsx` file.

### Skills & Technologies

You can showcase your technical skills by modifying the `app/components/tools-section.tsx` file. To add a new skill icon:

1.  Convert an SVG of the skill to a React component.
2.  Place the new component in the `public/icons/` folder.
3.  Add the skill to the list in `app/components/tools-section.tsx`.

### Projects

Your projects can be added to the `app/components/projects-section.tsx` file. For each project, you can include:

* Title
* Description
* Technologies used
* GitHub repository link
* Live demo link

### Blog Posts

To feature your latest articles, you can update the `app/components/blogs-section.tsx` file. This section fetches your blog posts from Medium.

## Acknowledgments

* The project was built with [Next.js](https://nextjs.org/).
