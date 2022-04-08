import { withStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import 'aos/dist/aos.css';
// ----------------------------------------------------------------------

const GlobalStyles = withStyles((theme) => ({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    html: {
      width: "100%",
      height: "100%",
      "-ms-text-size-adjust": "100%",
      "-webkit-overflow-scrolling": "touch",
    },
    body: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.grey[900] + "!important",
    },
    ".MuiModal-root": {
      margin: "0px !important",
    },
    "#root": {
      width: "100%",
      height: "100%",
    },
    input: {
      "&[type=number]": {
        MozAppearance: "textfield",
        "&::-webkit-outer-spin-button": { margin: 0, WebkitAppearance: "none" },
        "&::-webkit-inner-spin-button": { margin: 0, WebkitAppearance: "none" },
      },
    },
    textarea: {
      "&::-webkit-input-placeholder": { color: theme.palette.text.disabled },
      "&::-moz-placeholder": { opacity: 1, color: theme.palette.text.disabled },
      "&:-ms-input-placeholder": { color: theme.palette.text.disabled },
      "&::placeholder": { color: theme.palette.text.disabled },
    },
    a: { color: theme.palette.primary.main },
    img: { display: "block", maxWidth: "100%" },

    ".liveAuction": {
      zIndex: 99,
      fontFamily: "Montserrat, sans-serif",
      position: "absolute",
      left: 10,
      top: 10,
      fontSize: 11,
      fontWeight: "bold",
      backgroundColor: "rgb(16, 172, 104)",
      borderRadius: 8,
      border: "2px solid rgb(16, 172, 104)",
      color: "rgb(255, 255, 255)",
      padding: "2px 4px",
      boxShadow: "rgb(16 172 104 / 45%) 0px 0px 15px",
      display: "flex",
      alignItems: "center",
    },
    ".liveAuctionA": {
      fontFamily: "Montserrat, sans-serif",
      float: "right",
      display: "flex",
      left: 10,
      top: 10,
      fontSize: 11,
      fontWeight: "bold",
      backgroundColor: "rgb(16, 172, 104)",
      borderRadius: 8,
      border: "2px solid rgb(16, 172, 104)",
      color: "rgb(255, 255, 255)",
      padding: "2px 4px",
      boxShadow: "rgb(16 172 104 / 45%) 0px 0px 15px",
      width: "30%",
      alignItems: "center",
    },
    ".sellcard": {
      display: "flex",
      alignItems: "baseline",
      marginBottom: "6px",
      paddingBottom: "6px",
      borderBottom: "1px dashed",
      justifyContent: "space-between",
    },
    ".MuiLoadingButton-loadingIndicatorEnd": {
      right: "10px",
    },
    ".blur-up": {
      WebkitFilter: "blur(5px)",
      filter: "blur(5px)",
      transition: "filter 400ms, -webkit-filter 400ms",
    },
    ".blur-up.lazyloaded ": {
      WebkitFilter: "blur(0)",
      filter: "blur(0)",
    },
    ".cstmrd": {
      flexDirection: "inherit",
    },
    ".cstmrd label": {
      marginLeft: 0,
      marginRight: 4,
      marginTop: 3,
    },
    ".cstmrd label .MuiIconButton-sizeMedium": {
      position: "absolute",
      opacity: 0,
    },
    ".cstmrd label .MuiFormControlLabel-label": {
      backgroundColor: "#ececec",
      borderRadius: "35px",
      padding: "5px 15px",
      color: "rgb(25 19 38 / 50%)",
      fontWeight: 400,
    },
    ".cstmrd label .Mui-checked + .MuiFormControlLabel-label": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    ".def_slct .MuiInputBase-formControl": {
      borderRadius: "35px !important",
    },
    ".def_slct .MuiSelect-select": {
      paddingTop: "5px !important",
      paddingBottom: "5px !important",
      fontSize: "14px !important",
    },
    ".csmrngsldr": {
      color: theme.palette.grey[200],
      height: "4px",
    },
    ".csmrngsldr .MuiSlider-rail": {
      height: "4px",
    },
    ".csmrngsldr .MuiSlider-track": {
      backgroundColor: theme.palette.primary.main,
      height: "4px",
    },
    ".csmrngsldr .MuiSlider-thumbColorPrimary": {
      borderColor: theme.palette.primary.main,
      border: "solid 3px",
      width: "16px",
      height: "16px",
      marginTop: "-6px",
    },
    ".csmrngsldr .MuiSlider-markLabel": {
      color: theme.palette.grey[400],
    },
    ".csminpt .MuiInputBase-formControl": {
      borderRadius: "35px !important",
    },
    ".csminpt .MuiOutlinedInput-input": {
      paddingTop: "8px !important",
      paddingBottom: "8px !important",
      fontSize: "14px !important",
    },
    ".txtcntr .MuiOutlinedInput-input": {
      textAlign: "center",
    },
    ".defcheckbx .MuiSvgIcon-fontSizeMedium, .def_table thead tr th .MuiSvgIcon-fontSizeMedium, .def_table tbody tr td .MuiSvgIcon-fontSizeMedium": {
      fill: theme.palette.grey[300],
    },
    ".Mui-checked .MuiSvgIcon-fontSizeMedium, .def_table thead tr th .Mui-checked .MuiSvgIcon-fontSizeMedium, .def_table tbody tr td .Mui-checked .MuiSvgIcon-fontSizeMedium": {
      fill: theme.palette.primary.main,
    },
    ".defcheckbx + .MuiFormControlLabel-label": {
      color: theme.palette.grey[500],
      fontWeight: 300,
    },
    ".Mui-checked + .MuiFormControlLabel-label": {
      color: theme.palette.primary.main,
    },
    ".defbtn": {
      borderRadius: "6px",
      fontWeight: "400",
      padding: ".59rem 1.2rem",
      letterSpacing: "0.3px",
    },
    ".defbtn .MuiSvgIcon-root": {
      height: "15px",
      width: "15px",
      marginLeft: "3px",
    },
    ".w-100": {
      width: "100%",
    },
    ".cstmoptn": {
      borderBottom: "1px solid",
      borderColor: "#F4F6F8 !important",
      backgroundColor: "transparent !important",
    },
    ".cstmoptn.Mui-selected:hover, .cstmoptn.Mui-selected:hover": {
      backgroundColor: "transparent !important",
    },
    ".cstmoptn .MuiIconButton-colorPrimary": {
      color: "#e8e8e8 !important",
    },
    ".cstmoptn .MuiListItemText-root .MuiTypography-root": {
      color: theme.palette.grey[600],
      fontWeight: 300,
    },
    ".cstmoptn.Mui-selected .MuiListItemText-root .MuiTypography-root": {
      color: theme.palette.primary.main,
    },
    ".pro_box": {
      position: "relative",
      backgroundColor: theme.palette.common.white,
      borderRadius: "10px",
      textAlign: "center",
      border: "2px solid transparent",
      transition: "all 0.2s ease-out",

      // -webkit-box-shadow: "10px 10px 32px -17px rgb(0 0 0 / 25%)",
      // -moz-box-shadow: "10px 10px 32px -17px rgba(0,0,0,0.75)",
      boxShadow: "10px 10px 32px -17px rgb(0 154 80 / 24%)",
    },
    ".pro_box_v1:hover": {
      borderColor: "#D7F1E9",
    },
    ".pro_box_v2:hover": {
      borderColor: "#E3EFD9",
    },
    ".pro_box_v3:hover": {
      borderColor: "#F1DEDB",
    },
    ".pro_box_v4:hover": {
      borderColor: "#DCE7F5",
    },
    ".csmclbx": {
      padding: "30px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      // maxHeight: "290px",
    },
    ".csmclbx_v1": {
      backgroundColor: "#ebf8f4",
    },
    ".csmclbx_v2": {
      backgroundColor: "#f3f9ef",
    },
    ".csmclbx_v3": {
      backgroundColor: "#fef4f1",
    },
    ".csmclbx_v4": {
      backgroundColor: "#edf6ff",
    },
    ".csmclbx_v5": {
      padding: "0px",
    },
    ".LockIcon": {
      padding: "80px",
      maxwidth: "300px",
      textalign: "center",
      margin: "auto",
    },

    ".pro_box a": {
      textDecoration: "none",
      // display: 'block'
    },
    ".pr_info h4": {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    ".pr_info h4 h6": {
      fontWeight: 300,
      color: theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
      marginTop: "5px",
    },
    ".sldr_itms": {
      padding: "10px",
    },
    ".pr_info_v2 h4": {
      color: "#212B36",
      textAlign: "left",
    },
    ".pr_info_v2 h6": {
      textAlign: "left",
    },
    ".pr_info h4 h6 span": {
      fontWeight: 500,
    },
    ".more_ic": {
      padding: "0 3px",
      marginLeft: "auto",
      borderRadius: "35px",
      border: "solid 1px",
      borderColor: theme.palette.primary.main,
    },
    ".more_ic svg": {
      height: "12px",
      fill: theme.palette.primary.main,
    },
    ".srt_btn": {
      backgroundColor: theme.palette.primary.lighter,
      color: theme.palette.primary.main,
      padding: "4px 15px",
      borderRadius: "35px",
      marginRight: "8px",
      display: "inline-block",
      marginBottom: "5px",
    },
    ".srt_btn svg": {
      marginTop: "6px",
      marginLeft: "3px",
      display: "inline-block",
      verticalAlign: "top",
      cursor: "pointer",
    },
    ".clr_btn": {
      borderRadius: "35px",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    ".dtl_tp_bx": {
      background: "#F3F9EE",
      borderRadius: "10px",
    },
    ".dtl_tp_bx_v2": {
      background: "#f3f9ef",
      borderRadius: "10px",
    },
    ".dtl_tp_bx_v3": {
      background: "#fef4f1",
      borderRadius: "10px",
    },
    ".dtl_tp_bx_v4": {
      background: "#edf6ff",
      borderRadius: "10px",
    },
    ".back_ic": {
      display: "flex",
      alignItems: "center",
      borderRadius: "35px",
      background: "transparent",
      border: "solid 1px",
      borderColor: theme.palette.grey[300],
      color: theme.palette.grey[600],
      textDecoration: "none",
      padding: "4px 15px 4px 10px",
      textTransform: "uppercase",
      position: "absolute",
      left: "20px",
      top: "20px",
    },
    ".back_ic:hover": {
      background: theme.palette.grey[200],
    },
    ".back_ic_v2": {
      position: "relative",
      left: "0px",
      top: "0px",
      marginRight: "20px",
    },
    ".ttl_btm_info p": {
      color: theme.palette.grey[500],
    },
    ".ttl_btm_info h6": {
      fontSize: "15px",
      fontWeight: 300,
      color: theme.palette.primary.main,
    },
    ".shr_icon button": {
      border: "solid 1px",
      borderColor: theme.palette.grey[300],
      marginLeft: "8px",
    },
    ".shr_icon button svg": {
      color: theme.palette.grey[500],
    },
    ".claim-dialoge-btn": {
      fontSize: "14px",
      fontWeight: "400",
    },

    "@media screen and (max-width: 636px)": {
      ".td_d_rsp": {
        display: "block !important",
      },
      ".shr_icon": {
        marginTop: "20px",
      },
      ".shr_icon button": {
        marginLeft: "0px",
        marginRight: "8px",
      },
    },
    ".plcb_bx": {
      display: "flex",
      alignItems: "center",
    },
    ".csm_src": {
      width: "100%",
      maxWidth: "430px",
    },
    ".csm_src .MuiFormControl-marginNormal": {
      width: "100%",
    },
    ".csm_src fieldset": {
      border: "none !important",
      backgroundColor: theme.palette.common.white,
      borderRadius: "35px",
      zIndex: "-1",
    },
    ".csm_src label": {
      color: theme.palette.grey[400],
      fontWeight: 300,
    },
    ".csm_src button": {
      borderRadius: "35px",
      height: "42px",
      fontSize: "16px",
      fontWeight: 500,
      textTransform: "uppercase",
      position: "absolute",
      right: "8px",
      top: "8px",
      boxShadow: "none",
    },
    ".csm_src_v2 button": {
      position: "relative",
      right: "0px",
      top: "0px",
      padding: "6px 32px",
      marginLeft: "auto",
    },
    ".wtmrpddng": {
      padding: "6px 30px",
      paddingRight: "36px",
    },
    ".def_tabs": {
      backgroundColor: theme.palette.common.white,
      boxShadow: "none",
    },
    ".def_tabs .css-1tzeyse-MuiTabs-indicator": {
      display: "none",
    },
    ".def_tabs .MuiTabs-fixed": {
      textAlign: "center",
    },
    ".def_tabs .MuiTabs-flexContainer": {
      display: "inline-block",
      justifyContent: "center",
      backgroundColor: theme.palette.primary.lighter,
      borderRadius: "10px",
      padding: "2px",
    },
    ".def_tabs .MuiTabs-flexContainer button": {
      backgroundColor: theme.palette.primary.lighter,
      color: theme.palette.primary.main,
      margin: "0",
      minHeight: "inherit",
      fontWeight: 300,
      fontSize: "16px",
      borderRadius: "10px",
      padding: "3px 30px",
      minWidth: "140px",
    },
    ".def_tabs .MuiTabs-flexContainer button.Mui-selected, .def_tabs .MuiTabs-flexContainer button:hover": {
      backgroundColor: theme.palette.common.white,
    },
    ".def_table thead tr th": {
      backgroundColor: theme.palette.grey[200],
      fontWeight: "400",
      color: theme.palette.grey[500],
      paddingTop: "5px !important",
      paddingBottom: "5px !important",
    },
    ".def_table tbody tr td, .def_table tbody tr th": {
      fontWeight: "400",
      color: theme.palette.common.black,
      paddingTop: "12px !important",
      paddingBottom: "12px !important",
    },
    ".def_table tbody tr th": {
      paddingLeft: "16px !important",
    },
    ".def_table thead tr th .MuiCheckbox-colorPrimary": {
      paddingTop: "0px !important",
      paddingBottom: "0px !important",
      background: "transparent !important",
    },
    ".def_table tbody tr td span": {
      fontWeight: "400",
    },
    ".deffrmcntrl": {
      display: "block",
    },
    ".deffrmcntrl .MuiFormControl-root": {
      width: "100%",
    },
    ".deffrmcntrl label": {
      fontSize: "15px",
      fontWeight: "400",
      color: theme.palette.grey[600],
      marginBottom: "3px",
      display: "block",
    },
    ".deffrmcntrl .MuiInputBase-input": {
      padding: "12.5px 14px",
      fontWeight: 300,
    },
    ".deffrmcntrl fieldset": {
      borderRadius: "10px",
      borderColor: theme.palette.grey[300] + "!important",
    },
    ".def_slct_prmr fieldset": {
      border: "none !important",
    },
    ".def_slct_cprmr fieldset": {
      border: "none !important",
    },
    ".def_slct.def_slct_prmr .MuiSelect-select, .def_slct.def_slct_prmr svg": {
      color: theme.palette.primary.main,
    },
    ".def_slct.def_slct_cprmr .MuiSelect-select, .def_slct.def_slct_prmr svg": {
      color: theme.palette.primary.main,
    },
    ".def_slct.def_slct_prmr .MuiSelect-select": {
      backgroundColor: theme.palette.primary.lighter,
      paddingTop: "8px !important",
      paddingBottom: "8px !important",
    },
    ".def_slct.def_slct_cprmr .MuiSelect-select": {
      backgroundColor: theme.palette.primary.lighter,
      paddingTop: "5px !important",
      paddingBottom: "5px !important",
    },
    ".MuiModal-root .MuiDialog-container .MuiPaper-rounded": {
      borderRadius: "32px !important",
    },
    ".MuiModal-root .MuiDialog-container .MuiPaper-rounded h5": {
      fontWeight: 600,
    },
    ".mdl_c_btn": {
      backgroundColor: theme.palette.grey[200] + "!important",
      color: theme.palette.primary.main + "!important",
      marginBottom: "10px !important",
      padding: "7px 20px !important",
      fontWeight: "600 !important",
      borderRadius: "10px !important",
      textTransform: "inherit !important",
    },
    ".mdl_c_btn:hover": {
      backgroundColor: theme.palette.grey[300] + "!important",
    },
    ".def_slct_abslt": {
      position: "absolute",
      right: "4px",
      top: "4px",
      maxWidth: "115px",
    },
    ".lrn_btn": {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "18px",
    },
    ".full_header header.MuiAppBar-positionFixed": {
      width: "100% !important",
    },
    ".m_logo": {
      display: "none",
    },
    ".min_100vh": {
      height: "100vh",
    },
    ".MuiDrawer-modal>.MuiBackdrop-root": {
      display: "none !important",
    },
    ".MuiDrawer-paperAnchorLeft": {
      transition: "all 0.2s ease-out",
    },
    ".p_l_290": {
      transition: "all 0.2s ease-out",
    },

    ".sidebar-open": {
      overflowY: "auto !important",
    },
    ".sidebar-open .MuiDrawer-paperAnchorLeft": {
      left: "-280px",
    },
    ".pro_box_min_height": {
      minHeight: "500px",
    },
    ".popover_p>div": {
      display: "inline-block",
      verticalAlign: "middle",
    },
    ".tltp_bx": {
      background: theme.palette.common.white,
      color: "#3BB78F",
      boxShadow: "0 0 5px 0 rgb(0,0 ,0,10%)",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "15px",
      fontWeight: 400,
      maxWidth: "260px",
    },
    ".defmdl .MuiBackdrop-root": {
      background: "rgba(0, 0, 0, 0.5)",
      borderRadius: 0,
    },
    ".defmdl .MuiDialogTitle-root h2": {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    ".defmdl .MuiDialogTitle-root h2 .MuiIconButton-root": {
      top: "15px",
      right: "8px",
      position: "absolute !important",
    },
    ".defmdl .MuiDialogActions-root .MuiButton-root": {
      fontSize: "16px",
      fontWeight: 400,
    },
    iframe: {
      border: "none",
      pointerEvents: "none !important",
    },
    ".blob": {
      background: "black",
      borderRadius: "50%",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
      margin: "6px",
      height: "8px",
      width: " 8px",
      transform: "scale(1)",
      animation: "pulse-black 2s infinite",
    },
    ".blob.green_b": {
      background: "rgb(102 241 208)",
      boxShadow: "0 0 0 0 rgba(102, 241, 208, 1)",
      animation: "pulse-green 2s infinite",
    },
    ".csmclbx.csmclbx_v1": { display: "block !important" },
    ".d_flex": {
      display: "flex",
    },
    "@keyframes pulse-green": {
      "0%": {
        transform: "scale(0.95)",
        boxShadow: "0 0 0 0 rgba(102, 241, 208, 0.7)",
      },

      "70%": {
        transform: "scale(1)",
        boxShadow: "0 0 0 10px rgba(102, 241, 208, 0)",
      },

      "100%": {
        transform: "scale(0.95)",
        boxShadow: "0 0 0 0 rgba(102, 241, 208, 0)",
      },
    },
    ".sbttl": {
      display: "block",
      color: theme.palette.primary.main,
      fontSize: "15px",
      fontWeight: 400,
      marginTop: "-5px",
    },
    ".defwt_bx": {
      background: theme.palette.common.white,
      boxShadow: "0px 16px 32px #919EAB1A",
      borderRadius: "16px",
      padding: "30px 30px",
      minHeight: "270px",
    },
    ".defwt_bx_1": {
      background: theme.palette.common.white,
      boxShadow: "0px 16px 32px #919EAB1A",
      borderRadius: "16px",
      padding: "30px 30px",
      minHeight: "270px",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      alignContent: "center",
      justifyContent: "center",
    },
    ".whtbx1_cntnt h4": {
      fontSize: "28px",
      fontWeight: 600,
      color: "#191326",
      marginBottom: "10px",
    },
    ".whtbx1_cntnt h6": {
      color: "#0BAB64",
      fontSize: "16px",
      fontWeight: 400,
      marginBottom: "10px",
    },
    ".whtbx1_cntnt h6 span": {
      display: "block",
      fontSize: "20px",
      fontWeight: "600 !important",
      color: "#191326",
    },
    ".whtbx1_cntnt_flx h6": {
      display: "flex",
      alignItems: "center",
    },
    ".whtbx1_cntnt_flx h6 span": {
      marginLeft: "auto",
    },
    ".whtbx1_cntnt_v2": {
      textAlign: "center",
    },
    ".blnc_ic_bx": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80px",
      width: "80px",
      borderRadius: "50%",
      background: "#0BAB64",
      margin: "0 auto 18px auto",
    },
    ".amb-0": { marginBottom: "0 !important" },
    ".whtbx1_cntnt_v3 h6": { marginBottom: "5px" },
    ".whtbx1_cntnt_v2 h6": { marginBottom: "0" },
    ".whtbx1_cntnt_v2 h6 span": {
      fontSize: "24px",
    },
    ".whtbx1_cntnt_v4 h6": {
      marginBottom: "0",
    },
    ".whtbx1_cntnt_v4 h6 span": {
      fontSize: "24px",
      display: "flex",
      alignItems: "center",
    },
    ".tab_ttl": {
      fontSize: "24px",
      fontWeight: 600,
      color: "#191326",
      marginBottom: "-35px",
    },
    ".def_table_v2 tbody td .MuiIconButton-root": {
      borderRadius: "10px",
      background: "rgba(11,171,100,0.1)",
      color: "#0BAB64",
      padding: "5px 2px 5px 8px",
      transform: "rotate(0deg) !important",
    },
    '.def_table_v2 tbody td .MuiIconButton-root[aria-expanded="true"]': {
      background: "#0BAB64",
      color: theme.palette.common.white,
    },
    ".def_table_v2 tbody td .MuiIconButton-root label": {
      fontSize: "14px",
      cursor: "pointer",
    },
    ".def_table_v2 tbody td .MuiIconButton-root svg": {
      transform: "rotate(-90deg) !important",
      fill: "#0BAB64",
    },
    '.def_table_v2 tbody td .MuiIconButton-root[aria-expanded="true"] svg': {
      transform: "rotate(0deg) !important",
      fill: theme.palette.common.white,
    },
    ".def_table_v2 tbody td .PrivateSwitchBase-root": {
      borderRadius: "10px",
      background: "transparent",
      color: "transparent",
      padding: "5px 2px 5px 8px",
      transform: "rotate(0deg) !important",
    },
    '.def_table_v2 tbody td .PrivateSwitchBase-root[aria-expanded="true"]': {
      background: "#0BAB64",
      color: theme.palette.common.white,
    },
    ".def_table_v2 tbody td .PrivateSwitchBase-root label": {
      fontSize: "14px",
      cursor: "pointer",
    },
    ".def_table_v2 tbody td .PrivateSwitchBase-root svg": {
      transform: "rotate(0deg) !important",
      fill: "#0BAB64",
    },
    '.def_table_v2 tbody td .PrivateSwitchBase-root[aria-expanded="true"] svg': {
      transform: "rotate(0deg) !important",
      fill: theme.palette.common.white,
    },
    ".tbl_cllps": { padding: "0 15px" },
    ".def_table_v2 tbody tr:nth-child(even) td": {
      padding: "0 !important",
    },
    ".tblinn_bx": {
      background: "#FAF9FA",
      border: "1px solid #FAF9FA",
      borderRadius: "16px",
      padding: "15px 20px",
    },
    ".tblinn_bx h3": {
      fontSize: "18px",
      fontWeight: 600,
      color: "#191326",
      marginBottom: "10px",
    },
    ".tbl_inptbx": {
      position: "relative",
      marginBottom: "10px",
    },
    ".tbl_inptbx input": {
      width: "100%",
      outline: "none",
      padding: "12px",
      background: theme.palette.common.white,
      border: "1px solid #0000001A",
      borderRadius: "10px",
    },
    ".tbl_inptbx label": {
      position: "absolute",
      right: "10px",
      top: "10px",
      color: "#0BAB64",
      opacity: 0.5,
      fontSize: "15px",
    },
    ".tblactnbx": {
      display: "flex",
      alignItems: "center",
    },
    ".tblactnbx button": {
      borderRadius: "29px",
      width: "100%",
      marginBottom: "8px",
      padding: "8px",
      boxShadow: "none !important",
    },
    ".asmr-2": { marginRight: "10px" },
    ".tbl_btn_01": {
      background: "#E99400",
    },
    ".tbl_btn_01:hover": {
      background: "#cd8302",
    },
    ".tbl_btn_02": {
      background: "#0BAB64",
    },
    ".tbl_btn_02:hover": {
      background: "#049152",
    },
    ".tbl_btn_03": {
      background: "rgba(171,11,11,0.1) ",
      color: "#AB0B0B",
    },
    ".tbl_btn_03:hover": {
      background: "rgba(171,11,11,0.2) ",
    },
    ".tbbn_inn_ttllbl": {
      color: "#0BAB64",
      fontSize: "24px",
      lineHeight: "26px",
      display: "block",
    },
    ".tbbn_inn_fees": {
      color: "#FFCC00",
      fontSize: "14px",
      marginTop: "-10px",
      display: "block",
      marginBottom: "10px",
    },
    ".asmd_5": {
      flexBasis: "38.666667% !important",
    },
    ".asmd_2": {
      flexBasis: "22.666667% !important",
      maxWidth: "22.666667% !important",
    },
    ".ltrttlbk": {
      display: "flex",
      alignItems: "center",
    },
    ".ltrttlbk h2": {
      marginRight: "130px",
    },
    ".ltrttlbk p": {
      color: theme.palette.primary.main,
      fontSize: "15px",
      fontWeight: 400,
    },
    ".lrt_wt_bx": {
      background: theme.palette.common.white,
      boxShadow: "0px 16px 32px #919EAB1A",
      borderRadius: "16px",
      padding: "30px 30px",
    },
    ".ttlflx": {
      display: "flex",
      alignItems: "center",
    },
    ".lrt_wt_bx.debug": {
      border: "1px solid red",
    },
    ".lrt_wt_ttl h4": {
      fontWeight: 600,
    },
    ".lrt_wt_ttl h5": {
      fontWeight: 500,
      marginLeft: "auto",
      fontSize: "22px",
      color: "#ABABAB",
    },
    ".lrt_wt_ttl h5 span": {
      color: theme.palette.primary.main,
    },
    ".lrt_wt_ttl h5 small": {
      fontSize: "20px",
      fontWeight: 300,
      margin: "0 3px",
    },
    ".sm_ltr_bx": {
      background: theme.palette.common.white,
      border: "1px solid #0BAB6433",
      borderRadius: "16px",
      padding: "8px 15px",
    },
    ".sm_ltr_bx label": {
      fontSize: "14px",
      fontWeight: 400,
      color: theme.palette.primary.main,
    },
    ".sm_ltr_bx h5": {
      fontWeight: 600,
    },
    ".eco_mn": {
      paddingTop: "80px",
    },
    ".eco_mn h2": {
      fontSize: "42px",
      fontWeight: 600,
      color: "#191326",
    },
    ".eco_wt_bx": {
      position: "relative",
      background: "#FFFFFF",
      boxShadow: "0px 8px 16px #0000000D",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "20px",
    },
    ".sco_info": {
      padding: "35px",
    },
    ".sco_info h3": {
      fontSize: "42px",
      fontWeight: 600,
      color: "#191326",
    },
    ".sco_info p": {
      fontSize: "18px",
      fontWeight: 300,
      color: "#000",
      opacity: 0.5,
      marginBottom: "35px",
    },
    ".ecctble table thead th": {
      background: "#FAF9FA",
      letterSpacing: "0.32px",
      color: "rgba(25,19,38,0.3)",
      textTransform: "uppercase",
      borderRadius: "4px !important",
      padding: "5px 15px !important",
      boxShadow: "none !important",
    },
    ".ecctble table tbody td": {
      padding: "7px 15px !important",
      borderBottom: "1px solid rgba(0,0,0,0.02)",
      fontSize: "18px",
      fontWeight: 400,
    },
    ".assktln": {
      width: "100%",
      backgroundColor: "#e9e9e9",
    },
    ".lstng_itmsldr": {
      marginBottom: "30px",
    },
    ".lstng_itmsldr .slick-arrow::before": {
      color: "#3bb78f",
    },
    ".lstng_itmsldr .pro_box": {
      boxShadow: "10px 10px 22px -17px rgba(0,154,80,0.24)",
    },
    ".liveAuctionOrang": {
      border: "2px solid rgb(235 186 26) !important",
      boxShadow: "rgba(235,186,26,0.65) 0px 0px 15px !important",
      backgroundColor: "rgb(235 186 26) !important",
    },
    ".liveAuctionRed": {
      border: "2px rgb(227 129 95) !important",
      boxShadow: "rgba(241,62,0,0.55) 0px 0px 15px !important",
      backgroundColor: "rgb(227 129 95) !important",
    },
    ".sale_stckr": {
      position: "absolute",
      right: 0,
      top: 0,
    },
    ".sale_modal .MuiPaper-elevation": {
      minWidth: "800px",
    },
    ".sale_modal": {
      zIndex: "99999 !important",
    },
    ".sale_modal .mdl_bd": {
      background: "#101010",
    },
    ".sale_modal .MuiBackdrop-root": {
      background: "rgba(0,0,0,0.50) !important",
    },
    ".mdl_bd": {
      display: "flex",
      alignItems: "flex-start",
      color: "#fff",
    },
    ".inn_mdl_bd": {
      position: "absolute",
      right: 0,
      top: 0,
      padding: "50px 40px 30px 40px",
      maxWidth: "395px",
      display: "flex",
      flexDirection: "column",
    },
    ".inn_mdl_bd h1": {
      fontSize: "36px",
      fontWeight: 600,
      color: "#FFFFFF",
      marginBottom: "12px",
    },
    ".inn_mdl_bd p, .inn_mdl_bd h6": {
      fontSize: "17px",
      lineHeight: "24px",
      marginBottom: "35px",
      color: "#fff",
      fontWeight: 300,
    },
    ".inn_mdl_bd h6": {
      textAlign: "right",
      marginBottom: "15px",
    },
    ".inn_mdl_bd h6 a": {
      color: "#6F9B37",
      marginBottom: "15px",
    },
    ".tkyrrs_btn": {
      backgroundColor: "#6F9B37 !important",
      borderRadius: "27px",
      border: "none !important",
      boxShadow: "none !important",
      color: "#FFFFFF",
      padding: "8px 26px",
      display: "flex",
      marginLeft: "auto",
      marginBottom: "40px",
      fontStyle: "italic",
    },
    ".tkyrrs_btn:hover": {
      backgroundColor: "#94c351 !important",
    },
    ".inn_mdl_bd h5": {
      color: "#FFFFFF",
      opacity: "0.2",
      textAlign: "right",
    },
    ".brngng_bnr_prnt": {
      marginTop: "64px",
      position: "relative",
    },
    ".bnr_cntnt": {
      position: "absolute",
      zIndex: "1",
      top: "110px",
      width: "100%",
    },
    ".def_h": {
      textAlign: "left !important",
      font: "normal normal 600 62px/66px Kanit !important",
      letterSpacing: "0px !important",
      color: "#000000 !important",
      opacity: "1",
    },
    ".avx_bxc": {
      marginTop: "24px",
    },
    ".avx_bxc button": {
      background: "#3AB78F 0% 0% no-repeat padding-box",
      borderRadius: "25px",
      opacity: "1",
      marginRight: "20px",
      fontSize: "24px",
      fontWeight: "600",
    },
    ".abt_farmer": {
      minHeight: "496px",
      display: "flex",
      alignItems: "center",
      padding: "40px 0",
    },
    ".tdimg_prnt": {
      paddingRight: "86px !important",
    },
    ".img_canter": {
      display: "flex",
      justifyContent: "center",
      padding: "0 !important",
    },
    ".td_contant .def_p": {
      marginTop: "10px !important",
    },
    ".def_p": {
      font: "normal normal 300 20px/30px Kanit !important",
      color: "#000000",
      opacity: "0.7",
      letterSpacing: "0px",
    },
    ".td_contant": {
      paddingTop: "30px",
    },
    ".becom_far": {
      background: "#3AB78F 0% 0% no-repeat padding-box",
      opacity: "1",
      position: "relative",
      padding: "49px 20px",
    },
    ".top_img": {
      position: "absolute",
      top: "0",
      left: "0",
      background: " transparent",
      mixBlendMode: "color-dodge",
      pointerEvents: "none",
    },
    ".bottom_img": {
      position: "absolute",
      mixBlendMode: "color-dodge",
      bottom: "0",
      right: "0",
    },
    ".farmer_man_img": {
      position: "relative",
      display: "inline-block",
      marginTop: "50px",
      marginBottom: "30px",
    },
    ".frmr_df_img": {
      position: "relative",
      transform: "rotate(8deg)",
      width: "190px",
      zIndex: 1,
      transition: "all 0.2s ease-out",
      boxShadow: "0 0 14px 0 rgba(0,0,0,0.3)",
    },
    ".flt_rgt": {
      float: "right",
    },
    ".flt_lft": {
      float: "left",
    },

    ".abslt_img": {
      position: "absolute",
    },
    ".frst_frmr_img": {
      right: "-130px",
      opacity: 0,
    },
    ".bx_sldr_01 .frst_frmr_img": {
      right: "0px",
      opacity: 1,
    },
    ".scnd_frmr_img": {
      left: "-130px",
      opacity: 0,
      top: "2px",
    },
    ".bx_sldr_03 .scnd_frmr_img": {
      left: "4px",
      opacity: 1,
    },
    ".trd_frmr_img": {
      right: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_02 .trd_frmr_img": {
      right: "-4px",
      top: "2px",
      opacity: 1,
    },
    ".five_frmr_img": {
      right: "-130px",
      opacity: 0,
      top: "6px",
    },
    ".bx_sldr_04 .five_frmr_img": {
      right: "-8px",
      opacity: 1,
    },
    ".four_frmr_img": {
      left: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_05 .four_frmr_img": {
      left: "8px",
      top: "4px",
      opacity: 1,
    },
    ".six_frmr_img": {
      right: "-130px",
      opacity: 0,
      top: "6px",
    },
    ".bx_sldr_06 .six_frmr_img": {
      right: "-12px",
      opacity: 1,
    },
    ".svn_frmr_img": {
      left: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_07 .svn_frmr_img": {
      left: "12px",
      top: "4px",
      opacity: 1,
    },
    ".egt_frmr_img": {
      right: "-130px",
      opacity: 0,
      top: "6px",
    },
    ".bx_sldr_08 .egt_frmr_img": {
      right: "-16px",
      opacity: 1,
    },
    ".nine_frmr_img": {
      left: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_09 .nine_frmr_img": {
      left: "16px",
      top: "4px",
      opacity: 1,
    },
    ".ten_frmr_img": {
      right: "-130px",
      opacity: 0,
      top: "8px",
    },
    ".bx_sldr_10 .ten_frmr_img": {
      right: "-18px",
      opacity: 1,
    },
    ".elvn_frmr_img": {
      left: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_11 .elvn_frmr_img": {
      left: "18px",
      top: "6px",
      opacity: 1,
    },
    ".twlv_frmr_img": {
      right: "-130px",
      opacity: 0,
      top: "8px",
    },
    ".bx_sldr_12 .twlv_frmr_img": {
      right: "-18px",
      opacity: 1,
    },
    ".trtn_frmr_img": {
      left: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_13 .trtn_frmr_img": {
      left: "18px",
      top: "6px",
      opacity: 1,
    },
    ".ftn_frmr_img": {
      right: "-130px",
      opacity: 0,
      top: "8px",
    },
    ".bx_sldr_14 .ftn_frmr_img": {
      right: "-18px",
      opacity: 1,
    },
    ".fftn_frmr_img": {
      left: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_15 .fftn_frmr_img": {
      left: "18px",
      top: "6px",
      opacity: 1,
    },
    ".sxtn_frmr_img": {
      right: "-130px",
      opacity: 0,
      top: "8px",
    },
    ".bx_sldr_16 .sxtn_frmr_img": {
      right: "-18px",
      opacity: 1,
    },
    ".svntn_frmr_img": {
      left: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_17 .svntn_frmr_img": {
      left: "18px",
      top: "6px",
      opacity: 1,
    },
    ".eightn_frmr_img": {
      right: "-130px",
      opacity: 0,
      top: "8px",
    },
    ".bx_sldr_18 .eightn_frmr_img": {
      right: "-18px",
      opacity: 1,
    },
    ".nntn_frmr_img": {
      left: "-130px",
      top: "2px",
      opacity: 0,
    },
    ".bx_sldr_19 .nntn_frmr_img": {
      left: "18px",
      top: "6px",
      opacity: 1,
    },

    ".dot_img_01": {
      position: "absolute",
      bottom: "-35px",
      right: "-13px",
    },
    ".farmer_img_01": {
      position: "relative",
      zIndex: "1",
    },
    ".dot_img_02": {
      position: "absolute",
      bottom: "0",
      left: "26px",
    },
    ".farmer_img_02": {
      position: "relative",
      zIndex: "1",
    },
    ".becm_fr .def_h": {
      color: "#FFFFFF !important",
      letterSpacing: "0 !important",
      textAlign: "center !important",
      marginTop: "44px",
    },
    ".becm_fr p": {
      color: "#FFFFFF",
      textAlign: "center",
      font: "normal normal 300 22px/33px Kanit",
      letterSpacing: "0.88px",
      opacity: "1",
    },
    ".abt_td_pddngh": {
      paddingLeft: "110px",
    },
    ".tockenomics_bg_main": {
      background: "url(/static/images/sc_background.jpg) no-repeat padding-box 0 0",
      minHeight: "740px",
      backgroundSize: "cover",
      padding: "70px 15px 50px 15px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justfyContant: "center",
    },
    ".three_p": {
      maxWidth: "707px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "21px",
    },
    ".three_p p": {
      textAlign: "center",
      color: "#FFFFFF",
      marginBottom: "22px",
    },
    ".three_p .def_h": {
      textAlign: "center !important",
      color: "#FFFFFF !important",
      marginBottom: "20px",
    },
    ".about_bg_01": {
      background: "url(/static/images/about_bg.jpg) no-repeat padding-box 0 0",
      minHeight: "480px",
      backgroundSize: "cover",
    },
    ".abt_h2_1 h2": {
      color: "#fff !important",
    },
    ".abt_h2_1 p": {
      color: "#fff !important",
    },
    ".road_h2 h2": {
      textAlign: "center !important",
      marginBottom: "30px",
    },
    becm_fr: {
      display: "flex",
      flexDirection: "column",
    },
    ".counterDisplay": {
      margin: "20px auto 20px auto",
      display: "flex",
      border: "1px solid #1E1D17",
      borderRadius: "0.5rem",
      overflow: "hidden",
    },

    ".qntt_box": {
      position: "relative",
      flex: 1,
      marginRight: "8px",
    },
    ".qntt_box input": {
      background: "#fff",
      borderRadius: "25px",
      border: "none !important",
      outline: "none !important",
      height: "52px",
      color: "#000",
      padding: "0 15px",
      width: "100%",
      textAlign: "center",
      fontSize: "22px",
    },
    ".qntt_box button": {
      position: "absolute",
      left: "3px",
      top: "0px",
      borderRadius: "25px",
      padding: 0,
      height: "52px",
      width: "36px",
      minWidth: "inherit",
      color: "#000",
      fontWeight: 300,
      fontSize: "24px",
      lineHeight: "18px",
    },
    ".qntt_box button.qnttbtnrgt": {
      left: "auto",
      right: "3px",
    },
    ".counterDisplay .AddBtn": {
      color: "#fff",
      border: "none !important",
      outline: "none !important",
      padding: "0 20px",
      fontSize: "18px",
      background: "#1E1D17",
      textAlign: "center",
      fontWeight: 500,
      borderRadius: "0",
    },
    ".becm_fr": {
      display: "flex",
      flexDirection: "column",
    },
    ".qntt_btntxt": {
      fontSize: "16px !important",
      marginTop: "12px",
    },
    ".qntt_btntxt span": {
      display: "inline-block",
      margin: "0 15px",
    },
    ".roadmap_man": {
      padding: "80px 0",
      backgroundColor: "#fff",
    },
    ".rtdimg_prnt": {
      position: "relative",
    },
    ".rdmp_md_3": {
      textAlign: "center",
      display: "flex",
      maxWidth: "20%",
      flexBasis: "20%",
    },
    ".rdmp_box": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      margin: "0 auto",
    },
    ".rdmp_box_reverse": {
      flexDirection: "column-reverse",
    },
    ".rdmp_box_img": {
      boxShadow: "0px 16px 32px #0000001a",
      padding: "8px",
    },
    ".rdmp_box_img img": {
      width: "100%",
    },
    ".rdmp_box p": {
      letterSpacing: "0px",
      color: "#000000",
      fontSize: "18px",
      fontWeight: "300",
      textAlign: "center",
      maxWidth: "160px",
      margin: "0 auto",
      minHeight: "141px",
      display: "flex",
      alignItems: "flex-start",
    },
    ".rdmp_box_reverse p": {
      alignItems: "flex-end",
    },
    ".rdmp_dots": {
      backgroundColor: "#fff",
      borderRadius: "50% 50% 0 0",
      borderTop: "3px #3AB78F dashed",
      height: "50px",
      width: "50px",
      margin: "25px auto 25px auto",
      background: "#fff",
      position: "relative",
      zIndex: 1,
      "&::after": {
        background: "#3AB78F",
        borderRadius: "100%",
        content: '""',
        height: "31px",
        left: "50%",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%,-50%)",
        width: "31px",
      },
    },
    ".rdmp_box_reverse .rdmp_dots": { transform: "scale(-1)" },
    ".rtdimg_prnt:before": {
      top: "50%",
      left: "10%",
      right: "10%",
      content: '""',
      position: "absolute",
      borderBottom: "2px dashed #3AB78F",
      transform: "translateY(-50%)",
      marginTop: "8px",
    },
    // '@media screen and (min-width: 320px)': {
    //   '.about_bg_01':{
    //     minHeight: '450px !important',
    //   },
    // },
    ".clm_box": {
      display: "flex",
      border: "1px solid #4CA146",
      borderRadius: "6px",
      alignItems: "center",
      marginRight: "12px",
      textTransform: "uppercase",
      position: "relative",
      overflow: "hidden",
    },
    ".clm_box h4": {
      color: "#000000",
      padding: "0 12px",
      fontSize: "0.875rem",
    },
    ".clm_box button": {
      textTransform: "uppercase",
    },
    ".partY_ranking_main": {
      padding: "50px 0",
    },
    ".partY_ranking_main .part_h": {
      textAlign: "left !important",
      font: "normal normal 600 35px/44px Kanit !important",
      letterSpacing: "0px !important",
      color: "#000000 !important",
      opacity: "1",
    },
    ".partY_ranking_main .party_p_top": {
      marginTop: "25px",
    },
    ".partY_ranking_main .party_p_btm": {
      margin: "20px 0",
    },
    ".party_left_img": {
      padding: "50px 30px 0 30px",
    },
    ".partY_ranking_main .img_sdwo": {
      borderRadius: "30px",
      boxShadow: "0px 10px 10px 0 rgba(0, 0, 0, 0.1)",
    },
    ".MuiAccordionSummary-root": {
      background: "#FFFFFF",
      border: "1px solid #D1D0D2",
      boxShadow: "0px 0px 22.9125px rgba(191, 191, 191, 0.04), 0px 0px 11.4889px rgba(191, 191, 191, 0.0314074), 0px 0px 5.54861px rgba(191, 191, 191, 0.0192593)",
      borderRadius: "9px",
      marginBottom: "20px",
      flexDirection: "row-reverse",
    },
    ".accordidn_main": {
      padding: "50px 0",
      backgroundColor: "#FFFFFF",
    },

    ".accordin_h2": {
      font: "normal normal 600 40px/54px Kanit !important",
      textAlign: "center !important",
      marginBottom: "40px",
    },
    ".MuiAccordionSummary-expandIconWrapper": {
      backgroundColor: "#1A1A1A",
      color: "#fff",
      borderRadius: "50%",
    },
    ".MuiAccordionSummary-content": {
      order: "2",
    },
    ".css-1l9qnyh-MuiPaper-root-MuiAccordion-root.Mui-expanded ": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    ".accordidn_main p": {
      marginBottom: "5px",
      font: "normal normal 400 16px/22px Kanit !important",
    },
    ".accordidn_main .accodid_hed": {
      font: "normal normal 400 16px/20px Kanit !important",
    },
    " .accordidn_main .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
      margin: "0 !important",
    },
    ".css-o4b71y-MuiAccordionSummary-content": {
      margin: "19px 0",
    },
    ".accordidn_main .css-90h10p-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "62px !important",
    },
    ".accordidn_main .css-1l9qnyh-MuiPaper-root-MuiAccordion-root.Mui-expanded": {
      margin: "12px 0 !important",
    },
    ".animtin_imgs": {
      width: "100%",
    },
    " .accordidn_main .MuiPaper-rounded ": {
      background: "transparent",
    },
    ".mnicon_btn": {
      display: "none",
    },
    ".sc_header": {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    ".mdlmenu": {
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    ".mdlmenu_inn": {
      margin: "0 auto",
    },
    ".mdlmenu a": {
      fontSize: "16px",
      textDecoration: "none",
      color: "#000",
      margin: "0 20px",
      cursor: "pointer",
      fontWeight: 500,
      letterSpacing: "1px",
      transition: "all 0.2s ease-out",
      [theme.breakpoints.down(1755)]: {
        margin: "0 10px",
        fontSize: "14px",
      },
    },
    ".mdlmenu a:hover, .mdlmenu a.active": {
      color: "#4CA146",
    },
    ".main_ratity": {
      background: "url(/static/images/rarity_bg_img.png) no-repeat 0 0",
      minHeight: "480px",
      backgroundSize: "cover",
      padding: "90px 40px",
    },
    ".main_ratity h2": {
      fontSize: "50px",
      color: "red",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "15px",
    },
    ".main_ratity span": {
      color: "#000",
      fontWeight: "400",
    },
    ".main_ratity .farmer_box": {
      backgroundColor: "#fff",
      borderRadius: "30px",
      overflow: "hidden",
      paddingBottom: "35px",
    },
    ".farmer_666": {
      display: "flex",
      padding: "20px",
      alignItems: "center",
    },
    ".farmer_666 h5": {
      fontSize: "20px",
      fontWeight: "700",
    },
    ".farmer_666 .img_apply": {
      marginLeft: "auto !important",
    },
    ".main_ratity .graph_p ": {
      padding: "50px",
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      borderRadius: "20px",
    },
    ".main_ratity .graph_p p": {
      fontSize: "20px",
      fontWeight: "500",
      marginBottom: "40px",
    },
    ".prgrss_main_box": {
      padding: "0 20px 20px 20px",
    },
    ".prgrss_main_box .head_pgrss": {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    ".prgrss_main_box .head_pgrss p": {
      minWidth: "100px",
      fontSize: "16px",
      fontWeight: "600",
    },
    ".prgrss_main_box .head_pgrss .def_prgrss": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
    },
    ".prgrss_main_box .head_pgrss .def_prgrss .MuiLinearProgress-root": {
      width: "100%",
      marginLeft: "5px",
      height: "10px",
      backgroundColor: "#e4e4e4",
    },
    ".prgrss_main_box .head_pgrss .def_prgrss .MuiLinearProgress-root .MuiLinearProgress-bar": {
      backgroundColor: "#ff0000",
    },
    ".farmer_box": {
      boxShadow: "4px 0px 10px 0 rgba(0,0,0,0.28)",
      borderRadius: "18px",
      overflow: "hidden",
    },
    ".skltnpddng": {
      padding: "0 15px",
    },
    ".tlltp_btn": {
      position: "absolute",
      right: "3px",
      width: "16px !important",
      color: "#9b9b9b",
      top: "6px",
    },
    ".MuiTooltip-popperInteractive": {
      zIndex: "9999 !important",
    },
    ".min_btn": {
      minWidth: "150px",
    },
    "@media screen and (max-width: 1540px)": {
      ".mdlmenu a": {
        margin: "0 10px",
        fontSize: "14px",
      },
      ".clm_box h4": {
        fontSize: "13px",
      },
    },
    "@media screen and (max-width: 1500px)": {
      ".mdlmenu a": {
        margin: "0 4px",
        fontSize: "12px",
      },
    },
    ".card": {
      backgroundColor: "black",
      width: "100%",
      height: "400px",
      borderRadius: "10px",
      perspective: "1500",
      transition: "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "column",
      transformStyle: "preserve-3d",
      boxShadow: "5px 5px 24px 0px rgba(0,0,0,0.20)",
    },
    ".card .photo": {
      position: "absolute",
      transform: "translateZ(1px)",
      top: 0,
      left: 0,
      right: "-1px",
      bottom: 0,
      background: "url(/static/images/far_appl_img.png) no-repeat center 0",
      backgroundSize: "cover",
      borderRadius: "10px",
      transition: "transform 0.5s ease-in-out",
      overflow: "hidden",
    },
    ".card .photo:after": {
      position: "absolute",
      content: "''",
      display: "block",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.5s ease-in-out",
    },
    ".card .chart": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transformStyle: "preserve-3d",
      transform: "translateZ(2px)",
      transition: "transform 0.5s ease-in-out",
    },
    ".card .bar": {
      willChange: "height",
      width: "15px",
      height: "1px",
      backgroundColor: "white",
      transform: "translateX(-7.5px) rotateX(-90deg) rotateY(-45deg)",
      transformOrigin: "100% 100%",
      transition: "height 0.5s ease-in-out, margin 0.5s ease-in-out, transform 0.5s ease-in-out",
      transformStyle: "preserve-3d",
      margin: "6px",
      position: "relative",
      background: "linear-gradient(to bottom, #feffff 0%, #ddf1f9 0%, #a0d8ef 100%)",
    },
    ".card .bar:before": {
      display: "block",
      content: '""',
      height: "15px",
      width: "15px",
      position: "absolute",
      top: "-15px",
      left: 0,
      backgroundColor: "white",
      transform: "rotateX(90deg)",
      transformOrigin: "0% 100%",
      color: "white",
      textAlign: "center",
      fontSize: "10px",
      lineHeight: "14px",
      padding: 0,
      transition: "color 0.3s ease-in-out",
    },
    ".card .bar:after": {
      display: "block",
      content: '""',
      height: "100%",
      width: "15px",
      position: "absolute",
      top: 0,
      right: "-15px",
      backgroundColor: "grey",
      transform: "rotateY(90deg)",
      transformOrigin: "0% 50%",
      background: "linear-gradient(to bottom, #feffff 0%, #85d7f7 0%, #4c8596 100%)",
    },
    ".details .card .bar:before": {
      color: "black",
    },
    ".card .bar.bar1:before": {
      content: '"M"',
    },
    ".card .bar.bar2:before": {
      content: '"T"',
    },
    ".card .bar.bar3:before": {
      content: '"W"',
    },
    ".card .bar.bar4:before": {
      content: '"T"',
    },
    ".card .bar.bar5:before": {
      content: '"F"',
    },
    ".card .bar.bar6:before": {
      content: '"S"',
    },
    ".card .bar.bar7:before": {
      content: '"S"',
    },
    ".card .bar span": {
      position: "absolute",
      transform: "rotateZ(-90deg)",
      borderRadius: "2px",
      transformOrigin: "0% 100%",
      top: "20px",
      whiteSpace: "nowrap",
      textAlign: "right",
      left: "22px",
      padding: "5px",
      color: "black",
      fontSize: "13px",
      opacity: 0,
      transition: "opacity 0.5s ease-in-out",
    },
    ".card h2, .card h3, .card P": {
      transform: "translateZ(2px)",
      color: "white",
      fontSize: "30px",
      lineHeight: "30px",
      margin: 0,
      fontWeight: 300,
      padding: 0,
      transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
    },
    ".card h3": {
      margin: "10px 0 40px 0",
    },
    ".details .card h3": {
      transform: "translateZ(60px) translateY(100px)",
    },
    ".details .card": {
      transform: "rotateX(60deg) translateY(150px)",
      boxShadow: "0px 30px 40px 0px rgba(0,0,0,0.75)",
    },
    ".details .card .photo": {
      transform: "translateZ(0px)",
    },
    ".details .card .photo:after": {
      backgroundColor: "rgba(0, 50, 100, 0.8)",
    },
    ".details .card .chart": {
      transform: "translateZ(40px) translatey(50px)",
    },
    ".details .card .bar.bar1": {
      height: "150px",
      transitionDelay: "0.3s",
      marginTop: "-150px",
    },
    ".details .card .bar.bar2": {
      height: "75px",
      transitionDelay: "0.2s",
      marginTop: "-75px",
    },
    ".details .card .bar span": {
      opacity: 1,
      transitionDelay: "0.3s",
    },
    ".details .card .bar.bar3": {
      height: "112.5px",
      transitionDelay: "0.1s",
      marginTop: "-112.5px",
    },
    ".details .card .bar.bar4": {
      height: "180px",
      transitionDelay: "0s",
      marginTop: "-180px",
    },
    ".details .card .bar.bar5": {
      height: "52.5px",
      transitionDelay: "0.1s",
      marginTop: "-52.5px",
    },
    ".details .card .bar.bar6": {
      height: "52.5px",
      transitionDelay: "0.1s",
      marginTop: "-52.5px",
    },
    ".details .card .bar.bar7": {
      height: "75px",
      transitionDelay: "0.3s",
      marginTop: "-75px",
    },
    ".details .card .bar": {
      transform: "translateX(-7.5px) rotateX(-90deg) rotateY(-25deg)",
    },
    ".scl_lnks": {
      display: "flex",
      alignItems: "center",
      margin: "20px 0 20px 0",
      padding: "0 0 0 0",
    },
    ".scl_lnks li": {
      listStyle: "none",
      marginRight: "20px",
    },
    ".scl_lnks li a": {
      transition: "all 0.2s ease-out",
      backgroundColor: "#fff",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    },
    ".scl_lnks li a:hover": { opacity: 1 },
    ".scl_lnks li a img": {
      width: "25px",
    },
    ".hvrd_box": {
      position: "relative",
    },
    ".abslt_rrt_imgbx": {
      position: "absolute",
      right: "0px",
      top: "0px",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: "0",
      paddingTop: "5px",
      transition: "all 0.2s ease-out",
    },
    ".rrt_in_btn": {
      backgroundColor: "#34b78bad",
      borderRadius: "5px",
      padding: "0 15px",
      fontSize: "20px",
      color: "#ffffff",
      fontWeight: "500",
      transition: "all 0.2s ease-out",
    },
    ".hvrd_box:before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: "100%",
      background: "#00000091",
      opacity: "0",
      transition: "all 0.2s ease-out",
    },
    ".farmer_box:hover .abslt_rrt_imgbx": {
      opacity: "1",
    },
    ".farmer_box:hover .hvrd_box:before": {
      opacity: "1",
    },
    ".three_def_h2": {
      color: "#000000",
      fontSize: "24px",
      fontWeight: 600,
    },
    ".main_sc": {
      paddingTop: "80px",
    },
    ".two_buttot": {
      padding: "6px",
      display: " flex",
      background: "rgba(0,0,0,0.05)",
      borderRadius: " 29px",
      marginTop: "10px",
      alignItems: "center",
      textAlign: "center",
    },
    ".btn_tow": {
      marginLeft: "auto",
    },
    ".col_sevan": {
      paddingRight: "40px",
    },
    ".two_buttot p": {
      color: " #000000",
      fontSize: " 18px",
      marginRight: "20px",
      textAlign: "left",
      letterSpacing: "0px",
      paddingLeft: "20px",
    },
    ".two_buttot Button": {
      background: "#3AB78F",
      borderRadius: "25px",
      minWidth: "120px",
      marginLeft: "10px",
      color: " #FFFFFF",
      fontWeight: 500,
      padding: "8px 15px",
    },
    ".two_buttot Button:hover": {
      background: "#007B55",
    },
    ".two_buttot input": {
      fontSize: " 18px",
      fontWeight: 400,
      color: "#000",
      background: "transparent",
      border: "none !important",
      outline: "none",
      paddingLeft: "18px",
    },
    ".two_buttot img": {
      marginRight: "5px",
    },
    ".refr_min_box": {
      background: "rgba(0,0,0,0.05)",
      borderRadius: "33px",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "center",
      display: " flex",
      marginTop: "80px",
      padding: "3px 25px",
    },
    ".refr_min_box p": {
      fontSize: " 18px",
      fontWeight: 400,
      color: "#000",
      textAlign: "center",
      display: " flex",
    },
    ".refr_min_box p img": { marginRight: "5px" },
    ".refr_min_box h4": {
      fontSize: " 32px",
      fontWeight: 600,
      color: "#000",
    },
    ".brngng_bnr_prnt_v2": {
      background: "#fff url(/img/rfrl_bg.png) no-repeat center bottom !important",
      backgroundSize: "cover !important",
    },
    ".rfrl_table table tr th": {
      boxShadow: "none !important",
      fontWeight: 400,
      fontSize: "16px",
      color: "rgba(0,0,0,0.3)",
      whiteSpace: "nowrap",
    },
    ".rfrl_table table tr th:first-child": {
      borderTopLeftRadius: "30px",
      borderBottomLeftRadius: "30px",
    },
    ".rfrl_table table tr th:last-child": {
      borderTopRightRadius: "30px",
      borderBottomRightRadius: "30px",
    },
    ".rfrl_table table tr td": {
      fontSize: "16px",
      borderBottom: "1px solid #00000012",
      whiteSpace: "nowrap",
    },
    ".brdrd_rfrl_bx": {
      border: "1px solid #0000001c",
      padding: "0 !important",
      borderRadius: "8px",
    },
    ".brdrd_rfrl_bx h2": {
      padding: "5px 15px",
      borderBottom: "1px solid #0000001c",
      textAlign: "center",
    },
    ".customSelect fieldset legend": {
      width: "90px",
    },
    ".mx500": {
      // maxWidth: '500px',
      margin: "0 auto",
    },
    ".brdrd_rfrl_bx .inbrdrdbx": {
      padding: "15px 10px",
      background: "transparent",
      marginTop: 0,
      justifyContent: "center",
      minHeight: "140px",
    },
    ".brdrd_rfrl_bx .inbrdrdbx_cllm": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    ".brdrd_rfrl_bx .inbrdrdbx_cllm p": {
      marginBottom: "15px",
    },
    ".brdrd_rfrl_bx .inbrdrdbx_cllm .btn_tow": {
      marginRight: "auto",
    },
    ".brdrd_rfrl_bx .inbrdrdbx button": {
      borderRadius: "4px !important",
      marginLeft: 0,
    },
    ".brdrd_rfrl_bx .inbrdrdbx button.Mui-disabled": {
      background: "#dbdbdb !important",
      color: "#919191 !important",
      whiteSpace: "nowrap",
    },
    ".lft_rfrfbx": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    ".rgt_rfrfbx": {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: "15px",
    },
    ".rgt_rfrfbx p": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100% !important",
    },
    ".rgt_rfrfbx p svg": {
      width: "18px",
      height: "18px",
      marginLeft: "3px",
      marginTop: "1px",
      cursor: "pointer",
      color: "#3bb78f",
    },
    ".mb-2": {
      marginBottom: "10px",
    },
    ".lft_rfrfbx button": {
      marginLeft: "0",
      width: "100%",
    },
    ".othersc_main": {
      marginBottom: "25px",
      marginTop: "25px",
    },
    ".other_txt": {
      border: "1px solid #0000001c",
      padding: "14px 30px",
      textAlign: "center",
      borderRadius: "8px",
    },
    ".other_txt span": {
      fontWeight: 600,
    },
    ".table_tittle": {
      textAlign: "center",
    },
    ".table_tittle h4": {
      fontSize: "18px",
      fontWeight: 600,
    },
    ".ffrrsnv": {
      display: "flex",
      alignItems: "center",
    },
    ".clmbx": {
      display: "flex",
      alignItems: "center",
    },
    ".radio_box": {
      position: "relative",
    },
    ".radio_btn": {
      position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      marginRight: "15px",
      marginBottom: "15px",
    },
    ".radio_btn input": {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: "100%",
      cursor: "pointer",
      opacity: 0,
    },
    ".radio_btn label": {
      fontSize: "15px",
      border: "1px solid #5c5c5c",
      borderRadius: "35px",
      height: "35px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 5px",
      fontWeight: 400,
      color: "#000000",
      minWidth: "130px",
    },
    ".radio_btn input:checked + label": {
      fontWeight: 700,
      color: "#3bb78f",
      border: "1px solid #3bb78f",
    },
    "@media screen and (max-width: 1366px)": {
      ".becm_fr p": {
        font: "normal normal 300 21px/31px Kanit",
      },
      ".def_h": {
        fontSize: "50px !important",
        lineHeight: "56px !important",
      },
      ".def_p": {
        font: "normal normal 300 19px/28px Kanit !important",
      },
      ".clm_box h4": {
        fontSize: "0.675rem",
      },
      ".css-6uzovv-MuiButtonBase-root-MuiButton-root": {
        fontSize: "0.675rem",
      },
      ".tlltp_btn": {
        top: "2px",
        width: "13px",
      },
      ".css-1oev8cp-Stack-root > :not(style) + :not(style)": {
        marginLeft: "0",
      },
    },
    "@media screen and (max-width: 1280px)": {
      ".two_buttot p": {
        fontSize: "14px",
      },
      ".two_buttot Button": {
        padding: "8px 10px",
        fontSize: "14px !important",
        marginLeft: "5px",
        minWidth: "inherit",
        whiteSpace: "nowrap",
      },
      ".two_buttot input": {
        fontSize: "14px !important",
      },
      ".refr_min_box p": {
        fontSize: "14px !important",
      },
      ".refr_min_box h4": {
        fontSize: "24px",
      },
    },
    "@media screen and (min-width: 1280px)": {
      ".p_l_290": { paddingLeft: "290px" },
      ".sidebar-open .p_l_290": {
        paddingLeft: "16px",
      },
    },
    "@media screen and (max-width: 1199px) and (min-width: 992px)": {
      ".clm_box": {
        display: "none",
      },
      ".mdlmenu a": {
        fontSize: "14px",
        margin: "0 10px",
      },
    },
    "@media screen and (min-width: 992px)": {
      ".filterButton": { position: "absolute", right: "40px", top: "5px" },
      ".bat_none": {
        display: "none",
      },
    },

    "@media screen and (max-width: 1279px)": {
      ".def_table_v2": {
        width: "1190px !important",
      },
      ".sidebar-open header": {
        zIndex: "99999",
      },
      // ".MuiDrawer-root.MuiDrawer-modal": {
      //   pointerEvents: "none",
      // },
      ".sidebar-open .MuiModal-root.MuiDrawer-root.MuiDrawer-modal": {
        left: "-280px",
        right: "auto",
        pointerEvents: "visible",
      },
      body: {
        overflow: "inherit !important",
      },
    },
    "@media screen and (max-width: 1199px)": {
      ".main_ratity h2": {
        fontSize: "39px",
      },
      ".main_ratity .graph_p p": {
        fontSize: "18px",
      },
      ".partY_ranking_main .part_h": {
        font: "normal normal 600 28px/38px Kanit !important",
      },
      ".becm_fr p": {
        font: "normal normal 300 19px/30px Kanit",
      },
      ".bnr_cntnt": {
        top: "50px",
      },
      ".def_h": {
        fontSize: "43px !important",
        lineHeight: "48px !important",
      },
      ".def_p": {
        font: "normal normal 300 18px/27px Kanit !important",
      },
      // '.mdlmenu a': {
      //   margin: '0 3px',
      //   fontSize: '12px',
      //   letterSpacing: 0,
      // },
      ".tdimg_prnt": {
        paddingRight: "46px !important",
      },
    },
    "@media screen and (max-width: 959px)": {
      ".main_ratity .farmer_box img": {
        margin: "0 auto !important",
      },
      ".main_ratity .farmer_box .img_apply": {
        marginLeft: "auto !important",
        marginRight: "0 !important",
      },
      ".contnt_cntr": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      },
      ".fr_ordr": {
        order: "2",
      },
      ".tx_alin": {
        textAlign: "center",
      },
      ".farmer_man_img": {
        marginTop: "10px",
        marginBottom: "15px",
      },
      ".rspnvorpdng": {
        order: 3,
        paddingRight: "10px",
      },

      ".scl_lnks li": {
        margin: "0 10px",
      },
      ".col_sevan": {
        paddingRight: "0",
      },
      ".refr_min_box": { marginTop: "0px" },
      ".two_buttot": {
        marginBottom: "20px",
      },
      ".tdimg_prnt": {
        paddingRight: "0 !important",
        maxWidth: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      },
      ".abt_farmer .def_h": {
        textAlign: "center !important",
      },
      '[name="FeaturesSc"] .abt_farmer': {
        paddingBottom: "60px",
      },
      ".td_contant": {
        paddingTop: "0",
      },
      ".abt_td_pddngh": {
        paddingLeft: "0",
      },
      ".main_ratity .farmer_box .card": {
        maxHeight: "15rem",
      },

      ".sc_header": {
        position: "absolute",
        right: 0,
        top: "55px",
        background: "#fff",
        padding: "0",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,0.10)",
        opacity: 0,
        transition: "all 0.2s ease-out",
        pointerEvents: "none",
        flexDirection: "column",
        alignItems: "flex-start",
      },
      ".sc_header.show": {
        opacity: 1,
        top: "64px",
        pointerEvents: "visible",
      },
      ".mdlmenu": {
        margin: "0",
        display: "flex",
        flexDirection: "column",
        paddingRight: "20px",
        width: "100%",
      },
      ".clm_box": {
        marginBottom: "15px",
        minWidth: "250px",
        justifyContent: "space-between",
      },
      ".mdlmenu a": {
        margin: "0",
        padding: "0",
        fontSize: "16px",
      },
      ".mnicon_btn": {
        display: "block",
      },
    },
    "@media screen and (max-width: 991px)": {
      ".becm_fr p": {
        font: "normal normal 300 17px/28px Kanit",
      },
      ".td_contant": {
        paddingLeft: "0px",
      },
      ".bnr_cntnt": {
        top: "100px",
      },
      ".brngng_bnr_prnt": {
        background: "#deffff",
        paddingTop: "150px",
        marginTop: "20px",
      },
      ".def_h": {
        fontSize: "35px !important",
        lineHeight: "40px !important",
      },
      ".def_p": {
        font: "normal normal 300 17px/25px Kanit !important",
      },
      ".mdl_bd": { flexDirection: "column" },
      ".inn_mdl_bd": {
        position: "relative",
        padding: "20px 10px 20px 10px",
        maxWidth: "100%",
      },
      ".sale_modal .MuiPaper-elevation": {
        minWidth: "inherit",
      },
      ".d_logo": {
        display: "none",
      },
      ".m_logo": {
        display: "block",
      },
      ".MuiDrawer-paperAnchorLeft": {
        left: "-280px",
      },
      ".sidebar-open .MuiDrawer-paperAnchorLeft": {
        left: "0",
      },
      ".MuiModal-root.MuiDrawer-root.MuiDrawer-modal[role='presentation']": {
        pointerEvents: "none",
      },
      ".sidebar-open .MuiModal-root.MuiDrawer-root.MuiDrawer-modal": {
        pointerEvents: "visible",
      },
      ".rtdimg_prnt:before": {
        display: "none !important",
      },
      ".rdmp_box p": {
        fontSize: "14px",
      },
      ".mnicon_btn": {
        display: "flex",
      },
      ".sc_header": {
        position: "absolute",
        right: 0,
        top: "55px",
        background: "#fff",
        padding: "10px 15px",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,0.10)",
        opacity: 0,
        transition: "all 0.2s ease-out",
        pointerEvents: "none",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },
      ".sc_header.show": {
        opacity: 1,
        top: "64px",
        pointerEvents: "visible",
      },
      ".mdlmenu": {
        margin: "0 0 15px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingRight: "20px",
      },
      ".clm_box": {
        marginBottom: "15px",
      },
      ".mdlmenu a": {
        margin: "7px 0",
        fontSize: "16px",
      },
      ".brngng_bnr_prnt_v2": {
        paddingTop: "100px",
        margin: "0",
        fontSize: "16px",
        width: "100%",
        padding: "8px 0",
        textAlign: "right",
      },
      ".mdlmenu_inn": {
        margin: "0 0 20px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      },
      ".clmbx .clm_box": {
        marginRight: 0,
        marginLeft: "10px",
      },
    },
    "@media screen and (max-width: 767px)": {
      ".becom_far": {
        padding: "0 0 20px 0",
      },
      ".becm_fr p": {
        font: "normal normal 300 16px/26px Kanit",
      },
      ".def_h": {
        fontSize: "30px !important",
        lineHeight: "35px !important",
      },
      ".def_p": {
        font: "normal normal 300 16px/23px Kanit !important",
      },
      ".avx_bxc button": {
        fontSize: "20px",
        lineHeight: "16px",
      },
      ".plcb_bx": {
        display: "block",
      },
      ".plcb_bx h4": {
        marginBottom: "15px",
      },
      ".csm_src_v2 button": {
        marginLeft: "0",
      },
      ".dtl_tp_bx": {
        paddingTop: "65px",
      },
      ".back_ic": {
        color: theme.palette.common.white,
        background: theme.palette.primary.main,
      },
      ".tab_ttl": {
        marginBottom: "10px",
        textAlign: "center",
      },
      ".rfrl_table table tr th, .rfrl_table table tr td": { fontSize: "14px" },
    },
    "@media screen and (max-width: 599px)": {
      ".lstng_itmsldr .slick-prev": {
        left: 0,
        zIndex: 9,
      },
      ".lstng_itmsldr .slick-next": {
        right: 0,
        zIndex: 9,
      },
    },
    "@media screen and (max-width: 575px)": {
      ".accordidn_main": {
        padding: "25px 0",
      },
      ".accordidn_main .accodid_hed": {
        font: "normal normal 400 16px/20px Kanit !important",
      },
      ".accordidn_main p": {
        font: "normal normal 400 14px/18px Kanit !important",
      },
      ".partY_ranking_main": {
        padding: "30px 0",
      },
      ".party_left_img": {
        padding: "20px 10px 0 10px",
      },
      ".partY_ranking_main .css-h51dfx-MuiGrid-root>.MuiGrid-item": {
        paddingTop: "10px",
      },
      ".about_td_main": {
        padding: "40px 0",
      },
      ".about_td_main .css-iieaes-MuiGrid-root>.MuiGrid-item": {
        paddingTop: "0 !important",
      },
      ".abt_td_pddngh": {
        paddingLeft: "0px",
        marginTop: "15px",
      },
      ".becom_far .css-h51dfx-MuiGrid-root>.MuiGrid-item": {
        paddingTop: "0 !important",
      },
      ".becm_fr p": {
        font: "normal normal 300 15px/22px Kanit",
      },
      ".abt_farmer": {
        minHeight: "inherit",
      },
      ".td_contant": {
        paddingTop: "10px",
      },
      ".avx_bxc": {
        marginTop: "15px",
      },
      ".avx_bxc button": {
        marginTop: "10px",
        fontSize: "20px",
        lineHeight: "14px",
      },
      ".bnr_cntnt": {
        top: "70px",
      },
      ".def_h": {
        fontSize: "21px !important",
        lineHeight: "28px !important",
      },
      ".def_p": {
        font: "normal normal 300 15px/22px Kanit !important",
      },
      ".d_b_575": {
        display: "block",
      },
      ".back_ic_v2": {
        maxWidth: "92px",
      },
      ".avtr_rspnsv": {
        width: "30px",
        height: "30px",
      },
      ".defbtn_rspv span": {
        fontSize: "11px",
      },
      ".eco_mn h2, .sco_info h3": { fontSize: "32px" },
      ".sco_info p": { fontSize: "15px" },
      ".ecctble table tbody td": { fontSize: "15px" },
      ".sco_info": {
        padding: "15px 10px",
      },
      ".qntt_btntxt": {
        marginBottom: "20px !important",
        fontSize: "14px !important",
      },
      ".qntt_box": {
        width: "160px",
      },
      ".rdmp_box p": {
        fontSize: "14px",
        minHeight: "0",
      },
      ".rdmp_md_3": {
        maxWidth: "50%",
        flexBasis: "50%",
      },
      ".sc_header": {
        padding: "10px 20px",
      },
      ".clm_box h4": {
        fontSize: "11px",
      },
      ".mdlmenu": { paddingRight: "0" },
      ".main_ratity": {
        padding: "40px 0",
      },
      ".main_ratity .graph_p": {
        padding: "20px 15px",
      },
      ".main_ratity .graph_p p": {
        fontSize: "15px",
        fontWeight: "400",
      },
      ".tlltp_btn": {
        width: "16px",
        top: "3px",
      },
      ".frmr_df_img": {
        width: "90px",
      },
      ".two_buttot p": {
        width: "200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: "5px",
        marginRight: "0",
      },
      ".clmbx": {
        alignItems: "flex-end",
        flexDirection: "column",
      },
    },
    "@media screen and (max-width: 414px)": {
      ".two_buttot p": {
        width: "100px",
      },
      ".two_buttot_rspn": {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "10px",
      },
      ".two_buttot_rspn .btn_tow": {
        marginRight: "auto",
      },
      ".two_buttot input": {
        padding: "10px",
      },
      ".rgt_rfrfbx": {
        paddingLeft: "0",
        marginTop: "10px",
      },
      ".brdrd_rfrl_bx .inbrdrdbx": {
        flexDirection: "column",
      },
      ".brdrd_rfrl_bx p": {
        width: "100% !important",
        textAlign: "center",
        ".ffrrsnv": {
          flexDirection: "column",
          alignItems: "flex-end",
        },
        ".clm_box": {
          marginRight: "0",
        },
      },
      "@media screen and (max-width: 360px)": {
        ".defbtn_rspv": {
          padding: "5px 4px",
        },
      },
      "@media screen and (min-width: 576px)": {
        ".harvestButton": { marginTop: "-90px !important" },
      },
      ".ecoNFTCountdown": {
        display: "flex",
        left: "auto",
        top: "20px",
        right: "30px",
        alignItems: "center",
        fontSize: "16px",
        position: "absolute",
        color: "#3BB78F",
        fontFamily: "Montserrat",
        fontWeight: "600",
      },
      // '@media screen and (max-width: 470px)': {
      //   '.clm_box h4' :{
      //     padding: '0 5px ',
      //     fontSize: '9px',
      //   },
      //   '.clm_box button':{
      //     minWidth: 'auto',
      //   },
      // },
      // '@media screen and (max-width: 399px)': {
      //   '.clm_box' :{
      //     display: 'none',
      //   },
      // },
    },

    ".sustainable_Goals .MuiImageList-standard": {
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "repeat(2, 1fr) !important",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr) !important",
      },
    },

    ".button_outlined_white": {
      border: "1px solid #fff",
      color: "#fff",
      fontWeight: 400,
      padding: "0.55rem 3rem ",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#4CA146",
        border: "1px solid #fff",
      },
    },

    ".quantity-picker .quantity-modifier, .quantity-picker .quantity-modifier:hover": {
      background: "transparent",
      color: "#1f1e17",
    },
    "body .quantity-picker": {
      borderColor: "#1e1d17",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "0.5rem 0 0 0.5rem",
      flex: "1",
    },
    ".quantity-picker .quantity-display": {
      width: "auto",
      flex: "1",
      minHeight: "52px",
    },

    "@keyframes road-sideview": {
      "100%": {
        transform: "translateX(-1400px)",
      },
    },
    ".tractor": {
      width: "13%",
      animation: "moving-tractor 3s linear forwards infinite",
      position: "absolute",
      paddingTop: "1%",
      bottom: "10%",
      right: "20%",
      [theme.breakpoints.down(1199)]: {
        width: "21%",
      },
      [theme.breakpoints.down(767)]: {
        width: "25%",
      },
    },

    ".special_text_bg": {
      backgroundImage: 'url("/static/images/special_text_bg.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundClip: "text",
      textFillColor: "transparent",
      "-webkitBackgroundClip": "text",
      webkitTextFillColor: "transparent",
      webkitAnimationName: "masked-animation",
      animationName: "masked-animation",
      webkitAnimationDuration: "10s",
      animationDuration: "10s",
      webkitAnimationIterationCount: "infinite",
      animationIterationCount: "infinite",
      webkitAnimationTimingFunction: "linear",
      animationTimingFunction: "linear",
    },

    "@keyframes moving-tractor": {
      "100%": {
        transform: "translateY(-1px)",
      },
      "50%": {
        transform: "translateY(1px)",
      },
      "0%": {
        transform: "translateY(-1px)",
      },
    },
    ".wheel": {
      animation: "tractor-wheel 0.5s linear infinite",
      transformOrigin: "50% 50%",
      transformBox: "fill-box",
    },
    "@keyframes tractor-wheel": {
      "100%": {
        transform: "rotate(-360deg)",
      },
    },

    "@keyframes masked-animation": {
      "0%, 100%": {
        backgroundPosition: "50% 35%",
      },
      "50%": {
        backgroundPosition: "50% 65%",
      },
    },
  },
}))(() => null);

export default GlobalStyles;
