export function Component1() {
  return (
    <div style={{border: '1px solid red'}}>
      Component1
      <h2>some file tree</h2>
    </div>
  );
}

export function Component2() {
  return (
    <div style={{ backgroundColor: "beige", border: '4px dotted blue' }}>
      Component2
      <h2 style={{ color: "black" }}> some text</h2>
    </div>
  );
}

export function Component3() {
  return (
    <div>
      Component3
      <h2 style={{ color: "black", border:'double' }}> some visualization</h2>
      <canvas height={500} width={300} />
    </div>
  );
}
