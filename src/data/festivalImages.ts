import diyasImg from '@/src/assets/images/festival_diyas_heritage_1794667043725.jpg';
import feastImg from '@/src/assets/images/festival_harvest_feast_1794667043940.jpg';
import customsImg from '@/src/assets/images/festival_folk_customs_1794667045315.jpg';
import colorsImg from '@/src/assets/images/festival_spring_colors_1794667045786.jpg';
import type { VisualCategory } from '../types/festival';

export interface ArchivalPlate {
  src: string;
  alt: string;
  caption: string;
  plateNumber: string;
}

export const FESTIVAL_PLATES: Record<VisualCategory, ArchivalPlate> = {
  lights: {
    src: diyasImg,
    alt: 'Hand-molded terracotta oil lamps illuminated along stone river steps at dusk',
    caption: 'Plate I — Terracotta oil lamps arranged along river steps at twilight.',
    plateNumber: 'Plate I',
  },
  harvest: {
    src: feastImg,
    alt: 'Traditional festive feast served on a fresh banana leaf and hammered brass platters',
    caption: 'Plate II — Celebratory regional delicacies served on banana leaf and brass.',
    plateNumber: 'Plate II',
  },
  customs: {
    src: customsImg,
    alt: 'Hand-drawn white rice flour geometric kolam patterns beside marigold garlands and a brass lamp',
    caption: 'Plate III — Hand-drawn rice-flour threshold art with marigold garlands.',
    plateNumber: 'Plate III',
  },
  colors: {
    src: colorsImg,
    alt: 'Carved wooden bowls holding natural botanical pigments of vermilion, turmeric, and indigo beside festive silk',
    caption: 'Plate IV — Natural botanical pigments and festive handloom silks.',
    plateNumber: 'Plate IV',
  },
};
