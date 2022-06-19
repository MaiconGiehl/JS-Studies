

const paragraphs = Array.from(document.querySelectorAll(".card p"));
const originTexts = paragraphs.map( p => p.innerText);
const maxLength = 100;

paragraphs.forEach(p => {
    if(p.innerText.length > maxLength) {
        p.textContent = p.innerText.substring(0, maxLength) + "...";

        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fas fa-chevron-down"></i>';
        p.parentElement.classList.add("text-hidden")

        btn.addEventListener("click", toggleText)

        p.parentElement.appendChild(btn);
    } 
})