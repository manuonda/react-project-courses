import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async loadGetInitialProps(ctx) {
       const sheet = new ServerStyleSheet();
       const originalRenderPage =  ctx.renderPage;

       try {
           
       } catch (error) {
           
       }
    }
}