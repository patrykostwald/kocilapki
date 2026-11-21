# Kociłapki

A browser game about a hungry cat catching fish in a pond, with 15 levels, 27 absurd weapons, a daily challenge and an optional leaderboard. The interface is in Polish.

**Play:** https://zbudujmi.com/kocilapki/

## Status

Live and playable on desktop and mobile. The game runs entirely in the browser; the leaderboard and visit counters talk to a separate backend that is not part of this repository and are optional.

## Features

- Hungry Kitten mode with 15 levels and a pond with boats
- 27 weapons, from a plain paw upwards
- Daily challenge (Wyzwanie dnia) and a pseudonymous leaderboard that needs no account
- Cat sounds played from embedded samples
- Installable PWA with offline support (network first, cache as fallback)

## Stack

Single-file game in plain JavaScript, HTML, CSS and inline SVG. No build step, no dependencies. Sound samples are embedded in `dzwieki/probki-kota.js`.

## Run locally

Serve the folder with any static file server and open it in a browser, for example:

```
python -m http.server 8080
```

Then open `http://localhost:8080/`. The leaderboard needs the backend and does not work locally.

## Structure

```
index.html              the whole game: markup, styles, SVG and logic
sw.js                   service worker (versioned cache)
manifest.webmanifest    PWA manifest
dzwieki/probki-kota.js  embedded cat sound samples
ikona-*.png, ikona.svg  app icons
og.jpg                  social preview image
```

## License

All rights reserved.
