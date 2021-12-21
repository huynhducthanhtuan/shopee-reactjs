import "./MotionPart.css";
import MotionPartChat from "./MotionPartChat";
import MotionPartSubBanner from "./MotionPartSubBanner";

function MotionPart() {
  return (
    <div id="motion-part">
      <MotionPartSubBanner />
      <MotionPartChat />
    </div>
  );
}

export default MotionPart;
