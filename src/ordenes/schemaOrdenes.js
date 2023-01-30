import mongoose, { Schema } from 'mongoose'

export const OrderSchema = new Schema(
    {
      clientId: { type: String, required: true },
      prods: { _id: false, type: Array, default: [] }
    }
  )
  