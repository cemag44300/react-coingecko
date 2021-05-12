export function getListCoins() {
  return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then(stream => stream.json());
}

export function getInfoCoin(id) {
  return fetch('https://api.coingecko.com/api/v3/coins/' + id, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then(stream => stream.json());
}