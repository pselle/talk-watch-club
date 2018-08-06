// Starting with all the !!con talks as scraped from http://bangbangcon.com/2017/recordings.html
const talks = [
  {
    "title": "Keynote - Cyborgs Unite!",
    "url": "http://youtube.com/watch?v=z2R97v9n4pI",
    "speaker": "Karen Sandler"
  },
  {
    "title": "Serious programming with jq?! A practical and purely functional programming language!",
    "url": "http://youtube.com/watch?v=PS_9pyIASvQ",
    "speaker": "Charles Chamberlain"
  },
  {
    "title": "Finding Friends in High Dimensions: Locality-Sensitive Hashing For Fun and Friendliness!",
    "url": "http://youtube.com/watch?v=kKRvEJrvvso",
    "speaker": "Aaron Levin"
  },
  {
    "title": "What Alien Invaders, Birds, and Computer Simulations have in Common: Flocking!!",
    "url": "http://youtube.com/watch?v=Q52oYMO962w",
    "speaker": "Jan Mitsuko Cash"
  },
  {
    "title": "I wrote to a dead address in a deleted PDF and now I know where all the airplanes are!!",
    "url": "http://youtube.com/watch?v=CGrwWrsVAFs",
    "speaker": "Jason McIntosh"
  },
  {
    "title": "Glk! A Universal User Interface! for Interactive Fiction!",
    "url": "http://youtube.com/watch?v=FhVob_sRqQk",
    "speaker": "Andrew Plotkin"
  },
  {
    "title": "How do Keyboards Work? HIDing, in Plain Sight!!",
    "url": "http://youtube.com/watch?v=1v4Qwg41GCg",
    "speaker": "Scott Vokes"
  },
  {
    "title": "Making Mushrooms Glow!",
    "url": "http://youtube.com/watch?v=T75FvUDirNM",
    "speaker": "Bomani McClendon"
  },
  {
    "title": "Why So Loud! Geeking Out On Airline Data, Physics And Mapping",
    "url": "http://youtube.com/watch?v=DqBUovYR7Og",
    "speaker": "Ewan Dennis"
  },
  {
    "title": "Writing NES Games! with Assembly!!",
    "url": "http://youtube.com/watch?v=IbS7uEsHV_A",
    "speaker": "Christian Joudrey"
  },
  {
    "title": "The TOP 5 Queer Feminist Cyberpunk Manifestos!",
    "url": "http://youtube.com/watch?v=5GiQovHaT_g",
    "speaker": "Jean Cochrane"
  },
  {
    "title": "Corruption in the Data Center! TCP can fail to keep your data safe!",
    "url": "http://youtube.com/watch?v=OKg9RI6IkV8",
    "speaker": "Evan Jones"
  },
  {
    "title": "What the heck time is it?!?",
    "url": "http://youtube.com/watch?v=MDmNvVG9AnQ",
    "speaker": "Joel Potischman"
  },
  {
    "title": "HDR Photography in Microsoft Excel?!",
    "url": "http://youtube.com/watch?v=bkQJdaGGVM8",
    "speaker": "Kevin Chen"
  },
  {
    "title": "I got the computer to find words with good anagrams and throw away the boring ones!!",
    "url": "http://youtube.com/watch?v=VXW_V5iishY",
    "speaker": "Mark Dominus"
  },
  {
    "title": "Keynote - We Are What We Celebrate: The Joy, Excitement, and Surprise of Who is Making Things",
    "url": "http://youtube.com/watch?v=w9XsWeU5PZA",
    "speaker": "Limor Fried"
  },
  {
    "title": "Synthesizing Video and Turning it into Music!!",
    "url": "http://youtube.com/watch?v=nwsg-ZTRRoI",
    "speaker": "Jes Wolfe!"
  },
  {
    "title": "PUSH THE BUTTON! 🔴 Designing a fun game where the only input is a BIG RED BUTTON! 🔴 !!!",
    "url": "http://youtube.com/watch?v=KqEc2Ek4GzA",
    "speaker": "Mahtab Sabet"
  },
  {
    "title": "Simulated Gravity Comes from Within!!",
    "url": "http://youtube.com/watch?v=BhNw5_UyAhU",
    "speaker": "Paul Frazee"
  },
  {
    "title": "BEEP!! See AppleSoft BASIC and 6502 assembly language written on an actual Apple IIc from the 80s! Fresh on startup with no software installed!",
    "url": "http://youtube.com/watch?v=DY4t9IHFD4E",
    "speaker": "Richard Harrington"
  },
  {
    "title": "Om! Nom! Nash!",
    "url": "http://youtube.com/watch?v=RHg2JIvoaq0",
    "speaker": "David Turner"
  },
  {
    "title": "The emoji that Killed Chrome!!",
    "url": "http://youtube.com/watch?v=UE-fJjMasec",
    "speaker": "Julian Squires"
  },
  {
    "title": "Islamic Geometry: Hankin’s Polygons in Contact Algorithm!!!",
    "url": "http://youtube.com/watch?v=ld4gpQnaziU",
    "speaker": "Yomna Nasser"
  },
  {
    "title": "How Merkle Trees Enable the Decentralized Web!",
    "url": "http://youtube.com/watch?v=3giNelTfeAk",
    "speaker": "Tara Vancil"
  },
  {
    "title": "Where Are All the Space Robots?!",
    "url": "http://youtube.com/watch?v=cfNErhM3vXI",
    "speaker": "Lisa Ballard"
  },
  {
    "title": "Interpolation Search Can Be Fast, in Some Situations, Sometimes, If You Try!",
    "url": "http://youtube.com/watch?v=RJU2cXvQ9po",
    "speaker": "Ruchir Khaitan"
  },
  {
    "title": "No battery, no (watch) life!!",
    "url": "http://youtube.com/watch?v=2c1I7-qWWWI",
    "speaker": "Michael Kwan"
  },
  {
    "title": "A Punch Card ate my Program!",
    "url": "http://youtube.com/watch?v=PF6JEK0BpPU",
    "speaker": "Walt Mankowski"
  },
  {
    "title": "DHCP: IT’S MOSTLY YELLING!!",
    "url": "http://youtube.com/watch?v=enRY9jd0IJw",
    "speaker": "Mindy Preston"
  },
  {
    "title": "ENHANCE! Upscaling Images with Neural Networks",
    "url": "http://youtube.com/watch?v=RhUmSeko1ZE",
    "speaker": "Geoffrey Litt"
  },
  {
    "title": "Closing Remarks: The Origin Story",
    "url": "http://youtube.com/watch?v=gdIrdkSIND8",
    "speaker": "Erty Seidohl"
  }];
