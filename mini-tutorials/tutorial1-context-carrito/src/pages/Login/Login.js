import React, { useContext } from 'react';
import { Formik, Field } from 'formik';
import { UserContext } from '../../context/UserContext';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

import { LoginValidateSchema } from './LoginValidateYup';

export const Login = () => {
  const userContext = useContext(UserContext);
  console.log("userContext : ", userContext);
  const { state, login } = userContext;
  console.log("state : ", state, "login : ", login);



  return (
    <>
     <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
  
          <Formik
            initValues={{
              username: '',
              password: '',
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={ LoginValidateSchema }
          >
           {({ handleSubmit, errors, touched}) => (
               <form onSubmit={handleSubmit}>
               <VStack spacing={4} align="flex-start">
                 <FormControl>
                   <FormLabel htmlFor="email">Email Address</FormLabel>
                   <Field
                     as={Input}
                     id="username"
                     name="username"
                     type="username"
                     variant="filled"
                   />
                 </FormControl>
                 <FormControl isInvalid={!!errors.password && touched.password}>
                   <FormLabel htmlFor="password">Password</FormLabel>
                   <Field
                     as={Input}
                     id="password"
                     name="password"
                     type="password"
                     variant="filled"
                     validate={(value) => {
                       let error;
 
                       if (value.length < 5) {
                         error = "Password must contain at least 6 characters";
                       }
 
                       return error;
                     }}
                   />
                   <FormErrorMessage>{errors.password}</FormErrorMessage>
                 </FormControl>
                
                 <Button type="submit" colorScheme="purple" isFullWidth>
                   Login
                 </Button>
               </VStack>
             </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
