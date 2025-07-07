// semanticTokens.js

const primitives = require('./primitiveTokens');

const semanticTokens = {
  // colorText
  colorText_colorTextSuccess: primitives.colors.green600,
  colorText_colorTextError: primitives.colors.red600,
  colorText_colorTextWarning: primitives.colors.yellow700,

    // base
    colorText_base_colorTextBrand: primitives.colors.brand500,
    colorText_base_colorTextPrimary: primitives.colors.gray900,
    colorText_base_colorTextSecondary: primitives.colors.gray700,
    colorText_base_colorTextTertiary: primitives.colors.gray600,

    //onSurface
    colorText_onSurface_colorTextOnSecondary: primitives.colors.gray900,
    colorText_onSurface_colorTextOnPrimary: primitives.colors.gray0,

    //state
    colorText_state_colorTextDisabled: primitives.colors.gray500,
    colorText_state_colorTextNeutralDisabled: primitives.colors.gray400,
    colorText_state_colorTextAccentDisabled: primitives.colors.gray400,

    //interaction
    colorText_interaction_colorTextNeutral: primitives.colors.gray700,
    colorText_interaction_colorTextNeutralHover: primitives.colors.gray800,
    colorText_interaction_colorTextNeutralPressed: primitives.colors.gray900,
    colorText_interaction_colorTextAccent: primitives.colors.brand500,
    colorText_interaction_colorTextAccentHover: primitives.colors.brand600,
    colorText_interaction_colorTextAccentPressed: primitives.colors.brand700,

  // colorIcon
  colorIcon_colorIconPrimary: primitives.colors.gray900,
  colorIcon_colorIconSecondary: primitives.colors.gray700,
  colorIcon_colorIconTertiary: primitives.colors.gray600,
  colorIcon_colorIconDisabled: primitives.colors.gray500,
  colorIcon_colorIconInverse: primitives.colors.gray0,

  // colorBg
  colorBg_colorBgDefault: primitives.colors.gray0,
  colorBg_colorBgSubtle: primitives.colors.gray100,
  colorBg_colorBgSubtleHover: primitives.colors.gray100,
  colorBg_colorBgSubtlePressed: primitives.colors.gray200,

  colorBg_colorBgPrimary: primitives.colors.brand500,
  colorBg_colorBgPrimaryHover: primitives.colors.brand600,
  colorBg_colorBgPrimaryPressed: primitives.colors.brand700,
  colorBg_colorBgPrimaryDisabled: primitives.colors.gray200,

  colorBg_colorBgOnSecondary: primitives.colors.gray200,
  colorBg_colorBgOnSecondaryHover: primitives.colors.gray300,
  colorBg_colorBgOnSecondaryPressed: primitives.colors.gray400,
  colorBg_colorBgOnSecondaryDisabled: primitives.colors.gray100,

  colorBg_colorBgTransparent: primitives.colors.transparent,
  colorBg_colorBgTransparentDisabled: primitives.colors.transparent,

  colorBg_colorBgElevated: '#FFFFFF',
  colorBg_colorBgInverse: primitives.colors.gray900,

  // colorBorder
  colorBorder_colorBorderDefault: primitives.colors.gray300,
  colorBorder_colorBorderSecondary: primitives.colors.gray200,
  colorBorder_colorBorderPrimary: primitives.colors.brand500,
  colorBorder_colorBorderPrimaryHover: primitives.colors.brand600,
  colorBorder_colorBorderPrimaryDisabled: primitives.colors.gray300,

  colorBorder_colorBorderOnSecondary: primitives.colors.gray300,
  colorBorder_colorBorderOnSecondaryDisabled: primitives.colors.gray200,

  colorBorder_colorBorderStrong: primitives.colors.gray500,
  colorBorder_colorBorderFocused: primitives.colors.brand500,
  colorBorder_colorBorderDisabled: primitives.colors.gray200,
  colorBorder_colorBorderAccent: primitives.colors.brand500,
  colorBorder_colorBorderAccentHover: primitives.colors.brand600,
  colorBorder_colorBorderAccentDisabled: primitives.colors.gray300,

  // colorState
  colorState_errorBg: primitives.colors.red100,
  colorState_errorText: primitives.colors.red500,
  colorState_errorBorder: primitives.colors.red500,

  colorState_warningBg: primitives.colors.yellow100,
  colorState_warningText: primitives.colors.yellow500,
  colorState_warningBorder: primitives.colors.yellow500,

  colorState_successBg: primitives.colors.green100,
  colorState_successText: primitives.colors.green600,
  colorState_successBorder: primitives.colors.green500,

  // colorInteraction
  colorInteraction_hoverBg: primitives.colors.gray100,
  colorInteraction_pressedBg: primitives.colors.gray200,
  colorInteraction_selectedBg: primitives.colors.gray300,
  colorInteraction_disabledBg: primitives.colors.gray100,
};

module.exports = semanticTokens;