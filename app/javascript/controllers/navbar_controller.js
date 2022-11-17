import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    console.log("hello from navbar controlller!")
  }
  updateNavbar() {
    const banner = document.querySelector(".banner");
    if (banner) {
      if (window.scrollY >= banner.offsetHeight) {
        this.element.classList.add("navbar-lewagon-white")
      } else {
        this.element.classList.remove("navbar-lewagon-white")
      }
    }
  }
}
