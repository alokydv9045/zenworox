import { ModuleDetailTemplate } from "../../components/ModuleDetailTemplate";
import { modulesData } from "../../data/modulesData";

export function AnimationPage() {
    const data = modulesData.find(m => m.id === "animation")!;
    return <ModuleDetailTemplate {...data} />;
}
