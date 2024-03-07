import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/titulo'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

const SideBar = () => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Titulo fontSize={18}>Kauã Onorato</Titulo>
        <Paragrafo fontSize={16} tipo="secundario">
          KauaOnoratoDev
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro front-end
        </Descricao>
        <BotaoTema>Trocar Tema</BotaoTema>
      </SideBarContainer>
    </aside>
  )
}

export default SideBar
