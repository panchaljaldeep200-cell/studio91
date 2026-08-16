# 📊 Studio91 Media Asset Directory & Sizes

This document serves as a complete reference for all image/video assets used across the Studio91 website. It contains both the **Recommended Asset Sizes** (for uploading new media) and the **Actual Asset Sizes** currently present in the project.

---

## 📐 Recommended Asset Guidelines

For the best performance, visual quality, and page load speeds, use the following specifications when preparing new media files:

| Directory / Section   | Recommended Size | Aspect Ratio | Format | Description / Notes |
| :--- | :--- | :---: | :---: | :--- |
| **`hero`**   | `1920 x 1080 px` | 16:9 | JPG | Background hero sliders (Homepage, Stories, etc.) |
| **Subpage Heroes** | `1920 x 660 px` | ~2.9:1 | JPG | Page headers (About, Contact, Plans, Portfolio) |
| **`philosophy`** | `800 x 1000 px` | 4:5 | JPG | "Our Philosophy" grid sections |
| **Home Segments** | `800 x 1000 px` | 4:5 | JPG | "Our Work" links on the Homepage |
| **Film Cover Thumbnails** | `1280 x 720 px` | 16:9 | JPG | Video posters/thumbnails |
| **Masonry Galleries** | Flexible | Any | JPG | `portfolio-photography` & `portfolio-just-us` |
| **Stories Grid Cover** | `800 x 1000 px` | 4:5 | JPG | Grid cards on Captured Stories list page |
| **Stories Slide Show** | `1920 x 1080 px` | 16:9 | JPG | Individual photo sliders inside stories |
| **Plans Packages** | `800 x 450 px` | 16:9 | JPG | Thumbnails on Plans & Pricing cards |

---

## 📂 Actual Media Assets (Currently in Project)

Here is a list of all images currently present in the `images/` directory of the project, including their counts and exact resolutions:

| Directory | Image Count | Actual Resolutions | Example Files & Notes |
| :--- | :---: | :--- | :--- |
| **`images/`** | 2 | `1024x1024`<br>`1024x682` | `favicon.jpg` (1024x1024)<br>`logo.png` (1024x682) |
| **`images/about/`** | 1 | `800x1000` (Portrait) | `founder.jpg` (About page founder portrait) |
| **`images/about/testimonials/`** | 5 | `1920x1080`<br>`800x1000` | Stories of Love testimonial couple images (`krishma-dhiraj.jpg`, etc.) |
| **`images/captured-stories/`** | 10 | `800x1000` (Portrait) | Grid cover thumbnail images for all 10 stories |
| **`images/contact/`** | 1 | `1300x865` | `Bespoke-Elopements-in-Europe-Dolomites-056-1300x865.jpg` |
| **`images/hero/`** | 5 | `900x600`<br>`2048x1289`<br>`2000x1334`<br>`612x408` | `hero-01.jpg` to `hero-05.jpg` (Home sliders & fallbacks) |
| **`images/services/`** | 4 | `800x1000` (Portrait) | Homepage service cover images (`wedding.jpg`, `engagement.jpg`, etc.) |
| **`images/philosophy/`** | 1 | `800x1000` (Portrait) | `philosophy.jpg` (Our Philosophy section image) |
| **`images/plans/`** | 1 | `1024x683` | `Glacier-National-Park-Elopement-1024x683.jpg` (Plans hero bg) |
| **`images/plans/packages/`** | 11 | `800x450` (16:9)<br>`800x1000` (Portrait) | Cover images for all Plans package cards (`wedding-essential.jpg`, etc.) |
| **`images/portfolio/`** | 3 | `800x1000` (Portrait)<br>`275x183` | Segment cover images (`photography.jpg`, `just-us.jpg`, and hero bg `images.jpg`) |
| **`images/portfolio-just-us/`** | 30 | `800x1000` (Portrait)<br>`1200x800` (Landscape) | `justus-01.jpg` to `justus-30.jpg` |
| **`images/portfolio-photography/`** | 30 | `800x1000` (Portrait)<br>`1200x800` (Landscape) | `photo-01.jpg` to `photo-30.jpg` |
| **`images/stories/<couple-name>/`** | 300 | `1920x1080` (16:9) | 10 stories folders, each containing 30 photos (`photo-01.jpg` to `photo-30.jpg`) |
| **`video/portfolio-films/`** | 7 | Local `.mp4` loops | Local portfolio film loops (`films-cover.mp4`, `raina-arjan.mp4`, etc.) |

---

## ⚠️ Currently Empty Directories (Using Placeholders / Fallbacks)

The following folders are created in the workspace but do not contain files yet. The website is configured to gracefully fallback to placeholders (via `settings.js` or external placehold.co images) for these paths:

* **`images/portfolio-films/`** (Used for film cover images/posters)
