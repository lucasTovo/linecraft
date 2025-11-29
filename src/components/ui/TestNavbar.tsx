import { useGlobalStore } from "@/stores/globalStore";
import { Button } from "@/components/ui/button";

export function TestNavbar() {
  const { canvasType, setCanvasType } = useGlobalStore();

  return (
    <div className="p-4 border-b flex gap-4">
      <Button onClick={() => setCanvasType("freeStyle")}>
        Free style
      </Button>
      <Button variant="outline" onClick={() => setCanvasType("painting")}>
        Paiting
      </Button>
      <span className="ml-auto text-sm opacity-50">
        Tool: {canvasType}
      </span>
    </div>
  );
}
