import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: string,
  fat: number,
  carbs: number,
  protein: string
) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData(
//     'Lorem Ipsum',
//     '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
//     564652,
//     462.65,
//     '02 Jan 2022 - 09:42'
//   ),
//   createData(
//     'Lorem Ipsum',
//     '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
//     564652,
//     462.65,
//     '02 Jan 2022 - 09:42'
//   ),
//   createData(
//     'Lorem Ipsum',
//     '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
//     564652,
//     462.65,
//     '02 Jan 2022 - 09:42'
//   ),
//   createData(
//     'Lorem Ipsum',
//     '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
//     564652,
//     462.65,
//     '02 Jan 2022 - 09:42'
//   ),
//   createData(
//     'Lorem Ipsum',
//     '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
//     564652,
//     462.65,
//     '02 Jan 2022 - 09:42'
//   ),
//   createData(
//     'Lorem Ipsum',
//     '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
//     564652,
//     462.65,
//     '02 Jan 2022 - 09:42'
//   ),
// ];

export default function Referees({ data, revertData }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let a = [];
    let totalCommisionPercent = 0;
    let totalCommision = 0;
    data.reff_account.map((data1, index) => {
      a.push({
        account: data.reff_account[index],
        txHash: data.txHash[index],
        timeStamp: data.timeStamp[index],
        mintCount: data.existingMint[index],
        comission: data.comission[index],
      });
      totalCommisionPercent += data.comission[index];
      totalCommision +=
        data.existingMint[index] * (data.comission[index] / 100) * 0.85;
      if (index === data.reff_account.length - 1) {
        setRows([...a]);
        console.log(a);
      }
    });
    revertData({
      avgCommision: totalCommisionPercent / data.reff_account.length,
      totalCommision: totalCommision,
    });
  }, [data]);

  return (
    <TableContainer sx={{ mb: 5 }} className='rfrl_table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>Wallet address</TableCell>
            <TableCell>Farmers minted</TableCell>
            <TableCell>Fee</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align='right'>Earnings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.account}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope='row'>{index + 1}</TableCell>
              <TableCell scope='row'>{row.account}</TableCell>
              <TableCell>{row.mintCount}</TableCell>
              <TableCell>{row.comission + '%'}</TableCell>
              <TableCell>
                {new Date(row.timeStamp * 1000).toLocaleString()}
              </TableCell>
              <TableCell align='right'>
                {row.mintCount +
                  ' * ' +
                  row.comission / 100 +
                  ' * ' +
                  '0.85 = ' +
                  (row.mintCount * (row.comission / 100) * 0.85).toFixed(4)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
