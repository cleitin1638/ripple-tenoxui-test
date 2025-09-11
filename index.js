import TenoxUI from 'tenoxui'
import { preset } from '@tenoxui/preset-tailwind'

const ui = new TenoxUI(preset())

console.log(
  ui.render([
    'bg-red',
    'bg-red-500',
    'bg-red-500/50',
    'hover:bg-blue',
    'md:bg-blue-500',
    'max-554px:bg-blue-500',
    'm-10',
    'm-10px',
    'm-3.5',
    'm-[calc(100px_-_1rem)]'
  ])
)
