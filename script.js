const siteConfig = {
  businessName: "Rif Epoxy Floors",
  phoneDisplay: "+597 851-5500",
  phoneDigits: "5978515500",
};

const navToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-phone-label]").forEach((node) => {
  node.textContent = siteConfig.phoneDisplay;
});

document.querySelectorAll("[data-phone-link]").forEach((node) => {
  node.setAttribute("href", `tel:+${siteConfig.phoneDigits}`);
});

document.querySelectorAll("[data-wa-link]").forEach((node) => {
  const currentUrl = new URL(node.getAttribute("href"), window.location.origin);
  currentUrl.pathname = `/${siteConfig.phoneDigits}`;
  node.setAttribute("href", currentUrl.toString());
});

const quoteForm = document.querySelector("#quote-form");
const formStatus = document.querySelector("#form-status");

if (quoteForm && formStatus) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const service = (formData.get("service") || "").toString().trim();
    const location = (formData.get("location") || "").toString().trim() || "Niet ingevuld";
    const property = (formData.get("property") || "").toString().trim();
    const timing = (formData.get("timing") || "").toString().trim();
    const details = (formData.get("details") || "").toString().trim() || "Geen extra projectinformatie ingevuld";
    const extra = (formData.get("extra") || "").toString().trim() || "Geen extra opmerkingen";

    const message = [
      `Hallo ${siteConfig.businessName},`,
      "",
      "Ik wil graag een prijsindicatie ontvangen.",
      "",
      `Naam: ${name}`,
      `Telefoon: ${phone}`,
      `Service: ${service}`,
      `Locatie: ${location}`,
      `Type pand: ${property}`,
      `Gewenste timing: ${timing}`,
      `Projectinformatie: ${details}`,
      `Extra info: ${extra}`,
      "",
      "Kunt u contact met mij opnemen?",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(message)}`;
    formStatus.textContent = "WhatsApp wordt geopend met uw aanvraag.";
    window.open(whatsappUrl, "_blank", "noopener");
  });
}
