Gallery

User Stories

- I want to browse a set of thumbnail images that load quickly
- I want to select a thumbnail and display a larger version of the image, with a description
- I expect accessible considerations like alternative text for images, and the ability to click next and previous buttons using the keyboard

Requirements

- One page, with a set of thumbnail images, and a larger image
- Styled appropriately with CSS, and make use of media queries.
- Use client-side JavaScript to display the larger image when a thumbnail is selected
- Use client-side JavaScript to navigate between images using the keyboard (tab, enter)

Notes

tabs works through thumbnails and previous / next buttons.
when in focus previous and next buttons work with the spacebar.
screen reader is not quite right, it reads the thumbnail alt text and the annouceAltText function doesn't seem to do anything.
Left and right arrow keys on keyboard call the prevImage nextImage functions but do not work while in screen reader mode.

ToDo:

images load quickly - lazy loading?
add search using unsplash?

const apiKey = "yatmYfJkdbM9yR9r8Icqdx7Gp_Xn3jlv1uzU5tMH8Ig"
