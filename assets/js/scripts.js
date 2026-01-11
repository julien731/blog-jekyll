// Helper function to serialize form data
function serializeForm(form) {
    var formData = new FormData(form);
    var params = new URLSearchParams();
    for (var pair of formData.entries()) {
        params.append(pair[0], pair[1]);
    }
    return params.toString();
}

// DOM ready
document.addEventListener('DOMContentLoaded', function () {

    // Round Reading Time
    var timeElements = document.querySelectorAll(".time");
    timeElements.forEach(function (element) {
        var value = element.textContent;
        element.textContent = Math.round(parseFloat(value));
    });

    // Contact form.
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var submitButton = document.getElementById("form-submit-button");

            // Before send
            contactForm.classList.add("disabled");
            var alerts = contactForm.querySelectorAll('.alert');
            alerts.forEach(function (alert) {
                alert.remove();
            });
            submitButton.disabled = true;
            submitButton.value = 'Sending...';

            // Make request
            fetch('//formspree.io/f/xdopwbza', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: serializeForm(this)
            })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(function (data) {
                // Success
                contactForm.insertAdjacentHTML('beforeend', '<div class="alert alert-success"><strong>Thanks for your message!</strong> I will get back to you as soon as I can.</div>');
                submitButton.disabled = true;
                submitButton.value = 'Sent!';
            })
            .catch(function (err) {
                // Error
                contactForm.classList.remove("disabled");
                submitButton.disabled = false;
                submitButton.value = 'Send';
                contactForm.insertAdjacentHTML('beforeend', '<div class="alert alert-danger"><strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again.</div>');
            });
        });
    }

});