import AddColumn from "@/components/AddColumn";
import Column from "@/components/Column";
import Edit from "@/components/Edit";
import { IsEditingProvider } from "@/components/IsEditingProvider";
import JeopardyBoard from "@/components/JeopardyBoard";
import React, { useState } from "react";

const MINIMUM_COLUMNS = 3;

export default function Cj() {
  const [columnAmount, setColumnAmount] = useState<number>(MINIMUM_COLUMNS);

  return (
    <IsEditingProvider>
      <JeopardyBoard>
        <Edit />
        <AddColumn onClick={() => setColumnAmount((prev) => prev + 1)} />
        <Column name="Category one" />
        <Column name="Category two" />
        <Column name="Category three" />
      </JeopardyBoard>
    </IsEditingProvider>
  );
}
