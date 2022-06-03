// what we want: defaultCollapsed can only be true if collapsible is also true
type PanelProps =
  | { collapsible: true; defaultCollapsed?: boolean }
  // this could replace the above
  // | { collapsible: true; defaultCollapsed?: true }
  | { collapsible?: never; defaultCollapsed?: never };

export default function Panel(props: PanelProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return <Panel collapsible defaultCollapsed={false} />;
}
