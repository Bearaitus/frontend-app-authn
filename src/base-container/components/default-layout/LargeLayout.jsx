import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import backgroundImage from './background.gif';

import messages from './messages';

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      className="d-flex justify-content-center align-items-center text-white text-center"
      style={{
        backgroundColor: '#FF0000',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Страница авторизации
      </h1>
    </div>
  );
};

export default LargeLayout;
