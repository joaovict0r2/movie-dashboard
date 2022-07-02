import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        light: string;
      };
      fontColor: string;
      cian: string;
    };
  }
}
