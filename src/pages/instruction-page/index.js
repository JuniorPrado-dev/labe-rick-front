import React from 'react';
import {PageContainer,TextContainer} from '../../styles/index'
import useProtectedPage from '../../hooks/useProtectedPage';

export default function InstructionPage() {
  useProtectedPage();
  return (
   <PageContainer>
    <TextContainer>
      <p>
        Burrrrp!! Eu e Morty decidimos visitar a Cidadela Rick em uma dimensão paralela. Era governada por diversos Ricks e Mortys de diferentes realidades, sabia disso?<br/>

        <br/>Mas chegando lá, tudo já tava uma bagunça! Tinha eleição pra presidente Morty rolando e uma agitação política que deixou o clima bem pesado. E aí, como se não bastasse, uma onda de energia misteriosa atingiu a Cidadela! Foi coisa de louco! Edifícios desmoronaram, destroços voaram e todo mundo entrou em pânico e a população foi dizimada. <br/>

        <br/> <span>Com isso, precisamos da sua ajuda para popular novamente o planeta! </span> <br/>

       
      </p>
    </TextContainer>
   </PageContainer>
 );
}