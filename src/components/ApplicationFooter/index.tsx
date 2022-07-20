import { Button, ButtonProps } from '@ht6/react-ui';
import cx from 'classnames';

import styles from './ApplicationFooter.module.scss';

export interface ApplicationFooterProps {
  leftAction?: ButtonProps;
  rightAction?: ButtonProps;
  className?: string;
}
function ApplicationFooter({
  leftAction,
  rightAction,
  className,
  ...props
}: ApplicationFooterProps) {
  return (
    <div {...props} className={cx(styles.root, className)}>
      <div>{leftAction && <Button type='button' {...leftAction} />}</div>
      <div>{rightAction && <Button type='button' {...rightAction} />}</div>
    </div>
  );
}

export default ApplicationFooter;
