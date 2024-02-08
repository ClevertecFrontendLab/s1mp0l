import { createRoot } from 'react-dom/client';

import {App} from "./app/app.tsx";

import 'antd/dist/antd.less';
import './index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <App />,
);
