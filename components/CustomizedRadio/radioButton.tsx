import { Box, useRadio, Text } from "@chakra-ui/react"

const CustomRadio = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box
            display={'flex'}
            justifyContent={{sm:'center' , base:"none"}}
            alignItems={'center'}
            pr='10px'
            as='label'
            mt={{ md: "0px", base: "16px !important" }}
            position={"relative"}
            left={props.children === "Artworks on Plinths" ? { md: "-60px", lg1: "-76px", lg: "-92px"  } : {}}
        >
            <Box 
                borderRadius='50%'
                borderWidth={'1px'}
                
                borderColor={'#131313'}
                height={{lg1:'24px' , base:'16px' }}
                width={{lg1:'24px' , base:'16px' }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <input {...input} />
                <Box
                    {...checkbox}
                    cursor='pointer'
                    borderRadius='50%'
                    _checked={{
                        bg: 'black',
                        color: 'white',
                        borderColor: 'teal.600',
                    }}
                    _focus={{
                    }}
                    height={{lg1:'12px' , base:"8px"}}
                    width={{lg1:'12px' , base:"8px"}}
                >
                </Box>
            </Box>
            <Text cursor="pointer" ml={{lg1:"20px" , base:"10px"}} fontSize={{ lg: '24px', base: '16px' }} fontWeight='400'>{props.children}</Text>
        </Box>
    )
}
export default CustomRadio