import { useEffect, useState } from 'react';

import { getListCoins } from '../services/coingecko';

function useCoins() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    getListCoins().then(json => setCoins(json));
  }, []);
  return [coins, setCoins];
}

export default useCoins;
