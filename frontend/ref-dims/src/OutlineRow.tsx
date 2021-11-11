import { h } from 'preact';
import useResize from './useResize';

export default function OutlineRow() {
  const {domRef, outline} = useResize();
  return (
    <div ref={domRef}>{JSON.stringify(outline)}</div>
  );
}