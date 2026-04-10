import { ModuleDetailTemplate } from "../../components/ModuleDetailTemplate";
import { modulesData } from "../../data/modulesData";

export function GameDevPage() {
    const data = modulesData.find(m => m.id === "game-dev")!;
    return <ModuleDetailTemplate {...data} />;
}
