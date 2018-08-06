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

// Week 0 is when AV club starts!
const week0 = new Date('August 8, 2018 00:00:00');
// Get the index for the week
const idx = moment().diff(week0, 'week');

var talk = talks[idx];

// Past talks link back to this page with the index in the query param of the page
// Look up query param of page and use that to decide to show a specific talk,
// Or this week's talk

const queryParamVid = getParameterByName('video', window.location);
if (queryParamVid) {
  talk = talks[Number(queryParamVid)];
}

document.getElementById('video').appendChild(createVideoElement(talk));

// Print previous videos
populatePrevious(document.querySelector('#past ol'), idx, talks);

// What's up next week?
if (idx + 1 < talks.length) {
  console.log('something next week');
  document.querySelector('#upcoming p').textContent = talks[idx+1].title;
} else {
  // If there's nothing up next week instruct people to make a PR
  // TODO make it easy to make a PR
  document.querySelector('#upcoming p').textContent = "Nothing up next week! Help!";
}
