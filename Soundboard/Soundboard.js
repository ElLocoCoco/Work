const sounds = [
    'applause', 'boo', 'gasp', 'tada', 'victory', 
    'wrong', 'womp', 'the-unforgivable-word', 'ghost', 'he-is',
    'brother','ha','timmay','aww','bitch','chill','intro','jamal',
    'jingle','unspeakable-word','nuts','off','whistle','snapchat','bruh',
    'black-men','send-u','Ksi','class','SPECIAL-TEAMS','loser','hee-hee',
    'ur-mom','Whoowee','WOW','Big-back','Mate','YAHIR','Prowler','Name','Be-Back',
    'Shhhh','gta','faygo','Ai','CHICKEN','indian','leave','eye','Kaboom',
  ];

  sounds.forEach(sound => {
      const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.innerText = sound.replace(/-/g, ' ');
  
      btn.addEventListener('click', () => {
          stopSongs();
  
          const audio = document.getElementById(sound);
          if (audio) {
              audio.currentTime = 0;
              audio.play();
          }
      });
  
      document.getElementById('buttons').appendChild(btn);
  });
  
  function stopSongs() {
      sounds.forEach(sound => {
          const audio = document.getElementById(sound);
          if (audio) {
              audio.pause();
              audio.currentTime = 0;
          }
      });
  }