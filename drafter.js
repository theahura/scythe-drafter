const mats = ['engineering', 'mechanical', 'industrial', 'agricultural', 'innovate', 'patriotic', 'militant']
const factions = ['nordic', 'rusviet', 'togawa', 'crimea', 'saxony', 'polania', 'albion']

function permute(a, b) {
  let new_arr = [];
  for (const i in a) {
    for (const j in b) {
      new_arr.push(a[i] + '-' + b[j])
    }
  }
    return new_arr;
}

permutations = permute(mats, factions)

function getElements(perms, n) {
  let elements = [];
  for (let i = 0; i < n; ++i) {
     elements.push(perms[Math.floor(Math.random() * perms.length)])
  }
  return elements;
}
