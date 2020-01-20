const betterLogs = () => {
  let ul        = document.getElementsByClassName('aws-tab-bar');
  let li        = document.createElement('li');
  let a         = document.createElement('a');
  a.textContent = 'Better Logs';

  let link  = window.location.href;
  let match = link.match(new RegExp('clusters/.*/services/(.*)/'));
  if (match) {
    let region = link.match(new RegExp('region=([a-z]+-[a-z]+-([0-9]|[a-z]+-[0-1]))'))[0];
    let appName = match[1];
    a.setAttribute('href', `https://console.aws.amazon.com/cloudwatch/home?${region}#logsV2:log-groups$3FlogGroupNamePrefix$3D${appName}`);
    a.setAttribute('target', '_blank');
    li.appendChild(a);
    ul[0].appendChild(li);
  }
};

window.onhashchange = betterLogs;
window.onload       = betterLogs;
