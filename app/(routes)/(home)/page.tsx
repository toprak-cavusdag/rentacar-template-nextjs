import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <button>Test</button>
      <Button variant={"destructive"}>Deneme</Button>
      <ModeToggle />
    </div>
  );
}
