import AdmissionStages from "./AdmissionMobile/AdmissionStages";
import AdmissionScrollStages from "./AdmissionScroll/AdmissionScrollStages";

const AdmissionStagesContainer = () => {
  return (
    <>
      <AdmissionScrollStages className="hidden lg:flex" />
      <AdmissionStages containerClassName="mt-8 lg:hidden" />
    </>
  );
};

export default AdmissionStagesContainer;
