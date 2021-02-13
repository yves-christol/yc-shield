/*
<pattern id="pattern1" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse" >
  <rect x="0" y="0" width="3" height="3"
style="fill: #f00" />
  <circle cx="1.5" cy="1.5" r="1" style="stroke: none; fill: #0000ff" />
</pattern>
*/
const patternString = (name) => (
  "<pattern id='${name}' x='0' y='0' width='3' height='3' patternUnits='userSpaceOnUse' >" +
  "<rect x='0' y='0' width='3' height='3' style='fill: #f00' />" +
  ""
)

const patterns = [
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

const patMap = new Map(patterns);

export function randomPattern() {
  const idx = Math.floor(Math.random() * patterns.length);
  return patterns[idx][0];
}

export function getPattern(name) {
  const pat = patMap.get(name);
  if (! pat) {
    console.log(`Warning: ${name} is not a known pattern`);
    return patterns[0][1].value;
  }
  return pat;
}

export function getPatterns() {
  return patterns;
}
