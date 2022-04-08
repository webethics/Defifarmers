// material
import { visuallyHidden } from '@material-ui/utils';
import {
  Box,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
  Typography,
} from '@material-ui/core';

// ----------------------------------------------------------------------

type UserListHeadProps = {
  showImage?: boolean;
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  headLabel: any[];
  numSelected: number;
  onRequestSort: (id: string) => void;
  onSelectAllClick: (checked: boolean) => void;
  blank?: boolean;
};

export default function UserListHead({
  showImage,
  order,
  orderBy,
  rowCount,
  headLabel,
  numSelected,
  onRequestSort,
  onSelectAllClick,
  blank,
}: UserListHeadProps) {
  return (
    <TableHead>
      <TableRow>
        {blank && <TableCell></TableCell>}
        {showImage ? (
          <TableCell padding='checkbox'>
            <Typography variant='subtitle2' sx={{ fontWeight: 400 }} noWrap>
              Image
            </Typography>
          </TableCell>
        ) : (
          <TableCell padding='checkbox'>
            <Typography variant='subtitle2' sx={{ fontWeight: 400 }} noWrap>
              Id
            </Typography>
          </TableCell>
        )}
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onRequestSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
