import { h } from 'preact';
import { Ref, useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks';
import measureElement from './measureElement';

export default function useMeasure() {
  // array of values
  const domRef = useRef<HTMLDivElement>(null);

  const measure = (outline: Outline, setOutline: (value: Outline) => void) => {
    measureElement(domRef.current, outline, setOutline);
  }

  return {
    domRef,
    measure
  }
}