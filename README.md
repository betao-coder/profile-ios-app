# iOS WebView App (template) — build via macOS/Xcode or Cloud CI

This template is meant for **legitimate** dashboards/launchers (e.g., opening Shortcuts, showing a personal panel).
It includes:
- `web/index.html` (your UI)
- `web/app.js` (your JS)
- `ios_src/` (SwiftUI WebView source you can paste into an Xcode iOS App project)

## Important
- On **Windows**, you generally can't compile iOS apps locally.
- To produce a `.ipa`, you need either:
  1) a **Mac with Xcode**, or
  2) a **cloud build** (Codemagic/Appcircle/GitHub Actions macOS runner).

This ZIP gives you the **ready code**; you still need a build environment to export the IPA.

## Quick path (Mac)
1. Open Xcode → File → New → Project → iOS → App
2. Name it: `WebPanelApp` (any name)
3. Replace the generated files with the Swift files in `ios_src/`
4. In Xcode, add `web/index.html` and `web/app.js` to the app target (Copy items if needed)
5. Run on device (you’ll need Apple ID signing)

## Cloud build path (Windows)
1. Create a repo on GitHub and upload this folder.
2. In Codemagic/Appcircle, create an iOS build workflow using a macOS build machine.
3. You must set up signing (certificate + provisioning profile) for exporting IPA.
4. Download the IPA artifact and install with Sideloadly.

## Shortcuts buttons
`web/app.js` uses links like:
shortcuts://run-shortcut?name=...

Make sure the shortcut names match what you have on the iPhone.

---
