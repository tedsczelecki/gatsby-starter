import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import SEO from '../components/helpers/seo'
import seoData from '../constants/seo';
import { Footer, Header } from '../components/global';
import { withLocation } from '../components/helpers';

import './main-layout.scss';

class MainLayout extends PureComponent {

  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    })
  };

  static defaultProps = {
    children: null
  };

  render() {

    const {
      children,
      location: {
        pathname
      },
    } = this.props;

    return (
      <div className="rp-main-layout">
        <SEO {...seoData[pathname] || {}} />
        <Header />
        <div className="rp-main-layout__content">
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withLocation(MainLayout);
