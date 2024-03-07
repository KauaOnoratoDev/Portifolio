import Titulo from '../../components/titulo'
import Paragrafo from '../../components/paragrafo'
import { GitSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dignissimos
        at, doloremque possimus est eligendi perspiciatis expedita porro
        nesciunt alias, vero dicta dolorum odio ipsa maiores quae veritatis
        omnis amet?
      </Paragrafo>
      <GitSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=KauaOnoratoDev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=KauaOnoratoDev&layout=compact&langs_count=7&theme=dracula" />
      </GitSecao>
    </section>
  )
}

export default Sobre
