export const MAP_MAX_ZOOM = 10;
export const MAP_MIN_ZOOM = 2;
export const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
export const MAPBOX_MAP_STYLE = 'mapbox://styles/xsambrock/clh4n0h9001b801qj2i6cflyr';

export const REVALIDATE_API = 60 * 4; // 4 minutes

export const BASE_URL = (() => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    return `https://${process.env.NEXT_PUBLIC_BASE_URL}`;
  }
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return 'http://localhost:3000';
})();
