# AJAX Rock Bands Selector

A small project that loads rock band data from a JSON file using XMLHttpRequest and displays it as two linked dropdowns.

## What it does

- Fetches `rockbands.json` via an XHR request
- First dropdown lets you pick a band (Beatles, Rolling Stones, Genesis, Eagles)
- Second dropdown populates with that band's members
- Selecting a member opens their official website in a new tab

## Files

- `ajaxtask.html` — minimal HTML with an empty container div and script tag
- `ajaxtask.js` — all logic: XHR request, dynamic DOM creation, dropdown population, event listeners
- `rockbands.json` — band and member data (name + URL per member)

## How it works

The JavaScript file creates the entire interface dynamically. On page load, it sends a GET request to `rockbands.json` using `XMLHttpRequest`, parses the response, and fills the first dropdown with the available bands. Changing the band triggers a listener that clears the second dropdown and fills it with the selected band's members. Changing the artist triggers `window.open` to open the member's site.

## Running it

The file cannot be opened directly in a browser because XHR requests over `file://` are blocked by CORS. You need a local server:

```bash
npx serve .
```

or use VS Code Live Server.

## Alternatives

The JS file includes commented-out versions of the same logic using:

- ES module `import` from a JS data file
- `fetch().then()` chain
- JSON import assertion

These are there for comparison with the XHR approach.
