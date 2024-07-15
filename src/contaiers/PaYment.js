"use client";

import { Box, Button, Divider, FormControl, FormLabel, Typography, RadioGroup } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PaymentOption from "@/components/PaymentOption";
import Styles from './payment.module.css';

const Payment = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);


  };

  return (
    <Box className={Styles.container}>
      <Box sx={{ marginTop: "30px" }}>
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={125}
          height={40}
        />
      </Box>
      <Typography className={Styles.description} >João, como você quer pagar?</Typography>

      <Box className={Styles.box1} >
        <FormControl className={Styles.fieldset} component="fieldset">
          <FormLabel className={Styles.label} component="legend">
            <Typography>Pix</Typography>
          </FormLabel>
          <RadioGroup value={selectedValue} onChange={handleChange} sx={{ width: "100%" }}>
            <PaymentOption
              value="pix"
              selectedValue={selectedValue}
              parcelasText="1x R$ 30.000,00"
              totalText="Ganhe 3% de Cashback"
              cashbackOption={true}
              cashbackText="🤑 R$ 300,00 de volta no seu Pix na hora"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box className={Styles.box2}>
        <FormControl component="fieldset" className={Styles.fieldset}>
          <FormLabel className={Styles.label} component="legend" >
            <Typography>Pix Parcelado</Typography>
          </FormLabel>
          <RadioGroup value={selectedValue} onChange={handleChange} sx={{ width: "100%" }}>
            <PaymentOption
              value="pixParcelado1"
              selectedValue={selectedValue}
              style={{ width: "100%", height: "90px" }}
              parcelasText="2x R$ 15.300,00"
              totalText="Total: R$ 30.600,00"
            />
            <Divider />
            <PaymentOption
              value="pixParcelado2"
              selectedValue={selectedValue}
              style={{ width: "100%", height: "90px" }}
              parcelasText="3x R$ 10.196,66"
              totalText="Total: R$ 30.620,00"
            />
            <Divider />
            <PaymentOption
              value="pixParcelado3"
              selectedValue={selectedValue}
              style={{ width: "100%", height: "110px" }}
              parcelasText="4x R$ 7.725,00"
              totalText="Total: R$ 30.900,00"
              cashbackOption={true}
              cashbackText="-3% de juros: Melhor opção de parcelamento"
            />
            <Divider />
            <PaymentOption
              value="pixParcelado4"
              selectedValue={selectedValue}
              style={{ width: "100%", height: "90px" }}
              parcelasText="5x R$ 6.300,00"
              totalText="Total: R$ 31.500,00"
            />
            <Divider />
            <PaymentOption
              value="pixParcelado5"
              selectedValue={selectedValue}
              style={{ width: "100%", height: "90px" }}
              parcelasText="6x R$ 5.283,33"
              totalText="Total: R$ 31.699,98"
            />
            <Divider />
            <PaymentOption
              value="pixParcelado6"
              selectedValue={selectedValue}
              style={{ width: "100%", height: "90px" }}
              parcelasText="7x R$ 4.542,85"
              totalText="Total: R$ 31.800,00"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box className={Styles.box3}>
        <Box className={Styles.boxImage} >
          <Image
            src="/Group3.svg"
            alt="Logo"
            layout='fill'
            objectFit='contain'
          />
        </Box>
        <Typography className={Styles.descriptionSecurity} >Pagamento 100% seguro via:</Typography>
        <Box className={Styles.boxLogo} >
          <Image
            src="/logo.svg"
            alt="Logo"
            layout='fill'
            objectFit='contain'
          />
        </Box>
      </Box>
    </Box >
  )
}

export default Payment;

