import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './HeaderLink.module.scss';

interface IHeaderLink {
  to: string;
  label: string;
  active: boolean;
}

export const HeaderLink: FC<IHeaderLink> = ({ to, label, active }) => {
  return (
    <Link
      className={classNames(styles.link, {
        [styles.active]: active,
      })}
      to={to}
      draggable={false}
    >
      {label}
    </Link>
  );
};
