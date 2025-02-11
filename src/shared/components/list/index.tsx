import { FC } from 'react';
import classes from './styles.module.scss';

interface ListProps {
  elements?: (() => JSX.Element)[];
}

export const List: FC<ListProps> = ({elements}) => {
  return (
    <div className={classes.container}>
      {elements?.map((Element) => <Element key={crypto.randomUUID()}/>)}
    </div>
  );
};

List.displayName = 'List';

export default List;
