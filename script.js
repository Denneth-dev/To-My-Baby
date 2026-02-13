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

There are moments when waiting feels exhausting, when silence feels heavier than rejection, 
and when I question if I'm holding on to something uncertain.
Pero sa bawat pagkakataong gusto kong sumuko, bumabalik ang dahilan kung bakit kita minahal. 
You gave my days meaning, you taught my heart how to hope, 
and you reminded me that real love doesn't demand, it understands, it waits, it endures.

And I realize that I've truly fallen for you for who you are and for the way you make me happy even 
through the smallest things, and I don't want to lose that. 
I'm okay with taking things slowly. Hindi kita minamadali, at hindi rin kita pinipilit, 
Hindi dahil sigurado ako sa mga mangyayari, Kundi dahil sigurado ako sa lalim ng nararamdaman ko sayo.
Ang intention ko lang ay maging tapat at totoo sa'yo, 
para maramdaman mo na nandito ako at nandito para sa'yo
sa kung nasaan tayo ngayon.

Gusto ko ring malaman mo na kahit anong problema or pagsubok ang dumaan sa buhay mo, 
handa kitang pakinggan, unawain, at damayan sa bawat sugat ng hindi nila napapansin. 
You don't have to face everything alone, because I'll be here to share it with you. 
And stay by your side even through the hardest times hehe. 
That's all baby, always take care yourself. Maybe tommorow or another day, we can eat together, or coffee date, or just simply hang out. 
I just want to spend time with you and make you happy.


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
