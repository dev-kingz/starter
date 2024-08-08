import React from "react";
import TitleHeader from "@/components/headers/title-header";

const SettingsPage = async () => {

  return (
    <main>
      <TitleHeader
        title="Dashboard"
        subTitle="Welcome to the dashboard!"
        showBreadcrumb
        breadcrumbList={[
          {label: "Home", href: "/"},
          {label: "Dashboard", currentPage: true},
        ]}
      />
      <div className="flexi w-full max-w-lg flex-col gap-y-5 px-5">
        <p>name</p>
        <p>email</p>
      </div>
    </main>
  );
};

export default SettingsPage;