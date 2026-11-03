"use client"
import { useSearchParams } from "next/navigation";
import { AlertDemo } from "./JLoka/AlertDemo";
// import { MyAccordion } from "./JLoka/MyAccordion";
export default function Home() {

  let params = useSearchParams()

  return (
    <div className="flex justify-center items-center h-dvh">
      {/* <MyAccordion /> */}

      <AlertDemo balance={parseFloat(params.get('balance') ?? "0.0")}/>
    </div>
  );
}
