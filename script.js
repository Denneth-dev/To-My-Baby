const envelope = document.getElementById("envelope");
const typeText = document.getElementById("typeText");
const bgMusic = document.getElementById("bgMusic");
const popSound = document.getElementById("popSound");
const nextBtn = document.getElementById("nextBtn");

let opened = false;
let musicPlaying = false;

const message = `
Hi Baby 💖

Happy Valentine’s Day!

I just want you to know how grateful I am to have you.
You are my peace, my happiness, and my favorite person.

I want to be honest with you even though we're not together yet, and even though 
you haven't allowed me na-ligawan ka. Also want you to know that i'm willing to 
wait, not because i'm just hoping, but because I choose you ever single day.

I realize that I've truly fallen for you for who you are and for the way you make me happy even 
through the smallest things, and I don't want to lose that. 
I'm okay with taking things slowly. Hindi kita minamadali, at hindi rin kita pinipilit. 
Ang intention ko lang ay maging tapat at totoo sa'yo, 
para maramdaman mo na nandito ako at nandito para sa'yo
sa kung nasaan tayo ngayon.

Gusto ko ring malaman mo na kahit anong problema ang dumaan sa buhay mo, 
handa kitang suportahan at samahan lalo na sa mga 
down seasons mo. You don't have to face everything alone, 
because there's someone willing to listen, understand, 
and stay by your side even through the hard times hehe. 
That's all baby, always take care yourself. 


I love you so much 💌✨
`;

let index = 0;

function typeWriter() {
  if (index < message.length) {
    
    typeText.innerHTML += message.charAt(index);
    index++;

    typeText.parentElement.scrollTop = typeText.parentElement.scrollHeight;

    setTimeout(typeWriter, 60);
  } else {
    nextBtn.style.display = "block";
  }
}

function createSparkles() {
  for (let i = 0; i < 18; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    const x = (Math.random() - 0.5) * 200 + "px";
    const y = (Math.random() - 0.5) * 200 + "px";

    sparkle.style.setProperty("--x", x);
    sparkle.style.setProperty("--y", y);

    sparkle.style.left = "50%";
    sparkle.style.top = "50%";

    envelope.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
}

envelope.addEventListener("click", () => {
  if (!opened) {
    envelope.classList.add("open");
    opened = true;

    popSound.play();
    createSparkles();
    typeWriter();
    
    let musicPlaying = autoPlayMusic();

function autoPlayMusic() {
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    bgMusic.currentTime = 0;
    playPromise.catch(error => {
      console.log("Auto-play failed:", error);
    });
  }
}

  } else {
    envelope.classList.remove("open");
    opened = false;
    typeText.innerHTML = "";
    index = 0;
    nextBtn.style.display = "none";
    bgMusic.pause();
    bgMusic.currentTime = 0;
    musicPlaying = false ;
  }
});

function toggleMusic() {
  if (!musicPlaying) {
    bgMusic.play();
    musicPlaying = true;
  } else {
    bgMusic.pause();
    musicPlaying = false;
  }
}

function goToMemories() {
  window.location.href = "memories.html";
}
