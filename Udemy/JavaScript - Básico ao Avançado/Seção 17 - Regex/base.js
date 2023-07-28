const text = `
A LONG TIME AGO IN A GALAXY FAR FAR AWAY...

It is a period of civil war. Rebel
spaceships, striking from a hidden
base, have won their first victory
against the evil Galactic Empire.

During the battle, Rebel spies
managed to steal secret plans to
the Empire's ultimate weapon, the
DEATH STAR, an armored space
station with enough power to
destroy an entire planet.

Pursued by the Empire's sinister
agents, Princess Leia races home
aboard her starship, custodian of
the stolen plans that can save her
people and restore freedom to the
galaxy...
`;

const files = [
  "app.js",
  "app.scss",
  "app.html",
  "index.html",
  "styles.scss",
  "scripts.js",
  "image.png",
  "imagem.jpg",
  "image.jpeg",
];

const cpfs = `
Os CPFs são:
    254.224.877-45 215.978.456-12 047.258.369-96
    963.987.321-00
    963.987.32a.00 (NÃO VÁLIDO)
    963.987.32-00 (NÃO VÁLIDO)
`;

const ips = `
Os Ips são:
    0.0.0.0
    
    192.168.0.25

        10.10.5.12
    
    255.255.255.255
`;

const html =
  "<p>Hello</p> <p>World</p> <div>Sou a div</div> <span>Sou a span</span>";

const html2 = `<p>Olá mundo</p> <p class="teste" data-teste='teste'>Sou um p</p> <div>Sou a div</div>`;

const alfabeto =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ©";

const lookahead = `
ONLINE 192.168.0.1 ABCDEF inactive
OFFLINE 192.168.0.2 ABCDEF active
ONLINE 192.168.0.3 ABCDEF active
ONLINE 192.168.0.4 ABCDEF active
OFFLINE 192.168.0.5 ABCDEF active
OFFLINE 192.168.0.6 ABCDEF inactive
`;

module.exports = {
  text,
  files,
  html,
  alfabeto,
  cpfs,
  ips,
  html2,
  lookahead
};
