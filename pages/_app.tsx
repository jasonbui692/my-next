import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { EmptyLayout } from '@/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <div>
      <div className="class-header">Shared App Header</div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
