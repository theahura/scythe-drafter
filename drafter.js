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
const permutations = permute(used_mats, used_factions);

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getElements(perms, n) {
  const shuffled = shuffle(perms);
  return shuffled.slice(0, n)
}

const num_players = 5;
const draft_size = 3;
getElements(permutations, 3 * 5)
