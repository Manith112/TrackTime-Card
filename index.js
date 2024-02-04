const jsonData = [
    {
      "title": "Work",
      "image": "./images/icon-work.svg",
      "timeframes": {
        "daily": { "current": 5, "previous": 7 },
        "weekly": { "current": 32, "previous": 36 },
        "monthly": { "current": 103, "previous": 128 }
      }
      
    },
    {
      "title": "Play",
      "image": "./images/icon-play.svg",
      "timeframes": {
        "daily": { "current": 1, "previous": 2 },
        "weekly": { "current": 10, "previous": 8 },
        "monthly": { "current": 23, "previous": 29 }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": { "current": 0, "previous": 1 },
        "weekly": { "current": 4, "previous": 7 },
        "monthly": { "current": 13, "previous": 19 }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": { "current": 1, "previous": 1 },
        "weekly": { "current": 4, "previous": 5 },
        "monthly": { "current": 11, "previous": 18 }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": { "current": 1, "previous": 3 },
        "weekly": { "current": 5, "previous": 10 },
        "monthly": { "current": 21, "previous": 23 }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": { "current": 0, "previous": 1 },
        "weekly": { "current": 2, "previous": 2 },
        "monthly": { "current": 7, "previous": 11 }
      }
    }
  ];

  console.log(jsonData);
// selected time 
// Get all paragraphs inside the div with class "aa-box"
const paragraphs = document.querySelectorAll('.aa-box p');
 // Set "selected" class and initial styles for the "Weekly" paragraph
 const initialSelection = document.getElementById('weekly');
 initialSelection.classList.add('selected');
 initialSelection.style.color = 'white'; // Set the initial color, e.g., red
 initialSelection.classList.add('appear');
paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', () => {
      // Remove the "selected" class from all paragraphs
      paragraphs.forEach(p => {
          p.classList.remove('selected');
          p.style.color = ''; // Reset color for all paragraphs
          p.classList.remove('appear');
      });

      // Add the "selected" class only to the clicked paragraph
      paragraph.classList.add('selected');
      paragraph.classList.add('appear');
      // Set color for the active class (e.g., red)
      paragraph.style.color = 'white';
      paragraph.style.cursor = "pointer"

// work 
const work = document.getElementById("work")
const lastWork= document.getElementById("last-work")
const workHour = document.getElementById("work-hour")
      if (paragraph.id === 'daily') {
        work.innerText = jsonData[0].title;
        workHour.innerText = jsonData[0].timeframes.daily.current + "hrs";
        lastWork.innerText = jsonData[0].timeframes.daily.previous+ "hrs" ;
        }else if(paragraph.id === 'monthly') {
          work.innerText = jsonData[0].title;
          workHour.innerText = jsonData[0].timeframes.monthly.current + "hrs";
          lastWork.innerText = jsonData[0].timeframes.monthly.previous+ "hrs" ;
          }else{
            work.innerText = jsonData[0].title;
          workHour.innerText = jsonData[0].timeframes.weekly.current + "hrs";
          lastWork.innerText = jsonData[0].timeframes.weekly.previous+ "hrs" ;
          }

  // play 
  const play = document.getElementById("play")
const lastPlay= document.getElementById("last-play")
const playHour = document.getElementById("play-hour")
      if (paragraph.id === 'daily') {
        play.innerText = jsonData[1].title;
        playHour.innerText = jsonData[1].timeframes.daily.current + "hrs";
        lastPlay.innerText = jsonData[1].timeframes.daily.previous+ "hrs" ;
        }else if(paragraph.id === 'monthly') {
          play.innerText = jsonData[1].title;
        playHour.innerText = jsonData[1].timeframes.monthly.current + "hrs";
        lastPlay.innerText = jsonData[1].timeframes.monthly.previous+ "hrs" ;
          }else{
            play.innerText = jsonData[1].title;
            playHour.innerText = jsonData[1].timeframes.weekly.current + "hrs";
            lastPlay.innerText = jsonData[1].timeframes.weekly.previous+ "hrs" ;
          }


      // study
  const study = document.getElementById("study")
  const lastStudy= document.getElementById("last-study")
  const studyHour = document.getElementById("study-hour")
        if (paragraph.id === 'daily') {
          study.innerText = jsonData[2].title;
          studyHour.innerText = jsonData[2].timeframes.daily.current + "hrs";
          lastStudy.innerText = jsonData[2].timeframes.daily.previous+ "hrs" ;
          }else if(paragraph.id === 'monthly') {
            study.innerText = jsonData[2].title;
          studyHour.innerText = jsonData[2].timeframes.monthly.current + "hrs";
          lastStudy.innerText = jsonData[2].timeframes.monthly.previous+ "hrs" ;
            }else{
              study.innerText = jsonData[2].title;
              studyHour.innerText = jsonData[2].timeframes.weekly.current + "hrs";
              lastStudy.innerText = jsonData[2].timeframes.weekly.previous+ "hrs" ;
            }

                  // exercise
  const ex = document.getElementById("ex")
  const lastEx= document.getElementById("last-ex")
  const ExHour = document.getElementById("ex-hour")
        if (paragraph.id === 'daily') {
          ex.innerText = jsonData[3].title;
          ExHour.innerText = jsonData[3].timeframes.daily.current + "hrs";
          lastEx.innerText = jsonData[3].timeframes.daily.previous+ "hrs" ;
          }else if(paragraph.id === 'monthly') {
            ex.innerText = jsonData[3].title;
            ExHour.innerText = jsonData[3].timeframes.monthly.current + "hrs";
            lastEx.innerText = jsonData[3].timeframes.monthly.previous+ "hrs" ;
            }else{
              ex.innerText = jsonData[3].title;
              ExHour.innerText = jsonData[3].timeframes.weekly.current + "hrs";
              lastEx.innerText = jsonData[3].timeframes.weekly.previous+ "hrs" ;
            }


// social
  const social = document.getElementById("social")
  const lastSocial= document.getElementById("last-social")
  const SocialHour = document.getElementById("social-hour")
        if (paragraph.id === 'daily') {
          social.innerText = jsonData[4].title;
          SocialHour.innerText = jsonData[4].timeframes.daily.current + "hrs";
          lastSocial.innerText = jsonData[4].timeframes.daily.previous+ "hrs" ;
          }else if(paragraph.id === 'monthly') {
            social.innerText = jsonData[4].title;
          SocialHour.innerText = jsonData[4].timeframes.monthly.current + "hrs";
          lastSocial.innerText = jsonData[4].timeframes.daily.previous+ "hrs" ;
            }else{
              social.innerText = jsonData[4].title;
              SocialHour.innerText = jsonData[4].timeframes.weekly.current + "hrs";
              lastSocial.innerText = jsonData[4].timeframes.weekly.previous+ "hrs" ;
            }

    // selft care
  const self = document.getElementById("self")
  const lastSelf= document.getElementById("last-self")
  const SelfHour = document.getElementById("self-hour")
        if (paragraph.id === 'daily') {
          self.innerText = jsonData[5].title;
          SelfHour.innerText = jsonData[5].timeframes.daily.current + "hrs";
          lastSelf.innerText = jsonData[5].timeframes.daily.previous+ "hrs" ;
          }else if(paragraph.id === 'monthly') {
            self.innerText = jsonData[5].title;
            SelfHour.innerText = jsonData[5].timeframes.monthly.current + "hrs";
            lastSelf.innerText = jsonData[5].timeframes.monthly.previous+ "hrs" ;
            }else{
              self.innerText = jsonData[5].title;
              SelfHour.innerText = jsonData[5].timeframes.weekly.current + "hrs";
              lastSelf.innerText = jsonData[5].timeframes.weekly.previous+ "hrs" ;
            }
  });
});


