const allmats = ['engineering', 'mechanical', 'industrial', 'agricultural', 'innovate', 'patriotic', 'militant'];
const mats = ['engineering', 'mechanical', 'industrial', 'agricultural', 'patriotic'];
const allfactions = ['nordic', 'rusviet', 'togawa', 'crimea', 'saxony', 'polania', 'albion'];
const factions = ['nordic', 'rusviet', 'crimea', 'saxony', 'polania'];
const banned = ['patriotic-rusviet', 'mechanical-crimea'];
const use_expansion = false;

function permute(a, b) {
  let new_arr = [];
  for (const i in a) {
    for (const j in b) {
      new_arr.push(a[i] + '-' + b[j]);
    }
  }
    return new_arr;
}

const used_mats = use_expansion ? allmats : mats;
const used_factions = use_expansion ? allfactions : factions;
const permutations = permutations(used_mats, used_factions);

function getElements(perms, n) {
  let elements = [];
  for (; elements.length < n;) {
    const el = perms[Math.floor(Math.random() * perms.length)];
    if (banned.includes(el)) continue;
    elements.push(el);
  }
  return elements;
}
