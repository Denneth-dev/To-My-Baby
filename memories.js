function goBack() {
  window.location.href = "index.html";
}

/* PHOTO MESSAGES */
const photoMessages = {
  1: "Best memories nang tayo lang dalawa 🥰",
  2: "Ito yung moment na sobrang saya ko kasi kasama kita mag night ride kahit may aberya!🥺",
  3: "Ito naman yung unang coffee date natin sobrang thankful ko dahil napapayag kita, medj tampo lang kasi nag aya kapa hehe joke! 💖",
  4: "Ito yung araw na hindi ka makalimutan. Kahit nasan man ako ikaw ang nasa isip ko lagi 🥺",
  5: "Ito yung picture na paulit-ulit kong tinitignan kapag miss kita 🥺💕",
  6: "Ito nanamn kahit alam kong ayaw mong pinipicturan ka, patago akong kumuha sayo kasi soon may upload ako na sobrang ganda ng mapapangasawa ko 🥺",
  7: "Sobrang ganda ng picture na ito, kasi alam ko ikaw na talaga. Kahit ayaw mo pa mag papicture 🥺",
  8: "Ganda mo dito baby nice shot talaga. Epal lang sila kuya haha 🥺💖"
};

/* VIDEO MESSAGES */
const videoMessages = {
  1: "Sobrang saya natin dito baby sana hindi nato mag bago hanggang dulo 🥺🎥",
  2: "The best moment na nakasama ka, kahit ano pang isipin mo or mawala man feelings mo hinding hindi ako mas sasawa na piliin ka baby 🥺🎥"
};

let typingInterval;

function typeWriterEffect(text, element, speed = 35) {
  clearInterval(typingInterval);
  element.innerHTML = "";
  let i = 0;

  typingInterval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(typingInterval);
    }
  }, speed);
}

function openLightbox(id, type) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxVideoSrc = document.getElementById("lightbox-video-src");
  const lightboxText = document.getElementById("lightbox-text");

  let message = "";

  if (type === "photo") {
    message = photoMessages[id];

    lightboxImg.style.display = "block";
    lightboxVideo.style.display = "none";

    lightboxImg.src = `assets/photo${id}.jpg`;
  }

  if (type === "video") {
    message = videoMessages[id];

    lightboxImg.style.display = "none";
    lightboxVideo.style.display = "block";

    lightboxVideoSrc.src = `assets/video${id}.mp4`;
    lightboxVideo.load();
    lightboxVideo.play();
  }

  lightbox.classList.add("show");

  // TYPEWRITER MESSAGE SA TAAS
  typeWriterEffect(message, lightboxText, 35);
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxText = document.getElementById("lightbox-text");

  lightbox.classList.remove("show");

  clearInterval(typingInterval);
  lightboxText.innerHTML = "";

  lightboxVideo.pause();
  lightboxVideo.currentTime = 0;
}

/* ✅ FIX: CLOSE LIGHTBOX kapag pinindot yung PHOTO or VIDEO AREA */
document.getElementById("lightbox-img").addEventListener("click", closeLightbox);
document.getElementById("lightbox-video").addEventListener("click", closeLightbox);

/* ✅ FIX: CLOSE din kapag pinindot yung mismong content area (para sure kahit controls) */
document.querySelector(".lightbox-content").addEventListener("click", function(e) {
  // para hindi magsara kapag message text lang ang click
  if (e.target.id === "lightbox-text") return;
  closeLightbox();
});

/* WALANG CLOSE SA BACKGROUND */
document.getElementById("lightbox").addEventListener("click", function(e) {
  // prevent closing kapag background click
  if (e.target.id === "lightbox") return;
});

/* DISABLE ESCAPE CLOSE */
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    return;
  }
});
