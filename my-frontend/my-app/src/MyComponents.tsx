// // src/components/MyComponent.tsx
// import React from 'react';

// interface MyComponentProps {
//     title: string;
// }

// const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
//     return <h1>{title}</h1>;
// };

// export default MyComponent;

import React from 'react';
import PropTypes from 'prop-types';

interface MyComponentProps {
    universities: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ universities }) => {
    return <h1>{universities}</h1>;
};

MyComponent.propTypes = {
    universities: PropTypes.string.isRequired,
};

export default MyComponent;
