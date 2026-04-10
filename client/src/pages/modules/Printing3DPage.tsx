import { ModuleDetailTemplate } from "../../components/ModuleDetailTemplate";
import { modulesData } from "../../data/modulesData";

export function Printing3DPage() {
    const data = modulesData.find(m => m.id === "3d-printing")!;
    return <ModuleDetailTemplate {...data} />;
}
