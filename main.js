document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");
    const confirmation = document.getElementById("confirmationMsg");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const email = form.email.value.trim();
      const service = form.service.value;
      const date = form.date.value;
      const time = form.time.value;
  
      if (name && phone && email && service && date && time) {
        confirmation.style.color = "green";
        confirmation.textContent = `Thank you, ${name}! Your booking for ${service} on ${date} at ${time} has been received. We’ll contact you soon.`;
        form.reset();
      } else {
        confirmation.style.color = "red";
        confirmation.textContent = "Please fill in all fields correctly.";
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const contactMsg = document.getElementById("contactMsg");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = contactForm.cname.value.trim();
        const email = contactForm.cemail.value.trim();
        const message = contactForm.cmessage.value.trim();
  
        if (name && email && message) {
          contactMsg.style.color = "green";
          contactMsg.textContent = `Thanks for contacting us, ${name}! We'll respond to your message soon.`;
          contactForm.reset();
        } else {
          contactMsg.style.color = "red";
          contactMsg.textContent = "Please fill in all fields.";
        }
      });
    }
  });
  