const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

const accordionWrapper = document.querySelector(".accWrapper");

function createAccordions() {
  accordionWrapper.innerHTML = data
    .map(
      (currentItem) =>
        `<div class="accItem" key=${currentItem.id}>
      <div class="accTitle">
        <h4>${currentItem.question}</h4>
        <span>👇</span>
      </div>
      <div class="accContent">
        <p>${currentItem.answer}</p>
      </div>
    </div>`
    )
    .join(" ");
}

createAccordions();

const accTitle = document.querySelectorAll(".accTitle");
accTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyActiveClasses = document.querySelectorAll(".active");

      getAlreadyActiveClasses.forEach((currenActiveItem) => {
        currenActiveItem.classList.remove("active");
      });

      currentItem.classList.add("active");
    }
  });
});
