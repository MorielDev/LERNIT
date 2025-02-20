import Button from "./Button";

export default function Content() {
  return (
    <div className="bg-[#F9FAFB] h-[22.6875rem] space-y-[1.5rem] flex flex-col items-center justify-center">
      <h2 className="text-[#111928] font-extrabold text-[2.25rem]">Start your free trial today</h2>

      <p className="text-[#6B7280]">Try Flowbite Platform for 30 days. No credit card required.</p>

      <Button primary={true}>
      Free trial for 30 days
      </Button>
    </div>
  );
}