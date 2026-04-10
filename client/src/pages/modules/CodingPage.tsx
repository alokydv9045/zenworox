import { ModuleDetailTemplate } from "../../components/ModuleDetailTemplate";
import { modulesData } from "../../data/modulesData";

export function CodingPage() {
    const data = modulesData.find(m => m.id === "coding")!;
    return <ModuleDetailTemplate {...data} />;
}
