console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html (strs, ...args) {
  let p1 = strs[0],
      p2 = args[0],
      p3 = strs[1],
      p4 = args[1],
      p5 = strs[2];

  return `${p1}${entities(p2)}${p3}${entities(p4)}${p5}`;
}

function entities(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}
