
# myTheme-v3 — MikroTik Hotspot Theme

> A modern, responsive, and highly customized theme for MikroTik Hotspot captive portal created by HPY for MikroTik users.

- Project: ![!Status](https://img.shields.io/badge/status-active-brightgreen)
- Device OS: ![!RouterOS](https://img.shields.io/badge/routeros-supported-blue)
- License: ![!License](https://img.shields.io/badge/license-MIT-yellow)
- Git: ![!GitHub](https://img.shields.io/badge/github-repo-blue?logo=github)

> Initial Release Date: November 24, 2025

---

## Table of Contents
- Overview
- Features
- Requirements
- Installation
- Screenshots
- Compatibility
- Troubleshooting
- Acknowledgments
- Support
- FAQ

---

## Overview

`myTheme-v3` is a polished Hotspot theme for MikroTik RouterOS, designed to improve the user experience of captive portal pages (login, status, logout) while remaining lightweight and fully compatible with RouterOS Hotspot variables.

**Key goals:**
- Clean UI for faster login and better status visibility.
- Fully Customized portal (logo, brand colors, wording).
- Minimal dependencies and optimized assets for low-resource environments.

---

## Features

- ✅ Responsive layout for phones, tablets, and laptops  
- ✅ Works with default Hotspot templates (`login.html`, `status.html`, `logout.html`, etc.)  
- ✅ Optional Terms of Service modal / page  
- ✅ Simple error handling and variable placeholders (e.g. `$(username)`, `$(host)`)  
- ✅ Lightweight CSS & JS with caching hints
- ✅ Background music for different occasions
- ✅ Well structured file hierarchy for easier management
- ✅ Known games photo slides

> **Note:** Replace MikroTik placeholder variables carefully. Keep RouterOS Hotspot variable syntax intact (e.g., `$(mac)`, `$(ip)`, `$(username)`, etc.).

---

## Requirements

- MikroTik device with **Hotspot** configured.
- MikroTik running RouterOS v6.4x
- Mikrotik running RouterOS v7.xx
---

## Installation
**Download via Web**
- Download the zip file.
  - ![!Download](screenshot/installation/zip-dl.png)
    - After download, find and extract the .zip file
  - It should look like this:
    - ![!Zip_File](screenshot/installation/zip-extracted.png)
- Upload to your MikroTik router/device files.
    - ![!Mikrotik_Files](screenshot/installation/mtik-files.png)
- Change your Hotspot HTML directory.
    - ![!Hotspot_Directory](screenshot/installation/html-dir.png)
    - ![!Select_Portal_Directory](screenshot/installation/select-dir.png)
- **Click** Select/Apply/Ok
- You're all set!

**REMINDER** Delete/Remove the `screenshot` folder inside the portal folder if you see one, because it will take too much unnecessary storage.

---

## Screenshots

> Actual raw and live screenshots

- **Login Raw Page**  
  ![Login Page](screenshot/xmas-theme/login-page.png)

- **Login Actual Live Page**  

- **Status Raw Page**  
  ![Status Page](screenshot/xmas-theme/status-page.png)

  - **Status Actual Live Page**  

## Compatibility

- **RouterOS:** 6.x and 7.x
- **Hotspot:** Default HTML directory (`hotspot`) or a custom directory set in Hotspot Profile (`myTheme-v3`)
- **Browsers:** Modern browsers (Chrome, Edge, Firefox, Safari, Brave)

---

## Troubleshooting
- Submit all issues and bugs found here: [Issues](https://github.com/hpy-git/myTheme-v3/issues)
- When submitting an issue report please include the following: (required)
    - Details/Description of the issue:
    - Error message (if applicable):
    - Screenshot (important):

---

## Acknowledgements
- Special Thanks to MikroTik for a wonderful and very powerful routers!
- Credits to Mikhmon for the base template!
- Thanks Google!
- Thanks Deviantart for high quality images!
- Thanks publishers artwork for high quality images!

---

## Support

---

## FAQ

**Is this an Active Project?**
- Yes, This is an active project and will receive an update from time-to-time. As this captive portal is also the theme that I'm using for my Hotspot Network.

**All routerOS supported?**
- This is not tested on RouterOS v5.xx and below, if you use this theme on -v5.xx router-os and something is broken, there will be no support or fixes.

**Is this free?**
- Yes! This project is totally free but I will really appreciate donations especially if my works has been a great tool to help you.


---
