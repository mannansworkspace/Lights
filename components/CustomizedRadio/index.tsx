import { HStack, useRadioGroup } from "@chakra-ui/react"
import CustomRadio from "./radioButton"

interface CustomizedRadioGroupProps {
    defaultValue: string,
    register: Function,
    options: Array<any>,
    spacing: any,
    label: string
}

const CustomizedRadioGroup = ({ defaultValue, register, options, spacing, label }: CustomizedRadioGroupProps) => {

    const { onChange, name } = register(label)

    const { getRootProps, getRadioProps } = useRadioGroup({
        name,
        defaultValue,
        onChange: (value: string) => onChange({ target: { value, name } })
    })

    const group = getRootProps()

    return (
        <HStack {...group} spacing={spacing}  display={{sm:'flex' , base:"block"}} justifyContent={{sm:"space-between" , base:"flex-start"}} flexWrap={{sm:'wrap'}} flexDirection={{ sm: "row", base: "column" }}>
            {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    <CustomRadio key={value} {...radio}>
                        {value}
                    </CustomRadio>
                )
            })}
        </HStack>
    )


}
export default CustomizedRadioGroup