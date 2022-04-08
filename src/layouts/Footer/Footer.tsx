import twitterFill from "@iconify/icons-eva/twitter-fill";
import telegramIcon from "@iconify/icons-simple-icons/telegram";
import youtubeIcon from "@iconify/icons-simple-icons/youtube";
// npm install --save-dev @iconify/react @iconify-icons/ant-design
import mediumSquareFilled from "@iconify/icons-ant-design/medium-square-filled";

import { Link as ScrollLink } from "react-scroll";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Grid, Link, Divider, Container, Typography, Stack } from "@material-ui/core";
//
import Logo from "../../components/Logo";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "Eco System",
    children: [
      { name: "Homepage", href: "https://treedefi.com" },
      { name: "Yield Farming", href: "https://app.treedefi.com" },
      { name: "Exchange", href: "https://exchange.treedefi.com" },
      { name: "Merchandising", href: "https://app.treedefi.com/#/merchandise" },
      { name: "Donation", href: "https://app.treedefi.com/#/donation" },
    ],
  },
  {
    headline: "Community",
    children: [
      { name: "TeleGram", icon: telegramIcon, href: "https://t.me/treedefi" },
      {
        name: "Twitter",
        icon: twitterFill,
        href: "https://twitter.com/treedefi",
      },
      {
        name: "Youtube",
        icon: youtubeIcon,
        href: "https://youtube.com/user/treedefi",
      },
      {
        name: "Medium",
        icon: mediumSquareFilled,
        href: "https://news.treedefi.com",
      },
    ],
  },

  {
    headline: "Contact",
    children: [
      { name: "Feedback", href: "https://feedback.treedefi.com" },
      { name: "Status", href: "http://status.treedefi.com/" },
      {
        name: "Documentation",
        href: "https://docs.treedefi.info/collectibles",
      },
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#1F1E17",
  color: "#fff",
}));

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="xl" sx={{ pt: 10 }}>
        <Grid container justifyContent={{ xs: "center", md: "space-between" }} sx={{ textAlign: { md: "left" } }}>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: "auto", md: "inherit" } }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body2">Treedefi is the first ecofriendly defi project. We are fighting carbon emission by creating a thriving ecosystem focused on NFT and carbon credit tokens. Now expanding in AVAX ecosystem</Typography>
            <ul className="scl_lnks">
              <li>
                <a href="https://twitter.com/defi_farmers">
                  <img src="/static/images/twttr_ic.svg" />
                </a>
              </li>
              <li>
                <a href="http://docs.defifarmers.net/">
                  <img src="/static/images/github.png" />
                </a>
              </li>
              <li>
                <a href="https://discord.com/invite/qtVPVcPFRp">
                  <img src="/static/images/discord_ic.svg" />
                </a>
              </li>
              <li>
                <a href="https://news.treedefi.com/introducing-treedefi-farmers-2949a3f6a4fe">
                  <img src="/static/images/medium_ic.svg" />
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ md: "row" }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        fontWeight: "700",
                        fontSize: "1.4rem",
                        textTransform: "capitalize",
                      }}
                    >
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        href={link.href}
                        target="_blank"
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        // component={RouterLink}
                        sx={{ display: "block", fontSize: "15px" }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            marginTop: {
              sm: 6,
              xs: 5,
            },
            pb: 5,
            fontSize: 13,
            textAlign: "center",
            borderTop: "2px solid rgba(235, 234, 245, 0.06)",
            pt: 5,
          }}
        >
          Copyright © 2021 Defifarmers.net All Right Reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
