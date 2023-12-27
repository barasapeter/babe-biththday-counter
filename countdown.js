document.addEventListener('DOMContentLoaded', function () {
    // Set the birthday date (format: month day, year)
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

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s\nuntil ${formattedNextBirthday}`;
    }

    function updateGreeting() {
        const currentHour = new Date().getHours();
        let greeting = '';

        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Good morning love';
        } else if (currentHour >= 12 && currentHour < 17) {
            greeting = 'Good afternoon love';
        } else {
            greeting = 'Good evening love';
        }

        document.getElementById('greeting').innerHTML = greeting;
    }

    // Handle the "Next" button click event
    document.getElementById('nextButton').addEventListener('click', function () {
        // Navigate to the next layout (gallery.html in this example)
        window.location.href = 'gallery.html';
    });

    // Update the countdown and greeting every second
    setInterval(function () {
        updateCountdown();
        updateGreeting();
    }, 1000);

    // Initial update
    updateCountdown();
    updateGreeting();
});
