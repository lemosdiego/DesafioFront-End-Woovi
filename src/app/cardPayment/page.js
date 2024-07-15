'use client';
import * as React from 'react';

import { Autocomplete, Box, Button, Divider, FormControl, FormLabel, Input, TextField, Typography } from '@mui/material';
import Styles from './cardpayment.module.css'
import Image from 'next/image';

const CardPayment = () => {

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
            <Typography sx={{ width: "90%", height: "70px", textAlign: "center", fontSize: "24px", marginTop: "20px" }}>João, pague o restante em 1x no cartão</Typography>
            <Box className={Styles.containerForm}>
                <FormControl sx={{ padding: "10px", fontSize: "18px" }} className={Styles.FormControl} component="fieldset">
                    <FormLabel className={Styles.FormLabel} component="legend">
                        <Typography>Nome completo</Typography>
                    </FormLabel>
                    João Linaldo Dias Fraga Santos
                </FormControl>
                <FormControl sx={{ padding: "10px", fontSize: "18px" }} className={Styles.FormControl} component="fieldset">
                    <FormLabel className={Styles.FormLabel} component="legend">
                        <Typography>CPF</Typography>
                    </FormLabel>
                    405.503.503-15
                </FormControl>
                <FormControl sx={{ padding: "10px", fontSize: "18px" }} className={Styles.FormControl} component="fieldset">
                    <FormLabel className={Styles.FormLabel} component="legend">
                        <Typography>Número do cartão</Typography>
                    </FormLabel>
                    405.503.503-15
                </FormControl>
                <Box className={Styles.containerDate}>
                    <FormControl sx={{ padding: "10px", fontSize: "18px" }} className={Styles.FormControlDate} component="fieldset">
                        <FormLabel className={Styles.FormLabel} component="legend">
                            <Typography>Vencimento</Typography>
                        </FormLabel>
                        10/11
                    </FormControl>
                    <FormControl sx={{ padding: "10px", fontSize: "18px" }} className={Styles.FormControlDate} component="fieldset">
                        <FormLabel className={Styles.FormLabel} component="legend">
                            <Typography>CVV</Typography>
                        </FormLabel>
                        405
                    </FormControl>
                </Box>
                <FormControl sx={{ padding: "10px", fontSize: "18px" }} className={Styles.FormControl} component="fieldset">
                    <FormLabel className={Styles.FormLabel} component="legend">
                        <Typography>Parcelas</Typography>
                    </FormLabel>
                    1x de R$ 15.300,00
                </FormControl>
            </Box>
            <Box className={Styles.button} >
                <Button className={Styles.buttonPay} >Pagar</Button>
            </Box>
            <Box className={Styles.term}>
                <Typography className={Styles.termText}>Prazo de pagamento:</Typography>
                <Typography className={Styles.textDate}>15/12/2021 - 08:17</Typography>
            </Box>
            <Box className={Styles.timeline}>
                <Box className={Styles.boxTimeline}>
                    <Box className={Styles.timeContainer}>
                        <Box className={Styles.circle}>
                            <Box sx={{ background: "#03D69D" }} className={Styles.timeCircle}>
                                <Box className={Styles.concluido} >
                                    <Image
                                        src="/concluido.svg"
                                        alt="Logo"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </Box>
                            </Box>
                            <Box className={Styles.timeLine}></Box>
                            <Box className={Styles.timeCircle}></Box>
                        </Box>
                        <Box className={Styles.description}>
                            <Typography className={Styles.portion}>1ª entrada no Pix</Typography>
                            <Typography className={Styles.portion}>2ª no cartão</Typography>
                        </Box>
                    </Box>
                    <Box className={Styles.value}>
                        <Typography className={Styles.textValue}>R$ 15.300,00</Typography>
                        <Typography className={Styles.textValue}>R$ 15.300,00</Typography>
                    </Box>
                </Box>
                <Divider />
                <Box className={Styles.boxTotal}>
                    <Typography className={Styles.totalText}>CET: 0,5%</Typography>
                    <Typography className={Styles.totalText1}>Total: R$ 31.500,00</Typography>
                </Box>
                <Divider />
                <Box className={Styles.boxTotal}>
                    <Typography className={Styles.totalText2}>Como funciona?</Typography>
                    <Box className={Styles.imgIcon}>
                        <Image
                            src="/arrow.svg"
                            alt="Logo"
                            layout='fill'
                            objectFit='contain'
                        />
                    </Box>
                </Box>
                <Divider />
            </Box>
            <Box className={Styles.identifier}>
                <Typography className={Styles.textIdentifier}>Identificador:</Typography>
                <Typography className={Styles.value.identifier}>2c1b951f356c4680b13ba1c9fc889c47</Typography>
            </Box>
            <Box className={Styles.paymentSecure}>
                <Box sx={{ width: "10%", height: "100%", position: "relative" }}>
                    <Image
                        src="/Group3.svg"
                        alt="Logo"
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
                <Typography sx={{ width: "68%", height: "100%", fontSize: "15px", textAlign: "center" }}>Pagamento 100% seguro via:</Typography>
                <Box sx={{ width: "20%", height: "100%", position: "relative", display: "flex" }}>
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
export default CardPayment