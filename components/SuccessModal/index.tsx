import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    Button,
    Flex,
    Text
} from '@chakra-ui/react'
import { FC, useContext } from 'react'
import { ModalsContext } from 'contexts/ModalsContext';
import { CheckCircleIcon } from "@chakra-ui/icons"

export const logoStyles = {
    my: { base: "40px", lg: 14 },
    width: { base: "56px", md: "64px", lg: "78px", xl: "105px" },
    height: { base: "23px", md: "27px", lg: "32px", xl: "47px" },
};


const SuccessModal: FC = () => {

    const { setShowSuccessModal, showSuccessModal } = useContext(ModalsContext)

    const onCloseModalHandler = () => {
        setShowSuccessModal(!showSuccessModal)
    }
    return (
        <>
            <Modal isCentered isOpen={showSuccessModal} onClose={onCloseModalHandler}>
                <ModalOverlay />
                <ModalContent borderRadius={"60px"} mx={{ md: "40px", sm: "20px", base: "15px" }} w={{ sm: "90%", base: "95%" }} maxW="600px" p={{ lg: "20px", md: "20px", base: "12px" }}>
                    <ModalBody p={0} mt={{lg:"0px" , md:"26px" , sm:"20px" , base:"31px"}} textAlign="center" alignItems='center' display="flex" justifyContent="center" flexDirection="column">
                        <Flex alignItems={{sm:'center' , base:"start"}} justifyContent='center' position={'relative'} top={{ lg: '50px', base: "20px" }}>
                            <CheckCircleIcon w={{ md: "24px", sm: "18px", base: "18px" }} mt={{sm:"0px" , base:"4px"}} h={{ md: "24px", sm: "18px", base: "18px" }} color='green' />
                            <Text fontSize={{ md: '24px', sm: "18px", base: "16px" }} ml='8px'>Your message has been submitted successfully</Text>
                        </Flex>
                    </ModalBody>

                    <ModalFooter display={'flex'} justifyContent='center' p="0px" w={"100%"} mx="auto" mb={{ lg: "34px" , md:"24px" , base:"20px" }} mt={{ lg: "60px", md:"60px" , sm: "35px", base: '32px' }} >
                        <Button
                            h={{ lg: '104px', md: '100px', sm: '80px', base: '45px' }}
                            fontWeight="500"
                            colorScheme='blue' w="50%"
                            onClick={onCloseModalHandler}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SuccessModal