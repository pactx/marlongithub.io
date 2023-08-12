const cells = 91;
const items = [
  { name: 'Myers', img: 'IMG/case/MAYERS.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Traper', img: 'IMG/case/TRAPERREAL.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Huntress', img: 'IMG/case/HUNTRESS3.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'VITINHO!', img: 'IMG/case/VITINHO.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerDourada' },
  { name: 'Doctor', img: 'IMG/case/DOCTORREAL.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Spirit', img: 'IMG/case/SPIRITREAL1.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Pig', img: 'IMG/case/PIGREAL2.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerRoxa' },
  { name: 'Nurse', img: 'IMG/case/NURSEREAL2.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'HillBilly', img: 'IMG/case/HillBillyreal.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Clown', img: 'IMG/case/CLOWN3.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Plague', img: 'IMG/case/PLAGUEREAL.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Wraith', img: 'IMG/case/WRATH.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Bubba', img: 'IMG/case/BUBBAREAL.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Freddy', img: 'IMG/case/FREDDY4.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Artista', img: 'IMG/case/ARTISTA3.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Pyramid', img: 'IMG/case/PYRAMIDE.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Legion', img: 'IMG/case/LEGION1.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Sadako', img: 'IMG/case/SADAKO4.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Wesker', img: 'IMG/case/WESKER5.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Cenobite', img: 'IMG/case/CENOBITA.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Trickster', img: 'IMG/case/TRICKSTER.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Cavaleiro', img: 'IMG/case/CAVALEIRO.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Nemesis', img: 'IMG/case/NEMESIS2.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Singularidade', img: 'IMG/case/SINGULARIDADE2.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Mercenário', img: 'IMG/case/DEATHSLINGER.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Oni', img: 'IMG/case/ONI.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Adriana', img: 'IMG/case/ADRIANA.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Ghostface', img: 'IMG/case/GHOSTFACE.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  { name: 'Blight', img: 'IMG/case/BLIGHT.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Hag', img: 'IMG/case/HAG3.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVermelha' },
  { name: 'Demogorgon', img: 'IMG/case/DEMONGORGON.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerAzul' },
  { name: 'Draga', img: 'IMG/case/DRAGA.png', chance: 0.031, originalChance: 0.031, winnerClass: 'WinnerVerde' },
  
];

function getItem() {
  let item;

  while (!item) {
    const chance = Math.random(); // Gera um número aleatório entre 0 e 1
    
    let cumulativeProbability = 0;
    for (const elm of items) {
      cumulativeProbability += elm.chance;
      if (chance < cumulativeProbability && !item) item = elm;
    }
  }

  return item;
}

function generateItems() {
  document.querySelector('.list').remove();
  document.querySelector('.scope').innerHTML = `
    <ul class="list"></ul>
  `;
  
  const list = document.querySelector('.list');

  for (let i = 0; i < cells; i++) {
    const item = getItem();
    
    const li = document.createElement('li');
    li.setAttribute('data-item', JSON.stringify(item));
    li.classList.add('list__item');
    
    // Adicione a classe 'winner' ao item vencedor
    if (item.winnerClass) {
      li.classList.add(item.winnerClass);
      li.classList.add('winner');
    }
    
    li.innerHTML = `
      <img src="${item.img}" alt="" />
    `;

    list.append(li);
  }
}

generateItems()

let isStarted = false
let isFirstStart = true

function start() {
  if (isStarted) return;
  else isStarted = true;

  const winnerText = document.querySelector('.winner-text');
  winnerText.style.display = 'none';

  if (!isFirstStart) generateItems();
  else isFirstStart = false;
  
  const list = document.querySelector('.list');

  setTimeout(() => {
    list.style.left = '50%';
    list.style.transform = 'translate3d(-50%, 0, 0)';
  }, 0);

  const item = list.querySelectorAll('li')[45];

  list.addEventListener('transitionend', () => {
    isStarted = false;
    item.classList.add('active');
    const data = JSON.parse(item.getAttribute('data-item'));
  
    winnerText.textContent = data.name.toUpperCase();
    winnerText.style.display = 'block';
  
    list.querySelectorAll('li').forEach((li) => {
      if (li !== item) {
        li.classList.remove('active');
      }
    });
  
    const colorClasses = ['WinnerVerde', 'WinnerAzul', 'WinnerRoxa', 'WinnerVermelha', 'WinnerDourada'];
    winnerText.classList.remove(...colorClasses);
  
    winnerText.classList.add(data.winnerClass);
  }, { once: true });

  meuAudio.play();
}