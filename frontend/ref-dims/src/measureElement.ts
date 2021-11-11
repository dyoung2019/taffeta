export default function measureElement(
  node: HTMLDivElement | null,
  src: Outline,
  setOutline: (change: Outline) => void
) {
  if (!!node) {
    const rect = node.getBoundingClientRect();

    const updated = {
      offsetTop: rect.top,
      width: rect.width,
      height: rect.height
    };

    const testValues = [
      [updated.offsetTop, src.offsetTop],
      [updated.width, src.width],
      [updated.height, src.height],
    ];

    const noOfChanges: number = testValues.map(
      ([o, u]) =>
        Math.abs(o - u) >= Number.EPSILON
          ? 1
          : 0)
      .reduce((a: number, b: number) => a + b, 0);

    if (noOfChanges > 0) {
      // make change
      setOutline(updated);
    }
  }
}