import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useState,
} from "react";
import { TextInputProps, View } from "react-native";
import { useField } from "@unform/core";

import { Container, TextInput, Icon } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  showPassword?: boolean;
  containerStyle?: {};
}

interface InpurValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, showPassword, containerStyle = {}, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const inputValueRef = useRef<InpurValueReference>({ value: defaultValue });

  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  const handleShowPassword = useCallback(() => {
    setShow((state) => !state);
  }, []);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isFilled={isFilled}
      isFocused={isFocused}
      isErrored={!!error}
    >

      <Icon
        name={icon}
        size={20}
        color={isFocused ? "#c53030" : isFilled ? "#207b58" : "#7a7a80"}
      />

      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={showPassword && !show}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      {showPassword && (
        <TouchableOpacity onPress={handleShowPassword}>
          <Icon name={show ? `eye` : `eye-off`} size={20} color="#aeaeb3" />
        </TouchableOpacity>
      )}
    </Container>
  );
};
export default forwardRef(Input);
