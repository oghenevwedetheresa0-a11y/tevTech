const supabaseUrl = "https://tmrdbaxblgritpgmxybe.supabase.co";

const supabaseKey = "sb_publishable_4LNCHS3S51ZSF2BTAGBStA_E1-RzBil";


const supabaseClient = window.supabase.createClient(

  supabaseUrl,

  supabaseKey

);


const form = document.getElementById("contact-form");

const message = document.getElementById("message");


form.addEventListener("submit", async function (event) {

  event.preventDefault();

  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const phone = (document.getElementById("phone"). value);

  message.textContent = "sending ...";


  const { error } = await supabaseClient

    .from("TTF'S Database")

    .insert({
      first_name: first,
      last_name: last,
      email: email,
      phone_number: phone,
      message:document.getElementById("messi").value,
    });


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s\-]{10,15}$/;

if (!emailPattern.test(email)) {
  message.textContent = "Please enter a valid email address.";
  return;
}

if (!phonePattern.test(phone)) {
  message.textContent = "Please enter a valid phone number.";
  return;
}

  if (error) {

    message.textContent = "Sending failed. Please try again.";

    console.log(error.message);

  } else {

    message.textContent = "sent successfully!";

    form.reset();

  }

});
