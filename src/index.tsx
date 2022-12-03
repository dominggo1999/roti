// After
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
