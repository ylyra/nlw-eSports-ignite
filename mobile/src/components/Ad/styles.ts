import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    minWidth: 220,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: THEME.COLORS.SHAPE,
    padding: 20,
  },
  heading: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    marginBottom: 4,
    color: "#C4C4C6",
  },
  text: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
    marginBottom: 16,
  },
  connect: {
    //height: 36,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY,
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  connectText: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
    marginLeft: 8,
  },
});
