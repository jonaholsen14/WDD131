// example 1
const steps = ["one", "two", "three"];

function listTemplate(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join(" ");