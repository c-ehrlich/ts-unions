// goal:
// this component can receive either an array of strings or an array of objects
// if we receive the array of objects, we need two extra properties:
// 1. which part of the object is the value
// 2. which part is the label

// solution 1... this works, but we don't have autocomplete
// type DropdownStringProps = {
//   data: Array<string | number>;
//   labelProp?: never;
//   valueProp?: never;
// };
// type DropdownObjectProps = {
//   data: Array<Object>;
//   labelProp: string;
//   valueProp: string;
// };
// type DropdownProps = DropdownStringProps | DropdownObjectProps;

type DropdownStringProps = {
  data: Array<string | number>;
  labelProp?: never;
  valueProp?: never;
};
// could also do: type DropDownStringProps<T> = T extends number | string ? }

type DropdownObjectProps<T> = {
  data: Array<T>;
  labelProp: keyof T;
  valueProp: keyof T;
};
type DropdownProps<T> = DropdownStringProps | DropdownObjectProps<T>;

export default function Dropdown<T>(props: DropdownProps<T>) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function DebugWhileDeveloping() {
  return (
    <Dropdown
      data={[
        { label: 'myLabel', value: 'myValue' },
        { label: 'myValue2', value: 'myValue2' },
      ]}
      labelProp='label'
      valueProp='value'
    />
  );
}
