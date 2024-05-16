

const Accordian = () => {
	return (
		<div className="mb-32">
			<div className="text-center w-1/2 mx-auto mb-16">
			<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
			<p className="mt-4 mb-8 dark:text-gray-600">Welcome to our Frequently Asked Questions section, where we provide answers to common inquiries about our electronic servicing. </p>

			</div>
		
<div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
      LCD Screen Replacement
    </div>
    <div className="collapse-content"> 
      <p>If your device's LCD screen is damaged or malfunctioning, our expert technicians can replace it with a high-quality screen, restoring crisp visuals to your device.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Battery Replacement
    </div>
    <div className="collapse-content"> 
      <p>Is your device's battery not holding a charge like it used to? Our battery replacement service ensures your device stays powered throughout the day, keeping you connected when you need it most.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Logic Board Repair
    </div>
    <div className="collapse-content"> 
      <p>Experiencing issues with your device's logic board? Our skilled technicians can diagnose and repair a wide range of logic board problems, restoring your device's functionality.</p>
    </div>
  </div>
</div>

		</div>
	);
};

export default Accordian;