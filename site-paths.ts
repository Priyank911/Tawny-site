export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Tawny-web";

export function siteAsset(path: `/${string}`) {
  return `${BASE_PATH}${path}`;
}
