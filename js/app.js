const App = (function() {
  return class App {
    static init() {
      let buttons = document.getElementsByClassName("quadrant-wrapper")
      let titles = document.getElementsByClassName("quadrant-title")
      let learnMoreButtons = document.getElementsByClassName('quadrant-button')
      let titleCount = 0
      for(const button of buttons) {
        button.addEventListener("click", function(event) {
          event.preventDefault()
          App.addClick(event)
        })
      }
      for(const title of titles) {
        App.addBackground(title, titleCount)
        titleCount+=1
      }
    };

    static addClick(event) {
      let parent = event.target.parentElement
      let wrapper = parent.parentElement
      if(wrapper.className.includes("active")) {
        wrapper.className = "quadrant-wrapper"
      } else {
        wrapper.className = wrapper.className + " active"
      }
    }

    static addBackground(title, titleCount) {
      let backgrounds = ["WATER", "FIRE", "AIR", "EARTH"]
      title.style.backgroundImage = `url(./images/basic-elements-${backgrounds[titleCount]}.png)`
    }
  }
})();
