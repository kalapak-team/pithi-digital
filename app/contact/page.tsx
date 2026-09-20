import InnerPage from "@/components/InnerPage";

export default function ContactPage() {
  return (
    <InnerPage title="Contact" eyebrow="Talk to us">
      <p className="font-khmer">
        ទូរស័ព្ទ · Telegram · Facebook · Email — យើងឆ្លើយតបក្នុងរយៈពេលមួយថ្ងៃធ្វើការ។
      </p>
      <ul className="mt-8 space-y-2 text-base">
        <li>Phone: +855 12 000 000</li>
        <li>Telegram: @pithi</li>
        <li>Facebook: Pithi Cambodia</li>
        <li>Email: hello@pithi.digital</li>
        <li>Location: Phnom Penh, Cambodia</li>
      </ul>
      <form className="mt-10 flex max-w-md flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-full border border-line bg-white px-5 py-3 text-base text-ink outline-none placeholder:text-body/50 focus:border-brand"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-full border border-line bg-white px-5 py-3 text-base text-ink outline-none placeholder:text-body/50 focus:border-brand"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="rounded-3xl border border-line bg-white px-5 py-3 text-base text-ink outline-none placeholder:text-body/50 focus:border-brand"
        />
        <button
          type="button"
          className="rounded-full bg-ink px-6 py-3 text-base text-white transition-colors hover:bg-brand hover:text-ink"
        >
          Send message
        </button>
      </form>
    </InnerPage>
  );
}
