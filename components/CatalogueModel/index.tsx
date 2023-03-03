import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Text,
    Box,
} from '@chakra-ui/react'
import { FC, useContext, useEffect } from 'react'
import NextLink from "next/link";
import { Logo } from "@components/Logo";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ModalsContext } from 'contexts/ModalsContext';
import Constants from 'Constants';
import axios from "axios"

export const logoStyles = {
    mt : { base: "4px", sm: '12px', md: '18px', lg: '79px', lg1: '19px', xl: '30px' },
    mb: { base: "18px", sm: '29px', md: '40px', lg: '40px', lg1: '46px', xl: '40px' },
    width: { base: "36px", sm: "57px", md: "78px", lg: "85px", lg1: '90px', xl: "105px" },
    height: { base: "16px", sm: "25px", md: "35px", lg: "38px", lg1: '40px', xl: "47px" },
};


type CatalogueFormInputs = {
    email: string;
};

const CatalogueModalInput = yup.object().shape({
    email: yup.string().email("Please enter a valid email.").required(),
});

const CatalougeModal: FC = () => {
    const router = useRouter()
    const { showCatalogueModal, setShowCatalogueModal } = useContext(ModalsContext)
    const { pathname, query: { utm_source, utm_campaign } } = router
    
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CatalogueFormInputs>({
        mode: "onBlur",
        resolver: yupResolver(CatalogueModalInput),
    });

    const onSubmit = async (formData: CatalogueFormInputs) => {
        const payload = {
            email: formData.email,
            brand_entity: "Banno",
            utm_source,
            utm_campaign,
            customer_type: pathname === '/commercial-galleries' ? 'Commercial Gallery' : 'Residential'
        }

        axios.post(`/api/zapier/${Constants.ZAPIER_CATALOGUE}`, payload)
            .then(() => {
                router.push({
                    pathname: Constants.DOWNLOAD_FILE_API,
                    query: {
                        url: Constants.CATALOGUE_URL
                    }
                })
                
                reset({ email: '' })
                setShowCatalogueModal(!showCatalogueModal)
            })
    }

    useEffect(() => {
        !showCatalogueModal && reset()
    }, [showCatalogueModal])

    return (
        <>
            <Modal isOpen={showCatalogueModal} onClose={() => setShowCatalogueModal(!showCatalogueModal)}>
                <ModalOverlay />
                <ModalContent
                    mx="40px" 
                    w="90%"
                    marginY="auto"
                    maxW={{ base: "327px", sm: '510px', md: '688px', lg: '1169px', lg1: '1045px', xl: '1169px' }}
                    maxH={{ base: "377px", sm: '520px', md: '556px', lg: '807px', lg1: '751px', xl: '826px' }}
                    borderRadius={{ base: "16px", sm: '23px', md: '30px', lg: '24px', lg1: '60px', xl: '60px' }}
                    p={{ lg: "49px", sm: "37px", base: "16px" }}
                >
                    <ModalCloseButton
                        fontSize={{ base: "20.48px", sm: '22px', md: '25.6px', lg: '32px'}}
                        color='#A3A3A3'
                        position="relative"
                        ml="auto"
                    />

                    <ModalBody p={0} textAlign="center" alignItems='center' display="flex" justifyContent="center" flexDirection="column">
                        <NextLink href="/" passHref >
                            <Link mx="auto" my="0px" >
                                <Logo  {...logoStyles} />
                            </Link>
                        </NextLink>
                        {/* display={{ md: "block", base:'none' }} */}
                        <Text px={{ base: '16px', sm: '32px', md: "46px", lg: "60px", lg1: '83px' }} fontWeight={{ base: '700', md: '700', lg: '500', lg1: '700', xl: '700' }} lineHeight={{ sm: "37px", base: "33px", md: '41px', lg: '56px', lg1: '70px', xl: '75px' }} fontSize={{ base: "25px", sm: "30px",  md: '34px', lg: "46px", lg1: '50px', xl: '54px' }}>
                            Please, enter your e-mail below <br/> to download the catalogue
                        </Text>

                        {/* <Text display={{ md: "none", base: "block" }} px={{ base : '16px', sm: '32px'}} fontWeight={{ base: '700' }} lineHeight={{ sm: "37px", base: "33px" }} fontSize={{ sm: "30px", base: "25px" }}>
                            Please, enter your <br /> e-mail below to <br /> download the catalogue
                        </Text> */}

                        <Box h="65px" w={{ md: "auto", base: "85%" }} >
                            <FormControl w={{ md: '600px', base: '100%' }} mt={{ lg: "64px", md: "50px", base: "32px" }} variant="floating" id="name" >
                                <Input {...register('email')} placeholder=" " type="text" />
                                <FormLabel fontSize={{ xl: '32px', lg1: "22px", lg: '20px', sm: '16px', base: '16px' }} >Your Email</FormLabel>
                            </FormControl>
                            {errors.email && <Text mt={1} textAlign='left' color='red' fontSize={{ lg: '16px', base: '14px' }}>{errors.email.message}</Text>}
                        </Box>
                    </ModalBody>

                    <ModalFooter p="0px" mx="auto" mt={{ xl: '86px', lg1: '70px', lg: "70px", md: '56px', sm: "44px", base: '0px' }} mb={{ sm: "0px", base: "30px" }}>
                        <Button
                            h={{ base: "45px", sm: '72px', md: '100px', lg: '140px', lg1: '160px', xl: '152px' }}
                            w={{ base: "295px", sm: "450px", md: '600px', lg: '490px', lg1: '650px', xl: '762px' }}
                            // paddingX={{base: "13px", sm: "26px", md: '40px', lg: '58px', lg1: '64px', xl: '52px' }}
                            // paddingY={{base: "49px", sm: "125px", md: '201px', lg: '122px', lg1: '177px', xl: '160px' }}
                            isLoading={isSubmitting}
                            fontWeight='700'
                            lineHeight={{ sm: "19px", base: "19px", md: '19px', lg: '24px', lg1: '32px', xl: '36px' }}
                            fontSize={{ sm: "16px", base: "16px", md: '16px', lg: "20px", lg1: '24px', xl: '36px' }}
                            colorScheme='blue'
                            fontFamily="Helvetica Neue"
                            onClick={handleSubmit(onSubmit)}>
                            Download PDF Catalogue
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CatalougeModal