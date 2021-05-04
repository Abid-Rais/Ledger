import React, { ReactElement } from 'react';
import './css/App.css';

import BaseRouter from './routes';

const App: React.FC = (): ReactElement => {
    return <BaseRouter />;
};

export default App;
