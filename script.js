const memories = {
  openair: {
    title: 'Open Air',
    date: '27. Juni 2026 · FreeFall Plaza, Moers',
    description: 'Ein Sommertag im Freizeitpark: Das kukuru Soundsystem spielte House bis in die Abendstunden. Auf der Tanzfläche brachte Wassernebel Abkühlung.',
    image: 'assets/kukuru-archiv.webp',
    alt: 'Publikum vor der pink beleuchteten kukuru-Bühne',
    credit: 'Archivfoto aus der Ankündigung von Moers Marketing',
    sourceLabel: 'Zum Rückblick'
  },
  winter: {
    title: 'Winter Afterwork',
    date: '17. Dezember 2025 · Glühweinpyramide, Moers',
    description: 'Die Winterausgabe brachte House auf den Weihnachtsmarkt. Getanzt wurde unter freiem Himmel an der Glühweinpyramide.',
    sourceLabel: 'Zur Ankündigung'
  },
  kastell: {
    title: 'House After Work',
    date: 'Juni 2025 · Kastellplatz, Moers',
    description: 'Für die House After Work Party wurde der Kastellplatz mitten in der Moerser Innenstadt zur Open-Air-Tanzfläche.',
    sourceLabel: 'Zur Ankündigung'
  }
};

const dialog = document.querySelector('.memory-dialog');
const figure = dialog.querySelector('.dialog-figure');
const image = dialog.querySelector('.dialog-image');
const source = dialog.querySelector('.dialog-source');
let lastOpenedCard;

if (typeof dialog.showModal === 'function') {
  for (const card of document.querySelectorAll('[data-memory]')) {
    card.setAttribute('aria-haspopup', 'dialog');
    card.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      const memory = memories[card.dataset.memory];
      lastOpenedCard = card;
      dialog.querySelector('#memory-title').textContent = memory.title;
      dialog.querySelector('.dialog-date').textContent = memory.date;
      dialog.querySelector('.dialog-description').textContent = memory.description;
      source.href = card.href;
      source.textContent = memory.sourceLabel;
      figure.hidden = !memory.image;

      if (memory.image) {
        image.src = memory.image;
        image.alt = memory.alt;
        dialog.querySelector('.dialog-credit').textContent = memory.credit;
      }

      dialog.showModal();
    });
  }

  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => lastOpenedCard?.focus({ preventScroll: true }));
}

const motionToggle = document.querySelector('.motion-toggle');
const hero = motionToggle.closest('.hero');
hero.dataset.motion = 'playing';
motionToggle.addEventListener('click', () => {
  const paused = hero.dataset.motion === 'playing';
  hero.dataset.motion = paused ? 'paused' : 'playing';
  motionToggle.setAttribute('aria-label', paused
    ? 'Flamingo-Animation fortsetzen'
    : 'Flamingo-Animation pausieren');
});
