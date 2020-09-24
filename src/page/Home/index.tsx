import React from 'react';

import * as Styles from './styles';

import { BsChatDots, BsThreeDotsVertical, } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import qrcode from '../../assets/images/qrcode.png';
import video from '../../assets/images/video.jpg';


export default function Home() {
    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.WhatsappLogo>
                    <BsChatDots size={40} color="#FFF" />
                    <Styles.WhatsappText>WhatsApp Web</Styles.WhatsappText>
                </Styles.WhatsappLogo>
            </Styles.Header>

            <Styles.ContainerMain>

                <Styles.Main>
                    <Styles.Title>Para usar o WhatsApp no seu Computador:</Styles.Title>
                    <Styles.info>
                        <Styles.Text>1.Abra o WhatsApp no seu celular</Styles.Text>
                        <Styles.Text>2.Toque em Mais opções <BsThreeDotsVertical size={18} /> ou Ajustes <FiSettings /> e selecione WhatsApp Web</Styles.Text>
                        <Styles.Text>3.Aponte seu celular para essa tela para capturar o código</Styles.Text>

                        <Styles.TextHelp>Precisa de ajuda para começar?</Styles.TextHelp>
                    </Styles.info>
                </Styles.Main>

                <Styles.QrcodeContainer>
                    <Styles.Qrcode src={qrcode} />
                    <Styles.ConectContainer>
                        <Styles.Conect type="checkbox" />
                        <Styles.ConectText>Mantenha-me conectado</Styles.ConectText>
                    </Styles.ConectContainer>

                    <Styles.DesconectContainer>
                        <Styles.DesconectText>
                            Você será desconectado <br />
                            automaticamente após um longo <br />
                            praxo de inatividade.
                        </Styles.DesconectText>
                    </Styles.DesconectContainer>
                </Styles.QrcodeContainer>
            </Styles.ContainerMain>

            <Styles.VideoContainer>
                <Styles.Video src={video} />
            </Styles.VideoContainer>

        </Styles.Container>
    );
};