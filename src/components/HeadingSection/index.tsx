import { Button, ButtonProps, Typography } from '@ht6/react-ui';
import { ReactNode } from 'react';
import cx from 'classnames';
import Section from '../Section';
import styles from './HeadingSection.module.scss';

export type HeadingSectionProps = {
  description?: ReactNode;
  action?: ButtonProps;
  title: ReactNode;
} & ComponentProps<'section'>;

function HeadingSection({
  description,
  action,
  title,
  ...props
}: HeadingSectionProps) {
  return (
    <Section
      {...props}
      className={cx(styles.container, props.className)}
      type='form'
    >
      <div className={styles.content}>
        <Typography
          className={styles.title}
          textColor='primary-3'
          textType='heading1'
          textWeight={700}
          as='h1'
        >
          {title}
        </Typography>
        {description && (
          <Typography textColor='primary-3' textType='heading4' as='p'>
            {description}
          </Typography>
        )}
      </div>
      {action && (
        <Button
          {...action}
          className={cx(styles.action, action.className)}
          buttonColor='primary-1'
          buttonVariant='solid'
        />
      )}
    </Section>
  );
}

export default HeadingSection;
