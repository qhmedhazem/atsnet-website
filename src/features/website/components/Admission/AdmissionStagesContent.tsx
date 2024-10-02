import AdmissionStage from "./AdmissionStage";

export const AdmissionStage1 = () => {
  return (
    <AdmissionStage title="Stage #1">
      <p>
        The first stage involves academic examinations in the following
        subjects:
      </p>
      <ul className="list-disc list-inside">
        <li>Mathematics</li>
        <li>Science</li>
        <li>IQ Test</li>
        <li>English</li>
      </ul>
      <p>
        Only the top 120 students from across Egypt who excel in these
        examinations will proceed to the second stage.
      </p>
    </AdmissionStage>
  );
};
export const AdmissionStage2 = () => {
  return (
    <AdmissionStage title="Stage #2">
      <p>
        The second stage is a more intensive evaluation process that takes place
        at the Military Technical College in Cairo. This stage includes a
        two-week qualification period, during which candidates undergo a series
        of tests and assessments, including
      </p>
      <ul className="list-disc list-inside">
        <li>Physical Tests</li>
        <li>Medical Tests</li>
        <li>Psychological Tests</li>
        <li>Academic Tests:</li>
      </ul>
    </AdmissionStage>
  );
};
export const AdmissionStage3 = () => {
  return (
    <AdmissionStage title="Stage #3">
      <p>
        In this crucial stage of the admission process, candidates competing for
        a place among the top 60 students nationwide must complete a security
        clearance conducted by the Ministry of Defense and Education leaders.
        This involves a thorough background check to assess each candidate's
        suitability for a career in nuclear technology, ensuring that only the
        most qualified individuals are selected for this vital field.
      </p>
    </AdmissionStage>
  );
};
