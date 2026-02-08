'use client'

import { useState } from 'react'
import { format, eachDayOfInterval } from 'date-fns'
import { DayPicker, DateRange } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export default function BookingPage() {
  const [range, setRange] = useState<DateRange | undefined>()
  const [status, setStatus] = useState<string | null>(null)

  const booked: Date[] = [] // TODO: replace with real availability source
  const days = range?.from && range?.to ? eachDayOfInterval({ start: range.from, end: range.to }) : []
  const pricePerDay = 100
  const subtotal = days.length * pricePerDay
  const taxes = Math.round(subtotal * 0.15) // 15% placeholder tax
  const total = subtotal + taxes

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Booking is handled on Airbnb via the button below.')
  }

  return (
    <main className="container py-12">
      <h1 className="font-display text-3xl">Booking</h1>
      <p className="mt-2 text-neutral-600">Booking is completed on Airbnb. Use the button below. The calendar and receipt here are for estimation only.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="rounded-xl border p-4">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={setRange}
            disabled={booked}
            numberOfMonths={2}
            pagedNavigation
            captionLayout="dropdown"
          />
          <div className="mt-2 text-sm text-neutral-600">
            {range?.from && range?.to ? (
              <span>
                {format(range.from, 'MMM d, yyyy')}  {format(range.to, 'MMM d, yyyy')}
              </span>
            ) : (
              <span>Select a start and end date</span>
            )}
          </div>
        </div>

        <form onSubmit={submit} className="md:col-span-2 grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First name</label>
              <input name="firstName" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500" />
            </div>
            <div>
              <label className="block text-sm font-medium">Last name</label>
              <input name="lastName" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" type="tel" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Guests</label>
              <input name="guests" type="number" min={1} defaultValue={2} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500" />
            </div>
            <div>
              <label className="block text-sm font-medium">Occasion (optional)</label>
              <input name="occasion" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows={5} className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500" />
          </div>
          <a href="https://www.airbnb.com/rooms/12253009?check_in=2025-11-07&check_out=2025-11-09&photo_id=585665661&source_impression_id=p3_1761599961_P3YcVlo3_E2wiLGt&previous_page_section_name=1000" target="_blank" className="inline-flex items-center rounded-md bg-gold-500 px-5 py-2.5 font-medium text-neutral-900 hover:bg-gold-400">Book on Airbnb</a>
          {status && <p className="text-sm text-neutral-600">{status}</p>}
          </div>

          <aside className="rounded-xl border p-4 bg-neutral-50">
            <h2 className="font-display text-xl">Receipt</h2>
            <div className="mt-2 text-sm text-neutral-600">$100 per day</div>
            <div className="mt-4 space-y-2 max-h-72 overflow-auto pr-1">
              {days.length === 0 && <div className="text-neutral-500 text-sm">Select dates to see receipt</div>}
              {days.map((d, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span>{format(d, 'EEE, MMM d, yyyy')}</span>
                  <span className="font-medium">$ {pricePerDay.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-3 space-y-1 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>$ {subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Taxes & fees</span><span>$ {taxes.toFixed(2)}</span></div>
              <div className="flex justify-between font-semibold text-neutral-900">
                <span>Total</span><span>$ {total.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </main>
  )
}
