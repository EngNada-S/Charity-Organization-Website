"use strict";const spinner=document.getElementById("spinner");const navbar=document.querySelector(".navbar");const whyUsSection=document.querySelector(".why-us");const goalCounters=document.querySelectorAll(".goal-item");const donationSection=document.querySelector(".donation");const donationBars=document.querySelectorAll(".percentage span");const scrollToTopBtn=document.querySelector(".scroll-to-top");function hideSpinner(){setTimeout(()=>{spinner.classList.remove("show")},500)}
if(spinner)hideSpinner();new WOW().init();if(window.innerWidth<768){document.querySelectorAll("[data-wow-delay]").forEach((el)=>{el.setAttribute("data-wow-delay","0s")})}
function handleNavbarScroll(){const isScrolled=window.scrollY>=90;navbar.classList.toggle("scrolled",isScrolled);navbar.classList.toggle("fixed-top",isScrolled);navbar.classList.toggle("shadow-lg",isScrolled)}
const modal=document.getElementById("videoModal");const videoFrame=document.getElementById("videoFrame");modal?.addEventListener("show.bs.modal",()=>{videoFrame.innerHTML=`
    <iframe
      src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1"
      title="YouTube video player"
      allowfullscreen>
    </iframe>
  `});modal.addEventListener("hidden.bs.modal",()=>{if(videoFrame)videoFrame.innerHTML=""});function handleScrollToTopButton(){scrollToTopBtn.style.display=window.scrollY>=300?"flex":"none"}
function scrollToTop(e){e.preventDefault();window.scrollTo({top:0,behavior:"smooth",})}
function animateCounter(counter){const targetValue=Number(counter.dataset.goal);const duration=3000;const startTime=performance.now();function updateCounter(currentTime){const elapsedTime=currentTime-startTime;const progress=Math.min(elapsedTime/duration,1);counter.textContent=Math.floor(progress*targetValue);if(progress<1){requestAnimationFrame(updateCounter)}else{counter.textContent=targetValue}}
requestAnimationFrame(updateCounter)}
function animateDonationBars(){donationBars.forEach((bar)=>{bar.textContent=bar.dataset.height;bar.style.height=bar.dataset.height})}
const sectionObserver=new IntersectionObserver((entries,observer)=>{entries.forEach((entry)=>{if(!entry.isIntersecting)return;const section=entry.target;if(section.classList.contains("why-us")){goalCounters.forEach(animateCounter)}
if(section.classList.contains("donation")){animateDonationBars()}
observer.unobserve(section)})},{threshold:0,},);if(whyUsSection){sectionObserver.observe(whyUsSection)}
if(donationSection){sectionObserver.observe(donationSection)}
window.addEventListener("scroll",()=>{handleNavbarScroll();handleScrollToTopButton()});scrollToTopBtn?.addEventListener("click",scrollToTop)