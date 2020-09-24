import styled from 'styled-components';

export const Container = styled.div`
    background: #abdaea;
    height: 100vw;
`;

export const Header = styled.div`
    background: linear-gradient( rgba(0, 218, 106), rgba(61, 176, 220));
    max-width: 100%;
    height: 220px;
`;

export const WhatsappLogo = styled.div`
    display: flex;
    width: 340px;
    padding: 30px;
    align-items: center;
    justify-content: flex-end
`;

export const WhatsappText = styled.p`
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #FFF;
    margin-left: 10px
`;

export const ContainerMain = styled.div`
    display: flex;
    width: 1000px;
    height: 896px;
    padding: 40px;
    background: #FFF;
    margin: 0 auto;
    margin-top: -120px;
    border-radius: 5px;
`;

export const Main = styled.div`
    padding: 22px;
    width: 700px;
`;

export const Title = styled.p`
    font-size: 28px;
    color: #959ba0;
    font-weight: 400;
    font-family: Verdana, Geneva, Tahoma, sans-serif;  
    word-spacing: -2px;
    margin-bottom: 52px;
`;

export const Text = styled.p`
    font-size: 20px;
    color: #959ba0;
    line-height: 30px;
    margin-left: 5px;
    padding-bottom: 20px
`;

export const info = styled.div`
    width: 500px;
`;

export const TextHelp = styled.p`
    color: #00BEA4;
    margin-top: 28px;
`;

export const Qrcode = styled.img`
    width: 400px;
    height: 400px;
`;