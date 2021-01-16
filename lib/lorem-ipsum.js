const WORDS = [
  "ad",
  "adipisicing",
  "aliqua",
  "aliquip",
  "amet",
  "anim",
  "aute",
  "cillum",
  "commodo",
  "consectetur",
  "consequat",
  "culpa",
  "cupidatat",
  "deserunt",
  "do",
  "dolor",
  "dolore",
  "duis",
  "ea",
  "eiusmod",
  "elit",
  "enim",
  "esse",
  "est",
  "et",
  "eu",
  "ex",
  "excepteur",
  "exercitation",
  "fugiat",
  "id",
  "in",
  "incididunt",
  "ipsum",
  "irure",
  "labore",
  "laboris",
  "laborum",
  "lorem",
  "magna",
  "minim",
  "mollit",
  "nisi",
  "non",
  "nostrud",
  "nulla",
  "occaecat",
  "officia",
  "pariatur",
  "proident",
  "qui",
  "quis",
  "reprehenderit",
  "sint",
  "sit",
  "sunt",
  "tempor",
  "ullamco",
  "ut",
  "velit",
  "veniam",
  "voluptate",
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomArray(min, max) {
  const length = random(min, max);
  return new Array(length).fill(null);
}

export function word() {
  const index = random(0, WORDS.length - 1);
  return WORDS[index];
}

export function sentence() {
  const words = randomArray(5, 15).map(() => word());
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  return `${words.join(" ")}.`;
}

export function paragraph() {
  return randomArray(3, 7).map(() => sentence()).join(" ");
}

export function article() {
  return randomArray(3, 7).map(() => paragraph()).join("\n\n");
}
