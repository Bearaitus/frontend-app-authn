import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import backgroundImage from './authn-background.jpg'

import messages from './messages';

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-50 d-flex">
      
      <div className="col-md-12" style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
  >
        <div className="min-vh-100 d-flex align-items-center">
          <div className={classNames({ 'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX' })} />
          
        </div>
      </div>
      
    </div>
  );
};

export default LargeLayout;
