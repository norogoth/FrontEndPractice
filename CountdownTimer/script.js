const newYearsString = '01/01/2021';

function countdown() {
    const daysE1 = document.getElementById('days');
    const hoursE1 = document.getElementById('hours');
    const minsE1 = document.getElementById('mins');
    const secondsE1 = document.getElementById('seconds');
    
    const newYearsDate = new Date(newYearsString);
    const currentDate = new Date();

    const totalTimeInSecs = (newYearsDate - currentDate) / 1000;
    let secondsRemainingCounter = totalTimeInSecs;
    const daysLeft = Math.floor(totalTimeInSecs / (3600 * 24));
    daysE1.innerHTML = daysLeft;
    const daysLeftInSeconds = daysLeft * 3600 * 24;
    secondsRemainingCounter -= daysLeftInSeconds;
    const hoursLeft = Math.floor(secondsRemainingCounter / 3600);
    hoursE1.innerHTML = hoursLeft;
    const hoursLeftInSeconds = hoursLeft * 3600;
    secondsRemainingCounter -= hoursLeftInSeconds;
    const minsLeft = Math.floor(secondsRemainingCounter / 60);
    minsE1.innerHTML = minsLeft;
    const minsLeftInSeconds = minsLeft * 60;
    secondsRemainingCounter -= minsLeftInSeconds;
    const secondsLeft = Math.floor(secondsRemainingCounter);
    secondsE1.innerHTML = secondsLeft;

    console.log(daysLeft + " " + hoursLeft + " " + minsLeft + " " + secondsLeft);
}

countdown(); //initial call for date

setInterval(countdown, 1000);