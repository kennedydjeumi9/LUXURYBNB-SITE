import { Mail, Phone, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="container py-12">
      <h1 className="font-display text-3xl">Contact</h1>
      <p className="mt-2 text-neutral-600">We’d love to hear from you. Choose your preferred method below.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <a href="mailto:hello@kwamou.example" className="rounded-xl border p-6 hover:shadow-sm transition">
          <Mail className="h-6 w-6 text-gold-600" />
          <div className="mt-3 font-medium">Email</div>
          <div className="text-neutral-600">hello@kwamou.example</div>
        </a>
        <a href="https://wa.me/1234567890" target="_blank" className="rounded-xl border p-6 hover:shadow-sm transition">
          <MessageSquare className="h-6 w-6 text-gold-600" />
          <div className="mt-3 font-medium">WhatsApp</div>
          <div className="text-neutral-600">+1 (234) 567-890</div>
        </a>
        <a href="tel:+12025550123" className="rounded-xl border p-6 hover:shadow-sm transition">
          <Phone className="h-6 w-6 text-gold-600" />
          <div className="mt-3 font-medium">Phone</div>
          <div className="text-neutral-600">+1 (202) 555-0123</div>
        </a>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-2xl">Reserve on Airbnb</h2>
        <p className="mt-2 text-neutral-600">Prefer booking through Airbnb? Use the link below.</p>
        <a href="https://www.airbnb.com/rooms/12253009?check_in=2025-11-07&check_out=2025-11-09&photo_id=585665661&source_impression_id=p3_1761599961_P3YcVlo3_E2wiLGt&previous_page_section_name=1000" target="_blank" className="mt-4 inline-flex items-center rounded-md bg-gold-500 px-5 py-2.5 font-medium text-neutral-900 hover:bg-gold-400">Book on Airbnb</a>
      </div>
    </main>
  )
}
