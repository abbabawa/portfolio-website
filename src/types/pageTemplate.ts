import { ReactElement } from "react";

export interface IPageTemplate {
  buttons: string[];
  pageTitle: string;
  components: ReactElement[];
}
