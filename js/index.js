//Check my work animation
const checkbtn = document.getElementById("check");
const checkarrow = checkbtn.childNodes[1];

checkbtn.addEventListener("mouseover", () => {
  checkarrow.classList.add("fa-rotate-90");
});
checkbtn.addEventListener("mouseout", () => {
  checkarrow.classList.remove("fa-rotate-90");
});




//navbar animation
const nav = document.getElementById('nav');
const landing = document.getElementById('landing');

const landingOptions = {
  rootMargin: "-90px 0px 0px 0px"
}

const landingObserver = new IntersectionObserver(function(entries, landingObserver){
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      nav.style.top = "0";
      header.classList.add("slide-right");
      // console.log("landing page!");
    } else{
      nav.style.top="-8vh";
    }
  })
}, landingOptions);

landingObserver.observe(landing);




//header animation
const header = document.getElementById("header");
const tools = document.getElementById("tools");

const headerOptions = {
  rootMargin: "-600px 0px 0px 0px"
}

const landingObserver2 = new IntersectionObserver(function(entries, landingObserver2){
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      header.classList.add("slide-right");
      tools.classList.add("fade-in-down");
    }})
}, headerOptions);

landingObserver2.observe(landing);

//workst animation
const workst = document.getElementById("workst");
const showcase = document.getElementById("showcase");

const showcaseOptions = {
  rootMargin: "-400px 0px 0px 0px"
}

const worksObserver = new IntersectionObserver(function(entries, worksObserver){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      workst.classList.add("slide-left");
    }
  })
}, showcaseOptions);

worksObserver.observe(showcase);




//works animation
const works = document.getElementById("works");

const showcaseOptions2 = {
  rootMargin: "-600px 0px 0px 0px"
}

const worksObserver2 = new IntersectionObserver(function(entries, worksObserver2){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      works.classList.add("fade-in-down");
    }
  })
}, showcaseOptions2);

worksObserver2.observe(showcase);





//fv modal
const fvModalBtn = document.getElementById("fv-modal-btn");
const fvModal = document.getElementById("fv-modal");
const fvClose = document.getElementById("fv-close");

// Show modal
fvModalBtn.addEventListener("click", () => fvModal.classList.add("show-modal"));

// Hide modal
fvClose.addEventListener("click", () => fvModal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", e =>
  e.target == fvModal ? fvModal.classList.remove("show-modal") : false
);





//bh modal
const bhModalBtn = document.getElementById("bh-modal-btn");
const bhModal = document.getElementById("bh-modal");
const bhClose = document.getElementById("bh-close");

// Show modal
bhModalBtn.addEventListener("click", () => bhModal.classList.add("show-modal"));

// Hide modal
bhClose.addEventListener("click", () => bhModal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", e =>
  e.target == bhModal ? bhModal.classList.remove("show-modal") : false
);

//vd modal
const vdModalBtn = document.getElementById("vd-modal-btn");
const vdModal = document.getElementById("vd-modal");
const vdClose = document.getElementById("vd-close");

// Show modal
vdModalBtn.addEventListener("click", () => vdModal.classList.add("show-modal"));

// Hide modal
vdClose.addEventListener("click", () => vdModal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", e =>
  e.target == vdModal ? vdModal.classList.remove("show-modal") : false
);



//contact
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
//cfs modal
const cfsModalBtn = document.getElementById("cfs-modal-btn");
const cfsModal = document.getElementById("cfs-modal");
const cfsClose = document.getElementById("cfs-close");
let formCompleted = false;

const showError = (input, message) => {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerText = message;
};

const showSuccess = input => {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
};

//Check required fields
const checkRequired = inputArray => {
  inputArray.map(input => {
    if (input.value.trim() === "")
      showError(
        input,
        `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`
      );
    else showSuccess(input);
  });
};

//Validate email
const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  if (re.test(String(email.value.trim()).toLowerCase())) showSuccess(email);
  else showError(email, "Not a valid Email address");
};

//hasSuccess
const hasSuccess = e => {
  return e.parentElement.classList.contains("success");
};

//check the form for valid inputs
const checkFormSuccess = inputArray => {
  formCompleted = inputArray.every(hasSuccess);
};

form.addEventListener("submit", e => {
  checkRequired([name, email, message]);
  isValidEmail(email);
  checkFormSuccess([name, email, message]);
  if (formCompleted === false) {
    e.preventDefault();
  } else{
      // Show modal
      cfsModalBtn.addEventListener("click", () => cfsModal.classList.add("show-modal"));
  }
});

// Hide modal
cfsClose.addEventListener("click", () => cfsModal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", e =>
  e.target == bhModal ? cfsModal.classList.remove("show-modal") : false
);