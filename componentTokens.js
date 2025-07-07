const primitives = require('./primitiveTokens');
const semantic = require('./semanticTokens');

const componentTokens = {
  /* ------------------------------------------------------------------
   * BUTTON
   * ----------------------------------------------------------------*/
  // Typography
  button_typography_buttonTextFont: primitives.fontFamily.base,
  button_typography_buttonTextWeightSm: primitives.fontWeight.medium,
  button_typography_buttonTextWeightMd: primitives.fontWeight.medium,
  button_typography_buttonTextWeightLg: primitives.fontWeight.medium,
  button_typography_buttonTextSizeSm: primitives.fontSize[14],
  button_typography_buttonTextSizeMd: primitives.fontSize[14],
  button_typography_buttonTextSizeLg: primitives.fontSize[16],

  // Primary
  button_primary_buttonPrimaryBg: semantic.colorBg_colorBgPrimary,
  button_primary_buttonPrimaryBgHover: semantic.colorBg_colorBgPrimaryHover,
  button_primary_buttonPrimaryBgPressed: semantic.colorBg_colorBgPrimaryPressed,
  button_primary_buttonPrimaryBgDisabled: semantic.colorBg_colorBgPrimaryDisabled,
  button_primary_buttonPrimaryText: semantic.colorText_onSurface_colorTextOnPrimary,
  button_primary_buttonPrimaryTextDisabled: semantic.colorText_state_colorTextDisabled,
  button_primary_buttonPrimaryBorder: semantic.colorBorder_colorBorderPrimary,
  button_primary_buttonPrimaryBorderDisabled: semantic.colorBorder_colorBorderPrimaryDisabled,

  // Secondary
  button_secondary_buttonSecondaryBg: semantic.colorBg_colorBgOnSecondary,
  button_secondary_buttonSecondaryBgHover: semantic.colorBg_colorBgOnSecondaryHover,
  button_secondary_buttonSecondaryBgPressed: semantic.colorBg_colorBgOnSecondaryPressed,
  button_secondary_buttonSecondaryBgDisabled: semantic.colorBg_colorBgOnSecondaryDisabled,
  button_secondary_buttonSecondaryText: semantic.colorText_onSurface_colorTextOnSecondary,
  button_secondary_buttonSecondaryTextDisabled: semantic.colorText_state_colorTextDisabled,
  button_secondary_buttonSecondaryBorder: semantic.colorBorder_colorBorderOnSecondary,
  button_secondary_buttonSecondaryBorderDisabled: semantic.colorBorder_colorBorderOnSecondaryDisabled,

  // Outlined
  button_outlined_buttonOutlinedBg: semantic.colorBg_colorBgDefault,
  button_outlined_buttonOutlinedBgHover: semantic.colorBg_colorBgOnSecondaryHover,
  button_outlined_buttonOutlinedBgPressed: semantic.colorBg_colorBgOnSecondaryPressed,
  button_outlined_buttonOutlinedBgDisabled: semantic.colorBg_colorBgDefault,
  button_outlined_buttonOutlinedText: semantic.colorText_interaction_colorTextNeutral,
  button_outlined_buttonOutlinedTextDisabled: semantic.colorText_state_colorTextDisabled,
  button_outlined_buttonOutlinedBorder: semantic.colorBorder_colorBorderDefault,
  button_outlined_buttonOutlinedBorderHover: semantic.colorBorder_colorBorderDefault,
  button_outlined_buttonOutlinedBorderDisabled: semantic.colorBorder_colorBorderAccentDisabled,

  // Ghost
  button_ghost_buttonGhostBg: semantic.colorBg_colorBgTransparent,
  button_ghost_buttonGhostBgHover: semantic.colorBg_colorBgSubtleHover,
  button_ghost_buttonGhostBgPressed: semantic.colorBg_colorBgSubtlePressed,
  button_ghost_buttonGhostBgDisabled: semantic.colorBg_colorBgTransparentDisabled,
  button_ghost_buttonGhostText: semantic.colorText_interaction_colorTextNeutral,
  button_ghost_buttonGhostTextHover: semantic.colorText_interaction_colorTextNeutralHover,
  button_ghost_buttonGhostTextPressed: semantic.colorText_interaction_colorTextNeutralPressed,
  button_ghost_buttonGhostTextDisabled: semantic.colorText_state_colorTextDisabled,

  // Link
  button_link_buttonLinkBg: semantic.colorBg_colorBgTransparent,
  button_link_buttonLinkText: semantic.colorText_interaction_colorTextAccent,
  button_link_buttonLinkTextHover: semantic.colorText_interaction_colorTextAccentHover,
  button_link_buttonLinkTextPressed: semantic.colorText_interaction_colorTextAccentPressed,
  button_link_buttonLinkTextDisabled: semantic.colorText_state_colorTextDisabled,

  /* ------------------------------------------------------------------
   * INPUT
   * ----------------------------------------------------------------*/
  input_filled_inputFilledBgDefault: semantic.colorBg_colorBgDefault,
  input_filled_inputFilledBgFocused: semantic.colorBg_colorBgDefault,
  input_filled_inputFilledBgDisabled: semantic.colorBg_colorBgSubtle,
  input_filled_inputFilledBgError: semantic.colorState_errorBg,
  input_filled_inputFilledBorderDefault: semantic.colorBorder_colorBorderDefault,
  input_filled_inputFilledBorderFocused: semantic.colorBorder_colorBorderPrimary,
  input_filled_inputFilledBorderError: semantic.colorState_errorBorder,
  input_filled_inputFilledTextDefault: semantic.colorText_base_colorTextPrimary,
  input_filled_inputFilledTextPlaceholder: semantic.colorText_state_colorTextNeutralDisabled,

  input_outlined_inputOutlinedBgDefault: semantic.colorBg_colorBgDefault,
  input_outlined_inputOutlinedBgFocused: semantic.colorBg_colorBgDefault,
  input_outlined_inputOutlinedBgDisabled: semantic.colorBg_colorBgSubtle,
  input_outlined_inputOutlinedBgError: semantic.colorState_errorBg,
  input_outlined_inputOutlinedBorderDefault: semantic.colorBorder_colorBorderDefault,
  input_outlined_inputOutlinedBorderFocused: semantic.colorBorder_colorBorderPrimary,
  input_outlined_inputOutlinedBorderError: semantic.colorState_errorBorder,
  input_outlined_inputOutlinedTextDefault: semantic.colorText_base_colorTextPrimary,
  input_outlined_inputOutlinedTextPlaceholder: semantic.colorText_state_colorTextNeutralDisabled,

  /* ------------------------------------------------------------------
   * MODAL
   * ----------------------------------------------------------------*/
  modal_modalBg: semantic.colorBg_colorBgDefault,
  modal_modalOverlay: 'rgba(0,0,0,0.5)',
  modal_modalTitleText: semantic.colorText_base_colorTextPrimary,
  modal_modalBorder: semantic.colorBorder_colorBorderDefault,

  /* ------------------------------------------------------------------
   * TOAST
   * ----------------------------------------------------------------*/
  toast_toastSuccessBg: semantic.colorState_successBg,
  toast_toastSuccessText: semantic.colorState_successText,
  toast_toastSuccessBorder: semantic.colorState_successBorder,

  toast_toastErrorBg: semantic.colorState_errorBg,
  toast_toastErrorText: semantic.colorState_errorText,
  toast_toastErrorBorder: semantic.colorState_errorBorder,

  toast_toastWarningBg: semantic.colorState_warningBg,
  toast_toastWarningText: semantic.colorState_warningText,
  toast_toastWarningBorder: semantic.colorState_warningBorder,

  /* ------------------------------------------------------------------
   * TOOLTIP
   * ----------------------------------------------------------------*/
  tooltip_tooltipBg: semantic.colorBg_colorBgInverse,
  tooltip_tooltipText: semantic.colorText_onSurface_colorTextOnPrimary,
  tooltip_tooltipArrow: semantic.colorBg_colorBgInverse,

  /* ------------------------------------------------------------------
   * DROPDOWN
   * ----------------------------------------------------------------*/
  dropdown_dropdownBg: semantic.colorBg_colorBgDefault,
  dropdown_dropdownBorder: semantic.colorBorder_colorBorderDefault,
  dropdown_dropdownItemTextDefault: semantic.colorText_base_colorTextPrimary,
  dropdown_dropdownItemTextHover: semantic.colorText_base_colorTextSecondary,
  dropdown_dropdownItemTextSelected: semantic.colorText_interaction_colorTextAccent,
  dropdown_dropdownItemBgSelected: semantic.colorBg_colorBgPrimaryDisabled,

  /* ------------------------------------------------------------------
   * ETC
   * ----------------------------------------------------------------*/
  tabActiveText: semantic.colorText_interaction_colorTextAccent,
  tabInactiveText: semantic.colorText_base_colorTextSecondary,

  badgeBg: semantic.colorBg_colorBgOnSecondary,
  badgeText: semantic.colorText_base_colorTextPrimary,

  chipBgSelected: semantic.colorBg_colorBgPrimaryDisabled,
  chipBorderHover: semantic.colorBorder_colorBorderAccentHover,
};

module.exports = componentTokens;
