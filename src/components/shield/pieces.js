const pieces = [
  ['none', { path: ''} ],
  ['coeur', { path: 'M -6,-6 h12 v6 C 6,5 0,7.5 0,7.5 C 0,7.5, -6,5 -6,0 z'} ],
  ['chef', { path: 'M -12,-12 h24 v6 h-24 z'} ],
  ['fasce', { path: 'M -12,-6 h24 v6 h-24 z'} ],
  ['pal', { path: 'M 0 15 C 0 15 -1.28 14.47 -3 13.4 L -3 -12 L 3 -12 L 3 13.4 C 1.28 14.47 0 15 0 15 Z'} ],
  ['chevron', { path: 'M 0 -6 L 10.96 4.96 C 10.16 6.78 8.98 8.36 7.69 9.69 L 0 2 L -7.69 9.69 C -8.98 8.36 -10.16 6.78 -10.96 4.96 Z'} ],
  ['sautoir', { path: 'M -12 -12 L -7.72 -12 L 0.04 -4.25 L 7.79 -12 L 12 -12 L 12 -7.73 L 4.28 0 L 10.39 6.11 C 9.37 7.94 7.99 9.5 6.56 10.76 L 0.04 4.24 L -6.53 10.8 C -7.95 9.54 -9.34 7.99 -10.36 6.15 L -4.21 0 L -12 -7.8 Z'} ],
  ['pairle', { path: 'M 0 15 C 0 15 -1.28 14.47 -3 13.4 L -3 1 L -12 -8 L -12 -12 L -8 -12 L 0 -4 L 8 -12 L 12 -12 L 12 -8 L 3 1 L 3 13.4 C 1.28 14.47 0 15 0 15 Z'} ],
  ['gousset', { path: 'M 0 15 C 0 15 -1.28 14.47 -3 13.4 L -3 -3 L -12 -12 L 12 -12 L 3 -3 L 3 13.4 C 1.28 14.47 0 15 0 15 Z'} ],
  ['bande', { path: 'M -12 -12 L -7.73 -12 L 10.38 6.11 C 9.37 7.95 7.98 9.5 6.56 10.77 L -12 -7.78 Z'} ],
  ['barre', { path: 'M 12 -12 L 7.73 -12 L -10.38 6.11 C -9.37 7.95 -7.98 9.5 -6.56 10.77 L 12 -7.78 Z'} ],
  ['francquartier', { path: 'M -12 -12 h 12 v 12 h -12 z'} ],
  ['secondquartier', { path: 'M 0 -12 h 12 v 12 h -12 z'} ],
  ['tiersquartier', { path: 'M 0 0 L 12 0 C 12 10 0 15 0 15 Z'} ],
  ['quartquartier', { path: 'M 0 0 L -12 0 C -12 10 0 15 0 15 Z'} ],
  ['giron', { path: 'M -12 -12 l 12,12 h -12 z'} ],
  ['pointe', { path: 'M -12 -12 h 24 l -12,12 Z'} ],
  ['contrepointe', { path: 'M 0 15 C 0 15 -5.09 12.88 -8.64 8.64 L 0 0 L 8.64 8.64 C 5.09 12.88 0 15 0 15 Z'} ],
  ['chausse', { path: 'M -12 -12 h 24 l -12,27 Z'} ],
  ['mantel', { path: 'M 12 0.01 C 12 0.01 12 0.01 12 0.01 L -7.58 9.8 C -9.97 7.38 -12 4.11 -12 0 L -12 -11.99 Z'} ],
  ['chape', { path: 'M 0 15 C 0 15 -5.43 12.74 -8.98 8.21 L 0 -12 L 8.98 8.21 C 5.43 12.74 0 15 0 15 Z'} ],
  ['champagne', { path: 'M 0 15 C 0 15 -5.6 12.67 -9.15 8 L 9.15 8 C 5.6 12.67 0 15 0 15 Z'} ],
  ['bordure', { path: 'M -12 -12 L 12 -12 L 12 0 C 12 10 0 15 0 15 C 0 15 -12 10 -12 0 Z M -9 0 C -9 7.5 0 11.25 0 11.25 C 0 11.25 9 7.5 9 0 L 9 -9 L -9 -9 Z'} ],
  ['orle', { path: 'M -10 -10 L 10 -10 L 10 0 C 10 8 0 13 0 12.25 C 0 13 -10 8 -10 0 Z M -9 0 C -9 7.5 0 11.25 0 11.25 C 0 11.25 9 7.5 9 0 L 9 -9 L -9 -9 Z'} ],
]

const pieceMap = new Map(pieces);

export function randomPiece() {
  return pieces[Math.floor(Math.random() * pieces.length)][0];
}

export function getPiece(name) {
  return name ? pieceMap.get(name).path : '';
}

export function getPieces() {
  return pieces;
}
