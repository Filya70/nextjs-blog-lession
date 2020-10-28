import styles from '../styles/global.css'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}