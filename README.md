# HertzHunt

[Português](README.pt-BR.md) | [English](README.md)

<p align="center">
  <img src="hero-banner.png" alt="HertzHunt — The Ultimate Headphone Benchmark" width="800">
</p>

<p align="center">
  <em>Subjective audio reviews aren't enough. I needed a system to truly stress-test hardware.</em><br>
  Companies test headphones with complex lab equipment. <strong>HertzHunt gives you the exact tracks and parameters to test them yourself.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT">
</p>

---

## What Is This?

**HertzHunt** is an immersive, interactive web application designed to push headphones to their absolute limits. Instead of just listening to music and guessing if your gear is good, HertzHunt guides you through a gamified, multi-level evaluation pipeline.

Whether you are an audiophile, a tech reviewer benchmarking new headsets, or just curious about your current daily drivers, this app provides a definitive scorecard.

> **Note:** The system uses high-quality audio streams. For the most accurate results, ensure your device's audio enhancements (like spatial audio or equalizers) are turned off during the test.

## Core Features

| Feature | Description |
|---------|-------------|
| 🎵 **Curated Gauntlet** | 20 specifically chosen tracks designed to isolate frequencies (sub-bass, sibilance, mid-range clarity). |
| 📈 **5 Difficulty Levels** | Progressive testing from Level 1 (Warm-up / Basic Separation) to Level 5 (Extreme Dynamic Transitions). |
| 📊 **Diagnostic Report** | Post-test interactive scorecard evaluating your hardware across Lows, Mids, and Highs, complete with custom insights. |
| 🎛️ **Custom Player UI** | Immersive interface featuring animated vinyl records, custom waveform visualizers, and seamless Spotify deep links. |
| ☁️ **Cloud Streaming** | Audio securely stored and streamed via Supabase for zero-latency playback and a lightweight codebase. |
| 📱 **Responsive Design** | Fully optimized for mobile, tablet, and desktop viewing. |

## How It Works

```text
Select a Challenge (Level 1-5)
        │
        ▼
Listen & Evaluate → The app asks a specific technical question (e.g., "Does the sub-bass mask the vocals?")
        │
        ▼
Rate the Performance → 1 to 5 stars based on clarity and distortion
        │
        ▼
Diagnostic Generation → Algorithm calculates scores and outputs a detailed performance matrix
```

## Quick Start (Local Run)

HertzHunt is built with a pure, dependency-free frontend architecture. No node modules or build steps required.

```bash
# 1. Clone the repository
git clone [https://github.com/samu-lls/hertz-hunt.git](https://github.com/samu-lls/hertz-hunt.git)

# 2. Navigate to the directory
cd hertz-hunt

# 3. Serve the files
# You can use VS Code Live Server, or any simple HTTP server:
npx serve .
```

## Project Structure

```text
hertz-hunt/
├── css/
│   └── style.css          # Fully custom styling, animations, and responsive grids
├── js/
│   └── script.js          # Core logic, DOM manipulation, Audio player, and Rating algorithm
├── index.html             # Main entry point and structural layout
└── README.md
```

## Tech Stack

- **Frontend:** Pure HTML5, CSS3, and Vanilla JavaScript. Zero heavy frameworks.
- **Backend / Storage:** [Supabase](https://supabase.com/) Public Buckets for fast, reliable audio streaming.
- **Hosting / CI-CD:** [Vercel](https://vercel.com/) for automated deployments.
- **Feedback Module:** [EmailJS](https://www.emailjs.com/) for direct, serverless form submissions.

## About the Author

I'm **Samuel**, an IT Analyst and tech enthusiast. I spend a lot of time reviewing tech, testing gaming gear, and analyzing hardware performance. I built HertzHunt because I needed a standardized, repeatable way to test audio equipment beyond just "it sounds good." 

If you want to talk tech, gaming setups, or software development, let's connect.

## Let's Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samu-lls/)
[![Behance](https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white)](https://www.behance.net/samuellelles)
[![Email](https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:samu.lls@outlook.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samu-lls)