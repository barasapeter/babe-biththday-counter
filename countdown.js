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
        document.getElementById('dateString').innerHTML = `On ${formattedNextBirthday}`;
    }

    function updateGreeting() {
        const currentHour = new Date().getHours();
        let greeting = '';

        if (currentHour >= 0 && currentHour < 12) {
            greeting = 'Good morning love';
        } else if (currentHour >= 12 && currentHour < 15) {
            greeting = 'Good afternoon love';
        } else {
            greeting = 'Good evening love. Seriously, we should be cuddling right now.';
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
