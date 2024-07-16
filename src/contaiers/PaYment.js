"use client";

import { Box, Typography, RadioGroup } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import PaymentOption from "@/components/PaymentOption";
import Styles from './payment.module.css';

const Payment = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const borderGreen = (event) => {
    let allBoxes = document.querySelectorAll(`.${Styles.box_Payment}, .${Styles.box1}`);
    allBoxes.forEach((box) => {
      box.classList.remove(Styles.selectedBorder);
    });

    let clickedBox = event.currentTarget;
    clickedBox.classList.add(Styles.selectedBorder);
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
      <Typography className={Styles.description}>João, como você quer pagar?</Typography>
      <Box className={`${Styles.box1}`} component="fieldset" onClick={borderGreen}>
        <Box component="legend" className={Styles.label}>
          <Typography sx={{ fontWeight: "800" }}>Pix</Typography>
        </Box>
        <RadioGroup value={selectedValue} onChange={handleChange} sx={{ width: "100%" }}>
          <PaymentOption
            value="pix"
            isSelected={selectedValue === "pix"}
            handleChange={handleChange}
            parcelasText="1x R$ 30.000,00"
            totalText="Ganhe 3% de Cashback"
            cashbackOption={true}
            cashbackText="🤑 R$ 300,00 de volta no seu Pix na hora"
          />
        </RadioGroup>
      </Box>
      <Box className={Styles.box2}>
        <RadioGroup value={selectedValue} onChange={handleChange} sx={{ width: "100%" }}>
          <Box className={Styles.box_Payment} component="fieldset" onClick={borderGreen}>
            <Box component="legend" className={Styles.label}>
              <Typography sx={{ fontWeight: "800" }}>Pix Parcelado</Typography>
            </Box>
            <PaymentOption
              value="pixParcelado1"
              isSelected={selectedValue === "pixParcelado1"}
              handleChange={handleChange}
              style={{ width: "100%", height: "90px" }}
              parcelasText="2x R$ 15.300,00"
              totalText="Total: R$ 30.600,00"
            />
          </Box>
          <Box className={Styles.box_Payment} component="fieldset" onClick={borderGreen}>
            <PaymentOption
              value="pixParcelado2"
              isSelected={selectedValue === "pixParcelado2"}
              handleChange={handleChange}
              style={{ width: "100%", height: "90px" }}
              parcelasText="3x R$ 10.196,66"
              totalText="Total: R$ 30.620,00"
            />
          </Box>
          <Box className={Styles.box_Payment} component="fieldset" onClick={borderGreen}>
            <PaymentOption
              value="pixParcelado3"
              isSelected={selectedValue === "pixParcelado3"}
              handleChange={handleChange}
              style={{ width: "100%", height: "120px" }}
              parcelasText="4x R$ 7.725,00"
              totalText="Total: R$ 30.900,00"
              cashbackOption={true}
              cashbackText="-3% de juros: Melhor opção de parcelamento"
            />
          </Box>
          <Box className={Styles.box_Payment} component="fieldset" onClick={borderGreen}>
            <PaymentOption
              value="pixParcelado4"
              isSelected={selectedValue === "pixParcelado4"}
              handleChange={handleChange}
              style={{ width: "100%", height: "90px" }}
              parcelasText="5x R$ 6.300,00"
              totalText="Total: R$ 31.500,00"
            />
          </Box>
          <Box className={Styles.box_Payment} component="fieldset" onClick={borderGreen}>
            <PaymentOption
              value="pixParcelado5"
              isSelected={selectedValue === "pixParcelado5"}
              handleChange={handleChange}
              style={{ width: "100%", height: "90px" }}
              parcelasText="6x R$ 5.283,33"
              totalText="Total: R$ 31.699,98"
            />
          </Box>
          <Box className={Styles.box_Payment} component="fieldset" onClick={borderGreen}>
            <PaymentOption
              value="pixParcelado6"
              isSelected={selectedValue === "pixParcelado6"}
              handleChange={handleChange}
              style={{ width: "100%", height: "90px" }}
              parcelasText="7x R$ 4.542,85"
              totalText="Total: R$ 31.800,00"
            />
          </Box>
        </RadioGroup>
      </Box>
      <Box className={Styles.box3}>
        <Box className={Styles.boxImage}>
          <Image
            src="/Group3.svg"
            alt="Logo"
            layout='fill'
            objectFit='contain'
          />
        </Box>
        <Typography className={Styles.descriptionSecurity}>Pagamento 100% seguro via:</Typography>
        <Box className={Styles.boxLogo}>
          <Image
            src="/logo.svg"
            alt="Logo"
            layout='fill'
            objectFit='contain'
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Payment;
