import '../styles/globals.css'
import '../styles/Style.scss'
 import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { MantineProvider, createEmotionCache } from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});
export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
     uri: 'https://challenge.webjar.ir/graphql',
    cache: new InMemoryCache(),
  });

  return<MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={rtlCache}
      theme={{ dir: 'rtl' }}
  >
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
  </MantineProvider>

}
