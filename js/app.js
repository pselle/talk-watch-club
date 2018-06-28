function getParameterByName(name, url) {
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function createVideoElement(talk) {
  const t = document.getElementById('videoTemplate');
  const clone = document.importNode(t.content, true);
  // Add title
  const title = clone.querySelector('h1')
  title.textContent = talk.title;

  // Add blurb to bottom
  const blurb = clone.querySelector('p');
  blurb.textContent = talk.blurb;

  // Update the frame
  const frame = clone.querySelector('iframe');
  if (talk.url.includes('vimeo')) {
    var talkId = talk.url.substring(18);
    frame.src = `https://player.vimeo.com/video/${talkId}`
    return clone;
  }
  var talkId = getParameterByName('v', talk.url);
  frame.src = `https://www.youtube.com/embed/${talkId}`;
  return clone;
}

function populatePrevious(list, idx, talks) {
  for(var i = idx-1; i >= 0; i--) {
    const t = document.getElementById('talkItem');
    const clone = document.importNode(t.content, true);
    const link = clone.querySelector('a');
    link.href = `?video=${i}`;
    link.textContent = talks[i].title;
    list.appendChild(clone);
  }
}
const talks = [
  {
    title: "Aditya",
    url: "https://vimeo.com/221049715",
    blurb: "Aditya talks at Monitorama"
  },
  {
    title: "UX for Cats and Dogs!",
    url: "https://www.youtube.com/watch?v=yRFQV4O0c48",
    blurb: "Only 10 minutes and with cute photos of cats involved."
  }
];

// Week 0 is when AV club starts!
const week0 = new Date('June 18, 2018 00:00:00');
// Get the index for the week
const idx = moment().diff(week0, 'week');

var talk = talks[idx];
const queryParamVid = getParameterByName('video', window.location);
if (queryParamVid) {
  talk = talks[Number(queryParamVid)];
}

document.getElementById('video').appendChild(createVideoElement(talk));

// Print previous videos
const list = document.querySelector('#past ol');
populatePrevious(list, idx, talks);

// What's up next week?
if (idx + 1 < talks.length) {
  console.log('something next week')
} else {
  console.log('nothing next week! make a PR!')
}

// If there's nothing up next week instruct people to make a PR
// TODO make it easy to make a PR

// Past talks link back to this page with the index in the query param of the page
// Look up query param of page and use that to decide to show a specific talk,
// Or this week's talk
