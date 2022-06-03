import React from 'react';
import './App.css';
import Example1 from './components/Example1';
import OneOrTheOther from './components/OneOrTheOther';
import Dependency from './components/Dependency';
import StringsOrObjects from './components/StringsOrObjects';

function App() {
  return (
    <div>
      <h1>Union Type tests</h1>
      <div>
        <h2>Basic Union Type Examples</h2>
        <Example1 shape='circle' radius={4} otherProp='a' otherProp2={1} />
        <Example1
          shape='rectangle'
          height={3}
          width={2}
          otherProp='a'
          otherProp2={1}
        />
      </div>
      <div>
        <h2>One or the Other</h2>
        <OneOrTheOther collapsed />
        <OneOrTheOther expanded />
      </div>
      <div>
        <h2>Dependency</h2>
        <Dependency collapsible defaultCollapsed={true} />
        <Dependency collapsible defaultCollapsed={false} />
        <Dependency collapsible />
        <Dependency />
      </div>
      <div>
        <h2>Strings or Objects</h2>
        <StringsOrObjects data={['a', 'b']} />
        <StringsOrObjects
          data={[
            { value: 'val1', label: 'label1' },
            { value: 'val2', label: 'label2' },
          ]}
          valueProp='value'
          labelProp='label'
        />
      </div>
    </div>
  );
}

export default App;
