import ReactDOM from 'react-dom'
// Redux
// https://github.com/rt2zz/redux-persist
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import * as _redux from './setup'
import store, {persistor} from './setup/redux/Store'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

// Apps
import {GoodI18nProvider} from './_theme/i18n/Goodi18n'
/**
 * TIP: Replace this style import with dark styles to enable dark mode
 *
 * import './_theme/assets/sass/style.dark.scss'
 *
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_theme/assets/css/style.rtl.css'
 **/
import './_theme/assets/sass/style.scss'
import './_theme/assets/sass/plugins.scss'
import './_theme/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'

/**
 * Inject Good interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
_redux.setupAxios(axios, store)

Chart.register(...registerables)

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <GoodI18nProvider>
      <Provider store={store}>
        {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </GoodI18nProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
)
