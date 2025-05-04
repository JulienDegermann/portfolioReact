import contacts from "../datas/contacts.js";

export default function contact_bar() {
    const contact_bar = document.getElementById("contact_bar");

    contacts.map((contact) => {
        const link = document.createElement("a");
        link.href = contact.url;
        link.target = "_blank";
        link.innerHTML = `<img src="assets/icons/${contact.icon}" alt="icon de ${contact.name}" title="${contact.name}" />`;

        contact_bar.append(link);
    });
}
