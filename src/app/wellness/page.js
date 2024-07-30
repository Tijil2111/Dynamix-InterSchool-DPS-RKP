import DoctorsModule from "../../../Modules/Doctors/Doctors";
import LearnMoreModule from "../../../Modules/Learn More/LearnMore";
import NutritionModule from "../../../Modules/Nutrition/Nutrition";
import WorkShopModule from "../../../Modules/Workshops/Workshop";

export default function WellNess() {
  return (
    <div>
      <DoctorsModule />
      <LearnMoreModule />
      <WorkShopModule />
      <NutritionModule />
    </div>
  );
}
