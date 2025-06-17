'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../../UI/map').then(mod => mod.Map), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});

export default function MapWrapper() {
  return <Map />;
} 