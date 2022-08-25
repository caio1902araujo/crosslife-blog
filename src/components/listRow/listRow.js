import React from 'react';
import PropTypes from 'prop-types';

import A from '../a/a';

import styles from './listRow.module.css';

const typesListRowStyle = {
  primary: {
    listItemStyle: styles.listItemPrimary,
    linkStyle: styles.link,
  },
  secondary: {
    listItemStyle: styles.listItemSecondary,
    linkStyle: '',
  }
};

const ListRow = ({listItems, typeStyle}) => {
  const { listItemStyle, linkStyle } = typesListRowStyle[typeStyle];

  return (
    <ul className={styles.wrapper}>
      {
        listItems.map((listItem, index) => {
          const { content, link } = listItem;
          return(
            <li className={listItemStyle} key={index}>
              <A url={link.href} 
                className={linkStyle} 
                isExternalLink={link.isExternalLink} 
                isNavLink={link.isNavLink} 
                aria-label={link.ariaLabel}
              >
                {content}
              </A>
            </li>
          )
        })
      }
    </ul>
  )
}

ListRow.propTypes = {
  listItems: PropTypes.array.isRequired,
  typeStyle: PropTypes.string.isRequired,
};

export default ListRow;
