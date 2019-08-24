import React from 'react';
import MainLayout from './main-layout';

export default ({ children, pageContext }) => {
  switch(pageContext.layout) {
    default:
      return <MainLayout>{children}</MainLayout>
  }
}
