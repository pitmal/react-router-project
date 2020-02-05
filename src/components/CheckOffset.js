const CheckOffset = (ref, scroll) => {
  const sectionOffsetTop = ref.current == null ? null : ref.current;
  const offSetTop = sectionOffsetTop
    ? sectionOffsetTop.offsetTop - sectionOffsetTop.offsetHeight / 2
    : null;
  const active = scroll >= offSetTop ? "active" : "";

  return active;
};
export default CheckOffset;
