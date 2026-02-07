# WebPanelApp (XcodeGen-ready) — build on Codemagic and install with Sideloadly

This repo is a minimal legitimate iOS WebView app:
- web/ contains your HTML/JS UI.
- ios_src/ contains SwiftUI + WKWebView code.
- project.yml lets XcodeGen generate a real .xcodeproj.
- codemagic.yaml builds an unsigned device IPA artifact.

## Windows steps
1) Replace web/index.html and web/app.js with your content.
2) Commit all files to GitHub.
3) In Codemagic: select this repo, it will auto-detect codemagic.yaml.
4) Run workflow ios_unsigned_ipa.
5) Download WebPanelApp_unsigned.ipa from artifacts.
6) Install with Sideloadly (Apple ID).

Bundle ID: com.betao.webpanelapp (change in project.yml if you want).
