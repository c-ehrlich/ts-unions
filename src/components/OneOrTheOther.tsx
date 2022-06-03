// we want to be able to pass only EITHER expanded OR collapsed
// this solution works (but seems like it will be bad if we want to have many other keys)
interface CollapsedProps {
  collapsed: true
  expanded: never
}
interface ExpandedProps {
  expanded: true
  collapsed: never
}
type OneOrTheOtherProps = CollapsedProps | ExpandedProps;

export function OneOrTheOther(props: OneOrTheOtherProps) {
  return <pre>{JSON.stringify(props)}</pre>
}

function DebugWhileDeveloping() {
  return (
    <>
      <OneOrTheOther expanded collapsed />
    </>
  )
}