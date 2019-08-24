import React, { PureComponent } from 'react';

import './footer.scss';

class Footer extends PureComponent {
  render() {
    return (
      <div className="rp-footer">
        <div className="rp-footer__inner">
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    )
  }
}

export default Footer;
