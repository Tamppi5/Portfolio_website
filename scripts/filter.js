const buttonA = document.querySelector("#filter-psychology");
const buttonB = document.querySelector("#filter-machine-learning");
const buttonC = document.querySelector("#filter-tools");
const reset = document.querySelector("#filter-reset");


// Valitaan eri kategorioihin kuuluvat projektilaatikot. 
// Koska querySelectorAll palauttaa HTMLNodelistin, muutetaan se Arrayksi Array.from-funktiolla, jotta voidaan käyttää map-metodia.
const aBoxes = Array.from(document.querySelectorAll(".project-wrapper .a"));
const bBoxes = Array.from(document.querySelectorAll(".project-wrapper .b"));
const cBoxes = Array.from(document.querySelectorAll(".project-wrapper .c"));

// Yhdistetään kaikki projektilaatikko arrayt yhteen arrayhin
const allBoxes = [...aBoxes, ...bBoxes, ...cBoxes];



// Lisätään tapahtumakuuntelija jokaiselle napille:

// Nappi A:lle
buttonA.addEventListener("click", () => {
  // Annetaan nappulalle luokka active, jotta käyttäjä näkee, mikä nappi on valittuna...
  buttonA.classList.add("active");
  // ... ja poistetaan se muilta napeilta
  buttonB.classList.remove("active");
  buttonC.classList.remove("active");

  // Mäpätään a laatikot näkyviin muokkaamalla suoraan tyylejä 
  // saman voisi tehdä myös lisäämällä ja poistamalla luokkia
  
  aBoxes.map((box) => {
    box.style.display = "";
  });

  // Yhteitetään piilotettavat laatikot yhteen arrayhin, ...
  const hideBoxes = [...bBoxes, ...cBoxes];

  // ... ja piilotetaan ne
  hideBoxes.map((box) => {
    box.style.display = "none";
  });
});

// Nappi B:lle
buttonB.addEventListener("click", () => {
  buttonB.classList.add("active");
  buttonA.classList.remove("active");
  buttonC.classList.remove("active");

  bBoxes.map((box) => {
    box.style.display = "";
  });

  const hideBoxes = [...aBoxes, ...cBoxes];

  hideBoxes.map((box) => {
    box.style.display = "none";
  });
});


// Nappi C:lle
buttonC.addEventListener("click", () => {
  buttonC.classList.add("active");
  buttonA.classList.remove("active");
  buttonB.classList.remove("active");

  cBoxes.map((box) => {
    box.style.display = "";
  });

  const hideBoxes = [...aBoxes, ...bBoxes];

  hideBoxes.map((box) => {
    box.style.display = "none";
  });
});


// Lisätään reset-napille tapahtumakuuntelija
reset.addEventListener("click", () => {
  // Poistetaan kaikilta napeilta luokka active
  buttonA.classList.remove("active");
  buttonB.classList.remove("active");
  buttonC.classList.remove("active");
  
  allBoxes.map((box) => {
    // Asetetaan kaikki laatikot näkyviin alkuperäisellä asettelulla
    box.style.display = "";
  });
});