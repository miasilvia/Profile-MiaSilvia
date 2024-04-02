import "../App.css";
import { Education, SkillsComponent } from "../components";

export default function ResumePage() {
  return (
    <>
      <div className="rect-animate">
        <Education />
        <SkillsComponent />
      </div>

      <div className="flex "></div>
    </>
  );
}
