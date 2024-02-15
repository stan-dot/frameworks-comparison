export function Component1() {
  return (
    <div>
      Component1
      <h2>some file tree</h2>
    </div>
  );
}

export function Component2() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      Component2
      <h2 style={{ color: "black" }}> some text</h2>
    </div>
  );
}

export function Component3() {
  return (
    <div>
      Component3
      <h2 style={{ color: "black" }}> some visualization</h2>
      <canvas height={500} width={300} />
    </div>
  );
}
