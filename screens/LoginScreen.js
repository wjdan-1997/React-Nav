import { Button, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Form, Field } from 'react-final-form';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SIGNIN_MUTATION } from '../apollo/mutations';
import { useMutationHook } from '../hooks/useMutationHook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLayoutEffect } from 'react';
export default function LoginScreen() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    // appolo mutation
    const { executeMutation: singin } = useMutationHook({ mutation: SIGNIN_MUTATION, url: 'singin', });
    const ProtecteRoute = async () => {
        let accessToken = await AsyncStorage.getItem("accessToken")
        if (accessToken) { navigation.replace("Main") }
        else { navigation.replace("Login")}
    }
    useLayoutEffect(() => {
        // ProtecteRoute()
    }, []);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const onSubmit = async (values) => {
        // console.log('Form values:', values);
        let variables = { email: values.email, password: values.password }
        const response = await singin(variables);
        if (response.status) {
            AsyncStorage.setItem("accessToken", response.token)
            navigation.replace("Main")
        } else {
            console.log("errrrrrrrrrrrrr")
        }

    };
    const validate = (values) => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Password is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        return errors;
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }} >
            <View>
                <Image source={{ uri: "https://assets.stickpng.com/thumbs/62bc58f0071dec17849af2fb.png" }} style={{ width: 150, height: 100 }} />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.headerTitle} >Log In to your Account</Text>
                </View>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit, pristine, values }) => (
                        <View>
                            <View style={{ marginTop: 30, }}>
                                <Field name="email">
                                    {({ input, meta }) => <>
                                        <View style={styles.textInputContainer}>
                                            <MaterialIcons style={styles.teaxtIcon} name="email" size={24} />
                                            <TextInput style={styles.textInput} {...input} placeholder='Enter you Email' />
                                        </View>
                                        {meta.touched && meta.error && <Text style={styles.errMsg}>{meta.error}</Text>}
                                    </>}
                                </Field>
                            </View>
                            <View style={{ marginTop: 0, }}>
                                <Field name="password">
                                    {({ input, meta }) => <>
                                        <View style={styles.textInputContainer}>
                                            <MaterialIcons style={styles.teaxtIcon} name="lock" size={24} />
                                            <TextInput style={styles.textInput}  {...input} placeholder='Enter you Password' secureTextEntry={!showPassword} />
                                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                                <Ionicons style={{ marginRight: 8 }} name={showPassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                        {meta.touched && meta.error && <Text style={styles.errMsg}>{meta.error}</Text>}
                                    </>}
                                </Field>
                            </View>
                            <View style={{}}>
                                <View style={styles.infoContaioner}>
                                    <Text style={{ color: '#777', fontWeight: '500' }}>Keep me logged in</Text>
                                    <Text style={{ color: '#777', fontWeight: '500' }}>Forget Password</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 50 }} />
                            <Pressable style={[styles.submitBttn, { backgroundColor: pristine ? '#bfb9f3' : '#6659e3', }]} >
                                <Button title='Login' type='submit' onPress={handleSubmit} disabled={pristine} color={'white'} />
                            </Pressable>
                            <Pressable style={[styles.submitBttn,]} onPress={() => navigation.push("Register")}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{}}>Don't have an account? </Text>
                                    <Text style={{ color: '#6659e3', fontWeight: '700' }}>Sign up</Text>
                                </View>
                            </Pressable>
                        </View>
                    )}>
                </Form>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    headerTitle: { fontSize: 17, fontWeight: 'bold', marginTop: 12, color: "#041E42" },
    textInputContainer: { flexDirection: 'row', gap: 5, alignItems: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#777', borderRadius: 5, paddingVertical: 5, borderRadius: 5, marginTop: 30 },
    textInput: { color: '#000', marginVertical: 10, width: 250 },
    teaxtIcon: { color: '#777', marginLeft: 8 },
    infoContaioner: { paddingTop: 15, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' },
    submitBttn: { width: 300, borderRadius: 6, marginRight: "auto", marginLeft: 'auto', padding: 10 },
    errMsg: { color: 'red', paddingTop: 2 },
})