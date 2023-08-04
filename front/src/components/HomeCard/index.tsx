import React from "react";
import { View, Text, Image } from "react-native";

export default function HomeCard() {
  return (
    <>
      <View>
        <View>
          <Image />
          <View>
            <View>
              <Text>Pró-Reitoria da Graduação</Text>
              <Image />
            </View>
            <View>
              <Text>Graduação</Text>
              <View></View>
              <Text>4H</Text>
            </View>
          </View>
        </View>
        <Image />
        <Text>
          A Pró-Reitoria de Graduação (PR-1) determina a suspensão das
          atividades acadêmicas, nos dias 12 e 13 de dezembro de 2022, no Campus
          Cidade Universitária (Ilha do Fundão), em razão da interrupção do
          fornecimento de água tratada em partes da Zona Norte do Rio de Janeiro
          para reparo de vazamento na Subadutora da Maré.{" "}
        </Text>
        <View>
          <Image />
          <Text>18K</Text>
          <Image />
          <Image />
        </View>
      </View>
    </>
  );
}
