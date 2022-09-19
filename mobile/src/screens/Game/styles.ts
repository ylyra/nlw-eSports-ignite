import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 28,
  },
  logo: {
    width: 72,
    height: 40,
  },
  right: {
    width: 20,
    height: 20,
  },
  gameBanner: {
    marginTop: 32,
    marginBottom: 24,
    borderRadius: 8,
    width: 310,
    height: 160,
    overflow: "hidden",
  },
  containerList: {
    width: "100%",
  },
  contentList: {
    alignItems: "flex-start",
    paddingLeft: 32,
    paddingRight: 64,
  },
  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
