import classNames from 'classnames';
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import { withLocation } from '../helpers';

import './header.scss';

const navItems = [
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
]

class Header extends PureComponent {
  render() {

    const {
      location: {
        pathname
      }
    } = this.props;

    return (
      <header className="rp-header">
        <div className="rp-header__inner">
          <div className="rp-header__logo">
            <Link to="/">
              Rebel Pixel
            </Link>
          </div>
          <nav className="rp-header__nav">
            <ul>
              {navItems.map(({label, to}) => {
                const linkClasses = classNames('rp-header__nav__link', {
                  'rp-header__nav__link--current': to === pathname
                })
                return (
                  <li>
                    <Link className={linkClasses} to={to}>
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default withLocation(Header);
