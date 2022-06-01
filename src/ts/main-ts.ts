interface IIsMobileState {
  setIsMobile(w: boolean): void;
}

export const ifViewportWidth = (state: boolean) => {
  let viewportWidth = window.innerWidth;

  console.log(viewportWidth);

  if (viewportWidth <= 600) {
    state = true;
    console.log("state bör vara true", state);
    return state;
  } else {
    state = false;
    console.log("state bör vara false", state);
    return state;
  }
};
