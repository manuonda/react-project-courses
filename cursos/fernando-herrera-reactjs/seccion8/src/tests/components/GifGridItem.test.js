import React from 'react'
import { shallow } from "enzyme"
import {GifGridItem} from '../../components/GifGridItem'

describe('Pruebas <GifGridItem/>', () => {
    test('debe mostrar el componente correctamente', () => {
         const wrapper = shallow(<GifGridItem></GifGridItem>);
         expect(wrapper).toMatchSnapshot();
    })
    
})