import React from 'react';
import { Titulo } from './TitleStyle';
interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return <Titulo>{text}</Titulo>;
};

export default Title;
