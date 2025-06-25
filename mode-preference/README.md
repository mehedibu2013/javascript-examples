# Dark Mode Preference Example

This project demonstrates how to store and apply a user's dark mode preference using localStorage in a simple HTML, CSS, and JavaScript setup.

## How it works
- A checkbox toggle allows the user to enable or disable dark mode.
- The user's preference is saved in `localStorage` under the key `darkMode`.
- On page load, the script checks for a saved preference and applies the dark mode if enabled.
- The toggle reflects the current mode.

## Files
- `index.html`: Main HTML file with the dark mode toggle and script inclusion.
- `style.css`: Contains the dark mode CSS styles.
- `darkmode.js`: Handles the logic for toggling and storing the dark mode preference.

## Usage
1. Open `index.html` in your web browser.
2. Use the checkbox to toggle dark mode on or off.
3. Your preference will be remembered on future visits.

## Note
- Do **not** run `darkmode.js` with Node.js. It is intended to be used in the browser.
- Make sure the CSS file is named `style.css` and linked correctly in your HTML.
