const betterLogs = () => {
  setTimeout(() => {
    let table = document.getElementsByTagName('table')[0];

    for (let i = 0, row; row = table.rows[i]; i++) {
      let row = table.rows[i];
      if (row.getElementsByTagName('th').length === 0) {
        let link         = document.createElement('a');
        link.textContent = 'Logs';
        link.setAttribute('href', `https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logStream:group=/aws/lambda/${row.cells[1].innerText}`);

        let newTD = row.insertCell(2);
        newTD.append(link);
      } else {
        let newTH       = document.createElement('th');
        newTH.innerText = 'Better Logs';
        row.insertBefore(newTH, row.getElementsByTagName('th')[2]);
      }
    }
  }, 2500);
};

window.onhashchange = betterLogs;
window.onload       = betterLogs;
