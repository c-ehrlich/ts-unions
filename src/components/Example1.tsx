// this doesn't give us any checking
// interface DrawerProps = {
//   shape: 'square' | 'rectangle' | 'circle';
//   width?: number;
//   radius?: number;
//   height?: number;
// };

// creating three separate interfaces gives us good checking
// but if we want to add some additional properties that are shared between
// the shapes it gets messy fast...either add it to all of them, or have
// all of them extend the same interface
// component takes 'CircleProps | SquareProps | RectangleProps'
interface CircleProps {
  shape: 'circle';
  radius: number;
}
interface SquareProps {
  shape: 'square';
  width: number;
}
interface RectangleProps {
  shape: 'rectangle';
  width: number;
  height: number;
}

// can use discriminating unions to do this more elegantly
// 'discriminating unions' means: TS knows that if we pass 'shape: circle'
// the only thing it can be is CircleProps
interface BaseShapeProps {
  otherProp: string;
  otherProp2: number;
}
export type DrawerProps = BaseShapeProps &
  (CircleProps | SquareProps | RectangleProps);

export function Drawer(props: DrawerProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return <Drawer shape='circle' radius={4} otherProp='a' otherProp2={2} />;
}
