import React from 'react';
import { Container, Header, WhatsappLogo, WhatsappText } from './styles';
import { BsChatDots } from 'react-icons/bs';

export default function Home() {
    return (
        <Container>
            <Header>
                <WhatsappLogo>
                    <BsChatDots size={38} color="#FFF" />
                    <WhatsappText>WhatsApp Web</WhatsappText>
                </WhatsappLogo>
            </Header>
        </Container>
    );
};