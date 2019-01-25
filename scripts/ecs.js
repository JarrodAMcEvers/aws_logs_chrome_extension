const betterLogs = () => {
  let ul        = document.getElementsByClassName('aws-tab-bar');
  let li        = document.createElement('li');
  let a         = document.createElement('a');
  a.textContent = 'Better Logs';

  let link  = window.location.href;
  let match = link.match(new RegExp('clusters/.*/services/(.*)/'));
  if (match) {
    let appName = match[1];
    a.setAttribute('href', `https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logs:prefix=${appName}`);
    a.setAttribute('target', '_blank');
    li.appendChild(a);
    ul[0].appendChild(li);
  }
};

window.onhashchange = betterLogs;
window.onload       = betterLogs;
