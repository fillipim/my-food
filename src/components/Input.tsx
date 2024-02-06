import { TextInputProps, View } from "react-native"
import { AuthButton, AuthTextInput, AuthTextInputLabel } from "../styles/auth.style"
import {forwardRef} from "react"

export interface inputProps extends TextInputProps {
    label: string
}

const BaseStyle = ({label, ...rest}: inputProps, ref: any) => {
    return(
        <View>
            <AuthTextInputLabel>{label}</AuthTextInputLabel>
            <AuthTextInput ref={ref} {...rest} />
        </View>
    )
};


export const Input = forwardRef(BaseStyle);