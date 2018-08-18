const colors = [
 ['sable', {value: '#000000', comp: '#ffffff'}],
 ['argent', {value: '#ffffff', comp: '#000000'}],
 ['or', {value: '#ffee00', comp: '#0000ff'}],
 ['fer', {value: '#999999', comp: '#000000'}],
 ['azure', {value: '#0000ff', comp: '#ffee00'}],
 ['gules', {value: '#ff0000', comp: '#ffee00'}],
 ['sinople', {value: '#00cc44', comp: '#ffee00'}],
 ['purpure', {value: '#990099', comp: '#ffffff'}],
 ['orange', {value: '#ff7900', comp: '#000000'}],
 ['tenny', {value: '#886644', comp: '#ffee00'}],
 ['rose', {value: '#ffaabb', comp: '#000000'}],
 ['sky', {value: '#99bbff', comp: '#ffffff'}],
 ['pine', {value: '#355520', comp: '#ffffff'}],
 ['wine', {value: '#902020', comp: '#ffffff'}]
];

const colMap = new Map(colors);

export function randomColor() {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx][0];
}

export function randomColorBut(names) {
  let col = colors[0][0];
  const dx = colors.length - names.length;
  if (dx > 0) {
    let idx = Math.floor(Math.random() * dx);
    while (colors[idx][0] in names) {
      idx += 1;
      if (idx == colors.length) {
        idx = 0;
      }
    }
    col = colors[idx][0];
  }
  return col;
}

export function getColor(name) {
  if (!name) return colors[0][0];
  const col = colMap.get(name);
  if (! col) {
    console.log(`Warning: ${name} is not a known color`);
  }
  return col ? col.value : 'sable';
}

export function getColorComp(name) {
  if (!name) return colors[0][0];
  const col = colMap.get(name);
  if (! col) {
    console.log(`Warning: ${name} is not a known color`);
  }
  return col ? col.comp : 'argent';
}

export function getColors() {
  return colors;
}
