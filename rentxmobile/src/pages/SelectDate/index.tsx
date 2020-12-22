import React, { useCallback, useState } from "react";
import { Platform, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Moment } from "moment";
import moment from "moment";

import Values from "../../utils/valuesMonth";

import CalendarPicker from "react-native-calendar-picker";

import {
  Container,
  Title,
  ContainerHeader,
  ChooseDateContainer,
  Border,
  ChooseDateText,
  ChooseDateOf,
  ChooseDateTo,
  CalendarContainer,
  Calendar,
} from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

moment.locale("pt-br");

const SelectDate: React.FC = () => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState({
    start: "",
    end: "",
  });

  function handleOnDateChange(date: Moment, type: "START_DATE" | "END_DATE") {
    switch (type) {
      case "START_DATE": {
        setSelectedDate({
          ...selectedDate,
          start: moment(date).format("DD MMMM YYYY"),
        });
        break;
      }
      default: {
        setSelectedDate({
          ...selectedDate,
          end: moment(date).format("DD MMMM YYYY"),
        });
      }
    }
  }

  function renderCustomArrow(direction: "left" | "right") {
    return <Icon name={`chevron-${direction}`} color="#7A7A80" size={20} />;
  }

  return (
    <Container>
      <ContainerHeader>
        <Title>Escolha a data e encontre um carro.</Title>
        <ChooseDateContainer>
          <ChooseDateOf>
            <ChooseDateText>De</ChooseDateText>
            <Border>{selectedDate.start}</Border>
          </ChooseDateOf>

          <View>
            <Icon name="arrow-right" size={24} color="#fff" />
          </View>

          <ChooseDateTo>
            <ChooseDateText>Até</ChooseDateText>
            <Border>{selectedDate.end}</Border>
          </ChooseDateTo>
        </ChooseDateContainer>
      </ContainerHeader>

      <CalendarContainer>
        <Calendar>
          <CalendarPicker
            onDateChange={handleOnDateChange}
            weekdays={Values.weekdays}
            months={Values.months}
            startFromMonday
            allowRangeSelection
            textStyle={{
              fontFamily: "Inter-Regular",
              fontSize: 15,
              color: "#47474d",
            }}
            nextComponent={renderCustomArrow("right")}
            previousComponent={renderCustomArrow("left")}
            customDayHeaderStyles={() => {
              return {
                textStyle: {
                  fontFamily: "Archivo-SemiBold",
                  fontSize: 10,
                  color: "#AEAEB3",
                },
              };
            }}
            monthYearHeaderWrapperStyle={{
              alignItems: "flex-start",
            }}
            showDayStragglers
            dayShape="square"
            todayBackgroundColor="#fff"
            todayTextStyle={{ fontWeight: "bold" }}
            selectedDayTextColor="#fff"
            dayLabelsWrapper={{
              borderTopWidth: 0,
              paddingBottom: 15,
              borderBottomColor: "#EBEBF0",
              marginBottom: 15,
            }}
            selectedRangeStartStyle={{
              backgroundColor: "#DC1637",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            selectedRangeEndStyle={{
              backgroundColor: "#DC1637",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
            selectedRangeStyle={{
              backgroundColor: "#FDEDEF",
            }}
          />
        </Calendar>
      </CalendarContainer>
      <View
        style={{
          marginTop: 25,
          height: 56,
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button
          style={{ width: 330 }}
          text="Confirmar"
          onPress={() => navigation.navigate("HomeTabs")}
        />
      </View>
    </Container>
  );
};

export default SelectDate;
