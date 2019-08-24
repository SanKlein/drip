// src/utils/styleUtils.js

import { sizes } from '../constants';

// big hover box shadow
export const bigBoxShadow = () => 'box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2)';

// regular box shadow
export const boxShadow = () => 'box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1)';

export const sideBoxShadow = () => 'box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1)';

// inset box shadow
export const insetBoxShadow = () => 'box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1) inset';

// button shadow and transition with focus and active states
export const buttonShadow = `
  ${boxShadow()};
  &:hover {
    ${bigBoxShadow()};
  }
  &:active {
    ${insetBoxShadow()};
  }
  &:visited {
    box-shadow: none;
  }
`;

const marginStyle = m =>
  m
    .split(' ')
    .map(part => sizes[part] || part)
    .join(' ');

export const margin = ({ m, mb, ml, mr, mt, mx, my }) => {
  let styles = {};
  if (m)
    styles = {
      ...styles,
      margin: marginStyle(m)
    };
  if (mx)
    styles = {
      ...styles,
      marginLeft: sizes[mx] || mx,
      marginRight: sizes[mx] || mx
    };
  if (my)
    styles = {
      ...styles,
      marginBottom: sizes[my] || my,
      marginTop: sizes[my] || my
    };
  if (mb)
    styles = {
      ...styles,
      marginBottom: sizes[mb] || mb
    };
  if (ml)
    styles = {
      ...styles,
      marginLeft: sizes[ml] || ml
    };
  if (mr)
    styles = {
      ...styles,
      marginRight: sizes[mr] || mr
    };
  if (mt)
    styles = {
      ...styles,
      marginTop: sizes[mt] || mt
    };
  return styles;
};

const paddingStyle = p =>
  p
    .split(' ')
    .map(part => sizes[part] || part)
    .join(' ');

export const padding = ({ p, pb, pl, pr, pt, px, py }) => {
  let styles = {};
  if (p)
    styles = {
      ...styles,
      padding: paddingStyle(p)
    };
  if (px)
    styles = {
      ...styles,
      paddingLeft: sizes[px] || px,
      paddingRight: sizes[px] || px
    };
  if (py)
    styles = {
      ...styles,
      paddingBottom: sizes[py] || py,
      paddingTop: sizes[py] || py
    };
  if (pb)
    styles = {
      ...styles,
      paddingBottom: sizes[pb] || pb
    };
  if (pl)
    styles = {
      ...styles,
      paddingLeft: sizes[pl] || pl
    };
  if (pr)
    styles = {
      ...styles,
      paddingRight: sizes[pr] || pr
    };
  if (pt)
    styles = {
      ...styles,
      paddingTop: sizes[pt] || pt
    };
  return styles;
};
