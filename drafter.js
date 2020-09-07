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
