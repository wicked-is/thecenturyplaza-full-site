const fs = require("fs");
const galleryData = require("./src/Gallery/galleryData.json");
const primaryData = require("./src/Primary/primaryData.json");
const teamData = require("./src/Team/teamData.json");

const arrayPart = [];

const baseUrl = "https://thecenturyplaza.com";

for (const el of galleryData) {
  const { media, slug } = el;
  for (const _el of media) {
    arrayPart.push(
      `<url><loc>${baseUrl}/gallery/${slug}/${_el.slug}</loc></url>`
    );
  }
}

for (const el of primaryData) {
  const { slides, slug } = el;
  for (const _el of slides) {
      arrayPart.push(`<url><loc>${baseUrl}/${slug}/${_el.slug}</loc></url>`);
  }
}

for (const el of teamData) {
    const { slug } = el;
    arrayPart.push(`<url><loc>${baseUrl}/team/${slug}</loc></url>`);
  }

fs.writeFileSync("message.txt", arrayPart.join(""));
