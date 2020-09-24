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
    height: 600px;
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

export const QrcodeContainer = styled.div``;

export const Qrcode = styled.img`
    width: 400px;
    height: 400px;
`;

export const ConectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Conect = styled.input`
    align-items: center;
    justify-content: center;
`;

export const ConectText = styled.p`
    color: #959ba0;
    margin-left: 4px;
`;

export const DesconectContainer = styled.div`
    background: #038AAE;
    padding: 14px;
    width: 240px;
    border-radius: 7px;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto;
    margin-top: 6px;
`;

export const DesconectText = styled.p`
    color: #FFF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
`;

export const VideoContainer = styled.div`
    width: 1000px;
    height: 458px;
    background: #F9F9F9;
    margin: 0 auto;
    text-align: center;
    margin-top: -80px;
`;

export const Video = styled.img`
    margin-top: 70px;
`;
