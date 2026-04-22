const steps = [
  {
    title: "Sign Up & Set Location",
    desc: "Create your account and add your delivery address.",
  },
  {
    title: "Checkout In Seconds",
    desc: "Browse, add to cart, and place your order quickly.",
  },
  {
    title: "Track Delivery & Rate",
    desc: "Monitor your order and share your feedback.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="padding-x padding-y flex flex-col items-center text-center gap-16"
    >

      <div className="text-center">
           <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
           How It Works
           </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
             Get started in three simple steps
          </p>
       </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Step circle */}
            <div className="bg-primary rounded-full w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center relative z-10">
              <p className="text-white font-bold text-[24px] lg:text-[30px]">
                {index + 1}
              </p>
            </div>

            {/* Connector */}
            {index !== steps.length - 1 && (
              <>
                {/* Desktop dashed line */}
                <span className="hidden lg:block absolute top-12 left-[50%] w-[370px] border-t-4 border-dashed border-primary" />

                {/* Mobile dashed line */}
                <span className="lg:hidden absolute top-full mt-4 h-16 border-l-4 border-dashed border-primary" />
              </>
            )}

            {/* Text */}
            <div className="flex flex-col items-center gap-3 max-w-xs lg:max-w-96">
              <h3 className="text-[18px] lg:text-[20px] font-semibold">
                {step.title}
              </h3>
              <p className="text-[#6B7280] text-sm lg:text-base">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks


