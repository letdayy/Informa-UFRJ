import React, { useState } from "react";

//Style
import { FilterButton, FilterText, FilterView } from "./style";

//Icons
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function Filter() {
  const [filter, setFilter] = useState<"Relevantes" | "Recentes">("Relevantes");

  return (
    <FilterView>
      <FilterButton
        $Active={filter === "Relevantes" ? true : false}
        onPress={() => setFilter("Relevantes")}
      >
        <Ionicons
          name="rocket-outline"
          size={25}
          color={filter === "Relevantes" ? "#fff" : "#000"}
        />
        <FilterText $Active={filter === "Relevantes" ? true : false}>
          Relevantes
        </FilterText>
      </FilterButton>
      <FilterButton
        $Active={filter === "Recentes" ? true : false}
        onPress={() => setFilter("Recentes")}
      >
        <FilterText $Active={filter === "Recentes" ? true : false}>
          Recentes
        </FilterText>
      </FilterButton>
      {/* <FilterButton $Active = {false} ><FilterText>. . .</FilterText></FilterButton> */}
      <AntDesign name="pluscircleo" size={30} color="#048C7C" />
    </FilterView>
  );
}
