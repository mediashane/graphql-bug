import React from 'react';
import styles from 'scss/components/Header.module.scss';
import Link from 'next/link';
import { client, MenuLocationEnum } from 'client';

interface Props {
  title?: string;
  description?: string;
}

function Header({
  title = 'Elizabeth Eakins',
  description,
}: Props): JSX.Element {
  const { menuItems } = client.useQuery()
  let links = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  // determine localhost URLs if in development environment
  const environment = process.env.NODE_ENV;
  const devLinks = links.map(link => {
    if (link?.url) return `http://localhost:3000/${link.url.split('/')[3]}/`
    return `http://localhost:3000/`
  })
  
  return (
    <header>
      <div className={styles.wrap}>
        <div className={styles['title-wrap']}>
          <p className={styles['site-title']}>
            <Link href="/">
              <a>{title}</a>
            </Link>
          </p>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.menu}>
          <ul>
            {links?.map((link, index) => (
              <li key={`${link.label}$-menu`}>
                <Link href={environment === 'development' ? devLinks[index] : link.url}>
                  <a href={environment === 'development' ? devLinks[index] : link.url}>{link.label}</a>
                </Link>
              </li>
            ))}
            <li>
              <span className={styles.hamburgerMenu}></span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
