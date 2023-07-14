type Node = {
  id: number;
}

const genAllPairs = (s: Node[]): Node[][] => {
    const length = s.length;
    const pairs = [];
    for (let i = 0; i < length - 1; i += 1) {
      for (let j = i + 1; j < length; j += 1) {
        pairs.push([s[i], s[j]]);
      }
    }
    return pairs;
  };
  
  const randomChoose = (s: Node[][], k: number) => {
    const selected = [];
    let i = -1;
    const setSize = s.length;
    const size = k >= setSize ? setSize : k;
    while (++i < size) {
      const idx = Math.floor(Math.random() * s.length);
      selected.push(s.splice(idx, 1)[0]);
    }
    return selected;
  };
  
  export function randomGraphGenerator(n: number, m: number, name = 'default') {
    // generate an array of nodes with id form 0 to n;
    const nodes = Array.from(Array(n).keys()).map((id) => ({id}));
    const links = randomChoose(genAllPairs(nodes), m);
    const edges = links.map((link, idx) => ({
      id: idx,
      sourceId: link[0].id,
      targetId: link[1].id
    }));
    return {name, nodes, edges};
  }