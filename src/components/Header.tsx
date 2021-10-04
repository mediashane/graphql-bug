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
  const wordpressLinks = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;
  let links;

  if (typeof window !== 'undefined') {
    links = wordpressLinks.map(link => {
      if (link?.url) return `${window.location.origin}/${link.url.split('/')[3]}/`
      return window.location.origin;
    })
  }

  // determine localhost URLs if in development environment
  const environment = process.env.NODE_ENV;
  const devLinks = wordpressLinks.map(link => {
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
            {wordpressLinks?.map((link, index) => (
              <li key={`${link.label}$-menu`}>
                <Link href={environment === 'development' ? devLinks[index] : links[index]}>
                  <a href={environment === 'development' ? devLinks[index] : links[index]}>{link.label}</a>
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
