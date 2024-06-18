
import Star from 'assets/svg/star.svg?react';
import classes from './style.module.scss';
import { strings } from 'src/shared/localizations/strings';

interface LabelProps {
  text: string;
  required?: boolean;
}

export const Label = ({
  text,
  required,
}: LabelProps) => {
  return (
    <div title={text}>
      <span title={required ? `${text} (${strings.common.required})` : text} className={``}>{text}</span>
      {required && <Star className={classes.required} width={10} height={10} />}
    </div>
  );
};

Label.displayName = 'Label';

export default Label;