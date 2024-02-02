function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }
  
  function initializeFastClick() {
    if ("addEventListener" in document) {
      document.addEventListener("DOMContentLoaded", function () {
        FastClick.attach(document.body);
      });
    }
  }
  
  function handleKnowMoreClick(event) {
    event.preventDefault();
    const targetUrl = event.currentTarget.closest("a").getAttribute("href");
    if (targetUrl) {
      window.location.href = targetUrl;
    }
  }
  
  loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js",
    function () {
      initializeFastClick();
      const knowMoreButtons = document.querySelectorAll(".glow-on-hover");
      knowMoreButtons.forEach((button) => {
        button.addEventListener("click", handleKnowMoreClick);
      });
    }
  );
  
  console.log("outside form js running");
  
  function createForm() {
    console.log("form js running");
    const formParent = document.createElement("div");
    formParent.id = "form-parent";
    const formMainContainer = document.createElement("div");
    formMainContainer.classList.add("form-main-container", "main-container");
    const closeButton = document.createElement("i");
    closeButton.classList.add("fa-sharp", "fa-solid", "fa-square-xmark");
    closeButton.style.color = "#ff5421";
    closeButton.onclick = hideForm;
    const formHeaderContainer = document.createElement("div");
    formHeaderContainer.classList.add("form-header-container");
    const headerSection = document.createElement("div");
    headerSection.classList.add("header-section");
    headerSection.textContent = "Application Form";
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    const form = document.createElement("form");
    form.onsubmit = submitForm;
    form.id = "form";
    const inputNameSection = createInputSection("text", "name", "Name");
    inputNameSection.classList.add("ANN");
    const inputEmailSection = createInputSection(
      "email",
      "email",
      "Email Address"
    );
    inputEmailSection.classList.add("ANN");
    const inputPhoneSection = createInputSection("tel", "mobile", "Phone Number");
    inputPhoneSection.classList.add("ANN");
    const inputLocationSection = createInputSection(
      "text",
      "location",
      "Location"
    );
    inputLocationSection.classList.add("ANN");
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.classList.add("submit-btn");
    formContainer.append(form);
    form.append(
      inputNameSection,
      inputEmailSection,
      inputPhoneSection,
      inputLocationSection,
      submitButton
    );
    formHeaderContainer.append(headerSection, formContainer);
    formMainContainer.append(closeButton, formHeaderContainer);
    formParent.append(formMainContainer);
    document.body.appendChild(formParent);
  }
  
  function createInputSection(type, name, label) {
    const inputSection = document.createElement("div");
    inputSection.classList.add("input-section", "name-section");
    const input = createInput(
      type,
      name,
      label,
      true,
      setFormValue
    );
    const inputLabel = document.createElement("label");
    inputLabel.textContent = label;
    inputSection.append(input, inputLabel);
    return inputSection;
  }
  
  function createInput(
    type,
    name,
    placeholder,
    required,
    setFormValue
  ) {
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    input.required = required;
  
    if (type === "tel") {
      input.maxLength = 10; // Set max length to 10 for phone input
      input.addEventListener("input", function () {
        // Remove non-numeric characters
        this.value = this.value.replace(/\D/g, "");
      });
    }
  
    input.onchange = function () {
      setFormValue.call(null, this.name, this.value);
    };
  
    return input;
  }
  
  function showForm() {
    createForm();
    displayForm();
  }
  
  function displayForm() {
    const formContainer = document.getElementById("form-parent");
    formContainer.style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  
  function hideForm() {
    const formContainer = document.getElementById("form-parent");
    if (formContainer) {
      formContainer.style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
  }
  
  function submitForm(event) {
    event.preventDefault();
  }
  
  function setFormValue(fieldName, value) {
    // Implementation for setFormValue
  }
  
  function numberOnly() {}
  
  function createPopUpForm() {
    const popUpFormContainer = document.createElement("div");
    popUpFormContainer.classList.add("pop-up-form-container");
    const formSection = document.createElement("div");
    formSection.classList.add("form-section");
    const closeButton = document.createElement("i");
    closeButton.classList.add("fa-sharp", "fa-solid", "fa-square-xmark");
    closeButton.style.color = "#ff5421";
    closeButton.onclick = hidePopUpForm;
    const formTopHead = document.createElement("div");
    formTopHead.classList.add("form-top-head");
    formTopHead.textContent = "Application Form";
    const form = document.createElement("form");
    form.onsubmit = submitPopUpForm;
    const inputName = createInput(
      "text",
      "name",
      "Enter Your Name*",
      true,
      setPopUpFormValue
    );
    const inputMobile = createInput(
      "tel",
      "mobile",
      "Enter Your Phone No.*",
      true,
      setPopUpFormValue
    );
  
    const inputEmail = createInput(
      "email",
      "email",
      "Enter Your Email*",
      true,
      setPopUpFormValue
    );




















    


    const selectCourse = document.createElement("select");
    selectCourse.name = "course";
    selectCourse.required = true;
    selectCourse.addEventListener("change", function () {
      const selectedCourse = selectCourse.value;
      setPopUpFormValue("course", selectedCourse);
    });
    const defaultOptionElement = document.createElement("option");
    defaultOptionElement.selected = true;
    defaultOptionElement.disabled = true;
    defaultOptionElement.textContent = "Select Your Course";
    const options = [
      "Full-Stack-Development",
      "Full Stack With NodeJs",
      "python Full Stack",
      "Java Full Stack Using React",
      "Web Designing",
      "Angular",
      "ReactJs",
      "Mean",
      "Mern",
      "Data Science",
      "Python",
      "Data Analytics",
      "Data Analytics using Python",
      "Data Science & Machine Learning using Python",
      "Machine Learning using Python",
      "AI Using Python",
      "Software Testing",
      "Manual Testing",
      "Automation Testing",
      "ISTQB Training",
      "Manual + Selenium",
      "Microsoft Azure",
      "DevOps",
      "Amazon Web Services (AWS)",
      "Cloud Computing",
      "Salesforce",
      "Digital Marketing",
      "Advance Digital Marketing",
      "SEO(Search Engine Optimization)",
      "Java",
      "Java For Beginners",
      "Java Expert",
      "Spring Boot Microservices Security With Hibernate",
      "Ethical Hacking",
      "CCNA 2020",
      "CORE CCNP",
      "Advance CCNP",
      "MSCA 2012",
      "MSCA 2016",
      "Vmware",
      "C With Data Structure And Algorithms",
      "Object Oriented Data Structure & Algorithms Training",
      ".NET 4 Months",
      ".NET Full Stack",
      "R Programming",
      "AUTOCAD",
      "CNC Programming",
      "Graphic Designing",
      "UI/UX Designing",
    
  ];
  
  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.placeholder = "Select Your Course";
  searchBar.value = "Select Your Course"; // Set the default value
  
  document.body.appendChild(searchBar);
  
  searchBar.addEventListener("input", function () {
      const searchQuery = this.value.trim();
      console.log("Search Query:", searchQuery);
  });
  
 
    selectCourse.appendChild(defaultOptionElement);
    for (const optionText of options) {
      const option = document.createElement("option");
      option.textContent = optionText;
      selectCourse.appendChild(option);
    }
















    

    // const selectCourse = document.createElement("select");
    // selectCourse.name = "course";
    // selectCourse.required = true;
    // selectCourse.addEventListener("change", function () {
    //   const selectedCourse = selectCourse.value;
    //   setPopUpFormValue("course", selectedCourse);
    // });
    // const defaultOptionElement = document.createElement("option");
    // defaultOptionElement.selected = true;
    // defaultOptionElement.disabled = true;
    // defaultOptionElement.textContent = "Select Your Course";
    // const options = [
    //   "Data Science",
    //   "Full Stack Development",
    //   "Software Testing",
    //   "Digital Marketing",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    //   "Network & Security",
    // ];
    // selectCourse.appendChild(defaultOptionElement);
    // for (const optionText of options) {
    //   const option = document.createElement("option");
    //   option.textContent = optionText;
    //   selectCourse.appendChild(option);
    // }













    const scheduleDate = document.createElement("div");
    scheduleDate.classList.add("schedule-date", "schedule");
    const inputDate = createInput(
      "date",
      "date",
      "dd-mm-yyyy",
      true,
      setPopUpFormValue
    );
    const labelDate = document.createElement("label");
    labelDate.textContent = "dd-mm-yyyy";
    scheduleDate.append(inputDate, labelDate);
    const scheduleTime = document.createElement("div");
    scheduleTime.classList.add("schedule-time");
    const inputFromTime = createInput(
      "time",
      "fromTime",
      "From*",
      true,
      setPopUpFormValue
    );
    const labelFromTime = document.createElement("label");
    labelFromTime.textContent = "From*";
    const inputToTime = createInput(
      "time",
      "toTime",
      "To*",
      true,
      setPopUpFormValue
    );
    const labelToTime = document.createElement("label");
    labelToTime.textContent = "To*";
    scheduleTime.append(
      inputFromTime,
      labelFromTime,
      inputToTime,
      labelToTime
    );
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.classList.add("submit-btn");
    form.append(
      inputName,
      inputMobile,
      inputEmail,
      selectCourse,
      inputDate,
      inputFromTime,
      inputToTime,
      submitButton
    );
    formSection.append(closeButton, formTopHead, form);
    popUpFormContainer.append(formSection);
    document.body.appendChild(popUpFormContainer);
  }
  
  function showPopUpForm() {
    console.log("show pop up form");
    createPopUpForm();
    displayPopForm();
  }
  
  function displayPopForm() {
    const popUpFormContainer = document.querySelector(
      ".pop-up-form-container"
    );
    popUpFormContainer.style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  
  function hidePopUpForm() {
    const popUpFormContainer = document.querySelector(
      ".pop-up-form-container"
    );
    if (popUpFormContainer) {
      popUpFormContainer.style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
  }
  
  function submitPopUpForm(event) {
    event.preventDefault();
  }
  
  function setPopUpFormValue(fieldName, value) {
    // Implementation for setPopUpFormValue
  }
  
  let isDropdownVisible = false;
  
  function toggleDropdown(index) {
    const dropdown = document.querySelectorAll(".dropdown-course")[index];
    isDropdownVisible = !isDropdownVisible;
    dropdown.style.display = isDropdownVisible ? "block" : "none";
  }
  
  function handleScroll() {
    const navbar = document.querySelector("#main-nav");
    if (window.innerWidth > 1000) {
      if (window.scrollY > 0) {
        navbar.classList.add("fixed");
        document.querySelectorAll(".dropdown-course").forEach((dropdown) => {
          dropdown.style.display = "none";
        });
        isDropdownVisible = false;
      } else {
        navbar.classList.remove("fixed");
      }
    }
  }
  
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  