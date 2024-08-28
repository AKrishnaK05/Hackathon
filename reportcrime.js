function toggleAccordion(element) {
    const content = element.nextElementSibling;

    if (content.style.display === "block") {
        content.style.display = "none";
        element.querySelector('.plus').textContent = "+";
    } else {
        content.style.display = "block";
        element.querySelector('.plus').textContent = "-";
    }
}