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

export function randomColorBut(name) {
  const col = randomColor();
  return col === name ? randomColorBut(name) : col;
}

export function getColor(name) {
  const col = colMap.get(name);
  if (! col) {
    console.log(`Error: ${name} is not a known color`);
  }
  return col ? col.value : 'sable';
}

export function getColorComp(name) {
  return colMap.get(name).comp;
}

export function getColors() {
  return colors;
}
