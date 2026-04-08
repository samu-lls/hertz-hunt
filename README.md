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