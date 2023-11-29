const form = document.getElementsByClassName("contact-form")[0];
function sendMsg(e) {
    e.preventDefault();
    const name = document.getElementsByName("Name")[0];
    const email = document.getElementsByName("Email")[0];
    const phnum = document.getElementsByName("PhoneNumber")[0];
    const district = document.getElementsByName("District")[0];
    const msg = document.getElementsByName("Message")[0];
    Email.send({
        SecureToken: "6747fe63-87a5-498b-934f-c4fa60a988c4",
        To: "santhoshpkr8402@gmail.com",
        From: "santhoshpkr8402@gmail.com",
        Subject: "Contact from PKR Pleasant Dairy Query",
        Body: "Name: " + name.value + "\r\nEmail: " + email.value + "\r\nPhone Number: " + phnum.value +
            "\r\nDistrict: " + district.value + "\r\nMessage: " + msg.value
    }).then(
        message => alert("Message Sent Successfully")
    );
}

form.addEventListener('submit', sendMsg);