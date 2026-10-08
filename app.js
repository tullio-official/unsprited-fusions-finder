const LIST_URLS = [
  "https://raw.githubusercontent.com/infinitefusion/pif-downloadables/refs/heads/master/CUSTOM_SPRITES",
  "https://raw.githubusercontent.com/infinitefusion/infinitefusion-e18/main/Data/sprites/CUSTOM_SPRITES",
];
const GAME_RAW = "https://raw.githubusercontent.com/infinitefusion/infinitefusion-e18/releases/";
const GAME = GAME_RAW + "Data/";
const SETTINGS_URL = GAME + "Scripts/001_Settings.rb";
const SPECIES_URL = GAME + "species.dat";
const KEY_URL = GAME + "Scripts/001_Technical/000_Encryption.rb";
const SPRITE = /^(\d+)\.(\d+)[a-z]*\.png$/;

const NAMES = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie",
  "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate",
  "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina",
  "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff",
  "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett",
  "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag",
  "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell",
  "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro",
  "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder",
  "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb",
  "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing",
  "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu",
  "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados",
  "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto",
  "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo",
  "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr",
  "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou",
  "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy",
  "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom",
  "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus",
  "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull",
  "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub",
  "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra",
  "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby",
  "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh",
  "Celebi", "Azurill", "Wynaut", "Ambipom", "Mismagius", "Honchkrow", "Bonsly", "Mime Jr.", "Happiny", "Munchlax",
  "Mantyke", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega",
  "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken",
  "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Ralts", "Kirlia", "Gardevoir", "Gallade", "Shedinja", "Kecleon",
  "Beldum", "Metang", "Metagross", "Bidoof", "Spiritomb", "Lucario", "Gible", "Gabite", "Garchomp", "Mawile",
  "Lileep", "Cradily", "Anorith", "Armaldo", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Slaking", "Absol",
  "Duskull", "Dusclops", "Dusknoir", "Wailord", "Arceus", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno",
  "Infernape", "Piplup", "Prinplup", "Empoleon", "Nosepass", "Probopass", "Honedge", "Doublade", "Aegislash", "Pawniard",
  "Bisharp", "Luxray", "Aggron", "Flygon", "Milotic", "Salamence", "Klinklang", "Zoroark", "Sylveon", "Kyogre",
  "Groudon", "Rayquaza", "Dialga", "Palkia", "Giratina", "Regigigas", "Darkrai", "Genesect", "Reshiram", "Zekrom",
  "Kyurem", "Roserade", "Drifblim", "Lopunny", "Breloom", "Ninjask", "Banette", "Rotom", "Reuniclus", "Whimsicott",
  "Krookodile", "Cofagrigus", "Galvantula", "Ferrothorn", "Litwick", "Lampent", "Chandelure", "Haxorus", "Golurk", "Pyukumuku",
  "Klefki", "Talonflame", "Mimikyu", "Volcarona", "Deino", "Zweilous", "Hydreigon", "Latias", "Latios", "Deoxys",
  "Jirachi", "Nincada", "Bibarel", "Riolu", "Slakoth", "Vigoroth", "Wailmer", "Shinx", "Luxio", "Aron",
  "Lairon", "Trapinch", "Vibrava", "Feebas", "Bagon", "Shelgon", "Klink", "Klang", "Zorua", "Budew",
  "Roselia", "Drifloon", "Buneary", "Shroomish", "Shuppet", "Solosis", "Duosion", "Cottonee", "Sandile", "Krokorok",
  "Yamask", "Joltik", "Ferroseed", "Axew", "Fraxure", "Golett", "Fletchling", "Fletchinder", "Larvesta", "Stunfisk",
  "Sableye", "Venipede", "Whirlipede", "Scolipede", "Tyrunt", "Tyrantrum", "Snorunt", "Glalie", "Froslass", "Oricorio (Baile)",
  "Oricorio (Pom-Pom)", "Oricorio (Pa'u)", "Oricorio (Sensu)", "Trubbish", "Garbodor", "Carvanha", "Sharpedo", "Phantump", "Trevenant", "Noibat",
  "Noivern", "Swablu", "Altaria", "Goomy", "Sliggoo", "Goodra", "Regirock", "Regice", "Registeel", "Necrozma",
  "Stufful", "Bewear", "Dhelmise", "Mareanie", "Toxapex", "Hawlucha", "Cacnea", "Cacturne", "Sandygast", "Palossand",
  "Amaura", "Aurorus", "Rockruff", "Lycanroc (Midday)", "Lycanroc (Midnight)", "Meloetta (Aria)", "Meloetta (Pirouette)", "Cresselia", "Bruxish", "Ultra Necrozma",
  "Jangmo-o", "Hakamo-o", "Kommo-o", "Wimpod", "Golisopod", "Fomantis", "Lurantis", "Carbink", "Chespin", "Quilladin",
  "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Torkoal", "Pumpkaboo", "Gourgeist",
  "Swirlix", "Slurpuff", "Scraggy", "Scrafty", "Lotad", "Lombre", "Ludicolo", "Minior (Meteor)", "Minior (Core)", "Diancie",
  "Luvdisc", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox",
  "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Surskit", "Masquerain", "Whismur",
  "Loudred", "Exploud", "Makuhita", "Hariyama", "Skitty", "Delcatty", "Meditite", "Medicham", "Electrike", "Manectric",
  "Plusle", "Minun", "Volbeat", "Illumise", "Gulpin", "Swalot", "Numel", "Camerupt", "Spoink", "Grumpig",
  "Spinda", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy",
  "Claydol", "Castform", "Castform (Sunny)", "Castform (Rainy)", "Castform (Snowy)", "Tropius", "Chingling", "Chimecho", "Spheal", "Sealeo",
  "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Woobat", "Swoobat", "Tynamo", "Eelektrik", "Eelektross",
  "Skrelp", "Dragalge", "Shellos (East Sea)", "Gastrodon (East Sea)", "Shellos (West Sea)", "Gastrodon (West Sea)",
];

const DEX = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
  121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
  141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
  161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
  181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
  201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
  221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
  241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 298, 360, 424, 429, 430, 438, 439, 440, 446,
  458, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 252, 253, 254, 255, 256,
  257, 258, 259, 260, 280, 281, 282, 475, 292, 352, 374, 375, 376, 399, 442, 448, 443, 444, 445, 303,
  345, 346, 347, 348, 408, 409, 410, 411, 289, 359, 355, 356, 477, 321, 493, 387, 388, 389, 390, 391,
  392, 393, 394, 395, 299, 476, 679, 680, 681, 624, 625, 405, 306, 330, 350, 373, 601, 571, 700, 382,
  383, 384, 483, 484, 487, 486, 491, 649, 643, 644, 646, 407, 426, 428, 286, 291, 354, 479, 579, 547,
  553, 563, 596, 598, 607, 608, 609, 612, 623, 771, 707, 663, 778, 637, 633, 634, 635, 380, 381, 386,
  385, 290, 400, 447, 287, 288, 320, 403, 404, 304, 305, 328, 329, 349, 371, 372, 599, 600, 570, 406,
  315, 425, 427, 285, 353, 577, 578, 546, 551, 552, 562, 595, 597, 610, 611, 622, 661, 662, 636, 618,
  302, 543, 544, 545, 696, 697, 361, 362, 478, 741, 741, 741, 741, 568, 569, 318, 319, 708, 709, 714,
  715, 333, 334, 704, 705, 706, 377, 378, 379, 800, 759, 760, 781, 747, 748, 701, 331, 332, 769, 770,
  698, 699, 744, 745, 745, 648, 648, 488, 779, 800, 782, 783, 784, 767, 768, 753, 754, 703, 650, 651,
  652, 653, 654, 655, 656, 657, 658, 324, 710, 711, 684, 685, 559, 560, 270, 271, 272, 774, 774, 719,
  370, 261, 262, 263, 264, 265, 266, 267, 268, 269, 273, 274, 275, 276, 277, 278, 279, 283, 284, 293,
  294, 295, 296, 297, 300, 301, 307, 308, 309, 310, 311, 312, 313, 314, 316, 317, 322, 323, 325, 326,
  327, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 351, 351, 351, 351, 357, 433, 358, 363, 364,
  365, 366, 367, 368, 369, 527, 528, 602, 603, 604, 690, 691, 422, 423, 422, 423,
];

const LEGENDS = [
  144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385,
  386, 483, 484, 486, 487, 488, 491, 493, 643, 644, 646, 648, 649, 719, 800,
];

const REGIONS = { Kanto: 151, Johto: 251, Hoenn: 386, Sinnoh: 493, Unova: 649, Kalos: 721, Alola: 809 };

async function get(url, bytes) {
  let r;
  try {
    r = await fetch(url);
  } catch (e) {
    throw new Error(`can't reach ${url}`);
  }
  if (!r.ok) throw new Error(`got ${r.status} from ${url}`);
  return bytes ? new Uint8Array(await r.arrayBuffer()) : r.text();
}

async function spriteList() {
  for (const url of LIST_URLS) {
    try {
      return (await get(url)).split(/\s+/);
    } catch (e) {}
  }
  throw new Error("can't get the sprite list");
}

async function pokemonCount() {
  try {
    const m = (await get(SETTINGS_URL)).match(/NB_POKEMON\s*=\s*(\d+)\s*$/m);
    if (m) return +m[1];
  } catch (e) {}
  return NAMES.length;
}

function marshal(b) {
  let p = 2;
  const syms = [], objs = [], text = new TextDecoder();
  const long = () => {
    const c = (b[p++] << 24) >> 24;
    if (c === 0) return 0;
    if (c > 4) return c - 5;
    if (c < -4) return c + 5;
    let v = 0;
    for (let i = 0; i < Math.abs(c); i++) v += b[p++] * 2 ** (8 * i);
    return c < 0 ? v - 2 ** (-8 * c) : v;
  };
  const str = () => {
    const n = long();
    p += n;
    return text.decode(b.subarray(p - n, p));
  };
  const obj = v => {
    objs.push(v);
    return v;
  };
  const read = () => {
    const t = String.fromCharCode(b[p++]);
    switch (t) {
      case "0": return null;
      case "T": return true;
      case "F": return false;
      case "i": return long();
      case ":": {
        const s = str();
        syms.push(s);
        return s;
      }
      case ";": return syms[long()];
      case "@": return objs[long()];
      case '"': return obj(str());
      case "f": return obj(parseFloat(str()));
      case "I": {
        const v = read();
        for (let n = long(); n > 0; n--) {
          read();
          read();
        }
        return v;
      }
      case "[": {
        const a = obj([]);
        for (let n = long(); n > 0; n--) a.push(read());
        return a;
      }
      case "{":
      case "}": {
        const h = obj(new Map());
        for (let n = long(); n > 0; n--) {
          const k = read();
          h.set(k, read());
        }
        if (t === "}") read();
        return h;
      }
      case "o": {
        const o = obj({});
        read();
        for (let n = long(); n > 0; n--) {
          const k = read();
          o[k] = read();
        }
        return o;
      }
    }
    throw new Error(`don't know how to read "${t}" in species.dat (byte ${p - 1})`);
  };
  return read();
}

async function species() {
  const b = await get(SPECIES_URL, true);
  if (b[0] !== 4 || b[1] !== 8) {
    const src = await get(KEY_URL);
    const key = src.match(/ENCRYPTION_KEY\s*=\s*\[([^\]]*)\]/)?.[1].match(/0x[0-9a-f]+/gi);
    if (!key) throw new Error("can't find the key for species.dat");
    for (let i = 0; i < b.length; i++) b[i] ^= Number(key[i % key.length]);
  }
  return marshal(b);
}

const name = i => NAMES[i - 1] || `#${i}`;
let nb, done, types, height, color, shape, region, stage, legend, family, served, cutoff;

async function load() {
  const [list, count, data] = await Promise.all([spriteList(), pokemonCount(), species()]);
  nb = count;
  done = new Uint8Array((nb + 1) * (nb + 1));
  served = new Uint32Array(nb + 1);
  let sprited = 0;
  for (const f of list) {
    const m = SPRITE.exec(f);
    if (!m) continue;
    const h = +m[1], b = +m[2];
    if (h <= nb && b <= nb && !done[h * (nb + 1) + b]) {
      done[h * (nb + 1) + b] = 1;
      sprited++;
      served[h]++;
      if (b !== h) served[b]++;
    }
  }
  cutoff = served.slice(1).sort()[Math.ceil(nb / 10) - 1];
  types = [];
  height = [];
  color = [];
  shape = [];
  region = [];
  stage = [];
  legend = [];
  family = [];
  const prev = new Uint8Array(nb + 1), next = new Uint8Array(nb + 1), seen = new Map();
  const root = i => family[i] === i ? i : (family[i] = root(family[i]));
  const join = (a, b) => {
    family[root(a)] = root(b);
  };
  for (let i = 1; i <= nb; i++) {
    family[i] = i;
    const d = DEX[i - 1];
    region[i] = Object.keys(REGIONS).find(r => d <= REGIONS[r]) || "";
    legend[i] = LEGENDS.includes(d);
    if (d) {
      if (seen.has(d)) join(i, seen.get(d));
      else seen.set(d, i);
    }
  }
  for (let i = 1; i <= nb; i++) {
    const s = data.get(i);
    if (!s) {
      types[i] = [];
      continue;
    }
    const t1 = s["@type1"], t2 = s["@type2"];
    types[i] = t2 && t2 !== t1 ? [t1, t2] : [t1];
    height[i] = s["@height"] / 10;
    color[i] = s["@color"];
    shape[i] = s["@shape"];
    for (const [to, , , back] of s["@evolutions"] || []) {
      const j = data.get(to)?.["@id_number"];
      if (!(j >= 1 && j <= nb)) continue;
      if (back) {
        prev[i] = next[j] = 1;
      } else {
        next[i] = prev[j] = 1;
      }
      join(i, j);
    }
  }
  for (let i = 1; i <= nb; i++) {
    family[i] = root(i);
    stage[i] = !data.get(i) ? [] : !prev[i] && !next[i] ? ["single"] : [prev[i] ? "" : "base", prev[i] && next[i] ? "middle" : "", next[i] ? "" : "final"].filter(Boolean);
  }
  return sprited;
}

const $ = id => document.getElementById(id);
const SIZES = { XS: "Under 0.5 m", S: "0.5 to 1 m", M: "1 to 1.5 m", L: "1.5 to 2 m", XL: "Over 2 m" };
const SHAPES = {
  Head: "head only", HeadLegs: "head and legs", HeadArms: "head and arms", HeadBase: "head and base",
  Serpentine: "serpentine", Finned: "finned", Insectoid: "insectoid", Quadruped: "quadruped",
  Bipedal: "bipedal, no tail", BipedalTail: "bipedal with tail", Winged: "winged", MultiWinged: "multiple wings",
  MultiBody: "multiple bodies", Multiped: "tentacles or many legs",
};
const shapeName = s => SHAPES[s] || s.replace(/\B[A-Z]/g, c => " " + c).toLowerCase();

function size(i) {
  const h = height[i];
  if (!(h >= 0)) return "";
  if (h < 0.5) return "XS";
  if (h < 1) return "S";
  if (h < 1.5) return "M";
  if (h <= 2) return "L";
  return "XL";
}

function el(tag, props, ...kids) {
  const e = Object.assign(document.createElement(tag), props);
  e.append(...kids);
  return e;
}

function infoBubble(text) {
  const bubble = el("span", { className: "bubble", hidden: true }, el("span", { className: "bubble-in" }, el("span", { className: "bubble-tail" }), el("span", { className: "bubble-box", textContent: text })));
  const info = el("button", { type: "button", className: "info", title: "What's this?", ariaLabel: "What's this?" });
  info.onclick = e => {
    e.stopPropagation();
    bubble.hidden = !bubble.hidden;
  };
  document.addEventListener("click", e => {
    if (!bubble.contains(e.target)) bubble.hidden = true;
  });
  return el("span", { className: "info-wrap" }, info, bubble);
}

const COPY_ICON = "M0 0h4v1H1v3H0z M2 2h4v4H2z M3 3v2h2V3z";
const LINK_ICON = "M0 1h2v1H1v3h3V4h1v2H0z M3 0h3v3H5V2H4V1H3z M3 2h1v1H3z M2 3h1v1H2z";

function icon(d) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 6 6");
  svg.setAttribute("class", "picon");
  svg.setAttribute("shape-rendering", "crispEdges");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("fill", "currentColor");
  path.setAttribute("fill-rule", "evenodd");
  svg.append(path);
  return svg;
}

function copy(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  fallbackCopy(text);
}

function fallbackCopy(text) {
  const t = el("textarea", { value: text });
  document.body.append(t);
  t.select();
  document.execCommand("copy");
  t.remove();
}

function flip(btn, on) {
  btn.classList.toggle("on", on);
  btn.classList.remove("mid-on", "mid-off");
  btn.classList.add(on ? "mid-on" : "mid-off");
  clearTimeout(btn.t);
  btn.t = setTimeout(() => btn.classList.remove("mid-on", "mid-off"), 90);
}

function column(fieldset, allTypes, all, ids) {
  const mons = new Set();
  const chips = el("span", { className: "chips" });
  const input = el("input", { placeholder: "Search Pokémon...", autocomplete: "off" });
  const list = el("ul", { className: "ac", hidden: true });
  const search = el("span", { className: "search" }, input, list);
  const allNames = [...ids.values()].map(name);
  let hits = [], sel = 0;
  const pick = n => {
    const i = ids.get((n ?? input.value).trim().toLowerCase());
    if (!i) return;
    input.value = "";
    list.hidden = true;
    if (mons.has(i)) return;
    mons.add(i);
    const chip = el("button", { type: "button", className: "chip", textContent: name(i) + " ×" });
    chip.onclick = () => {
      mons.delete(i);
      chip.remove();
    };
    chips.append(chip);
  };
  const show = () => {
    list.replaceChildren(...hits.map((n, k) => {
      const li = el("li", { textContent: n, className: k === sel ? "sel" : "" });
      li.onmousedown = e => {
        e.preventDefault();
        pick(n);
      };
      return li;
    }));
    list.hidden = !hits.length;
  };
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    hits = !q ? [] : [...allNames.filter(n => n.toLowerCase().startsWith(q)), ...allNames.filter(n => !n.toLowerCase().startsWith(q) && n.toLowerCase().includes(q))].slice(0, 8);
    sel = 0;
    show();
  });
  input.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!hits.length) return;
      e.preventDefault();
      sel = (sel + (e.key === "ArrowDown" ? 1 : hits.length - 1)) % hits.length;
      show();
    } else if (e.key === "Enter") {
      e.preventDefault();
      pick(hits.length && !list.hidden ? hits[sel] : undefined);
    } else if (e.key === "Escape") list.hidden = true;
  });
  input.addEventListener("blur", () => list.hidden = true);
  const TYPE_COL = {
    NORMAL: ["#a8a878", "#d8d8c0", "#705848"], FIGHTING: ["#c03028", "#f08030", "#484038"], FLYING: ["#a890f0", "#c8c0f8", "#705898"],
    POISON: ["#a040a0", "#d880b8", "#483850"], GROUND: ["#e0c068", "#f8f878", "#886830"], ROCK: ["#b8a038", "#e0c068", "#886830"],
    BUG: ["#a8b820", "#d8e030", "#789010"], GHOST: ["#705898", "#a890f0", "#483850"], STEEL: ["#b8b8d0", "#d8d8c0", "#807870"],
    FIRE: ["#f08030", "#f8d030", "#c03028"], WATER: ["#6890f0", "#98d8d8", "#445ca0"], GRASS: ["#78c850", "#c0f860", "#588040"],
    ELECTRIC: ["#f8d030", "#f8f878", "#b8a038"], PSYCHIC: ["#f85888", "#f8c0b0", "#906060"], ICE: ["#98d8d8", "#d0f8e8", "#9090a0"],
    DRAGON: ["#7038f8", "#b8a0f8", "#483890"], DARK: ["#705848", "#a8a878", "#484038"], FAIRY: ["#ffaec9", "#ffdfea", "#ff82aa"],
  };
  const ORDER = Object.keys(TYPE_COL);
  const rank = t => (ORDER.indexOf(String(t).toUpperCase()) + 99) % 99;
  const typeBoxes = [...allTypes].sort((a, b) => rank(a) - rank(b)).map(t => {
    const lc = String(t).toLowerCase(), c = TYPE_COL[String(t).toUpperCase()] || ["#68a090", "#70c8b0", "#206860"];
    const icon = el("span", { className: "tic", textContent: lc[0].toUpperCase() + lc.slice(1) });
    icon.style.cssText = `--m:${c[0]};--h:${c[1]};--l:${c[2]}`;
    return el("label", { className: "tbox" }, el("input", { type: "checkbox", value: t }), icon);
  });
  const sizeBoxes = Object.keys(SIZES).map(k => el("label", { className: "seg", title: SIZES[k] }, el("input", { type: "checkbox", value: k }), el("span", { textContent: k })));
  const regionBoxes = Object.keys(REGIONS).map(r => el("label", { className: "tile" }, el("input", { type: "checkbox", value: r }), el("span", { textContent: r })));
  const COLOR_COL = {
    Red: ["#e04838", "#f88870", "#a02820"], Yellow: ["#f0d038", "#f8f080", "#b09820"], Green: ["#58b848", "#98e080", "#307828"],
    Blue: ["#4878e0", "#88b0f8", "#284898"], Purple: ["#9058c0", "#c098e8", "#583080"], Pink: ["#f088b8", "#f8c0d8", "#c05888"],
    Brown: ["#a87848", "#d0a070", "#704820"], Black: ["#383838", "#585858", "#202020"], Gray: ["#a0a0a8", "#c8c8d0", "#686870"],
    White: ["#f4f4f4", "#ffffff", "#c0c0c0"],
  };
  const corder = Object.keys(COLOR_COL);
  const colorBoxes = [...all.colors].sort((a, b) => (corder.indexOf(a) + 99) % 99 - (corder.indexOf(b) + 99) % 99).map(c => {
    const k = Object.keys(COLOR_COL).find(n => n.toLowerCase() === String(c).toLowerCase());
    const v = COLOR_COL[k] || ["#a0a0a8", "#c8c8d0", "#686870"];
    const icon = el("span", { className: "tic" + (k === "White" ? " tic-white" : ""), textContent: k || String(c) });
    icon.style.cssText = `--m:${v[0]};--h:${v[1]};--l:${v[2]}`;
    return el("label", { className: "tbox" }, el("input", { type: "checkbox", value: c }), icon);
  });
  const SHAPE_ROW = ["Head", "Serpentine", "Finned", "HeadArms", "HeadBase", "BipedalTail", "HeadLegs", "Quadruped", "Winged", "Multiped", "MultiBody", "Bipedal", "MultiWinged", "Insectoid"];
  const shapeBoxes = [...all.shapes].sort((a, b) => (SHAPE_ROW.indexOf(a) + 99) % 99 - (SHAPE_ROW.indexOf(b) + 99) % 99).map(sh => {
    const r = SHAPE_ROW.indexOf(sh), nm = shapeName(sh);
    const icon = el("span", { className: "sic", title: nm[0].toUpperCase() + nm.slice(1) });
    if (r >= 0) icon.style.setProperty("--r", r);
    else icon.textContent = nm;
    return el("label", { className: "sbox" }, el("input", { type: "checkbox", value: sh }), icon);
  });
  const STAGES = { base: "First of its line", middle: "Middle of its line", final: "Last of its line", single: "Doesn't evolve" };
  const stageBoxes = Object.keys(STAGES).map(k => el("label", { className: "seg", title: STAGES[k] }, el("input", { type: "checkbox", value: k }), el("span", { textContent: k[0].toUpperCase() + k.slice(1) })));
  const legendBoxes = [["only", "Only", "Only legendary and mythical"], ["hide", "Exclude", "No legendary or mythical"]].map(([v, t, tip]) =>
    el("label", { className: "seg", title: tip }, el("input", { type: "radio", name: fieldset.id + "-legend", value: v }), el("span", { textContent: t })));
  legendBoxes[0].firstChild.checked = true;
  const sec = (label, ...kids) => {
    const btn = el("button", { type: "button", className: "ftog" }, el("span", { className: "sw" }), el("span", { className: "lbl", textContent: label }));
    const opts = el("span", { className: "fopts", hidden: true }, ...kids);
    btn.onclick = () => {
      opts.hidden = !opts.hidden;
      flip(btn, !opts.hidden);
    };
    return { row: el("div", { className: "frow" }, btn, opts), on: () => !opts.hidden };
  };
  const f = {
    mon: sec("Pokémon", search),
    type: sec("Type", ...typeBoxes),
    size: sec("Size", el("span", { className: "segs" }, ...sizeBoxes)),
    region: sec("Region", ...regionBoxes),
    color: sec("Color", ...colorBoxes),
    shape: sec("Body shape", ...shapeBoxes),
    stage: sec("Evolution", el("span", { className: "segs" }, ...stageBoxes)),
    legend: sec("Legendary", el("span", { className: "segs" }, ...legendBoxes)),
    under: sec("Undersprited"),
  };
  const tip = `Pokémon in ${cutoff.toLocaleString("en")} or fewer sprited fusions, so the bottom 10%.`;
  f.under.row.firstChild.title = tip;
  f.under.row.firstChild.after(infoBubble(tip));
  f.mon.row.classList.add("frow-mon", "frow-att");
  f.size.row.classList.add("frow-att");
  f.stage.row.classList.add("frow-att");
  f.legend.row.classList.add("frow-att");
  f.type.row.classList.add("frow-type");
  f.region.row.classList.add("frow-type");
  f.color.row.classList.add("frow-type");
  f.shape.row.classList.add("frow-shape");
  f.mon.row.append(chips);
  fieldset.append(...Object.values(f).map(x => x.row));
  const ticked = (x, boxes) => x.on() ? boxes.filter(l => l.firstChild.checked).map(l => l.firstChild.value) : [];
  return {
    get mons() { return f.mon.on() ? mons : new Set(); },
    fits() {
      const ts = ticked(f.type, typeBoxes), ss = ticked(f.size, sizeBoxes), rs = ticked(f.region, regionBoxes), cs = ticked(f.color, colorBoxes);
      const ps = ticked(f.shape, shapeBoxes), es = ticked(f.stage, stageBoxes), lg = f.legend.on() ? ticked(f.legend, legendBoxes)[0] : "any", u = f.under.on();
      const mons = this.mons;
      const ok = new Uint8Array(nb + 1);
      for (let i = 1; i <= nb; i++) {
        if (mons.size && !mons.has(i)) continue;
        if (ts.length && !types[i].some(t => ts.includes(t))) continue;
        if (ss.length && !ss.includes(size(i))) continue;
        if (rs.length && !rs.includes(region[i])) continue;
        if (cs.length && !cs.includes(color[i])) continue;
        if (ps.length && !ps.includes(shape[i])) continue;
        if (es.length && !stage[i].some(s => es.includes(s))) continue;
        if ((lg === "hide" && legend[i]) || (lg === "only" && !legend[i])) continue;
        if (u && served[i] > cutoff) continue;
        ok[i] = 1;
      }
      return ok;
    },
  };
}

function matchPool(head, body) {
  const fh = head.fits(), fb = body.fits(), either = $("either").classList.contains("on"), line = $("line").classList.contains("on"), w = nb + 1;
  const pool = [];
  for (let h = 1; h <= nb; h++) {
    for (let b = 1; b <= nb; b++) {
      if (done[h * w + b]) continue;
      if (line && family[h] !== family[b]) continue;
      if ((fh[h] && fb[b]) || (either && fh[b] && fb[h])) pool.push(h * w + b);
    }
  }
  return pool;
}

function showCount(n) {
  $("count").textContent = !n ? "No matches" : n === 1 ? "1 match" : `${n.toLocaleString("en")} matches`;
  $("count").hidden = false;
}

function go(head, body) {
  const pool = matchPool(head, body), w = nb + 1;
  const pinned = new Set([...head.mons, ...body.mons]), used = new Set(), picks = [];
  for (let i = 0; i < pool.length && picks.length < 6; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
    const h = Math.floor(pool[i] / w), b = pool[i] % w;
    const others = [h, b].filter(x => !pinned.has(x));
    if (others.some(x => used.has(x))) continue;
    others.forEach(x => used.add(x));
    picks.push([h, b]);
  }
  showCount(pool.length);
  $("results").replaceChildren(...picks.map(([h, b]) => {
    const id = `${h}.${b}`;
    const sprite = el("div", { className: "ag", title: "Auto-generated sprite" });
    sprite.style.backgroundImage = `url("${GAME_RAW}Graphics/Battlers/spritesheets_autogen/${h}.png")`;
    sprite.style.backgroundPosition = `${-(b % 10) * 96}px ${-Math.floor(b / 10) * 96}px`;
    const tagText = el("span", { textContent: id });
    const tag = el("button", { type: "button", className: "fid", title: "Copy fusion number" }, tagText, icon(COPY_ICON));
    tag.onclick = () => {
      copy(id);
      tagText.textContent = "Copied!";
      clearTimeout(tag.t);
      tag.t = setTimeout(() => tagText.textContent = id, 900);
    };
    const dex = el("a", { className: "dex", href: `https://infinitefusiondex.com/details/${id}`, target: "_blank", rel: "noopener", title: "Open on infinitefusiondex.com" }, el("span", { textContent: "Dex" }), icon(LINK_ICON));
    const pair = el("span", { className: "cname", title: `${name(h)}/${name(b)}` }, name(h) + "/", el("wbr"), name(b));
    return el("li", { className: "card" }, sprite,
      el("div", { className: "cinfo" }, pair, el("span", { className: "crow" }, tag, dex)));
  }));
}

async function start() {
  let sprited;
  try {
    sprited = await load();
  } catch (e) {
    $("status").textContent = "Couldn't load: " + e.message;
    return;
  }
  const names = NAMES.slice(0, nb);
  const ids = new Map(names.map((n, i) => [n.toLowerCase(), i + 1]));
  const allTypes = [...new Set(types.flat())].sort();
  const values = list => [...new Set(list.filter(Boolean))];
  const all = {
    colors: values(color).sort(),
    shapes: values(shape).sort((a, b) => shapeName(a).localeCompare(shapeName(b))),
  };
  const head = column($("head"), allTypes, all, ids);
  const body = column($("body"), allTypes, all, ids);
  $("either").after(infoBubble("Also counts fusion reverses."));
  for (const b of [$("either"), $("line")]) b.onclick = () => flip(b, !b.classList.contains("on"));
  const wide = matchMedia("(min-width: 1500px)");
  const placePair = () => (wide.matches ? $("pairslot") : $("gobar")).append($("pair"));
  wide.addEventListener("change", placePair);
  placePair();
  $("go").onclick = () => go(head, body);
  let q;
  const recount = () => {
    clearTimeout(q);
    q = setTimeout(() => showCount(matchPool(head, body).length), 0);
  };
  for (const ev of ["click", "change", "keydown", "mousedown"]) $("ui").addEventListener(ev, recount);
  recount();
  const total = nb * nb;
  const pct = sprited / total * 100;
  $("hp-pct").textContent = `${pct.toFixed(1)}%`;
  $("hp").hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => $("hp-fill").style.clipPath = `inset(0 ${100 - pct}% 0 0)`));
  $("status").textContent = `${sprited.toLocaleString("en")} / ${total.toLocaleString("en")} fusions have sprites!`;
  $("ui").hidden = false;
}

start();
