let formElement = document.getElementsByTagName("FORM")[0];
const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = document.getElementById("inputName").value.trim();
  const inputEmail = document.getElementById("inputEmail").value.trim();
  const inputSubject = document.getElementById("inputSubject").value.trim();
  const inputMessage = document.getElementById("inputMessage").value.trim();
  const errorMsgs = new Array();
  if (!inputName) {
    errorMsgs.push("Please input your Name!");
  }
  if (!inputEmail) {
    errorMsgs.push("Please input your Email Address!");
  }
  if (!inputSubject) {
    errorMsgs.push("Please input a Subject!");
  }
  if (!inputMessage) {
    errorMsgs.push("Please input VALID Message!");
  }

  const inputNameUnprofessional = swearWords.some((word) =>
    inputName.toLowerCase().includes(word)
  );
  const inputEmailUnprofessional = swearWords.some((word) =>
    inputEmail.toLowerCase().includes(word)
  );
  const inputSubjectUnprofessional = swearWords.some((word) =>
    inputSubject.toLowerCase().includes(word)
  );
  const inputMessageUnprofessional = swearWords.some((word) =>
    inputMessage.toLowerCase().includes(word)
  );

  if (inputNameUnprofessional) {
    errorMsgs.push(
      "Please be PROFESSIONAL! Your name contains some unprofessional words"
    );
  }
  if (inputEmailUnprofessional) {
    errorMsgs.push(
      "Please be PROFESSIONAL! Your Email contains some unprofessional words"
    );
  }
  if (inputSubjectUnprofessional) {
    errorMsgs.push(
      "Please be PROFESSIONAL! Your subject contains some unprofessional words"
    );
  }
  if (inputMessageUnprofessional) {
    errorMsgs.push(
      "Please be PROFESSIONAL! Your message contains some unprofessional words"
    );
  }
  if (errorMsgs.length > 0) {
    let errorMsgsListElement = document.createElement("UL");
    errorMsgsListElement.classList.add("errorMsgs");
    errorMsgs.forEach((msg) => {
      const errorMessageElement = document.createElement("LI");
      errorMessageElement.classList.add("errorMessage");
      errorMessageElement.innerText = msg;
      errorMsgsListElement.appendChild(errorMessageElement);
    });
    document
      .getElementsByTagName("FORM")[0]
      .insertAdjacentElement("afterbegin", errorMsgsListElement);
  } else {
    window.location.href = `mailto:zhen16@ualberta.ca?subject=${inputSubject}&body=${inputMessage}`;
  }
});
