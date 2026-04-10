import { ModuleDetailTemplate } from "../../components/ModuleDetailTemplate";
import { modulesData } from "../../data/modulesData";

export function STEMPage() {
    const data = modulesData.find(m => m.id === "stem")!;
    return <ModuleDetailTemplate {...data} />;
}
