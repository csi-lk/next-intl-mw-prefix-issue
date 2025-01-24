'use client';

import {useLocale, useTranslations} from 'next-intl';

type Props = {
  params: {locale: string};
};

export default function TestPage({params: {locale}}: Props) {
  const l = useLocale();
  const t = useTranslations('IndexPage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <div>
        Test Page: {locale} / {l}
      </div>
    </div>
  );
}
