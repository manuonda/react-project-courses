import React from 'react'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en el compoentno <AddCategory>', () => {

    const setCategories = () => jest.fn();
    const wrapper = shallow( <AddCategory setCategories={setCategories}/>);
   

    test('debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe de cambiar la caja de texto', () => {
       const input = wrapper.find('input');
       const value = "Hola mundo";
       // simula el change y envia el target
       input.simulate('change', { target: { value : value } })
   })

});