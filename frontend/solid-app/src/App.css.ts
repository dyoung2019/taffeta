import { 
  globalStyle, 
  createTheme, 
  style, 
  keyframes 
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box'
})

globalStyle('body', {
  margin: 0,
  fontFamily: `Gordita -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif`,
});

globalStyle('code', {
  fontFamily: `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace`,
});

export const [themeClass, vars] = createTheme({
  color: {
    header: '#282c34',
    white: 'white',
    link: '#446b9e',
    linkOver: '#66e6ac',
    counter: '#66e6ac'
  },
  font: {
    body: 'arial'
  }
});

export const appStyle = style({
  textAlign: 'center',
});

export const counterStyle = style({
  color: vars.color.counter,
  paddingBottom: '25px'
})

const logoSpin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
});

export const logoStyle = style({
  height: '40vmin',
  pointerEvents: 'none',
  animation: `20s infinite ${logoSpin} linear`
});

export const headerStyle = style({
  backgroundColor: vars.color.header,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.white,
  fontSize: calc('10px').add('2vmin').toString(),
});

export const linkStyle = style({
  color: vars.color.link,
  ':hover': {
    color: vars.color.linkOver
  },
});
