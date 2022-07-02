import { DefaultTheme } from "styled-components";

import dark from "./dark";
import light from "./light";

interface IThemes {
  [key: string]: DefaultTheme;
}

const themes: IThemes = {
  dark,
  light,
};

export default themes;
