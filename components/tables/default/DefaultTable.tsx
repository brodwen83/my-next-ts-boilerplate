import {
  Table,
  TableCaption,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

// import styles from './DefaultTable.module.css';

export interface IDefaultTableRow {
  fromUnit: string;
  toUnit: string;
  factor: {
    convertTo: number;
    isNumeric: boolean;
  };
}
export interface ITData extends Array<IDefaultTableRow> {}
export interface IDefaultTableCols {
  header: string;
  isNumeric: boolean;
}
export interface ITCols extends Array<IDefaultTableCols> {}

export interface IDefaultTable {
  tData: ITData;
  tColumns: ITCols;
  caption?: {
    label: string;
    placement: 'top' | 'bottom';
  };
}
export interface IDefaultTableProps extends IDefaultTable, TableProps {}

const DefaultTable = ({
  tData,
  tColumns,
  caption,
  ...props
}: IDefaultTableProps) => {
  const headerFooter = tColumns.map((tk, index) => (
    <Th key={`${tk}-${index}`} isNumeric={tk.isNumeric}>
      {tk.header}
    </Th>
  ));

  const rows = tData.map((td, index) => {
    return (
      <Tr key={`${td.fromUnit}-${index}`}>
        <Td>{td.fromUnit}</Td>
        <Td>{td.toUnit}</Td>
        <Td isNumeric={td.factor.isNumeric}>{td.factor.convertTo}</Td>
      </Tr>
    );
  });

  return (
    <TableContainer
      p={2}
      border={'1px solid'}
      borderColor={'gray.100'}
      rounded={'md'}
    >
      <Table {...props}>
        {caption && (
          <TableCaption placement={caption.placement}>
            {caption.label}
          </TableCaption>
        )}
        <Thead>
          <Tr>{headerFooter}</Tr>
        </Thead>
        <Tbody>{rows}</Tbody>
        <Tfoot>
          <Tr>{headerFooter}</Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default DefaultTable;
