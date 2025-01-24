type Props = {
  params: {locale: string};
};

export default function TestPage({params: {locale}}: Props) {
  return <div>Test Page: {locale}</div>;
}
