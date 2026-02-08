export default function PoliciesPage() {
  return (
    <main className="container py-12">
      <h1 className="font-display text-3xl">Policies</h1>
      <div className="mt-6 space-y-6 text-neutral-700">
        <section>
          <h2 className="font-medium">House Rules</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>No smoking.</li>
            <li>No parties or events.</li>
            <li>Quiet hours: 10pm–7am.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-medium">Check-in/Check-out</h2>
          <p className="mt-2">Check-in after 3:00 PM. Check-out by 11:00 AM. Early/late subject to availability.</p>
        </section>
        <section>
          <h2 className="font-medium">Cancellations</h2>
          <p className="mt-2">Flexible: Full refund up to 5 days before check-in. After that, first night non-refundable.</p>
        </section>
        <section>
          <h2 className="font-medium">Damage Deposit</h2>
          <p className="mt-2">A refundable deposit may be required. Billed only if damages occur.</p>
        </section>
      </div>
    </main>
  )
}
