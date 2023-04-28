const url = [
    "https://intra.epitech.eu/",
    "https://intra.epitech.eu/module/#",
    "https://intra.epitech.eu/planning/#",
    "https://intra.epitech.eu/user/#!/netsoul",
  ];

function formatDate(date, next) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (next) {
    month = parseInt(month) + 1;
    month = '' + month;
  }
  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
      day = '0' + day;
  return [year, month, day].join('-');
}

async function getInfoUser()
{
  let data = await fetch("https://intra.epitech.eu/user/?format=json", {
    method: "GET"
  }).then((response) => response.json());
  return data;
}

async function getNextMonthEvents()
{
  let now = new Date();
  now = formatDate(now);
  let nextMonth = new Date();
  nextMonth = formatDate(nextMonth, true);
  console.log("now = ", now, " newtMonth = ", nextMonth);
  let data = await fetch(`https://intra.epitech.eu/planning/load?format=json&start=${now}&end=${nextMonth}`, {
    method: "GET"
  }).then((response) => response.json());
  return data;
}

async function getAlertNotification()
{
  let data = await fetch("https://intra.epitech.eu/user/notification/alert?format=json", {
    method: "GET"
  }).then((response) => response.json());
  return data;
}

async function getMessageNotification()
{
  let data = await fetch("https://intra.epitech.eu/user/notification/message?format=json", {
    method: "GET"
  }).then((response) => response.json());
  return data;
}

chrome.tabs.onUpdated.addListener( async (tabId, changeInfo, tab) => {
  if (url.includes(tab.url) && tab.status == "complete") {
    console.log("find");
    let date = await getNextMonthEvents();
    let users = await getInfoUser();
    let alert = await getAlertNotification();
    let message = await getMessageNotification();
    fetch("https://okkkkk.free.beeceptor.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({date: date}, {users: users}, {alert: alert}, {message: message}),
    })
  }
});
