import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-AU', 'en-NZ', 'mi-NZ'],
  defaultLocale: 'en-AU',
  pathnames: {
    mode: 'always',
    'en-AU': '/au',
    'en-NZ': '/nz',
    'mi-NZ': '/nz/mi'
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);
