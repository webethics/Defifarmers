import React, { useState, useEffect } from "react";
import { Grid, Box, Container, Typography, Stack, Button } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Element } from "react-scroll";
// import AOS from 'aos';
import { Link } from "react-scroll";
import { useWeb3React } from "@web3-react/core";
import { useMysteryBoxAvax } from "hooks/useContract";
import { useSnackbar } from "notistack";
import ReactPixel from "react-facebook-pixel";
import LinearProgress from "@material-ui/core/LinearProgress";
import RarityRankingDemo from "./RarityRankingDemo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RankingBox from "./RankingBox";
import Countdown from "react-countdown";
import { useLocation } from "react-router";
import { ReactComponent as Tractor } from "../../assets/tractor2.svg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { url } from "inspector";

export default function BringingFarmars() {
  // AOS.init();
  const [count, setCount] = useState(1);
  const { account } = useWeb3React();
  const location = useLocation();

  const mystryBoxContract = useMysteryBoxAvax();
  const [Qty, setQty] = useState(0);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [sold, setSold] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [reff, setReff] = useState("");
  const ENDPOINT = process.env.REACT_APP_API;
  const navigate = useNavigate();
  const currentTimeStamp = new Date().getTime();
  function handlePlus() {
    if (count < Qty) {
      setCount(count + 1);
    }
  }

  function handleMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleValueChange(e) {
    const x = Number(e.target.value);
    console.log(x);
    if (isNaN(x) || x < 1 || x > Qty) {
    } else {
      setCount(x);
    }
  }

  const SubmitQty = async (e) => {
    if (account) {
      setLoading(true);
      let snackKey;
      let txnHash;
      try {
        const transaction = await mystryBoxContract.mint(count, {
          from: account,
          value: String(price * count),
        });
        snackKey = enqueueSnackbar("Minting is in Progress", {
          variant: "info",
          preventDuplicate: true,
          persist: true,
        });
        txnHash = transaction.hash;
        await transaction.wait();
        closeSnackbar(snackKey);
        setLoading(false);
        ReactPixel.trackCustom("Purchase", {
          value: 90,
          currency: "USD",
        });
        await axios.post(ENDPOINT + "reff", {
          account: account.toLowerCase(),
          Reffaccount: reff.toLowerCase(),
          txHash: txnHash,
        });
        await axios.post(ENDPOINT + "addCashbackData", {
          account: account,
          txHash: txnHash,
        });

        enqueueSnackbar("Minted Successfully", {
          variant: "info",
        });
        navigate("/defi-farmers");
        // .once('transactionHash', (transactionHash) => {
        //   snackKey = enqueueSnackbar('Minting is in Progress', {
        //     variant: 'info',
        //     preventDuplicate: true,
        //     persist: true,
        //   });
        //   txnHash = transactionHash;
        // })
        // .once('confirmation', (confirmation) => {
        //   closeSnackbar(snackKey);
        //   setLoading(false);
        //   ReactPixel.trackCustom('Purchase', {
        //     value: 90,
        //     currency: 'USD',
        //   });
        //   axios.post(ENDPOINT + 'reff', {
        //     account: account.toLowerCase(),
        //     Reffaccount: reff.toLowerCase(),
        //     txHash: txnHash,
        //   });
        //   axios.post(ENDPOINT + 'addCashbackData', {
        //     account: account,
        //     txHash: txnHash,
        //   });

        //   // axios.post(ENDPOINT + 'addCashbackData', {
        //   //   account: account,
        //   //   txHash: txnHash,
        //   // });
        //   enqueueSnackbar('Minted Successfully', {
        //     variant: 'info',
        //   });
        //   navigate('/defi-farmers');
        //   // setTimeout(() => {
        //   //   window.location.reload();
        //   // }, 2000);
        // })
        // .on('error', (error) => {
        //   closeSnackbar(snackKey);

        //   setLoading(false);
        //   enqueueSnackbar('Error while Minting', {
        //     variant: 'error',
        //   });
        // });
      } catch (err) {
        closeSnackbar(snackKey);

        setLoading(false);
        enqueueSnackbar("Error while Minting", {
          variant: "error",
        });
      }

      // console.log(count, account, price);
      // await mystryBoxContract.methods
      //   .mint(count)
      //   .send({
      //     from: account,
      //     value: price * count,
      //   })
      //   .once('transactionHash', (transactionHash) => {
      //     snackKey = enqueueSnackbar('Minting is in Progress', {
      //       variant: 'info',
      //       preventDuplicate: true,
      //       persist: true,
      //     });
      //     txnHash = transactionHash;
      //   })
      //   .once('confirmation', (confirmation) => {
      //     closeSnackbar(snackKey);
      //     setLoading(false);
      //     axios.post(ENDPOINT + 'addCashbackData', {
      //       account: account,
      //       txHash: txnHash,
      //     });
      //     enqueueSnackbar('Minted Successfully', {
      //       variant: 'info',
      //     });
      //     navigate('/defi-farmers');
      //     // setTimeout(() => {
      //     //   window.location.reload();
      //     // }, 2000);
      //   })
      //   .on('error', (error) => {
      //     closeSnackbar(snackKey);

      //     setLoading(false);
      //     enqueueSnackbar('Error while Minting', {
      //       variant: 'error',
      //     });
      //   });
      e.preventDefault();
    } else {
      alert("Please Connect Wallet First");
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (location.search && account) {
        if (location.search.split("reff=")[1].toLowerCase() !== account.toLowerCase()) {
          await axios.post(ENDPOINT + "click", {
            account: location.search.split("reff=")[1].toLowerCase(),
          });
        }
        setReff(location.search.split("reff=")[1]);
      }
    };
    getData();
  }, [location, account]);

  useEffect(() => {
    const getData = async () => {
      const itemSold = await mystryBoxContract.itemsSold();
      setSold(Number(itemSold));
      const lastid = await mystryBoxContract.lastId();
      setTotal(Number(lastid));
      const dailyLimit = await mystryBoxContract.dailyLimit();

      const priceValue = await mystryBoxContract.price();
      setPrice(Number(priceValue));

      if (account) {
        setQty(0);
        const currentDay = await mystryBoxContract.currentDay();
        const finalLimit = await mystryBoxContract.dailyPurchase(account, currentDay);
        setQty(currentTimeStamp < 1640782800000 ? 20 : Number(dailyLimit) - Number(finalLimit));
      } else {
        setQty(currentTimeStamp < 1640782800000 ? 20 : Number(dailyLimit));
      }
    };

    getData();
  }, [account]);

  const itemData = [
    {
      img: "/static/images/goal-pic-1.jpg",
      number: "1",
      title: "Eco\nSystem",
      class: "red",
      description:
        "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    },
    {
      img: "/static/images/goal-pic-2.jpg",
      number: "2",
      title: "Eco\nSystem",
      class: "yellow",
      description:
        "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    },
    {
      img: "/static/images/goal-pic-3.jpg",
      number: "3",
      title: "Eco\nSystem",
      class: "blue",
      description:
        "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    },
    {
      img: "/static/images/goal-pic-4.jpg",
      number: "4",
      title: "Eco\nSystem",
      class: "orange",
      description:
        "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    },
    {
      img: "/static/images/goal-pic-5.jpg",
      number: "5",
      title: "Eco\nSystem",
      class: "green",
      description:
        "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    },
    {
      img: "/static/images/goal-pic-6.jpg",
      number: "6",
      title: "Eco\nSystem",
      class: "pink",
      description:
        "By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact.",
    },
  ];

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box
        className="bringing-banner"
        sx={{
          backgroundColor: "#5EAE53",
          marginTop: "70px",
          color: "#fff",
        }}
      >
        <Box className="banner-content">
          <Container maxWidth="xl">
            <Grid container spacing={3} py={7} alignItems={"center"} justifyContent={"space-between"} textAlign={{ xs: "center", md: "left" }}>
              <Grid
                item
                xs={12}
                md={6}
                maxWidth={{ md: "660px" }}
                sx={{
                  marginRight: {
                    md: 4,
                  },
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: "1.7rem",
                      sm: "2rem",
                      md: "2.8rem",
                      lg: "3.4rem",
                    },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-.025em",
                  }}
                >
                  Building Sustainability Clubs with DeFi Farmers
                </Typography>
                <Typography component="p" sx={{ my: 3 }}>
                  Treedefi is the first ecofriendly defi project. We are fighting carbon emission by creating a thriving ecosystem focused on NFT and carbon credit tokens. Now expanding in AVAX ecosystem
                </Typography>
                <Button variant="outlined" className="button_outlined_white">
                  Mint
                </Button>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    maxWidth: {
                      xs: "20rem",
                      md: "100%",
                    },
                    mx: {
                      xs: "auto",
                      md: "0",
                    },
                    mt: {
                      xs: 4,
                      md: 0,
                    },
                  }}
                >
                  <Box component="img" src="/static/images/farmer.svg" alt="" />
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Box
            sx={{
              paddingTop: "17%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              sx={{
                animation: "road-sideview 8s linear infinite reverse forwards",
                backgroundImage: "url(/static/images/farm_bg.svg)",
                backgroundRepeat: "repeat-x",
                backgroundSize: "contain",
                height: "100%",
                position: "absolute",
                top: "0",
                width: "500%",
              }}
            ></Box>
            <Tractor className="tractor"></Tractor>
          </Box>
        </Box>
      </Box>

      <Box
        id="abt_sec"
        className="abt_sec"
        mt={8}
        position={"relative"}
        sx={{
          backgroundImage: "url(/static/images/about_pattren.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom 30% left 5%",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} textAlign={"center"}>
            <Grid item xs={12}>
              <Typography
                component="h5"
                sx={{
                  mb: 1,
                  fontWeight: "700",
                  color: "#4CA146",
                  fontSize: "h5.fontSize",
                }}
              >
                About DeFi
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    sm: "2rem",
                    md: "2.8rem",
                    lg: "3.4rem",
                  },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                DeFi Farmers
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 3,
                  mb: 6,
                  fontSize: {
                    md: "1.125rem",
                  },
                }}
              >
                DeFi Farmers consists of 9,500 randomly generated eco-friendly NFT Farmers living on the Avalanche network. Each DeFi Farmer is an NFT that represents your avatar in the "Ecoverse", an ecosystem of technologies and visions based on
                reforestation and environment preservation values . DeFi Farmers can be found with a variety of different outfits and emotions but no two Farmers are alike. Each Farmers brings their own style with unique hats, hair, clothing and
                farming tools from a total of 57 different attributes!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#1F1E17",
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                    p: 5,
                  }}
                >
                  <Box
                    component="img"
                    src="/static/images/multiplefarmers.gif"
                    alt=""
                    sx={{
                      mx: "auto",
                      borderWidth: "10px",
                      borderColor: "#fff",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          component="img"
          src="/static/images/black-curve.png"
          alt=""
          sx={{
            position: "absolute",
            height: "80px",
            width: "100%",
            bottom: "-9px",
            left: "0",
            objectFit: "fill",
            objectPosition: "0 0",
          }}
        />
      </Box>

      <Box
        id="MintSc"
        className="become_farmer"
        sx={{
          backgroundColor: "#1F1E17",
          position: "relative",
          backgroundImage: "url(/static/images/corn.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          backgroundSize: "10%",
          "&::before": {
            content: '""',
            backgroundImage: "url(/static/images/mushroom.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            position: "absolute",
            top: "0",
            left: "0",
            width: "10%",
            height: "73%",
          },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} py={8} alignItems={"center"} justifyContent={"center"} textAlign={{ xs: "center", md: "left" }}>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: 4,
                  borderRadius: "17px",
                  border: "4px dashed #1F1E17",
                  // maxWidth: {
                  //   xs: "511px",
                  // },
                  mx: {
                    xs: "auto",
                  },
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "1.7rem",
                      sm: "2rem",
                      md: "2.8rem",
                      lg: "3.4rem",
                    },
                    mb: 2,
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  Become a Farmer
                </Typography>

                <Typography>
                  {currentTimeStamp < 1648922400000 ? `Flash sale starts in ` : "Flash sale ends in "}
                  {currentTimeStamp < 1648922400000 ? <Countdown date={1648922400000} /> : <Countdown date={1648989003000} />}
                </Typography>
                <Typography>
                  {currentTimeStamp < 1640782800000 ? `Minting starts in ` : ""}
                  {currentTimeStamp < 1640782800000 ? <Countdown date={1640782800000} /> : sold + ` / 9500 Farmers minted`}
                </Typography>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Typography style={{ marginRight: "5px" }}>{currentTimeStamp < 1642770000000 ? `Mint before ` : ""}</Typography>

                  <Typography>
                    {currentTimeStamp < 1642770000000 && (
                      <>
                        <Countdown date={1642770000000} /> and get an NFTree!
                      </>
                    )}
                  </Typography>
                </Box>

                <Box className="counterDisplay">
                  <Box className="qntt_box">
                    <Button onClick={handleMinus}>-</Button>
                    <input type="text" min="1" value={count} onClick={() => setCount(1)} onChange={handleValueChange} />
                    <Button onClick={handlePlus} className="qnttbtnrgt">
                      +
                    </Button>
                  </Box>
                  <Button className="AddBtn" onClick={SubmitQty} disabled={currentTimeStamp < 1640782800000}>
                    FARM IN!
                  </Button>
                </Box>

                <Typography className="qntt_btntxt">
                  {/* {price / 1e18} AVAX / Farmer <b>(Max: {Qty} / day)</b> */}
                  0.6 AVAX / Farmer - <b>Max: {Qty} / day / wallet</b> <br />
                  Metamask recommended <br />
                  👉 get your{" "}
                  <a href="/referral" target="_blank">
                    referral code
                  </a>{" "}
                  to earn fees.{" "}
                  <a href="https://docs.defifarmers.net/defi-farmers/referral-program" target="_blank">
                    {" "}
                    T&C
                  </a>{" "}
                  applies
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                maxWidth: "26rem",
              }}
            >
              <Box
                sx={{
                  maxWidth: {
                    xs: "20rem",
                    md: "100%",
                  },
                }}
              >
                <Box component="img" src="/static/images/becomefarmer.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="sustainable_Goals">
        <Container maxWidth="xl">
          <Grid container spacing={4} py={7} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={12}>
              <Box className="special_text_bg">
                <Typography
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: "4rem",
                      sm: "6rem",
                      md: "8rem",
                      lg: "9rem",
                    },
                    mb: 4,
                    fontWeight: 700,
                    lineHeight: 1,
                    textAlign: "center",
                  }}
                >
                  Sustainable
                  <br></br>
                  Goals
                </Typography>
              </Box>
              <Box>
                <ImageList cols={3}>
                  {itemData.map((item) => (
                    <ImageListItem
                      key={item.img}
                      sx={{
                        "&:hover": {
                          ".overlay": {
                            right: "0",
                            top: "0",
                          },
                          ".description_holder": {
                            transform: "scale(1) translateY(65px)",
                            opacity: 1,
                          },
                          ".icon": {
                            display: "none",
                          },
                        },
                        ".red": {
                          backgroundColor: "#E5233D",
                          "button:hover": {
                            color: "#E5233D",
                          },
                        },
                        ".yellow": {
                          backgroundColor: "#F89D2A",
                          "button:hover": {
                            color: "#F89D2A",
                          },
                        },
                        ".blue": {
                          backgroundColor: "#27BFE6",
                          "button:hover": {
                            color: "#27BFE6",
                          },
                        },
                        ".orange": {
                          backgroundColor: "#F26A2E",
                          "button:hover": {
                            color: "#F26A2E",
                          },
                        },
                        ".green": {
                          backgroundColor: "#4CA146",
                          "button:hover": {
                            color: "#4CA146",
                          },
                        },
                        ".pink": {
                          backgroundColor: "#EF402D",
                          "button:hover": {
                            color: "#EF402D",
                          },
                        },
                      }}
                    >
                      <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                      <Box
                        className={`${item.class} overlay`}
                        sx={{
                          backgroundColor: "#E5233D",
                          padding: "0.8rem 1.2rem",
                          position: "absolute",
                          left: "0",
                          bottom: "0",
                          margin: "20px",
                          color: "#fff",
                          transition: "all 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            component="h2"
                            sx={{
                              fontWeight: "600",
                              fontSize: "3rem",
                              marginRight: "10px",
                              lineHeight: 1,
                            }}
                          >
                            {item.number}
                          </Typography>
                          <Typography
                            component="h6"
                            sx={{
                              fontSize: "1rem",
                              whiteSpace: "pre-wrap",
                              lineHeight: 1.1,
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Box>
                        <Box
                          className="description_holder"
                          sx={{
                            transform: "scale(0) translateY(0)",
                            transition: "all 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                            position: "absolute",
                            top: "0px",
                            left: "25px",
                            right: "25px",
                            transitionDelay: "0s",
                            opacity: 0,
                          }}
                        >
                          <Typography
                            className="description"
                            component="p"
                            sx={{
                              fontWeight: "400",
                              mb: 2,
                              fontSize: {
                                xs: "14px",
                                xl: "16px",
                              },
                            }}
                          >
                            {item.description}
                          </Typography>
                          <Button variant="outlined" className="button_outlined_white">
                            More Information
                          </Button>
                        </Box>
                        <Box className="icon" component="img" mx="auto" mt={1} src="/static/images/flower-icon.svg" alt=""></Box>
                      </Box>
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="Ecosystem" className="ecosystem_sec" mt={8} position="relative">
        <Container maxWidth="lg">
          <Grid container spacing={8} justifyContent="center" alignItems="center" flexDirection={{ xs: "column-reverse", md: "row" }}>
            <Grid item xs={12} md={6} width="100%">
              <Box
                component="img"
                alt=""
                src="/static/images/ecosystem.svg"
                sx={{
                  maxWidth: {
                    md: "100%",
                    xs: "400px",
                  },
                  mx: {
                    md: "0",
                    xs: "auto",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    sm: "2rem",
                    md: "2.8rem",
                    lg: "3.4rem",
                  },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Ecosystem
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 3,
                  fontSize: {
                    md: "1.125rem",
                  },
                }}
              >
                By holding a DeFi Farmer, you will have access to Sustainability clubs, places to vote and discuss sustainable actions to preserve our environment . DeFi Farmers is a spin-off project created by Treedefi, the eco-friendly DeFi
                protocol. Treedefi allows investors to have a real world impact, and offers them the opportunity to offset their CO2 footprint through NFTrees, NFTs backed by real planted trees around the world. If you own a Farmer, you can enjoy in
                advance our Treedefi Features.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Box
          component="img"
          src="/static/images/green-curve.png"
          alt=""
          sx={{
            position: "absolute",
            height: "80px",
            width: "100%",
            bottom: "-41px",
            left: "0",
            objectFit: "fill",
            objectPosition: "0 0",
          }}
        />
      </Box>

      <Box
        id="Tokenomics"
        className="tokenomics_sec"
        mt={8}
        position="relative"
        sx={{
          backgroundColor: "#4CA146",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    sm: "2rem",
                    md: "2.8rem",
                    lg: "3.4rem",
                  },
                  color: "#fff",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Tokenomics
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 3,
                  color: "#fff",
                  fontSize: {
                    md: "1.125rem",
                  },
                }}
              >
                Our Farmers has a reflective minting system that earns farmers holders AVAX! This means that 15% of every minting fee is reflected back to existing Farmers holders and can be claimed at any time! The rewards don't stop when minting is
                complete! In our marketplace original minters of Farmers earn 1% royalties each time their Farmers is resold and 3% of each sale is redistributed between all Farmers holders.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                alt=""
                src="/static/images/tokenomics.svg"
                sx={{
                  maxWidth: {
                    md: "100%",
                    xs: "400px",
                  },
                  mx: {
                    md: "0",
                    xs: "auto",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        className="utilities_sec"
        py={8}
        position="relative"
        sx={{
          backgroundColor: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundSize: "30% auto",
          backgroundPosition: "top left, bottom right",
          backgroundImage: "url(/static/images/dotted-pattren-top.svg), url(/static/images/dotted-pattren-bottom.svg)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                alt=""
                src="/static/images/utilities&benefits.svg"
                sx={{
                  maxWidth: {
                    md: "100%",
                    xs: "400px",
                  },
                  mx: {
                    md: "0",
                    xs: "auto",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    sm: "2rem",
                    md: "2.8rem",
                    lg: "3.4rem",
                  },

                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Utilities and Benefits
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 3,

                  fontSize: {
                    md: "1.125rem",
                  },
                }}
              >
                Each DeFi Farmers will give you power to vote in our Sustainability Clubs. If you mint before January 21st, 1PM UTC, you'll receive during Q1 2022 an airdrop of NFTrees. Treedefi Investors will get benefits if they mint farmers on
                Avalanche using the same address that holds Treedefi tokens on Binance Smart Chain. Please read our documentation to check if you are eligibile for cashback or airdrops.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={8}
            justifyContent="center"
            alignItems="center"
            flexDirection={{ xs: "column-reverse", md: "row" }}
            sx={{
              pt: 12,
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    sm: "2rem",
                    md: "2.8rem",
                    lg: "3.4rem",
                  },

                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Ecogames and DeFi
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 3,

                  fontSize: {
                    md: "1.125rem",
                  },
                }}
              >
                EcogameFi is the next trend of Ecofriendly defi projects in the gaming industry. Treedefi's aim is to bring reality into the virtual world by giving the opportunity to own real trees while enjoying play-to-learn games.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} width="100%">
              <Box
                component="img"
                alt=""
                src="/static/images/utilities&benefits.svg"
                sx={{
                  maxWidth: {
                    md: "100%",
                    xs: "400px",
                  },
                  mx: {
                    md: "0",
                    xs: "auto",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        id="RaritySc"
        className="green_waves"
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Box
          component="img"
          src="/static/images/green-wave-bg.svg"
          alt=""
          sx={{
            width: "100%",
            position: "relative",
            top: "1px",
          }}
        />
      </Box>
      <Box
        className="greenwaves_sec"
        position={"relative"}
        sx={{
          backgroundColor: "#4CA146",
          color: "#fff",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} textAlign={"center"}>
            <Grid item xs={12}>
              <Box
                component="img"
                src="/static/images/ranking-img.png"
                alt=""
                sx={{
                  mx: "auto",
                  mb: 6,
                }}
              />

              <Typography
                component="p"
                sx={{
                  fontSize: {
                    md: "1.125rem",
                    maxWidth: "1088px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }}
              >
                All Farmers are equal, but some are more rare than others. That's why we've set up a trait rarity system to tell which of our Farmers are the rarest. There are a total of 57 traits, these have been classified in a system based on
                levels. The traits are ranked from "Common" to "Legendary". We compute the Farmer rarity (also called Drop Chance or Probability) as the value of the rarest trait. For example, if your Farmer wears the "McFly hat", its drop chance
                will be 0.6%. That means, your DeFi Farmer's rarity is 0.6%. Depending on the items they have in their hands, our Farmers will receive powers over time that will allow them to farm in the Metaverse more or less quickly. NFTrees
                airdrop will be sent according to farmers rarity.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Element id="RoadmapSc" name="RoadmapSc">
        <Box
          className="roadmap_man"
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(/static/images/roadmap_circle_bg.svg)",
            backgroundPosition: "top left",
            backgroundSize: "14%",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box className="rtdimg_prnt">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={3} className="rdmp_md_3">
                      <Box className="rdmp_box">
                        <Box
                          className="rdmp_box_img"
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component="img" src="/static/images/user_01.jpg" alt="" />
                        </Box>
                        <Box className="rdmp_dots" />
                        <Typography
                        // data-aos='zoom-in'
                        // data-aos-duration='1500'
                        >
                          Minting Event <br /> TBA December, 2021
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className="rdmp_md_3">
                      <Box className="rdmp_box rdmp_box_reverse">
                        <Box
                          className="rdmp_box_img"
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component="img" src="/static/images/user_02.jpg" alt="" />
                        </Box>
                        <Box className="rdmp_dots" />
                        <Typography
                        // data-aos='zoom-in'
                        // data-aos-duration='1500'
                        >
                          NFT Marketplace <br /> Q1 2022
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className="rdmp_md_3">
                      <Box className="rdmp_box">
                        <Box
                          className="rdmp_box_img"
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component="img" src="/static/images/user_03.jpg" alt="" />
                        </Box>
                        <Box className="rdmp_dots" />
                        <Typography
                        // data-aos='zoom-in'
                        // data-aos-duration='1500'
                        >
                          Treedefi on AVAX <br /> Q1 2022
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className="rdmp_md_3">
                      <Box className="rdmp_box rdmp_box_reverse">
                        <Box
                          className="rdmp_box_img"
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component="img" src="/static/images/user_04.jpg" alt="" />
                        </Box>
                        <Box className="rdmp_dots" />
                        <Typography
                        // data-aos='zoom-in'
                        // data-aos-duration='1500'
                        >
                          EcoGame <br />
                          Q1 - Q2 2022
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className="rdmp_md_3">
                      <Box className="rdmp_box">
                        <Box
                          className="rdmp_box_img"
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component="img" src="/static/images/user_05.jpg" alt="" />
                        </Box>
                        <Box className="rdmp_dots" />
                        <Typography
                        // data-aos='zoom-in' data-aos-duration='1500'
                        >
                          Eco DAO <br />
                          Q1 - Q2 2022
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>

      <Element name="ClaimSc">
        <Box
          className="accordidn_main"
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(/static/images/fag_pattren.svg)",
            backgroundPosition: "bottom right",
            backgroundSize: "16%",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3} justifyContent={"center"}>
              <Grid
                item
                xs={12}
                sx={{
                  maxWidth: "652px",
                }}
              >
                <Typography component="h2" className="def_h accordin_h2">
                  FREQUENTLY ASKED QUESTIONS
                </Typography>

                {/* question starts */}
                <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography component="h2" className="accodid_hed">
                      What is the utility?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      By owning a DeFi Farmer you have access our Sustainability Club and power to vote. DeFi Farmers minters can enjoy NFTrees airdrop and test in advance Treedefi features. As the development will progress, we'll announce more
                      features and benefits.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {/* question ends */}
                {/* question starts */}
                <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography component="h2" className="accodid_hed">
                      What is an NFTree?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      An
                      <a href="https://nft.treedefi.com" target="_blank">
                        NFTree
                      </a>
                      is an NFT backed by real planted tree where each tree represents indeed the collateral. With NFTree you can offset your CO2 and earn passive income by harvesting your CO2 from the tree in the form of TCO2 token. TCO2 is indeed
                      the precursor of Carbon Credits in the blockchain. DeFi Farmers minters will receive one or more NFTrees during Q1 2021 as an aidrdop.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {/* question ends */}

                <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography component="h2" className="accodid_hed">
                      What will the minting fee be?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>The minting fee is 1 AVAX. Early minters get a portion of later minting fees as a dividend, incentivizing early purchases. Learn more in the tokenomics section above.</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                    <Typography component="h2" className="accodid_hed">
                      When does minting start?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Minting event will start on 29.12.2021 1PM UTC</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                    <Typography component="h2" className="accodid_hed">
                      Will there be different rarity levels for each DeFi Farmer?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we've made 9,500 unique Farmers with mixed traits. The traits are ranked from "Common" to "Legendary". and we use three features to understand their rarity: tools, caps and beards.{" "}
                      <a href="https://docs.defifarmers.net/defi-farmers/rarity-ranking" target="_blank">
                        Please check our docs for further information
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
                    <Typography component="h2" className="accodid_hed">
                      What are the benefits for Treedefi investors?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Treedefi holders will benefit from our expansion on AVAX trough the realese of DeFi Farmers. We are raising awareness and new investors to let them know about our project. This will help to improve liquidity, capitals and
                      marketing.{" "}
                      <a href="https://docs.defifarmers.net/defi-farmers/treedefi-benefits" target="_blank">
                        Please check our docs for further information
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7a-content" id="panel7a-header">
                    <Typography component="h2" className="accodid_hed">
                      How many DeFi Farmers can I mint at a time? Is there a limit per wallet?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>There is a daily limit of 20 Farmers per wallet, but you can mint multiple farmers in the same transaction to save gas fees.</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>
    </>
  );
}
