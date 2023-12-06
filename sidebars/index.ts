import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import algorithm from "./algorithm/index";
import java from "./java/index";
import spring from "./spring/index"
import objectOriented from "./object-oriented";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    algorithm,java, spring,
    objectOriented,

    // But you can create a sidebar manually
    /*

     */
};

export default sidebars;
