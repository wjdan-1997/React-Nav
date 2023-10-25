import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Button, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function RegisterScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');
  //
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (values) => {
    // Handle form submission here
    console.log('Form values:', values);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    }
    return errors;
  };
  return <>
    <StatusBar style="auto" />
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }} >
      <View>
        <Image source={{ uri: "https://assets.stickpng.com/thumbs/62bc58f0071dec17849af2fb.png" }} style={{ width: 150, height: 100 }} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.headerTitle} >Register to your Account</Text>
        </View>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, pristine, values }) => (
            <View style={{ marginTop: 30, }}>
              <View>
                <Field name="firstname">
                  {({ input, meta }) => (
                    <View style={styles.textInputContainer}>
                      <MaterialIcons style={styles.teaxtIcon} name="person" size={24} />
                      <TextInput style={styles.textInput} {...input} placeholder='Enter your Name' />
                    </View>
                  )}
                </Field>
              </View>
              <View>
                <Field name="email">
                  {({ input, meta }) => (
                    <View style={styles.textInputContainer}>
                      <MaterialIcons style={styles.teaxtIcon} name="email" size={24} />
                      <TextInput style={styles.textInput} {...input} placeholder='Enter your Email' />
                    </View>
                  )}
                </Field>
              </View>
              <View>
                <Field name="password">
                  {({ input, meta }) => (
                    <View style={styles.textInputContainer}>
                      <MaterialIcons style={styles.teaxtIcon} name="lock" size={24} />
                      <TextInput style={styles.textInput} {...input} placeholder='Enter your Password' secureTextEntry={!showPassword} />
                      <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons style={{ marginRight: 8 }} name={showPassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  )}
                </Field>
              </View>

              <View style={{ marginTop: 50 }} />
              <Pressable style={[styles.submitBttn, { backgroundColor: pristine ? '#bfb9f3' : '#6659e3', }]} >
                <Button title='Login' type='submit' onPress={handleSubmit} disabled={pristine} color={'white'} />
              </Pressable>

              <Pressable style={[styles.submitBttn,]} onPress={() => navigation.push("Login")}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{}}>Already signed up?</Text>
                  <Text style={{ color: '#6659e3', fontWeight: '700' }}> Log in</Text>
                </View>
              </Pressable>
            </View>
          )}>
        </Form>

      </KeyboardAvoidingView>
    </SafeAreaView >
  </>
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



