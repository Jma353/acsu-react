// @flow

export type Symbol = {
  symbol: string, // e.g. 'AAPL'
  name: string, // e.g. 'Apple Inc.'
  date: string, // e.g. '2017-11-10'
  isEnabled: boolean, // symbol is enabled for trading on IEX or not
  type: string // common issue type of the stock
};
