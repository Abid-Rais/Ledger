import React, { FC, ReactElement } from 'react';
import './css/App.css';

import BaseRouter from './routes';

const App: FC = (): ReactElement => {
    return <BaseRouter />;
};

export default App;
