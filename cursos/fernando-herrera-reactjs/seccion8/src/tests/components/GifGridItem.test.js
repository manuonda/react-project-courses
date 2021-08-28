import React from 'react'
import { shallow } from "enzyme"
import {GifGridItem} from '../../components/GifGridItem'

describe('Pruebas <GifGridItem/>', () => {

    const title = 'titulo numero 1';
    const url = 'https://localhost:3000/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}></GifGridItem>); 
    test('debe mostrar el componente correctamente', () => {
         expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
       const p = wrapper.find('p');
       console.log(`text: p.text.trim()`);
       expect(p.text().trim()).toBe(title);
    });
    
    test('debe de tener la imagne igual a la url y alt de los props', () => {
       const img = wrapper.find('img');
       console.log(img.props(), img.html(), img.props().src)
       expect(img.prop('src')).toBe(url);
    });
    

    test('debe de tener animate_fadeIn', () => {
       const div = wrapper.find('div');
       const className = div.prop('className');
       expect(className.includes('animate_fadeIn')).toBe(false);
    });
})