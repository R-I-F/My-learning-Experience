const homeBtn = document.getElementById("home-btn")
const aboutMeBtn = document.getElementById("about-me-btn")
const readMoreEl = document.getElementById("read-more-el")
const readMoreSecEl = document.getElementById("read-more-sec-el")
const articleFeaturedEl = document.getElementById("article-featured-el")
const readMoreArticleEl = document.getElementById("read-more-article-el")
const aboutMeEl = document.getElementById("about-me-el")

homeBtn.addEventListener("click", function(){
    location.reload()
})

readMoreEl.addEventListener("click", function(){
    readMoreSecEl.classList.remove("hidden")
    articleFeaturedEl.classList.add("hidden")
})

aboutMeBtn.addEventListener("click", function(){
    readMoreSecEl.classList.remove("hidden")
    articleFeaturedEl.classList.add("hidden")
    aboutMeEl.classList.remove("hidden")
    readMoreArticleEl.classList.add("hidden")

})