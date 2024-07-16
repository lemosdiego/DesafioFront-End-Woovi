"use-client"
import { ListItem, Typography, Box, Link } from "@mui/material";
import Styles from './paymentOption.module.css';
import Image from "next/image";

const PaymentOption = ({ style, parcelasText, totalText, cashbackOption, cashbackText, isSelected, handleChange, value }) => {
  return (
    <ListItem className={Styles.list_item} sx={{ ...style }}>
      <Box className={`${Styles.container} ${isSelected ? Styles.selected : ''}`}>
        <Box className={Styles.description}>
          <Typography className={Styles.installments}>{parcelasText}</Typography>
          <Typography className={Styles.total}>{totalText}</Typography>
        </Box>
        <Box className={Styles.radio}>
          <Link href="/pixPayment">
            <Box className={Styles.checkbox}
              sx={{
                border: "solid 2px #E5E5E5",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: isSelected ? "#03D69D" : "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => handleChange(value)}>
              <Box className={Styles.checked}>
                <Image
                  src="/concluido.svg"
                  alt="Logo"
                  layout='fill'
                  objectFit='contain'
                />
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
      {cashbackOption && (
        <Box className={Styles.container_cash}>
          <Typography className={Styles.text}>{cashbackText}</Typography>
          <Box className={Styles.triangle}></Box>
        </Box>
      )}
    </ListItem>
  );
};

export default PaymentOption;
