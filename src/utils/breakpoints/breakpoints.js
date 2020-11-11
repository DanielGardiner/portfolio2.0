import styled from "styled-components";
import { createBreakpoint, createMap } from "styled-components-breakpoint";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const breakpoint = createBreakpoint(breakpoints);
export const map = createMap(breakpoints);
