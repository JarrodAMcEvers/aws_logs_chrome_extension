let ul        = document.getElementsByClassName('aws-tab-bar');
let li        = document.createElement('li');
let a         = document.createElement('a');
a.textContent = 'Better Logs';

let link = window.location.href;
if (link.indexOf('console.aws.amazon.com/ecs/') >= 0) {
  let splitLink = link.split('/');
  let appName   = splitLink[splitLink.length - 2];
  a.setAttribute('href', `https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logs:prefix=${appName}`);
  a.setAttribute('target', '_blank');
  li.appendChild(a);
  ul[0].appendChild(li);
}