import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 1,
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  wheelchairButton: {
    backgroundColor: "#6c6c67",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  wheelchairButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdown: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    zIndex: 1000,
  },
  slider: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 15,
  },
  text: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: "#FF4500",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
