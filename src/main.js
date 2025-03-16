const primaryHeader = document.querySelector(".primary-header")
const navToggleButton = document.querySelector(".mobile-nav-toggle-button");
const primaryNav = document.querySelector(".primary-navigation");

// this works by creating a toggle functionality which takes a class.
// When the user clicks on the toggle button, 
// it will either show or hide the navigation menu (primaryNav) 
// by adding or removing the opened class which is only written
// in css and didn't add that class in html. This works but from 
// accessibility point of view this ain't ideal. THE CODE⬇️

// navToggleButton.addEventListener('click', () => {
//     primaryNav.classList.toggle("opened");
// })


// w/data attribute through only css
// navToggleButton.addEventListener('click', () => {
//     primaryNav.toggleAttribute("data-visible")
// })


// ⬆️ the upper code works when the user clicks the mobile nav button
// the primary nav will be shown or hidden after the function finds
// attribute named data-visible


// ACCESSIBILITY
// We set the aria-expanded = False for the primary nav, which tells
// the screen readers the primary nav is hidden. Now when the user clicks
// the mobile nav button the the primary nav must show aria-expanded = True,
// this is how to that(vid-4: 21mins):
navToggleButton.addEventListener("click", () => {
    // after the nav button is clicked before showing the 
    // primary navigation, we'll update the aria-expanded

    // this works
    // primaryNav.hasAttribute('data-visible') ? console.log('Visible') : console.log('notVisible')
    primaryNav.hasAttribute("data-visible") 
        ? navToggleButton.setAttribute("aria-expanded", false)
        : navToggleButton.setAttribute("aria-expanded", true)
    primaryNav.toggleAttribute("data-visible")
    primaryHeader.toggleAttribute("data-overlay")
    // using data attributes for the box shadow around primary navigation
    // which is only written is css but not in html
})

// a11yslider
const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    arrows: false,
    dots: true,
    centerMode: true,
    responsive: {
        480: {
          dots: false, // dots disabled 800px and up
        }
    }
});