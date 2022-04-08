import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-eva/twitter-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Tooltip,
  Container,
  Typography,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
// components
import { MIconButton } from "../components/@material-extend";
import Page from "../components/Page";
import { MaintenanceIllustration } from "../assets";

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: "Facebook",
    icon: <Icon icon={facebookFill} width={24} height={24} color="#1877F2" />,
  },
  {
    name: "Instagram",
    icon: (
      <Icon icon={instagramFilled} width={24} height={24} color="#D7336D" />
    ),
  },
  {
    name: "Linkedin",
    icon: <Icon icon={linkedinFill} width={24} height={24} color="#006097" />,
  },
  {
    name: "Twitter",
    icon: <Icon icon={twitterFill} width={24} height={24} color="#1C9CEA" />,
  },
];

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const CountdownStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 2.5),
  },
}));

// ----------------------------------------------------------------------

export default function ComingSoon() {
  return (
    <RootStyle title="Treedefi - Carbon Credits Platform">
      <Container>
        <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
          <Typography variant="h3" paragraph>
            Carbon Credits Platform
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            This page is currently under construction.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Here you will see how much you are offsetting for each Collectible.
          </Typography>

          <MaintenanceIllustration sx={{ my: 10, height: 240 }} />
        </Box>
      </Container>
    </RootStyle>
  );
}
