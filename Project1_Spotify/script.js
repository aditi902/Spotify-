console.log('Here is our app: Spotify');
let songIndex = 0;
let audioElement = new Audio('allsongs/1.mp3');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let allsongs = [
  {
    songName: 'Unstoppable - Sia',
    filePath: 'allsongs/1.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songName: 'Raabta - Arijit Singh',
    filePath: 'allsongs/2.mp3',
    coverPath: 'covers/2.jpg',
  },

  {
    songName: 'Ishare Tere - Guru Randhawa',
    filePath: 'allsongs/3.mp3',
    coverPath: 'covers/3.jpg',
  },

  {
    songName: 'Mehendi Wale Haath - Guru Randhawa ',
    filePath: 'allsongs/4.mp3',
    coverPath: 'covers/4.jpg',
  },

  {
    songName: 'Off My Face - Justin Bieber',
    filePath: 'allsongs/5.mp3',
    coverPath: 'covers/5.jpg',
  },

  {
    songName: 'Who Says - Selena Gomez',
    filePath: 'allsongs/6.mp3',
    coverPath: 'covers/6.jpg',
  },
  {
    songName: 'Rim Jhim - Jubin Nautiyal',
    filePath: 'allsongs/7.mp3',
    coverPath: 'covers/7.jpg',
  },
  {
    songName: 'Boli Tujhse - Amit Trivedi',
    filePath: 'allsongs/8.mp3',
    coverPath: 'covers/8.jpg',
  },
  {
    songName: 'Piya Re Piya - Yasser Desai',
    filePath: 'allsongs/9.mp3',
    coverPath: 'covers/9.jpg',
  },
];

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener('timeupdate', () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

songItems.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = allsongs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText =
    allsongs[i].songName;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    (element) => {
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
    }
  );
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `allsongs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      masterSongName.innerText = allsongs[songIndex].songName;
      gif.style.opacity = 1;
    });
  }
);

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 8;
  } else {
    songIndex--;
  }
  audioElement.src = `allsongs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  masterSongName.innerText = allsongs[songIndex].songName;
});

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 8) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  audioElement.src = `allsongs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  masterSongName.innerText = allsongs[songIndex].songName;
});
