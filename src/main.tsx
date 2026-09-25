import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const isMilitaryPage = window.location.pathname === '/military';

if (isMilitaryPage) {
  document.title = 'Military Pavilion | Clear Vision Leadership Wellness Summit 2027';

  const metaUpdates: Record<string, string> = {
    'meta[name="description"]':
      'A dedicated Summit experience for service members, veterans, military spouses, caregivers, families, and the organizations that support them.',
    'meta[property="og:url"]':
      'https://summit.clearvisionleader.com/military',
    'meta[property="og:title"]':
      'Military Pavilion | Clear Vision Leadership Wellness Summit 2027',
    'meta[property="og:description"]':
      'A dedicated Summit experience for service members, veterans, military spouses, caregivers, families, and the organizations that support them.',
    'meta[property="og:image"]':
      'https://summit.clearvisionleader.com/military-pavilion-social-share-2027.png',
    'meta[property="og:image:type"]': 'image/png',
    'meta[property="og:image:alt"]':
      'The Military Pavilion at the Clear Vision Leadership Wellness Summit 2027.',
    'meta[name="twitter:title"]':
      'Military Pavilion | Clear Vision Leadership Wellness Summit 2027',
    'meta[name="twitter:description"]':
      'A dedicated Summit experience for service members, veterans, military spouses, caregivers, families, and the organizations that support them.',
    'meta[name="twitter:image"]':
      'https://summit.clearvisionleader.com/military-pavilion-social-share-2027.png',
    'meta[name="twitter:image:alt"]':
      'The Military Pavilion at the Clear Vision Leadership Wellness Summit 2027.',
  };

  Object.entries(metaUpdates).forEach(([selector, content]) => {
    document.querySelector(selector)?.setAttribute('content', content);
  });

  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute('href', 'https://summit.clearvisionleader.com/military');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
