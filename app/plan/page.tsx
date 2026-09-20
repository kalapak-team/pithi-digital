import InnerPage from "@/components/InnerPage";
import PlanEventForm from "@/components/PlanEventForm";

export default function PlanPage() {
  return (
    <InnerPage title="Plan Your Event" eyebrow="Booking">
      <p className="font-khmer">
        ប្រាប់យើងពីប្រភេទពិធី កាលបរិច្ឆេទ និងសេវាដែលអ្នកត្រូវការ។
        យើងនឹងរៀបចំផែនការជូនអ្នក។
      </p>
      <PlanEventForm />
    </InnerPage>
  );
}
