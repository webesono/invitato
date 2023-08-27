import { LandingPage } from "@app/pages/section";

const Invitation = () => {
  return (
    <div>
      <div className=" w-full relative">
        <section className="w-full">
          <LandingPage />
        </section>
        <section
          className="w-full h-screen bg-primary-text"
          id="wedding-details"
        >
          {/* another section */}
        </section>
        <section className="w-full h-screen bg-primary-bg" id="rsvp">
          {/* another section */}
        </section>
        <section className="w-full h-screen">{/* another section */}</section>
      </div>
    </div>
  );
};

export default Invitation;
