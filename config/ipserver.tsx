const dev = process.env.NODE_ENV !== 'production';

export const ipserver = dev ? 'http://192.168.43.65:3000' : process.env.NEXT_PUBLIC_BASE_URL;
