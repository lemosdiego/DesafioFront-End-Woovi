import { ListItem, Typography, Radio, Box } from "@mui/material";
import Styles from './paymentOption.module.css'

const PaymentOption = ({ style, parcelasText, totalText, cashbackOption, cashbackText, selectedValue, handleChange, value }) => {
  return (
    <ListItem className={Styles.list_item} sx={{ ...style }}>
      <Box className={Styles.container}>
        <Box className={Styles.description}>
          <Typography className={Styles.installments}>{parcelasText}</Typography>
          <Typography className={Styles.total}>{totalText}</Typography>
        </Box>
        <Box className={Styles.radio}>
          <Radio
            checked={selectedValue === value}
            onChange={handleChange}
            value={value}
          />
        </Box>
      </Box>
      {cashbackOption && (
        <Box className={Styles.container_cash} >
          <Typography className={Styles.text} >{cashbackText}</Typography>
          <Box className={Styles.triangle}>
          </Box>
        </Box>
      )}
    </ListItem>
  );
};

export default PaymentOption;

