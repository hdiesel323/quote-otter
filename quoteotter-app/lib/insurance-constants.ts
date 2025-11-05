import React from 'react';
import type { InsuranceType } from '@/types/insurance';
import { InsuranceCategory } from '@/types/insurance';
import { CarIcon, HomeIcon, LifeIcon, RentersIcon } from '@/components/insurance/InsuranceIcons';

export const INSURANCE_TYPES: InsuranceType[] = [
  { id: InsuranceCategory.Auto, label: 'Auto', iconId: 'auto' },
  { id: InsuranceCategory.Home, label: 'Home', iconId: 'home' },
  { id: InsuranceCategory.Life, label: 'Life', iconId: 'life' },
  { id: InsuranceCategory.Renters, label: 'Renters', iconId: 'renters' },
];

export const ICONS_MAP: Record<string, React.FC<{ className?: string }>> = {
  auto: CarIcon,
  home: HomeIcon,
  life: LifeIcon,
  renters: RentersIcon,
};
