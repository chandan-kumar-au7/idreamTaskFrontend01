import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '../../../components/uielements/table';
import Scrollbars from '../../../components/utility/customScrollBar';
import { Root } from './style';
import config from './config';

//let id = 0;
// function createData(name, item, units, unitcosts, total) {
//   id += 1;
//   return { id, name, item, units, unitcosts, total };
// }

export default props => {
  const { classes } = props;
  return (
    <Root>
      <Scrollbars>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {config.head.map((data, index) => (
                <TableCell key={index}>{data}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {config.body.map((data, index) => {
              return (
                <TableRow key={index}>
                  {data.map((singleData, i) => (
                    <TableCell key={i}>{singleData}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbars>
    </Root>
  );
};
