import { Button, Grid } from "@mui/material"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useContext } from "react";
import { CurrencyContext } from "/src/components/context/CurrencyContext.jsx";

const SwitchCurrency = () =>{
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency
  } = useContext(CurrencyContext)
  const handleChange = (event) => {setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);}
  return(
    <Grid item xs={12} md = "auto">
      <Button sx={{
        borderRadius: 1,
        height: "100%"
      }}>
        <CompareArrowsIcon sx={{ fontsize: 30}}/>
      </Button>

    </Grid>
  )

}

export default SwitchCurrency