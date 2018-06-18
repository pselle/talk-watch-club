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

const talks = [
  {
    url: "https://vimeo.com/221049715",
    blurb: "Aditya talks at Monitorama"
  },
  {
    url: "https://www.youtube.com/watch?v=yRFQV4O0c48",
    blurb: "Only 10 minutes and with cute photos of cats involved."
  }
];

// Week 0 is when AV club starts!
const week0 = new Date('June 18, 2018 00:00:00');
// Get the index for the week
const idx = moment().diff(week0, 'week');

const talk = talks[idx];

document.getElementById('video').appendChild(createVideoElement(talk));
