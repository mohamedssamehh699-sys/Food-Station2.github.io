function toggleTheme() {
    let light = document.getElementById("light");
    let dark = document.getElementById("dark");

    if (dark.disabled) {
        dark.disabled = false;
        light.disabled = true;
        localStorage.setItem("theme", "dark");
    } else {
        dark.disabled = true;
        light.disabled = false;
        localStorage.setItem("theme", "light");
    }
}
window.onload = function() {
    let savedTheme = localStorage.getItem("theme");
    let light = document.getElementById("light");
    let dark = document.getElementById("dark");

    if (savedTheme === "dark") {
        dark.disabled = false;
        light.disabled = true;
    } else {
        dark.disabled = true;
        light.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const resForm = document.querySelector('form');
    if (resForm) {
        resForm.onsubmit = function (e) {
            e.preventDefault();

            const name = resForm.querySelector('input[type="text"]').value;
            const phone = resForm.querySelector('input[type="tel"]').value;
            const date = resForm.querySelector('input[type="date"]').value;
            const time = resForm.querySelector('input[type="time"]').value;
            const guests = resForm.querySelector('select').value;

        
            if (name.length < 3) {
                alert(" Very small name ");
                return;
            }
            if (phone.length < 11) {
                alert("Wrong phone number ");
                return;
            }

            const myBooking = { name, phone, date, time, guests };
            localStorage.setItem('booking', JSON.stringify(myBooking));
            
            alert("Your reservation has been confirmed");
            resForm.reset();
        };
    }

    
    const contactF = document.querySelector('.form form');
    if (contactF) {
        contactF.onsubmit = function (e) {
            e.preventDefault();

            const email = contactF.querySelector('input[type="email"]').value;
            const msg = contactF.querySelector('textarea').value;

            if (email === "" || msg.length < 10) {
                alert("Please make sure to enter a valid email and message");
                return;
            }

            const msgData = {
                userEmail: email,
                text: msg,
                date: new Date().toLocaleDateString()
            };

            localStorage.setItem('contact', JSON.stringify(msgData));
            alert("Message sent successfully! We will contact you soon");
            contactF.reset();
        };
    }
});
