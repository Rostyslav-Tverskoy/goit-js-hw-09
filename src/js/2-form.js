const STORAGE_KEY = "feedback-form-state";

let formData = {
    email:"",
    message:""
}

const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;


const savedData = localStorage.getItem(STORAGE_KEY);

if(savedData) {
    formData = JSON.parse(savedData);
    input.value = formData.email || "";
    textarea.value = formData.message || "";
}

form.addEventListener("input", handleInput);

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if(!formData.email || !formData.message) {
        alert("Fill please all fields");
        return
    }
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {email: "", message: ""};

    
}
 

