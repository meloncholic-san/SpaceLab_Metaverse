export function initTeam() {

    const persons = document.querySelectorAll(".main-team__person");

    persons.forEach(person => {
        person.addEventListener("click", () => {
            persons.forEach(p => {
                if (p !== person) {
                    p.classList.remove("active");
                }
            });
            person.classList.toggle("active");
        });
    });
}