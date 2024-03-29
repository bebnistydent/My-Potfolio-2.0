import React from "react";
import photo from "./../../../assets/images/PhotoOfMine.webp";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { S } from "./Main_styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';



export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Conteiner>
        <FlexBox align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.MyName>
              I am <span>Nikita Yerameyeu</span>
            </S.MyName>
            
            <S.MainTitle>
                
                <p>A Web Developer.</p>
            <Typewriter /*Tag from 'typewriter-effect' library*/
            options={{
            strings: ['A Web Developer','A Frontend Developer.'],
            autoStart: true,
            loop: true,
            delay: 90,
                    }}
                    />

            </S.MainTitle>
          </div>

          <Tilt> {/*This is tag from 'react-parallax-tilt' library*/}
             <S.PhotoLine>
                <S.Photo src={photo} alt="" />
             </S.PhotoLine>
          </Tilt>
        </FlexBox>
      </Conteiner>
    </S.Main>
  );
};

