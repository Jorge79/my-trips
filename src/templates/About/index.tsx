import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam iure
        doloribus, illum voluptate cum quo sed molestias provident alias
        temporibus amet id qui deserunt eum sapiente. Quidem dolores molestiae
        numquam.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
