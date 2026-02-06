import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
})

export const registerSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  phone: z.string().optional(),
})

export const materielSchema = z.object({
  categoryId: z.number(),
  name: z.string().min(3, 'Le nom doit contenir au moins 3 caractères'),
  slug: z.string(),
  description: z.string().optional(),
  technicalSpecs: z.record(z.any()).optional(),
  pricePerDay: z.number().positive('Le prix doit être positif'),
  pricePerWeekend: z.number().positive().optional(),
  pricePerWeek: z.number().positive().optional(),
  quantityAvailable: z.number().int().positive().default(1),
  images: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  status: z.enum(['available', 'maintenance', 'unavailable']).default('available'),
})

export const reservationSchema = z.object({
  startDate: z.string().or(z.date()),
  endDate: z.string().or(z.date()),
  deliveryAddress: z.string().min(10, 'Adresse de livraison requise'),
  setupRequired: z.boolean().default(false),
  items: z.array(
    z.object({
      materielId: z.number(),
      quantity: z.number().int().positive(),
    })
  ),
  notes: z.string().optional(),
})

export const devisSchema = z.object({
  eventDate: z.string().or(z.date()),
  eventType: z.string().optional(),
  eventLocation: z.string().min(5, 'Lieu de l\'événement requis'),
  guestCount: z.number().int().positive().optional(),
  servicesRequested: z.array(z.string()),
  materielRequested: z.array(z.string()),
  notes: z.string().optional(),
})
