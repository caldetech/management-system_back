import { z } from 'zod'

import { orderSchema } from '../models/order'

export const orderSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Order'), orderSchema]),
])

export type OrderSubject = z.infer<typeof orderSubject>


