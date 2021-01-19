const mapActions = {
  CHANGE_MAP: 'CHANGE_MAP_SKINS',
  changeMapSkin: (selectedSkin, demoType) => ({
    type: mapActions.CHANGE_MAP,
    selectedSkin,
    demoType
  }),
};
export default mapActions;