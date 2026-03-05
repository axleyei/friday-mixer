import type { Metadata } from 'next';
import EvergreenApp from '@/components/EvergreenApp';

export const metadata: Metadata = {
  title: 'Evergreen Generator — TSW Asset Studio',
  description: 'Generate Thumbnail and IG Story images for The So What',
};

export default function EvergreenPage() {
  return <EvergreenApp />;
}
