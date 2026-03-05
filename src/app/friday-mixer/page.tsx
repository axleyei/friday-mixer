import type { Metadata } from 'next';
import FridayMixerApp from '@/components/FridayMixerApp';

export const metadata: Metadata = {
  title: 'Friday Mixer — TSW Asset Studio',
  description: 'Composite cover images for The Friday Mixer newsletter',
};

export default function FridayMixerPage() {
  return <FridayMixerApp />;
}
