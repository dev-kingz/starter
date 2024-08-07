import SectionHeader from "@/components/headers/section-header";
import React from "react";

const InformationWeCollect = () => {
  return (
    <section className="InformationWeCollectSection flexit-it flex-col px-8 sm:px-48">
      <SectionHeader title="Information We Collect" />
      <p className="Text">
        The personal information that you are asked to provide, and the reasons why you are asked to
        provide it, will be made clear to you at the point we ask you to provide your personal
        information.
        <br />
        <br />
        If you contact us directly, we may receive additional information about you such as your
        name, email address, phone number, the contents of the message and/or attachments you may
        send us, and any other information you may choose to provide.
        <br />
        <br />
        When you register for an Account, we may ask for your contact information, including items
        such as name, company name, address, email address, and telephone number.
        <br />
        <br />
      </p>
    </section>
  );
};

export default InformationWeCollect;
