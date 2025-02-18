/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas } from "@react-three/fiber";
import Room from "./components/Room";
import { OrbitControls } from "@react-three/drei";
import BaseLights from "./components/Lighting/BaseLights";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import { useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/shared/theme-provider";

import "./index.css";
import { ModeToggle } from "./shared/mode-toggle";
import FooterAndBanner from "./components/2d/FooterAndBanner";

function App() {
  const { theme } = useTheme();
  const triggerRef = useRef<HTMLButtonElement>(null);
  // const [selectedObject, setSelectedObject] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = (event: { stopPropagation: () => void; intersections: { object: React.SetStateAction<null>; }[]; }) => {
    event.stopPropagation();
    // console.log(event);
    // setSelectedObject(event.intersections[0].object);
    // event.intersections[0].object.scale.set(1.2, 1.2, 1.2);
    triggerRef.current?.click();
  };

  return (
    <section className="w-full h-full">
      <FooterAndBanner />

      <Popover modal >
        <PopoverAnchor />
        <PopoverTrigger
          ref={triggerRef}
          style={{ display: "none" }}
        />
        <PopoverContent sideOffset={150}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="fixed top-4 right-4 z-10">
        <ModeToggle />
      </div>

      <Canvas shadows dpr={[1, 2]} camera={{ position: [22, 10, 30], fov: 45 }}>
        <color
          attach="background"
          args={[theme === "dark" ? "#20202a" : "#ffffff"]}
        />
        <BaseLights />
        <Room onDoubleClick={handleDoubleClick} />

        {/* <axesHelper args={[10]} /> */}
        {/* <gridHelper args={[100, 100]} /> */}

        <OrbitControls
          minAzimuthAngle={Math.PI / 20}
          maxAzimuthAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          enableZoom={true}
          minDistance={10}
          maxDistance={50}
        />
      </Canvas>
    </section>
  );
}

export default App;
