const paragraphs = Array.from(document.querySelectorAll(".card p"));
const originTexts = paragraphs.map( p => p.innerText);
const maxLength = 100;


paragraphs.forEach( (p, i) => {
    if(p.innerText.length > maxLength) {
        p.textContent = p.innerText.substring(0, maxLength) + "...";

        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fas fa-chevron-down"></i>';
        p.parentElement.classList.add("text-hidden");

        btn.addEventListener("click", function(e) {
            toggleText(e, p, i);
        })

        p.parentElement.appendChild(btn);
    } 
})


function toggleText(e, p, i) {
    const card = e.currentTarget.parentElement;
    card.classList.toggle("text-hidden");

    e.currentTarget.querySelector("i").classList.toggle("fa-chevron-down");
    e.currentTarget.querySelector("i").classList.toggle("fa-chevron-up");

    if (card.classList.contains("text-hidden")) {
        card.querySelector("p").textContent = originTexts[i].substring(0, maxLength) + "...";
        
    } else {
        card.querySelector("p").textContent = originTexts[i];
    }
};