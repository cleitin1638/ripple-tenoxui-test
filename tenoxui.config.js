import { defaultProperties, preflight, preset } from '@tenoxui/preset-tailwind'

export default {
  include: ['index.html', 'src/**/*.{js,jsx,ts,tsx,ripple}'],
  css: {
    ...preset(),
    apply: { ...defaultProperties, ...preflight, body: 'font-inter bg-gray-50 text-gray-950' }
  }
}
