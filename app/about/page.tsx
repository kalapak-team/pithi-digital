import InnerPage from "@/components/InnerPage";

export default function AboutPage() {
  return (
    <InnerPage title="About Us" eyebrow="Our Story">
      <p className="font-khmer">
        Pithi កើតឡើងសម្រាប់ពិធីនៅកម្ពុជា — រៀបការ ភ្ជាប់ពាក្យ ខួបកំណើត
        និងពិធីសប្បាយៗ។ យើងរៀបចំរាល់ព័ត៌មានលម្អិតដោយភាពកក់ក្តៅ
        ដើម្បីឲ្យអ្នកបាននៅជាមួយមនុស្សជាទីស្រលាញ់។
      </p>
      <p className="mt-6">
        We plan ceremonies with care, not noise. From the first conversation to
        the last guest departing, our team keeps the day calm, beautiful and
        true to you.
      </p>
    </InnerPage>
  );
}
