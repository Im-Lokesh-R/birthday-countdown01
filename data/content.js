
// All content and dates. Edit this file to change messages, playlists, or media.
const FRIEND_NAME = "Keerthana";


const DAYS = [
  {day:10, date:'2025-11-18', emoji:'🎈', title:'Welcome Princess + countdown Days', type:'note'},
  {day:9,  date:'2025-11-19', emoji:'💬', title:'A heartfelt letter', type:'letter', letterHtml:`<p>Hi ${FRIEND_NAME},</p><p>I made this for you — ten tiny doors for ten tiny memories. I hope each one brings a smile. ❤️</p>`},
  {day:8,  date:'2025-11-20', emoji:'📸', title:'Photo memory gallery', type:'gallery',images: [
  { src: 'assets/images/day8-1.jpeg', caption: 'At this time , i never imagined that me and you would became this close !' },
  { src: 'assets/images/day8-2.jpeg', caption: 'This is one of my fav movements !' },
  { src: 'assets/images/day8-3.jpeg', caption: 'Good old days !, I know we dont have much photos together , maybe thats the reason we are still holding together' }
],},
  {day:7,  date:'2025-11-21', emoji:'🎧', title:'Playlist surprise', type:'playlist', playlistUrl:'https://open.spotify.com/playlist/0jbyWga5xHiRJEjQVp536C?si=707f6e5a5e12401f'},
  {day:6,  date:'2025-11-22', emoji:'🎥', title:'Mini video', type:'video', video:'assets/videos/day6.mp4'},
  {day:5,  date:'2025-11-23', emoji:'💫', title:'Compliment generator', type:'compliments', compliments:[
      'You make ordinary days magical ✨',
      'Your laugh is a small sun.',
      'You are one of the strongest people I know.',
      '"That purple color looks perfect on you.',
      "I'm a better person because of you.",
      'You keep kindness simple and real.'
  ]},
  {day:4,  date:'2025-11-24', emoji:'📜', title:'Memory quiz', type:'quiz', 
    quizSet:[
        {
                  q:'Where did we first meet in school?', options:['Classroom','Canteen','PT','Online Class'], answer:0,

        },
        {
                  q:'Who approched first?',options:['Loki','Life did !','Varsha','Your beauty!'],answer:2,

        },
        {
                  q:'What do you think about me ?',options:['Good guy','Great guy','Nice guy','All of the above'],answer:3,

        },
        
]},
  {day:3,  date:'2025-11-25', emoji:'🪄', title:'Digital gift box', type:'gift', giftHtml:`<h3>A tiny surprise</h3><p>Here’s a doodle and a little note.</p><img src='assets/images/gift-doodle.jpg' alt='doodle'>`},
  {day:2,  date:'2025-11-26', emoji:'🌹', title:'What I love about you', type:'list', list:[
      'Your laugh','The way you listen','How you brighten small days','Your crazy snacks choices','That one random dance move'
  ]},
  {day:1,  date:'2025-11-27', emoji:'🎂', title:'Final surprise page', type:'final', finalHtml:`<h2>Birthday Eve</h2><p>Be ready for midnight — the heart of the surprise awaits.</p>`}
];

const BIRTHDAY = {date:'2025-11-28', type:'birthday', emoji:'🎉', title:'Happy Birthday!', birthdayHtml:`<h1>Happy Birthday ${FRIEND_NAME} 🎂</h1><p>All my love today and always.</p><video controls src='assets/videos/birthday-video.mp4'></video>`};



