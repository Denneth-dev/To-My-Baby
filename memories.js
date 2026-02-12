function goBack() {
  window.location.href = "index.html";
}

function openLightbox(file, type, message) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxVideoSrc = document.getElementById("lightbox-video-src");
  const lightboxText = document.getElementById("lightbox-text");

  lightboxText.innerText = message;

  if (type === "photo") {
    lightboxImg.style.display = "block";
    lightboxVideo.style.display = "none";

    lightboxImg.src = file;
  }

  if (type === "video") {
    lightboxImg.style.display = "none";
    lightboxVideo.style.display = "block";

    lightboxVideoSrc.src = file;
    lightboxVideo.load();
    lightboxVideo.play();
  }

  lightbox.classList.add("show");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxVideo = document.getElementById("lightbox-video");

  lightbox.classList.remove("show");

  // stop video kapag close
  lightboxVideo.pause();
  lightboxVideo.currentTime = 0;
}

/* Close kapag pinindot background */
document.getElementById("lightbox").addEventListener("click", function(e) {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});

/* Close kapag Escape key */
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
