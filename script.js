// Template Data
const templates = [
    { id: 1, category: "branding", image: "bt1.png", name: "Branding " },
    { id: 2, category: "branding", image: "bt2.png", name: "Branding " },
    { id: 3, category: "web", image: "wdt1.jpg", name: "Web Design " },
    { id: 4, category: "web", image: "wdt2.jpg", name: "Web Design " },
    { id: 5, category: "print", image: "pt1.png", name: "Print " },
    { id: 6, category: "print", image: "pt2.jpg", name: "Print " },
    { id: 7, category: "illustration", image: "ilt1.jpg", name: "Illustration " },
    { id: 8, category: "illustration", image: "ilt2.jpg", name: "Illustration " },
    // Add more templates as needed
  ];
  
  const templateList = document.querySelector(".template-list");
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  // Function to display templates
  function displayTemplates(category = "all") {
    templateList.innerHTML = "";
    const filteredTemplates = category === "all" ? templates : templates.filter(t => t.category === category);
    filteredTemplates.forEach(template => {
      const templateItem = document.createElement("div");
      templateItem.classList.add("template-item");
      templateItem.innerHTML = `
        <img src="${template.image}" alt="${template.name}">
        <p>${template.name}</p>
      `;
      templateList.appendChild(templateItem);
    });
  }
  
  // Event listeners for filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      displayTemplates(button.dataset.category);
    });
  });
  
  // Initial load
  displayTemplates();