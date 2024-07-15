'use client';
import Styles from './pixPayment.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';



const PixPayment = () => {
    const router = useRouter();

    useEffect(() => {
        const simulatePixPayment = () => {
            setTimeout(() => {
                router.push('/cardPayment');
            }, 4000);
        };

        simulatePixPayment();
    }, [router]);

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
            <Typography sx={{ width: "70%", height: "70px", textAlign: "center", fontSize: "24px", marginTop: "20px" }}>João, pague a entrada de R$ 15.300,00 pelo Pix</Typography>

            <Box className={Styles.code}>
                <Box className={Styles.img}>
                    <Image
                        src="/codeQr.svg"
                        alt="Logo"
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
            </Box>
            <Box className={Styles.copy}>
                <Typography className={Styles.text} sx={{ fontSize: "18px", color: "#fff" }}>Clique para copiar QR CODE</Typography>
                <Box className={Styles.logo}>
                    <Image
                        src="/Vector.svg"
                        alt="Logo"
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
            </Box>
            <Box className={Styles.term}>
                <Typography className={Styles.termText}>Prazo de pagamento:</Typography>
                <Typography className={Styles.textDate}>15/12/2021 - 08:17</Typography>
            </Box>
            <Box className={Styles.timeline}>
                <Box className={Styles.boxTimeline}>
                    <Box className={Styles.timeContainer}>
                        <Box className={Styles.circle}>
                            <Box className={Styles.timeCircle}></Box>
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
                    <Typography className={Styles.totalText1}>Total: R$ 30.600,00</Typography>
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
        </Box >
    );
}

export default PixPayment
