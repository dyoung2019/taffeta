import { h } from 'preact';
import { Ref, useEffect, useRef, useState } from 'preact/hooks';
import measureElement from './measureElement';

export default function useResize() {
  // array of values
  const [outline, setOutline] = useState<Outline>({
    offsetTop: 0,
    width: 0,
    height: 0
  });
  const domRef = useRef<HTMLDivElement>(null);

  const resize = () => {
    measureElement(domRef.current, outline, setOutline);
  }

  useEffect(() => {
    resize();
  }, [domRef.current])

  return {
    domRef,
    outline,
    resize
  }
}