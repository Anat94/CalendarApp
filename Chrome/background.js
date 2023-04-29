const url = [
    "https://intra.epitech.eu/",
    "https://intra.epitech.eu/module/#",
    "https://intra.epitech.eu/planning/#",
    "https://intra.epitech.eu/user/#!/netsoul",
  ];

function formatDate(date, type) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (type == "next") {
    month = parseInt(month) + 1;
    month = '' + month;
  } else if (type == "previous") {
    day = parseInt(day) - 7;
    day = '' + day;
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
  now = formatDate(now, "previous");
  let nextMonth = new Date();
  nextMonth = formatDate(nextMonth, "next");
  let data = await fetch(`https://intra.epitech.eu/planning/load?format=json&start=${now}&end=${nextMonth}`, {
    method: "GET"
  }).then((response) => response.json());
  data = selectOnlyRegisteredEvents(data);
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


//"event_registered": "registered"

function selectOnlyRegisteredEvents(events)
{
  let registeredEvents = [];
  for (let i = 0; i < events.length; i++) {
    console.log("registered = ", events[i].event_registered);
    if (events[i].event_registered == "registered" || events[i].event_registered == "present" || events[i].event_registered == "absent")
      registeredEvents.push(events[i]);
  }
  return registeredEvents;
}

chrome.tabs.onUpdated.addListener( async (tabId, changeInfo, tab) => {
  if (url.includes(tab.url) && tab.status == "complete") {
    let date = await getNextMonthEvents();
    let user = await getInfoUser();
    let alert = await getAlertNotification();
    let message = await getMessageNotification();
    let body = {
      user: user,
      alert: alert,
      message: message,
      date: date
    }
    fetch("http://localhost:3000/epitech/getdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  }
});
