type Step = {
  number: string;
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <div key={step.number}>
          <div className="font-heading text-[46px] font-semibold leading-none text-gold-light-3">
            {step.number}
          </div>
          <h3 className="my-3.5 font-heading text-xl font-semibold text-ink">{step.title}</h3>
          <p className="text-[14.5px] leading-relaxed text-muted">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
