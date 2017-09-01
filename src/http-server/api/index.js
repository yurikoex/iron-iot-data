
import each from 'lodash/fp/each'

import { createDevicesApi } from './devices'

export const routeApi = ({ server, logger }) => {
	const { createRoutes } = createDevicesApi({ logger })
	each(r => server.route(r))(createRoutes())
	return server
}
