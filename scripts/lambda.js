const betterLogs = () => {
  setTimeout(() => {
    let div = document.getElementsByClassName('awsui-util-f-r awsui-util-mt-s');
    div     = div[0];

    let button = document.createElement('awsui-button');
    button.classList.add('awsui-button');
    button.classList.add('awsui-button-variant-normal');
    button.classList.add('awsui-hover-child-icons');
    button.setAttribute('type', 'submit');

    let hash         = window.location.hash;
    let functionName = hash.substring(0, hash.indexOf('?')).split('functions/')[1];
    let url          = `${window.location.origin}/cloudwatch/home?#logs:prefix=/aws/lambda/${functionName}`;

    let span         = document.createElement('span');
    span.textContent = 'Better Logs';
    span.setAttribute('awsui-button-region', 'text');
    span.setAttribute('onclick', `window.open('${url}', "_blank")`);
    span.setAttribute('target', '_blank');

    button.append(span);
    div.append('\t', button);
  }, 3500);
};

window.onhashchange = betterLogs;
window.onload       = betterLogs;
