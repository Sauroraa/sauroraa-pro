export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  phone?: string
  role: 'client' | 'admin'
  emailVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  imageUrl?: string
  createdAt: Date
}

export interface Materiel {
  id: number
  categoryId: number
  name: string
  slug: string
  description?: string
  technicalSpecs?: Record<string, any>
  pricePerDay: number
  pricePerWeekend?: number
  pricePerWeek?: number
  quantityAvailable: number
  images?: string[]
  featured: boolean
  status: 'available' | 'maintenance' | 'unavailable'
  createdAt: Date
  updatedAt: Date
  category?: Category
}

export interface Reservation {
  id: number
  userId: number
  reservationNumber: string
  startDate: Date
  endDate: Date
  deliveryAddress: string
  setupRequired: boolean
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
  subtotal: number
  deliveryFee: number
  setupFee: number
  total: number
  notes?: string
  createdAt: Date
  updatedAt: Date
  user?: User
  items?: ReservationItem[]
}

export interface ReservationItem {
  id: number
  reservationId: number
  materielId: number
  quantity: number
  pricePerUnit: number
  subtotal: number
  materiel?: Materiel
}

export interface Devis {
  id: number
  userId: number
  devisNumber: string
  eventDate: Date
  eventType?: string
  eventLocation: string
  guestCount?: number
  servicesRequested?: string[]
  materielRequested?: string[]
  estimatedAmount?: number
  status: 'draft' | 'sent' | 'accepted' | 'refused' | 'expired'
  validUntil?: Date
  notes?: string
  adminNotes?: string
  createdAt: Date
  updatedAt: Date
  user?: User
}

export interface Payment {
  id: number
  reservationId?: number
  devisId?: number
  userId: number
  vivaTransactionId?: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  paymentMethod?: string
  paymentDate?: Date
  createdAt: Date
}

export interface AvailabilityCalendar {
  id: number
  materielId: number
  reservationId?: number
  startDate: Date
  endDate: Date
  quantityReserved: number
}
