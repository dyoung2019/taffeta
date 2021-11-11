import { h } from 'preact';
import { useState, useEffect, Ref, useRef } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import './App.css';
import measureElement from './measureElement';

interface LineProps {
  index: number,
  layer: Outline,
  setOutline: (i: number, v: Outline) => void
}

const LineRow = forwardRef((props: LineProps, ref: Ref<HTMLDivElement>) =>
  <div ref={ref}>Layer {props.index} {JSON.stringify(props.layer)}
    <button onClick={() => measureElement(ref.current, props.layer, (v) => props.setOutline(props.index, v))}>Measure</button>
  </div>
)

function App() {
  // Create the count state.
  const [layers, setLayers] = useState<Outline[]>([
    {offsetTop: 0, width: 0, height: 0},
    {offsetTop: 0, width: 0, height: 0},
  ]);
  const domRefs = [
    useRef(null),
    useRef(null)
  ];

  const setLayerValue = (i: number, value: Outline) => {
    const clones = [...layers];
    clones[i] = value;
    setLayers(clones);
  }

  // resize();
  // Return the App component

  return (
    <div className="App">
      <h1>HELLO </h1>

      {layers.map((l, i) =>
        <LineRow 
          ref={domRefs[i]} 
          layer={l} 
          index={i} 
          setOutline={setLayerValue}>
        </LineRow>
      )}

      {/* <OutlineRow></OutlineRow> */}
      {/* <OutlineRow></OutlineRow> */}
    </div>
  );
}

export default App;
