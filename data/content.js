
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
  {day:6,  date:'2025-11-22', emoji:'💫', title:'Compliment generator', type:'compliments', compliments:[
      "You make ordinary days magical ✨",
      "Your laugh is a small sun.",
      "You are one of the strongest people I know.",
      "That green color looks perfect on you.",
      "I'm a better person because of you.",
      "You keep kindness simple and real.",
    "ohh look at this , even tho you just woke up , your beauty is unmatched",
    "hey , you forgot to wash your face , why there is so much beauty in your face !",
    "hey there , you just woke up han , whats on your face ?? ohh is that what people call beauty ?",
    "There is no complement for you ! , if you want any complements we need to update the complement generator , because we ran out of stocks !",
    "sing a song for me ! also do a dance (i wont stop saying this.)",
    "dammn , you look like you dont know what it means to be ugly!",
    "Give some space so other women can also be recogonized!",
    "Ohh look at you, waking up and choosing to be prettier than everyone again,",
    "Slow down, your beauty is causing global warming,",
    "Bruh, why are you glowing like you swallowed a whole star?,",
    "Hey, did you forget to turn off your beauty while sleeping?,",
    "You woke up like this? No effort? Unfair!,",
    "Your face should come with a warning: too cute to handle!,",
    "Can you stop being so pretty? You're making the rest of us look like side characters,",
    "Even filters get jealous of your natural face,",
    "Your beauty really needs to chill, it's too much for humans,",
    "Why do you look like a Disney princess but in real life?,",
    "Hold on—why is your face shining brighter than my future?,",
    "Every time you show up, the sun takes a break out of embarrassment,",
    "Did someone order a cute human? Oh wait, that’s just you existing!,",
    "Your face is illegal, I’m calling the beauty police,",
    "Even your shadow looks adorable, how is that possible?,",
    "Your smile should be banned, it's too distracting,",
    "You walk in and the whole room gets a glow-up,",
    "The world wasn't ready for your face today, but here we are,",
    "How do you manage to look cute even when you're confused?,",
    "Seriously, take a break from being this pretty, you're overqualified,",
    "Mirror companies owe you money for making their products look useful,",
    "Stop being so gorgeous, it’s becoming a public issue,",
    "You're so pretty that compliments run away out of fear of not being enough,",
    "If being stunning was a crime, you'd have a life sentence,",
    "Your beauty is doing overtime with no breaks,",
    "Even angels get insecure when they see your face,",
    "Bro, you're too pretty to be someone's best friend—you're supposed to be on magazine covers,",
    "Why does your face look like it's been Photoshopped by God?,",
    "You don’t wake up—you spawn with max beauty stats,",
    "Your beauty level is so high, it’s pay-to-win,",
    "You're the reason cameras exist, honestly,",
    "The moon called, it wants its glow back,",
    "You look so cute that time probably pauses to admire you,",
    "Even the wind slows down to not mess up your look,",
    "You look good without trying, and we hate that for us but love that for you,",
    "Your beauty is like WiFi—everyone wants a connection,",
    "Bro, why you looking like a soft drink ad model?,",
    "You woke up and instantly out-prettied half the planet,",
    "Your face is doing a full power performance while the rest of us lag,",
    "How do you manage to look cute in every angle? Teach science please,",
    "You’re so pretty that even your 'ugly days' look better than my best days,",
    "Your existence is proof that beauty has no limits,",
    "Every picture you take automatically turns into a wallpaper,",
    "Your face is so aesthetic it deserves its own Pinterest board,",
    "You walk in and everyone's self-esteem takes damage,",
    "Your beauty is so stable it doesn’t even fluctuate like my moods,",
    "You look so good today, even your reflection is impressed,",
    "You literally reset the definition of cute every morning,",
    "You're what happens when beauty and chaos collaborate,",
    "Your face should honestly start charging appearance fees,",
  ]},
   {day:5,  date:'2025-11-23', emoji:'🎥', title:'Mini video', type:'video', video:'assets/videos/day6.mp4'},
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




