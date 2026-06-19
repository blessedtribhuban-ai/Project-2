const partTitle = document.getElementById("part-title");
const partDescription = document.getElementById("part-description");
const buttons = document.querySelectorAll(".buttons button");

const carParts = {
    engine: {
        title: "Engine",
        description: "A high-performance engine delivers smooth acceleration and efficient power, combining modern engineering with reliability."
    },
    wheels: {
        title: "Wheels",
        description: "Low-profile alloy wheels provide grip and stability, while adding a sharp, sporty look to the car's stance."
    },
    lights: {
        title: "Lights",
        description: "LED headlights and taillights offer bright, crisp illumination, improving visibility and giving the car a futurustic style."
    },
    interior: {
        title: "Interior",
        description: "Premium materials, ambient lighting, and ergonomic seats create a comfortable, driver-focused cabin experience."

    }
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const part = button.dataset.part;
        const data = carParts[part];

        //Update text
        partTitle.textContent = data.title;
        partDescription.textContent = data.description;

        //Active button styling
        buttons.forEach(b=> b.classList.remove("active"));
        button.classList.add("active");
    });
});
