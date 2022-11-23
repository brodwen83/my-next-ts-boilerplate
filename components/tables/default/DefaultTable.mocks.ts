import { IDefaultTableProps } from './DefaultTable';

const base: IDefaultTableProps = {
  tData: [
    {
      fromUnit: 'inches',
      toUnit: 'millimeters (mm)',
      factor: { convertTo: 25.4, isNumeric: true },
    },
    {
      fromUnit: 'feet',
      toUnit: 'centimeters (cm)',
      factor: { convertTo: 30.48, isNumeric: true },
    },
    {
      fromUnit: 'yards',
      toUnit: 'meters (m)',
      factor: { convertTo: 0.91444, isNumeric: true },
    },
  ],
  tColumns: [
    { header: 'To Convert', isNumeric: false },
    { header: 'Into', isNumeric: false },
    { header: 'Multiply By', isNumeric: true },
  ],
  caption: {
    label: 'Imperial to metric conversion factors',
    placement: 'top',
  },

  //Chakra TableProps
  colorScheme: 'messenger',
  size: 'sm',
  variant: 'striped',
};

export const mockDefaultTableProps = {
  base,
};
