document.addEventListener('DOMContentLoaded', function () {
    const birthday = new Date('December 15, 2002 00:00:00 GMT+00:00');

    function updateCountdown() {
        const currentTime = new Date();
        let nextBirthday = new Date(currentTime.getFullYear(), birthday.getMonth(), birthday.getDate());

        if (currentTime > nextBirthday) {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
        }

        const timeDifference = nextBirthday - currentTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedNextBirthday = nextBirthday.toLocaleDateString('en-US', options);

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById('dateString').innerHTML = `On ${formattedNextBirthday}. Watch me na prepare 😜❤️.`;
    }

    function updateGreeting() {
        const currentHour = new Date().getHours();
        let greeting = '';

        if (currentHour >= 0 && currentHour < 12) {
            greeting = 'Tell me you have taken breakfast, usisahau. Have a beautiful morning babe!';
        } else if (currentHour >= 12 && currentHour < 15) {
            greeting = 'How is your day this afternoon? I can\'t stop thinking of you 😭';
        } else if (currentHour >= 15  && currentHour < 19) {
            greeting = 'Good evening babe, I just wanted to remind that I love you so much! 👸💍';
        } else {
            greeting = '🌒Good night, my love. I hope you have sweet dreams and wake up with a smile.😊';
        }

        document.getElementById('greeting').innerHTML = greeting;
    }

    document.getElementById('nextButton').addEventListener('click', function () {
        window.location.href = 'gallery.html';
    });
    setInterval(function () {
        updateCountdown();
        updateGreeting();
    }, 1000);
    
    updateCountdown();
    updateGreeting();
});
