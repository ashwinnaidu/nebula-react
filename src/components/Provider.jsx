import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import embed from './configure';
import connect from './connect';

const nebulaPromise = async () => {
  const app = await connect({
    webIntegrationId: '9r6BGFmNSkfA75ixH9xJsXStiFiDi5Hh',
    url: 'hthnxu0zk4fgfbr.us.qlikcloud.com',
    appId: '787c63bf-aca6-498f-b94b-85bb18c106df',
  });
  return embed(app);
};
const GlobalValuesProvider = ({ children }) => {
  const [nebula, setNebula] = useState(null);

  const init = async () => {
    const _nebula = await nebulaPromise();
    setNebula(_nebula);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Context.Provider
      value={{
        nebula,
      }}
    >
      {children}
    </Context.Provider>
  );
};

GlobalValuesProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
GlobalValuesProvider.defaultProps = [];

export default GlobalValuesProvider;
