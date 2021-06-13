import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#780206", "#061161"],
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#2193b0", "#6dd5ed"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#5f2c82", "#49a09d"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#DAE2F8", "#D6A4A4"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#283048", "#859398"],
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#3D7EAA", "#FFE47A"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#232526", "#414345"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#757F9A", "#D7DDE8"],
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#1D2B64", "#F8CDDA"],
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#F09819", "#EDDE5D"],
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#E55D87", "#5FC3E4"],
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#003973", "#E5E5BE"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#EDE574", "#E1F5C4"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#076585", "#ffffff"],
  },
  undefined: {
    iconName: "weather-cloudy-alert",
    gradient: ["#076585", "#ffffff"],
  }
};

export default function Weather({ temp, condition, description }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Sign in with Facebook</Text>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={80}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <View>
          <Text style={styles.title}>{condition}</Text>
          <Text style={styles.subtitle}>{description}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
    "undefined",
  ]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 40,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "300",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
