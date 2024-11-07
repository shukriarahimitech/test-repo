import React from 'react';
import MyComponent from './MyComponents';

const App: React.FC = () => {
    return (
        <div>
            <MyComponent universities="Hello, TypeScript with React!" />
        </div>
    );
};

export default App;
