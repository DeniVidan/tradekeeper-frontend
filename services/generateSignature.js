import crypto from 'crypto-js';

export function generateSignature(params, apiSecret) {
  const sortedParams = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  const signature = crypto.HmacSHA256(sortedParams, apiSecret).toString(crypto.enc.Hex);
  console.log(signature)
  return signature;
}