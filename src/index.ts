import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const app = new Hono()

app.get(
  '/:id',
  zValidator(
    'param',
    z.object({
      id: z.string()
    })
  ),
  (c) => {
    return c.json(c.req.valid('param'))
  }
)

export default app
